import { useState } from "react";
import { Check, Copy, Linkedin, Share2 } from "lucide-react";
import { getDocumentShareLinks } from "@shared/documentSharing";

type DocumentShareControlsProps = {
  documentUrl: string;
  documentTitle: string;
  compact?: boolean;
};

/** Compact, accessible sharing actions for downloadable PDFs and brand assets. */
export default function DocumentShareControls({
  documentUrl,
  documentTitle,
  compact = false,
}: DocumentShareControlsProps) {
  const [copied, setCopied] = useState(false);
  const shareLinks = getDocumentShareLinks({ url: documentUrl, title: documentTitle });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(documentUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const sizeClass = compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-2 text-xs";

  return (
    <div className="inline-flex flex-wrap items-center gap-2" aria-label={`Share ${documentTitle}`}>
      {!compact && <span className="sr-only">Share {documentTitle}</span>}
      <a
        href={shareLinks.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${documentTitle} on X`}
        title="Share on X"
        className={`inline-flex items-center gap-1.5 border border-white/15 text-white/55 font-body font-medium rounded-sm hover:border-white/35 hover:text-white transition-all ${sizeClass}`}
      >
        <Share2 size={compact ? 11 : 12} />
        <span>X</span>
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${documentTitle} on LinkedIn`}
        title="Share on LinkedIn"
        className={`inline-flex items-center gap-1.5 border border-white/15 text-white/55 font-body font-medium rounded-sm hover:border-[#0A66C2]/60 hover:text-[#58a6dc] transition-all ${sizeClass}`}
      >
        <Linkedin size={compact ? 11 : 12} />
        <span>LinkedIn</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy link to ${documentTitle}`}
        className={`inline-flex items-center gap-1.5 border border-white/15 text-white/55 font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all ${sizeClass}`}
      >
        {copied ? <Check size={compact ? 11 : 12} className="text-gold" /> : <Copy size={compact ? 11 : 12} />}
        <span>{copied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
