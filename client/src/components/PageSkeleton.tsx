/**
 * PAGE SKELETON SYSTEM
 * Route-aware skeleton loading states for all lazy-loaded pages.
 * Uses the existing `.skeleton` shimmer class from index.css.
 * Matches the Elevation Foundation dark navy + gold design system.
 */

import { useLocation } from "wouter";

// ── Primitive skeleton blocks ──────────────────────────────────────────────

function SkeletonBlock({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <div className={`skeleton rounded-sm ${className}`} style={style} />;
}

function SkeletonText({
  width = "100%",
  height = 16,
  className = "",
}: {
  width?: string | number;
  height?: number;
  className?: string;
}) {
  return (
    <SkeletonBlock
      className={`${className}`}
      style={{ width, height, borderRadius: 4 }}
    />
  );
}

// ── Navigation skeleton (shared across all pages) ──────────────────────────

function NavSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-[oklch(0.10_0.05_265/0.95)] border-b border-white/10 flex items-center px-6 gap-8">
      {/* Logo */}
      <SkeletonBlock className="w-32 h-5" />
      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6 ml-8">
        {[80, 100, 72, 56, 64].map((w, i) => (
          <SkeletonBlock key={i} style={{ width: w, height: 14, borderRadius: 4 }} />
        ))}
      </div>
      {/* CTA button */}
      <div className="ml-auto">
        <SkeletonBlock className="w-20 h-9" />
      </div>
    </div>
  );
}

// ── Hero skeleton (homepage, philosophy, sotilitarianism) ──────────────────

function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-[oklch(0.12_0.05_265)]">
      <div className="container py-24">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow label */}
          <SkeletonText width={280} height={12} />
          {/* Main headline — 3 lines */}
          <div className="space-y-3">
            <SkeletonText width="75%" height={72} />
            <SkeletonText width="65%" height={72} />
            <SkeletonText width="45%" height={60} />
          </div>
          {/* Subtext */}
          <div className="space-y-2 pt-2">
            <SkeletonText width="90%" height={20} />
            <SkeletonText width="80%" height={20} />
            <SkeletonText width="60%" height={20} />
          </div>
          {/* CTA buttons */}
          <div className="flex gap-4 pt-4">
            <SkeletonBlock className="w-40 h-12" />
            <SkeletonBlock className="w-36 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Stats bar skeleton ─────────────────────────────────────────────────────

function StatsSkeleton() {
  return (
    <div className="bg-[oklch(0.16_0.05_265)] border-y border-white/10 py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-2">
              <SkeletonText width={80} height={40} className="mx-auto" />
              <SkeletonText width={100} height={12} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Content section skeleton (2-column layout) ────────────────────────────

function ContentSectionSkeleton({ reverse = false }: { reverse?: boolean }) {
  return (
    <section className="py-24 bg-[oklch(0.12_0.05_265)]">
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "direction-rtl" : ""}`}>
          <div className="space-y-4">
            <SkeletonText width={120} height={12} />
            <SkeletonText width="85%" height={48} />
            <SkeletonText width="90%" height={48} />
            <div className="space-y-2 pt-2">
              {[100, 95, 88, 92, 75].map((w, i) => (
                <SkeletonText key={i} width={`${w}%`} height={18} />
              ))}
            </div>
            <SkeletonText width={140} height={20} className="mt-4" />
          </div>
          <SkeletonBlock className="w-full aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}

// ── Card grid skeleton (projects, blog, etc.) ──────────────────────────────

function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <section className="py-24 bg-[oklch(0.14_0.05_265)]">
      <div className="container">
        <div className="mb-14 space-y-3">
          <SkeletonText width={100} height={12} />
          <SkeletonText width={320} height={44} />
        </div>
        <div className={`grid md:grid-cols-${count} gap-6`}>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-7 rounded-sm space-y-4"
            >
              <SkeletonText width={80} height={12} />
              <SkeletonText width="80%" height={28} />
              <div className="space-y-2">
                {[100, 95, 88].map((w, j) => (
                  <SkeletonText key={j} width={`${w}%`} height={16} />
                ))}
              </div>
              <SkeletonText width={100} height={16} className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Blog list skeleton ─────────────────────────────────────────────────────

function BlogListSkeleton() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] pt-16">
      {/* Header */}
      <div className="bg-[oklch(0.14_0.05_265)] py-16 border-b border-white/10">
        <div className="container space-y-4">
          <SkeletonText width={80} height={12} />
          <SkeletonText width={300} height={52} />
          <SkeletonText width={480} height={20} />
        </div>
      </div>
      {/* Article cards */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm overflow-hidden">
              <SkeletonBlock className="w-full h-48" />
              <div className="p-6 space-y-3">
                <SkeletonText width={100} height={12} />
                <SkeletonText width="90%" height={24} />
                <SkeletonText width="80%" height={24} />
                <div className="space-y-2 pt-1">
                  <SkeletonText width="100%" height={16} />
                  <SkeletonText width="85%" height={16} />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <SkeletonText width={80} height={14} />
                  <SkeletonText width={60} height={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Blog post / article skeleton ───────────────────────────────────────────

function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] pt-16">
      {/* Hero image */}
      <SkeletonBlock className="w-full h-72 md:h-96" />
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Category + date */}
          <div className="flex items-center gap-4">
            <SkeletonText width={80} height={12} />
            <SkeletonText width={100} height={12} />
          </div>
          {/* Title */}
          <SkeletonText width="95%" height={52} />
          <SkeletonText width="75%" height={52} />
          {/* Subtitle */}
          <SkeletonText width="88%" height={24} />
          {/* Divider */}
          <div className="border-t border-white/10 pt-6" />
          {/* Body paragraphs */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              {[100, 98, 95, 92, i % 2 === 0 ? 70 : 85].map((w, j) => (
                <SkeletonText key={j} width={`${w}%`} height={18} />
              ))}
            </div>
          ))}
          {/* Pull quote */}
          <div className="border-l-4 border-[oklch(0.72_0.12_75/0.4)] pl-6 py-2 space-y-2">
            <SkeletonText width="90%" height={22} />
            <SkeletonText width="75%" height={22} />
          </div>
          {/* More paragraphs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              {[100, 96, 88, 60 + i * 10].map((w, j) => (
                <SkeletonText key={j} width={`${w}%`} height={18} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Generic interior page skeleton (Our Story, Philosophy, etc.) ───────────

function InteriorPageSkeleton() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] pt-16">
      <HeroSkeleton />
      <ContentSectionSkeleton />
      <CardGridSkeleton count={3} />
    </div>
  );
}

// ── Token economy / data-heavy page skeleton ───────────────────────────────

function DataPageSkeleton() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] pt-16">
      {/* Page header */}
      <div className="bg-[oklch(0.14_0.05_265)] py-20 border-b border-white/10">
        <div className="container space-y-4">
          <SkeletonText width={120} height={12} />
          <SkeletonText width={400} height={56} />
          <SkeletonText width={560} height={22} />
        </div>
      </div>
      {/* Chart area */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <SkeletonBlock className="w-full h-72 rounded-sm" />
          <SkeletonBlock className="w-full h-72 rounded-sm" />
        </div>
      </div>
      {/* Token cards */}
      <CardGridSkeleton count={3} />
    </div>
  );
}

// ── Donate / form page skeleton ────────────────────────────────────────────

function FormPageSkeleton() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] pt-16">
      <div className="container py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <SkeletonText width={120} height={12} />
            <SkeletonText width="80%" height={52} />
            <SkeletonText width="90%" height={22} />
          </div>
          {/* Form fields */}
          <div className="space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <SkeletonText width={120} height={14} />
                <SkeletonBlock className="w-full h-12" />
              </div>
            ))}
            <SkeletonBlock className="w-full h-14 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Route → skeleton mapping ───────────────────────────────────────────────

function getSkeletonForPath(path: string): React.ReactNode {
  // Blog post detail
  if (path.startsWith("/blog/") && path !== "/blog/series/sotilitarian-capitalism") {
    return <BlogPostSkeleton />;
  }

  const skeletonMap: Record<string, React.ReactNode> = {
    "/":                                    <><HeroSkeleton /><StatsSkeleton /><ContentSectionSkeleton /><CardGridSkeleton count={3} /></>,
    "/blog":                                <BlogListSkeleton />,
    "/blog/series/sotilitarian-capitalism": <BlogListSkeleton />,
    "/token-economy":                       <DataPageSkeleton />,
    "/capitalism-2-0":                      <DataPageSkeleton />,
    "/donate":                              <FormPageSkeleton />,
    "/donate/success":                      <FormPageSkeleton />,
    "/get-involved":                        <FormPageSkeleton />,
    "/admin/blog":                          <FormPageSkeleton />,
    "/for-funders":                         <FormPageSkeleton />,
  };

  return skeletonMap[path] ?? <InteriorPageSkeleton />;
}

// ── Main export: route-aware page skeleton ─────────────────────────────────

export function PageSkeleton() {
  const [location] = useLocation();

  return (
    <div className="animate-fade-in-skeleton">
      <NavSkeleton />
      {getSkeletonForPath(location)}
    </div>
  );
}

export default PageSkeleton;
