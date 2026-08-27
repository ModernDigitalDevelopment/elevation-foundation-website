import { describe, expect, it } from "vitest";
import { getDocumentShareLinks } from "../shared/documentSharing";

describe("getDocumentShareLinks", () => {
  it("encodes a document title and URL for supported social networks", () => {
    const links = getDocumentShareLinks({
      title: "Sotility Whitepaper: Governance & Trust",
      url: "https://elevation.foundation/files/sotility-whitepaper.pdf?edition=1",
    });

    expect(links.x).toContain("https://x.com/intent/tweet?");
    expect(links.x).toContain("Sotility%20Whitepaper%3A%20Governance%20%26%20Trust");
    expect(links.x).toContain("edition%3D1");
    expect(links.linkedin).toBe(
      "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Felevation.foundation%2Ffiles%2Fsotility-whitepaper.pdf%3Fedition%3D1"
    );
  });
});
