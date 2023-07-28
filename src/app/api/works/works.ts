export type WorkData = {
  id: number;
  title: string;
  desc: string;
  image: string;
  gallery: string[];
  githubLink: string;
  techStack: string[];
};

export const worksData: WorkData[] = [
  {
    id: 0,
    title: "Onlime cinema",
    desc: "A web application for watching your favorite movies and TV shows.",
    image: "/pr1/1.svg",
    gallery: ["/pr1/1.svg", "/pr1/2.svg", "/pr1/3.svg"],
    githubLink: "https://github.com/NikSerdu/online-cinema-frontend",
    techStack: [
      "Next.js",
      "Redux Toolkit",
      "TailwindCSS",
      "Nest.js",
      "Prisma",
      "TypeScript",
    ],
  },
  {
    id: 1,
    title: "Basic landing",
    desc: "",
    image: "/pr2/1.svg",
    gallery: ["/pr2/1.svg"],
    githubLink: "",
    techStack: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "Application for learn of English words",
    desc: "An application for learning English words, which has 5 modes, different sets of words, as well as favorite words and the ability to add your own.",
    image: "/pr3/1.svg",
    gallery: ["/pr3/1.svg", "/pr3/2.svg", "/pr3/3.svg", "/pr3/4.svg"],
    githubLink: "https://github.com/NikSerdu/Learn-English-Words",
    techStack: ["React", "Redux"],
  },
  {
    id: 3,
    title: "Lorem",
    desc: "Here are some of my recent works.",
    image: "/pr4/1.svg",
    gallery: ["/pr4/1.svg", "/pr4/2.svg", "/pr4/3.svg", "/pr4/4.svg"],
    githubLink: "",
    techStack: ["HTML", "CSS"],
  },
];
