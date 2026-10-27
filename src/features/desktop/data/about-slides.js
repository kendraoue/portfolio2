export const aboutSlides = [
  {
    id: "intro",
    title: "Kendra Ouellet",
    role: "Application Developer",
    blurb: "A creative, bubbly, developer with a passion for learning new technologies.",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
];

export const skillPlaceholders = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  label: `Skill ${index + 1}`,
}));

export { aboutHobbies as hobbyPlaceholders } from "./about-hobbies";
