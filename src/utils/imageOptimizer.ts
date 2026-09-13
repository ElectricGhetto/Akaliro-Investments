// Utility to preload critical images into browser cache
export function preloadImages(urls: string[]): void {
  if (typeof window === 'undefined') return;

  const preload = () => {
    urls.forEach((url) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = url;
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(preload);
  } else {
    setTimeout(preload, 100);
  }
}

export const APP_IMAGES = [
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro%20Investments.png',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Tomatoes,-Banana-Plantations.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-Services.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-About-Us.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-2.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery-3.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro/Akaliro-Plant-and-Machinery.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akairo-Investments-Plantations.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Cleaning-2.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Flowers.jpg',
  'https://tufezgrcqbnxlqnzqsmc.supabase.co/storage/v1/object/public/Weekly/Akaliro-Investments-Ground-Levelling.jpg',
];
