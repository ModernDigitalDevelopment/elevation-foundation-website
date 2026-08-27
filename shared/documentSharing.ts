export type DocumentShareInput = {
  url: string;
  title: string;
};

/**
 * Builds the external share links used for downloadable research and media assets.
 * The document URL is shared directly so recipients land on the primary source file.
 */
export function getDocumentShareLinks({ url, title }: DocumentShareInput) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return {
    x: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };
}
