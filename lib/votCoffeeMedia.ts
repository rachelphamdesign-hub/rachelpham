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
    src: "/media/image/vot%20coffee/FINAL3.png",
    alt: "Vot Coffee wordmark on cream background",
  },
  {
    node: "401:784",
    src: "/media/image/vot%20coffee/FINAL4.png",
    alt: "Vot Coffee business cards — front and back on deep maroon",
  },
  {
    node: "401:1018",
    src: "/media/image/vot%20coffee/FINAL5.png",
    alt: "Branded paper cups — cream and maroon variants",
  },
  {
    node: "401:1020",
    src: "/media/image/vot%20coffee/FINAL6.png",
    alt: "Pour-over coffee scene — kettle and Chemex",
  },
  {
    node: "401:1024",
    src: "/media/image/vot%20coffee/FINAL8%20low.png",
    alt: "Canvas tote bag with Vot Coffee branding on stone steps",
  },
  {
    node: "401:1026",
    src: "/media/image/vot%20coffee/FINAL9%20low.png",
    alt: "Branded napkin and café tabletop detail",
  },
  {
    node: "401:1028",
    src: "/media/image/vot%20coffee/FINAL10%20low.png",
    alt: "Maroon tote bag with line-art coffee pattern",
  },
  {
    node: "401:816",
    src: "/media/image/vot%20coffee/FINAL11%20low.png",
    alt: "Robustas Honey coffee bean packaging — two bag designs",
  },
] as const;
