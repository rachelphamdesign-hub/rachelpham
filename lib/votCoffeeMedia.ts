/** Figma MCP assets — Vot Coffee case study (porfolio file). */

/** Refined hero photography (local asset). */
export const VOT_COFFEE_HERO_IMAGE = "/media/vot-coffee-hero-final.webp";

/** Kraft bag + takeaway box mockup (local asset — used on case study page only). */
export const VOT_COFFEE_BOX_BAG_MOCKUP = "/media/vot-coffee-box-bag-mockup.png";

/** Full-bleed strips in page order (401:773 … 401:816). Node 401:799 is an empty frame — omitted.
 * 401:1022 (bag + box) is shown via `VOT_COFFEE_BOX_BAG_MOCKUP` on the case study page instead. */
export const VOT_COFFEE_FULL_BLEEDS = [
  {
    node: "401:773",
    src: "https://www.figma.com/api/mcp/asset/952586a7-78d6-4b5e-ba6d-be030170ed82",
    alt: "Vot Coffee wordmark on cream background",
  },
  {
    node: "401:784",
    src: "https://www.figma.com/api/mcp/asset/e3364718-81bd-4848-bce1-47d4dec89f3c",
    alt: "Vot Coffee business cards — front and back on deep maroon",
  },
  {
    node: "401:1018",
    src: "https://www.figma.com/api/mcp/asset/0701cc00-7a62-4975-9d1f-fe8688ff7199",
    alt: "Branded paper cups — cream and maroon variants",
  },
  {
    node: "401:1020",
    src: "https://www.figma.com/api/mcp/asset/742d7637-4430-4beb-a28b-b5be5f25e6c8",
    alt: "Pour-over coffee scene — kettle and Chemex",
  },
  {
    node: "401:1024",
    src: "https://www.figma.com/api/mcp/asset/40100e7b-1b44-42bf-af45-23a65da3db82",
    alt: "Canvas tote bag with Vot Coffee branding on stone steps",
  },
  {
    node: "401:1026",
    src: "https://www.figma.com/api/mcp/asset/b4a051a0-b595-42c7-8eb9-f45c28acfd7e",
    alt: "Branded napkin and café tabletop detail",
  },
  {
    node: "401:1028",
    src: "https://www.figma.com/api/mcp/asset/e70368ff-aac2-4b7f-a041-97f1e2382f81",
    alt: "Maroon tote bag with line-art coffee pattern",
  },
  {
    node: "401:816",
    src: "https://www.figma.com/api/mcp/asset/9c529820-4a60-43f3-adc2-0a5caa31a576",
    alt: "Robustas Honey coffee bean packaging — two bag designs",
  },
] as const;
