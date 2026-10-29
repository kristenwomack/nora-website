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

export const projects: Project[] = [
  {
    slug: "notes-from-the-coast",
    title: "Notes from the Coast",
    category: "Fashion editorial",
    location: "California",
    year: "2024",
    description:
      "A coastal fashion story shaped by sculptural silhouettes, open light, and the quiet tension between movement and stillness.",
    cover: {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=90",
      alt: "Fashion model in a bold street-style look",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=90",
        alt: "Fashion model posing in a contemporary look",
      },
      {
        src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=90",
        alt: "Close editorial portrait of a fashion model",
      },
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=90",
        alt: "Natural-light beauty portrait of a model",
      },
    ],
  },
];
