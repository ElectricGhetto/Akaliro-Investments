import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import ProfilePdfViewer, { PROFILE_PDF_URL } from '../components/ProfilePdfViewer';

export default function ProfileReaderPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar Navigation */}
      <div className="bg-white border-b border-gray-200 py-3 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-800 transition-colors p-1"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <FileText size={18} className="text-[#298600] flex-none" />
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 truncate max-w-[140px] sm:max-w-none">
                Company Profile
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PROFILE_PDF_URL}
              download="akaliro_investments_profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1.5 sm:px-4 sm:py-2 text-xs md:text-sm font-bold text-green-950 transition-colors hover:bg-yellow-500 shadow-sm"
              title="Download PDF"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden text-[11px]">PDF</span>
            </a>
            <a
              href={PROFILE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs md:text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              title="Open in new tab"
            >
              <ExternalLink size={14} />
              <span className="hidden md:inline">Open in Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-0 sm:p-4 md:p-6 flex flex-col">
        <div className="w-full flex-1 min-h-[calc(100vh-60px)] sm:min-h-[750px] md:min-h-[880px] flex flex-col">
          <ProfilePdfViewer isModal={false} />
        </div>
      </main>
    </div>
  );
}
