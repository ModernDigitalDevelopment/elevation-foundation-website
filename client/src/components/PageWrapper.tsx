/**
 * PAGE WRAPPER
 * Wraps every lazy-loaded page with a smooth fade-in + slide-up entrance animation.
 * Import and wrap the root element of each page, or use as a layout wrapper in App.tsx.
 */
import { useEffect, useRef } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reset and re-trigger animation on every route change
    el.classList.remove("page-enter");
    // Force reflow so the animation restarts
    void el.offsetWidth;
    el.classList.add("page-enter");
  }, []);

  return (
    <div ref={ref} className={`page-enter ${className}`}>
      {children}
    </div>
  );
}

export default PageWrapper;
