export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubLink?: string;
  Figma?: string;
}

export const developmentProjects: Project[] = [
  {
    title: "Moongle Buddy",
    description:
      "An AI-powered mobile app that transforms uploaded PDFs into clear, concise summaries for faster and smarter learning.",
    tech: ["Firebase", "React", "Mobile"],
    image: "public/thumbnail-1.png",
    Figma: "https://github.com/",
  },
  {
    title: "QuickMemo",
    description:
      "A simple web-based notepad designed for capturing, organizing, and managing daily notes with ease. It allows users to quickly write down ideas, reminders, and important thoughts in a clean and distraction-free interface, making everyday note-taking efficient and effortless.",
    tech: ["HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    githubLink: "https://jalaniebrcr23.github.io/",
  },
];

export const designProjects: Project[] = [
  {
    title: "QuickEase 2.0",
    description:
      "An AI-powered study platform designed to support collaborative learning through an integrated online forum. It offers intelligent study tools such as content summarization, flashcard generation, and quiz creation, enhanced with interactive leaderboards that make learning more engaging and fun.",
    tech: ["Figma", "Website"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
  {
    title: "Larga.cgy",
    description:
      "A mobile app design focused on helping commuters in Cagayan de Oro easily track and navigate jeepney routes. The app aims to provide clear route information and an intuitive user interface to improve daily commuting experiences for both local residents and visitors.",
    tech: ["Figma", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
  },
];
