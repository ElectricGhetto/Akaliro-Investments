/**
 * Website Security & Anti-Inspection Utility
 * Disables right-click context menu and developer tool inspect shortcuts.
 */

export function initWebsiteProtection() {
  if (typeof window === 'undefined') return;

  // 1. Disable Right-Click Context Menu across entire website
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // 2. Block Inspect Element & DevTools Keyboard Shortcuts
  const handleKeyDown = (e: KeyboardEvent) => {
    // F12 key (standard DevTools toggle)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrlOrMeta = e.ctrlKey || e.metaKey;

    // Ctrl+Shift+I / Cmd+Option+I (Inspect Element)
    // Ctrl+Shift+J / Cmd+Option+J (Console)
    // Ctrl+Shift+C / Cmd+Option+C (Inspect Element Selector)
    if (
      isCtrlOrMeta &&
      e.shiftKey &&
      (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U / Cmd+Option+U (View Page Source)
    if (isCtrlOrMeta && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S / Cmd+S (Save Page)
    if (isCtrlOrMeta && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };

  // Attach global event listeners with capture to intercept before any bubble
  document.addEventListener('contextmenu', handleContextMenu, { capture: true });
  window.addEventListener('contextmenu', handleContextMenu, { capture: true });
  window.addEventListener('keydown', handleKeyDown, { capture: true });

  return () => {
    document.removeEventListener('contextmenu', handleContextMenu, { capture: true } as any);
    window.removeEventListener('contextmenu', handleContextMenu, { capture: true } as any);
    window.removeEventListener('keydown', handleKeyDown, { capture: true } as any);
  };
}
