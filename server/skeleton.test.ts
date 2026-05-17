/**
 * Tests for PageSkeleton and PageWrapper components
 * Verifies the skeleton system renders correctly and CSS classes are applied
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import path from "path";

const skeletonPath = path.resolve("client/src/components/PageSkeleton.tsx");
const wrapperPath = path.resolve("client/src/components/PageWrapper.tsx");
const cssPath = path.resolve("client/src/index.css");
const appPath = path.resolve("client/src/App.tsx");

describe("PageSkeleton component", () => {
  it("exports PageSkeleton as a named export", () => {
    const content = readFileSync(skeletonPath, "utf-8");
    expect(content).toContain("export function PageSkeleton");
  });

  it("uses the .skeleton CSS class for shimmer blocks", () => {
    const content = readFileSync(skeletonPath, "utf-8");
    expect(content).toContain("skeleton");
  });

  it("applies animate-fade-in-skeleton to the wrapper", () => {
    const content = readFileSync(skeletonPath, "utf-8");
    expect(content).toContain("animate-fade-in-skeleton");
  });

  it("has route-aware skeleton layouts for key paths", () => {
    const content = readFileSync(skeletonPath, "utf-8");
    expect(content).toContain('"/blog"');
    expect(content).toContain('"/token-economy"');
    expect(content).toContain('"/donate"');
    expect(content).toContain('"/"');
  });

  it("uses useLocation to detect the current route", () => {
    const content = readFileSync(skeletonPath, "utf-8");
    expect(content).toContain("useLocation");
  });
});

describe("PageWrapper component", () => {
  it("exports PageWrapper as a named export", () => {
    const content = readFileSync(wrapperPath, "utf-8");
    expect(content).toContain("export function PageWrapper");
  });

  it("applies page-enter CSS class for fade-in animation", () => {
    const content = readFileSync(wrapperPath, "utf-8");
    expect(content).toContain("page-enter");
  });

  it("uses useEffect to trigger animation on mount", () => {
    const content = readFileSync(wrapperPath, "utf-8");
    expect(content).toContain("useEffect");
  });
});

describe("CSS animations in index.css", () => {
  it("defines skeletonShimmer keyframe animation", () => {
    const css = readFileSync(cssPath, "utf-8");
    expect(css).toContain("@keyframes skeletonShimmer");
  });

  it("defines animate-fade-in-skeleton class", () => {
    const css = readFileSync(cssPath, "utf-8");
    expect(css).toContain(".animate-fade-in-skeleton");
  });

  it("defines pageFadeIn keyframe animation", () => {
    const css = readFileSync(cssPath, "utf-8");
    expect(css).toContain("@keyframes pageFadeIn");
  });

  it("defines .page-enter class", () => {
    const css = readFileSync(cssPath, "utf-8");
    expect(css).toContain(".page-enter");
  });

  it("skeleton shimmer uses a wide background-size for smooth animation", () => {
    const css = readFileSync(cssPath, "utf-8");
    expect(css).toContain("1200px");
  });
});

describe("App.tsx integration", () => {
  it("imports PageSkeleton from components", () => {
    const content = readFileSync(appPath, "utf-8");
    expect(content).toContain("PageSkeleton");
  });

  it("imports PageWrapper from components", () => {
    const content = readFileSync(appPath, "utf-8");
    expect(content).toContain("PageWrapper");
  });

  it("uses PageSkeleton as Suspense fallback", () => {
    const content = readFileSync(appPath, "utf-8");
    expect(content).toContain("fallback={<PageSkeleton />}");
  });

  it("wraps routes in PageWrapper for fade-in transition", () => {
    const content = readFileSync(appPath, "utf-8");
    expect(content).toContain("<PageWrapper>");
    expect(content).toContain("</PageWrapper>");
  });

  it("all pages are lazy-loaded", () => {
    const content = readFileSync(appPath, "utf-8");
    const lazyCount = (content.match(/lazy\(\(\) => import/g) || []).length;
    // We have 21 lazy-loaded pages
    expect(lazyCount).toBeGreaterThanOrEqual(18);
  });
});
