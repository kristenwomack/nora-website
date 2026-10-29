export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
};

export const assetPath = (path: string) =>
  `${process.env.PAGES_BASE_PATH ?? ""}${path}`;

export const projects: Project[] = [
  {
    slug: "notes-from-the-coast",
    title: "Notes from the Coast",
    category: "Fashion editorial",
    location: "Vancouver, BC",
    year: "2026",
    description:
      "An urban fashion story shaped by saturated color, graphic silhouettes, and the quiet tension between movement and stillness.",
    cover: {
      src: assetPath("/images/nora/red-cover.webp"),
      alt: "Nora Womack wearing a red suit in an urban courtyard",
    },
    gallery: [
      {
        src: assetPath("/images/nora/red-portrait-01.webp"),
        alt: "Nora Womack in a red suit at dusk",
      },
      {
        src: assetPath("/images/nora/red-portrait-02.webp"),
        alt: "Close portrait of Nora Womack in a red jacket",
      },
      {
        src: assetPath("/images/nora/red-seated.webp"),
        alt: "Nora Womack seated in a red suit",
      },
      {
        src: assetPath("/images/nora/polka-distance.webp"),
        alt: "Nora Womack standing beneath a pool of light in a polka-dot dress",
      },
      {
        src: assetPath("/images/nora/polka-wall.webp"),
        alt: "Nora Womack beside a brick wall in a polka-dot dress",
      },
      {
        src: assetPath("/images/nora/polka-landscape.webp"),
        alt: "Nora Womack smiling in a polka-dot dress",
      },
      {
        src: assetPath("/images/nora/polka-portrait.webp"),
        alt: "Editorial portrait of Nora Womack in a polka-dot dress",
      },
      {
        src: assetPath("/images/nora/blue-seated.webp"),
        alt: "Nora Womack seated outdoors in a pale blue suit",
      },
      {
        src: assetPath("/images/nora/blue-full-length.webp"),
        alt: "Nora Womack standing against the Vancouver skyline in a blue suit",
      },
      {
        src: assetPath("/images/nora/blue-closeup.webp"),
        alt: "Close portrait of Nora Womack in a pale blue jacket",
      },
      {
        src: assetPath("/images/nora/blue-waterfront.webp"),
        alt: "Nora Womack by the Vancouver waterfront in a blue suit",
      },
      {
        src: assetPath("/images/nora/blue-editorial.webp"),
        alt: "Nora Womack seated by the water in a pale blue suit",
      },
      {
        src: assetPath("/images/nora/evening-seated.webp"),
        alt: "Nora Womack in an evening editorial look",
      },
      {
        src: assetPath("/images/nora/evening-standing.webp"),
        alt: "Nora Womack standing beneath a waterfront colonnade at night",
      },
    ],
  },
];
