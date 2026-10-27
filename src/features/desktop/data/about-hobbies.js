/** 4×4 grid (row-major). Selected tiles show a checkmark; others are muted. */
export const aboutHobbyGrid = [
  { id: "gaming", label: "Gaming", selected: true },
  { id: "yoga", label: "Yoga", selected: false },
  { id: "reading", label: "Reading", selected: true },
  { id: "fitness", label: "Fitness", selected: false },
  { id: "movies", label: "Movies", selected: true },
  { id: "cooking", label: "Cooking", selected: false },
  { id: "travel", label: "Travel", selected: true },
  { id: "music", label: "Music", selected: true },
  { id: "photo", label: "Photo", selected: false },
  { id: "art", label: "Art", selected: true },
  { id: "garden", label: "Garden", selected: false },
  { id: "writing", label: "Writing", selected: false },
  { id: "diy-crafts", label: "DIY Crafts", selected: true },
  { id: "outdoors", label: "Outdoors", selected: false },
  { id: "baking", label: "Baking", selected: false },
  { id: "podcasts", label: "Podcasts", selected: false },
];

export const aboutHobbies = aboutHobbyGrid.filter((item) => item.selected);
