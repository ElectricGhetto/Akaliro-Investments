import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ExternalLink,
  Download,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Printer,
  BookOpen,
  Layers,
  RotateCw,
  Eye,
  PanelLeftClose,
  PanelLeft,
  X,
  Smartphone,
  ChevronUp,
} from 'lucide-react';

export const PROFILE_PDF_URL =
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/akaliro%20investiments.%20profile.pdf';

interface ProfilePdfViewerProps {
  onClose?: () => void;
  isModal?: boolean;
}

// Dynamically load PDF.js from CDN
function loadPdfJsScript(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('SSR not supported'));

  const win = window as any;
  if (win.pdfjsLib) {
    return Promise.resolve(win.pdfjsLib);
  }

  return new Promise((resolve, reject) => {
    const existing = document.getElementById('pdfjs-script');
    if (existing) {
      existing.addEventListener('load', () => resolve(win.pdfjsLib));
      existing.addEventListener('error', () => reject(new Error('Failed to load PDF.js')));
      return;
    }

    const script = document.createElement('script');
    script.id = 'pdfjs-script';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.async = true;
    script.onload = () => {
      if (win.pdfjsLib) {
        win.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        resolve(win.pdfjsLib);
      } else {
        reject(new Error('PDF.js failed to initialize'));
      }
    };
    script.onerror = () => reject(new Error('Could not load PDF.js script from CDN'));
    document.head.appendChild(script);
  });
}

export default function ProfilePdfViewer({ onClose, isModal = false }: ProfilePdfViewerProps) {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomMultiplier, setZoomMultiplier] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<string>('Initializing reader...');
  const [loadError, setLoadError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'single' | 'continuous' | 'native'>('single');
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const renderTaskRef = useRef<any>(null);

  // Swipe gesture tracking
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const lastTapTime = useRef<number>(0);

  // Detect mobile screen & window size
  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Show thumbnails by default on wide screens
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowThumbnails(true);
    }
  }, []);

  // Load PDF document on mount
  const initPdf = useCallback(async () => {
    try {
      setIsLoading(true);
      setLoadError(null);
      setLoadingProgress('Loading document engine...');

      const pdfjs = await loadPdfJsScript();
      setLoadingProgress('Downloading Company Profile (614 KB)...');

      const loadingTask = pdfjs.getDocument({
        url: PROFILE_PDF_URL,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true,
      });

      loadingTask.onProgress = (progressData: { loaded: number; total: number }) => {
        if (progressData.total > 0) {
          const percent = Math.round((progressData.loaded / progressData.total) * 100);
          setLoadingProgress(`Downloading Company Profile... ${percent}%`);
        }
      };

      const doc = await loadingTask.promise;
      setPdfDoc(doc);
      setNumPages(doc.numPages);
      setIsLoading(false);
    } catch (err: any) {
      console.warn('PDF.js interactive load fallback:', err);
      setLoadError(err?.message || 'Could not load interactive reader');
      setIsLoading(false);
      setViewMode('native');
    }
  }, []);

  useEffect(() => {
    initPdf();
  }, [initPdf]);

  // Render current page in single page mode
  const renderSinglePage = useCallback(
    async (pageNumber: number) => {
      if (!pdfDoc || !canvasRef.current) return;

      try {
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const page = await pdfDoc.getPage(pageNumber);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const baseViewport = page.getViewport({ scale: 1.0 });
        const cWidth = containerRef.current?.clientWidth || containerWidth || 400;

        // On mobile, reserve tight margins (12px); on desktop, reserve 32px
        const padding = isMobile ? 12 : 32;
        const availableWidth = Math.max(260, cWidth - padding);

        // Baseline fit scale to fill screen comfortably
        const fitScale = availableWidth / baseViewport.width;
        // Apply user zoom multiplier
        const effectiveScale = fitScale * zoomMultiplier;

        const viewport = page.getViewport({ scale: effectiveScale });
        const pixelRatio = window.devicePixelRatio || 1.5;

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(pixelRatio, pixelRatio);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (error: any) {
        if (error?.name !== 'RenderingCancelledException') {
          console.error('Error rendering page:', error);
        }
      }
    },
    [pdfDoc, zoomMultiplier, containerWidth, isMobile]
  );

  useEffect(() => {
    if (viewMode === 'single' && pdfDoc) {
      renderSinglePage(currentPage);
    }
  }, [viewMode, pdfDoc, currentPage, zoomMultiplier, containerWidth, renderSinglePage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      } else if (e.key === 'Escape' && isModal && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, numPages, isModal, onClose]);

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleZoomIn = () => {
    setZoomMultiplier((prev) => Math.min(2.5, +(prev + 0.2).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoomMultiplier((prev) => Math.max(0.7, +(prev - 0.2).toFixed(2)));
  };

  const handleResetZoom = () => {
    setZoomMultiplier(1.0);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      // Detect horizontal swipe (horizontal movement > 45px and mostly horizontal)
      if (Math.abs(deltaX) > 45 && Math.abs(deltaY) < 65) {
        if (deltaX < 0) {
          goToNextPage();
        } else {
          goToPrevPage();
        }
      }

      // Detect double tap for mobile zoom toggle
      const now = Date.now();
      if (now - lastTapTime.current < 300) {
        setZoomMultiplier((prev) => (prev > 1.05 ? 1.0 : 1.4));
      }
      lastTapTime.current = now;
    }
  };

  const handlePrint = () => {
    const win = window.open(PROFILE_PDF_URL, '_blank');
    if (win) {
      win.focus();
      setTimeout(() => win.print(), 1000);
    }
  };

  return (
    <div
      className={`flex flex-col bg-white text-gray-800 shadow-2xl transition-all select-none ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none h-screen w-screen'
          : 'w-full h-full sm:rounded-2xl overflow-hidden'
      }`}
    >
      {/* Top Header */}
      <header className="bg-[#1f6600] text-white px-2.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 border-b border-[#185200] shadow-sm flex-none">
        {/* Left: Brand & Mobile Page Drawer Button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors text-white flex items-center gap-1 text-xs font-semibold"
            title="Open page drawer"
          >
            {showThumbnails ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
            <span className="hidden sm:inline">Pages</span>
            <span className="bg-yellow-400 text-green-950 font-black text-[10px] px-1.5 py-0.2 rounded-full">
              {numPages || 18}
            </span>
          </button>

          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm sm:text-base tracking-tight truncate max-w-[130px] sm:max-w-[240px] md:max-w-none">
              Company Profile
            </span>
          </div>
        </div>

        {/* Center: Desktop Quick Page Navigation */}
        {viewMode === 'single' && numPages > 0 && !isMobile && (
          <div className="hidden md:flex items-center bg-black/25 rounded-xl px-2 py-1 gap-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
              className="p-1 rounded hover:bg-white/20 disabled:opacity-30 transition-colors text-white"
              title="Previous page (Left arrow)"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1 text-xs font-semibold px-1">
              <span>Page</span>
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="bg-white/15 text-white font-bold rounded px-1.5 py-0.5 outline-none cursor-pointer text-xs"
              >
                {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => (
                  <option key={p} value={p} className="text-gray-900 bg-white">
                    {p}
                  </option>
                ))}
              </select>
              <span>of {numPages}</span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage >= numPages}
              className="p-1 rounded hover:bg-white/20 disabled:opacity-30 transition-colors text-white"
              title="Next page (Right arrow)"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Right Toolbar Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Zoom */}
          {!isMobile && viewMode === 'single' && !isLoading && (
            <div className="hidden lg:flex items-center bg-black/20 rounded-xl px-2 py-1 gap-1 text-xs font-medium">
              <button
                onClick={handleZoomOut}
                className="p-1 rounded hover:bg-white/20 text-white"
                title="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>
              <span className="w-10 text-center font-mono text-[11px]">
                {Math.round(zoomMultiplier * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1 rounded hover:bg-white/20 text-white"
                title="Zoom In"
              >
                <ZoomIn size={15} />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-1.5 py-0.5 rounded hover:bg-white/20 text-[10px] text-white"
                title="Reset zoom to fit width"
              >
                Fit
              </button>
            </div>
          )}

          {/* View Mode Switcher */}
          <div className="flex items-center bg-black/20 rounded-xl p-0.5 text-xs font-semibold">
            <button
              onClick={() => setViewMode('single')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg transition-colors text-[11px] sm:text-xs ${
                viewMode === 'single' ? 'bg-white text-green-950 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Flip Page Mode"
            >
              Flip
            </button>
            <button
              onClick={() => setViewMode('continuous')}
              className={`px-2 sm:px-2.5 py-1 rounded-lg transition-colors text-[11px] sm:text-xs ${
                viewMode === 'continuous' ? 'bg-white text-green-950 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
              title="Scroll All Pages Mode"
            >
              Scroll
            </button>
          </div>

          {/* Open in Tab */}
          <a
            href={PROFILE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center gap-1 transition-colors"
            title="Open in new browser tab"
          >
            <ExternalLink size={15} />
            <span className="hidden md:inline">Open</span>
          </a>

          {/* Download Button */}
          <a
            href={PROFILE_PDF_URL}
            download="akaliro_investments_profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-3 sm:py-1 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-green-950 font-bold text-xs flex items-center gap-1 transition-colors shadow-sm"
            title="Download PDF file"
          >
            <Download size={15} />
            <span className="hidden sm:inline">Save</span>
          </a>

          {/* Print button (Desktop only) */}
          <button
            onClick={handlePrint}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hidden md:block"
            title="Print document"
          >
            <Printer size={15} />
          </button>

          {/* Fullscreen Toggle (Tablet & Desktop) */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hidden sm:block"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          {/* Close Modal Button */}
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 px-2.5 rounded-xl bg-white/20 hover:bg-red-600 active:bg-red-700 text-white font-bold transition-colors text-xs ml-0.5"
              title="Close reader"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </header>

      {/* Main Body Area */}
      <div className="flex-1 flex overflow-hidden relative bg-gray-100" ref={containerRef}>
        {/* Page List Drawer (Desktop Sidebar + Mobile Bottom/Slide Sheet) */}
        {showThumbnails && numPages > 0 && viewMode !== 'native' && (
          <>
            {/* Mobile Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-xs"
              onClick={() => setShowThumbnails(false)}
            />

            <aside
              className={`fixed lg:relative bottom-0 left-0 right-0 lg:right-auto z-40 bg-white border-t lg:border-t-0 lg:border-r border-gray-200 flex flex-col shadow-2xl lg:shadow-md transition-transform duration-200 ${
                isMobile
                  ? 'max-h-[70vh] rounded-t-2xl'
                  : 'w-48 md:w-56 h-full'
              }`}
            >
              {/* Drawer Header */}
              <div className="p-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    All Pages ({numPages})
                  </span>
                </div>
                <button
                  onClick={() => setShowThumbnails(false)}
                  className="text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-xs flex items-center gap-1 font-semibold"
                >
                  <X size={16} />
                  <span className="sm:hidden">Close</span>
                </button>
              </div>

              {/* Scrollable Page Item List */}
              <div
                className={`overflow-y-auto p-2.5 ${
                  isMobile
                    ? 'grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[55vh]'
                    : 'space-y-1.5'
                }`}
              >
                {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      if (isMobile) setShowThumbnails(false);
                      if (viewMode === 'continuous') {
                        const el = document.getElementById(`pdf-continuous-page-${pageNum}`);
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`rounded-xl border text-xs font-semibold flex items-center justify-between transition-all active:scale-95 ${
                      isMobile ? 'flex-col justify-center p-3 text-center gap-1 min-h-[56px]' : 'w-full p-2.5'
                    } ${
                      currentPage === pageNum
                        ? 'border-[#298600] bg-green-50 text-[#1f6600] font-bold ring-2 ring-[#298600] shadow-sm'
                        : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-[11px] font-bold">
                        {pageNum}
                      </span>
                      {!isMobile && <span>Page {pageNum}</span>}
                    </div>
                    {pageNum === 1 ? (
                      <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-yellow-100 text-yellow-800 font-black">
                        Cover
                      </span>
                    ) : (
                      isMobile && <span className="text-[10px] text-gray-500">Page {pageNum}</span>
                    )}
                  </button>
                ))}
              </div>
            </aside>
          </>
        )}

        {/* Center Viewer Canvas Area */}
        <main
          className={`flex-1 overflow-auto flex flex-col items-center justify-start ${
            isMobile ? 'p-1.5 pb-24' : 'p-3 md:p-6'
          }`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center my-auto">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-[#298600] rounded-full animate-spin mb-3" />
              <p className="text-gray-800 font-bold text-base mb-1">{loadingProgress}</p>
              <p className="text-gray-500 text-xs max-w-xs mb-4">
                Rendering crisp vector pages for your device...
              </p>
              <a
                href={PROFILE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#298600] text-white font-semibold text-xs hover:bg-[#206a00] active:scale-95 transition-all shadow-sm"
              >
                Open Directly in Browser ↗
              </a>
            </div>
          )}

          {/* Mode 1: Single Page Flip Mode */}
          {viewMode === 'single' && !isLoading && (
            <div className="flex flex-col items-center justify-start w-full min-h-full">
              {/* Paper Canvas Container */}
              <div className="relative bg-white shadow-xl rounded-lg sm:rounded-xl p-1 sm:p-2 border border-gray-300 transition-all duration-200 max-w-full flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="block mx-auto rounded shadow-xs max-w-full h-auto cursor-zoom-in"
                  title="Double-tap or pinch to zoom"
                />

                {/* Desktop Floating Next/Prev Side Buttons */}
                {!isMobile && (
                  <>
                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage <= 1}
                      className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center hover:bg-green-50 hover:text-green-800 disabled:opacity-0 transition-all"
                      title="Previous Page"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage >= numPages}
                      className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center hover:bg-green-50 hover:text-green-800 disabled:opacity-0 transition-all"
                      title="Next Page"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* Mobile Gesture Hint (Subtle) */}
              {isMobile && (
                <div className="mt-2 text-[11px] text-gray-500 font-medium text-center flex items-center gap-1">
                  <span>Swipe left/right to turn pages &bull; Double-tap to zoom</span>
                </div>
              )}
            </div>
          )}

          {/* Mode 2: Continuous Scroll Mode */}
          {viewMode === 'continuous' && !isLoading && pdfDoc && (
            <ContinuousPagesViewer
              pdfDoc={pdfDoc}
              numPages={numPages}
              isMobile={isMobile}
              containerWidth={containerRef.current?.clientWidth || containerWidth}
              zoomMultiplier={zoomMultiplier}
              onPageInView={(page) => setCurrentPage(page)}
            />
          )}

          {/* Mode 3: Native Embed Fallback */}
          {viewMode === 'native' && (
            <div className="w-full h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300">
              <div className="p-3 bg-gray-100 border-b border-gray-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700">Native PDF Mode</span>
                <button
                  onClick={() => setViewMode('single')}
                  className="text-[#298600] font-bold hover:underline"
                >
                  Switch to Interactive
                </button>
              </div>
              <iframe
                src={`${PROFILE_PDF_URL}#toolbar=1&navpanes=1&statusbar=1`}
                type="application/pdf"
                title="AKaliro Company Profile"
                className="w-full h-full border-0 min-h-[700px]"
              />
            </div>
          )}
        </main>

        {/* Mobile Sticky Bottom Navigation Bar (Ultra thumb-friendly) */}
        {isMobile && !isLoading && viewMode === 'single' && (
          <nav className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 flex items-center justify-between shadow-2xl z-20">
            {/* Previous Page Button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
              className="h-11 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-25 flex items-center justify-center text-gray-800 font-bold transition-all text-xs gap-1"
              aria-label="Previous Page"
            >
              <ChevronLeft size={18} />
              <span>Prev</span>
            </button>

            {/* Center Page Selector Button (Tapping opens sheet) */}
            <button
              onClick={() => setShowThumbnails(true)}
              className="h-11 px-4 rounded-xl bg-[#298600]/10 hover:bg-[#298600]/20 active:scale-95 text-[#1f6600] font-extrabold text-xs flex items-center gap-1.5 transition-all"
              title="Select page from list"
            >
              <span>Page {currentPage} of {numPages}</span>
              <ChevronUp size={14} className="opacity-70" />
            </button>

            {/* Next Page Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage >= numPages}
              className="h-11 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-25 flex items-center justify-center text-gray-800 font-bold transition-all text-xs gap-1"
              aria-label="Next Page"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>

            {/* Quick Zoom Toggle */}
            <div className="flex items-center gap-1 ml-1 pl-1 border-l border-gray-200">
              <button
                onClick={() => setZoomMultiplier((prev) => (prev > 1.05 ? 1.0 : 1.4))}
                className="h-11 px-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-bold text-xs"
                title="Toggle Zoom"
              >
                {zoomMultiplier > 1.05 ? 'Fit' : 'Zoom'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

interface ContinuousPagesViewerProps {
  pdfDoc: any;
  numPages: number;
  isMobile: boolean;
  containerWidth: number;
  zoomMultiplier: number;
  onPageInView: (page: number) => void;
}

interface SingleContinuousPageProps {
  key?: React.Key;
  pdfDoc: any;
  pageNum: number;
  isMobile: boolean;
  containerWidth: number;
  zoomMultiplier: number;
  onInView: () => void;
}

// Sub-component for Continuous Scroll View
function ContinuousPagesViewer({
  pdfDoc,
  numPages,
  isMobile,
  containerWidth,
  zoomMultiplier,
  onPageInView,
}: ContinuousPagesViewerProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-4xl py-2 sm:py-4">
      {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
        <SingleContinuousPage
          key={pageNum}
          pdfDoc={pdfDoc}
          pageNum={pageNum}
          isMobile={isMobile}
          containerWidth={containerWidth}
          zoomMultiplier={zoomMultiplier}
          onInView={() => onPageInView(pageNum)}
        />
      ))}
    </div>
  );
}

function SingleContinuousPage({
  pdfDoc,
  pageNum,
  isMobile,
  containerWidth,
  zoomMultiplier,
  onInView,
}: SingleContinuousPageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let active = true;

    async function render() {
      if (!pdfDoc || !canvasRef.current) return;
      try {
        const page = await pdfDoc.getPage(pageNum);
        if (!active || !canvasRef.current) return;

        const baseViewport = page.getViewport({ scale: 1.0 });
        const padding = isMobile ? 12 : 32;
        const availableWidth = Math.max(260, (containerWidth || 400) - padding);

        const fitScale = availableWidth / baseViewport.width;
        const effectiveScale = fitScale * (zoomMultiplier || 1.0);

        const viewport = page.getViewport({ scale: effectiveScale });
        const pixelRatio = window.devicePixelRatio || 1.5;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(pixelRatio, pixelRatio);

        await page.render({ canvasContext: ctx, viewport }).promise;
        if (active) setRendered(true);
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException') {
          console.warn(`Error rendering page ${pageNum}:`, err);
        }
      }
    }

    render();

    return () => {
      active = false;
    };
  }, [pdfDoc, pageNum, isMobile, containerWidth, zoomMultiplier]);

  return (
    <div
      id={`pdf-continuous-page-${pageNum}`}
      className="bg-white p-1 sm:p-2 rounded-lg sm:rounded-xl shadow-lg border border-gray-300 flex flex-col items-center max-w-full"
    >
      <div className="w-full flex items-center justify-between pb-1.5 px-1.5 text-[10px] sm:text-[11px] font-bold text-gray-500 border-b border-gray-100 mb-1.5">
        <span>AKaliro Investments</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-700">Page {pageNum}</span>
      </div>
      <canvas ref={canvasRef} className="block rounded max-w-full h-auto" />
    </div>
  );
}
