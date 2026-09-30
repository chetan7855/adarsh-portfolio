export const portfolioData = {
  name: "Chetan Choudhary",
  role: "Video Editor",
  status: "Freelance",
  year: "2026",
  location: "Indore, India",
  email: "chetan72006@gmail.com",
  about:
    "I’m a starter freelance video editor focused on creating engaging visual content. I work with short-form videos, YouTube content, motion and color, while continuously improving my editing style and creative workflow.",
  experience: {
    title: "Freelance Video Editor",
    period: "STARTER / CURRENT",
    description:
      "Working on freelance and personal video editing projects with a focus on short-form content, YouTube, motion and color."
  },
  services: [
    "Video Editing",
    "Short Form Videos",
    "YouTube Videos",
    "Motion Graphics",
    "Color Grading"
  ],
  skills: [
    {
      name: "Adobe After Effects",
      shortName: "AFTER EFFECTS",
      icon: "/assets/software/after-effects.png"
    },
    {
      name: "Adobe Premiere Pro",
      shortName: "PREMIERE PRO",
      icon: "/assets/software/premiere-pro.png"
    },
    {
      name: "CapCut",
      shortName: "CAPCUT",
      icon: "/assets/software/capcut.png"
    },
    {
      name: "Adobe Photoshop",
      shortName: "PHOTOSHOP",
      icon: "/assets/software/photoshop.png"
    }
  ]
};

export const assets = {
  logo: "/assets/logo/Print.svg",
  anime: [
    "/assets/anime/anime-01.png", // face.png
    "/assets/anime/anime-02.png"  // full.png
  ],
  software: {
    afterEffects: "/assets/software/after-effects.png",
    premierePro: "/assets/software/premiere-pro.png",
    capcut: "/assets/software/capcut.png",
    photoshop: "/assets/software/photoshop.png"
  }
};

export const projects = [
  {
    id: 1,
    title: "Video 01",
    label: "REEL / SHORT FORM",
    video: "/assets/projects/video-01.mp4",
    aspectRatio: "9/16",
    tag: "SHORT FORM"
  },
  {
    id: 2,
    title: "Video 02",
    label: "VIRAL CUT 9:16",
    video: "/assets/projects/video-02.mp4",
    aspectRatio: "9/16",
    tag: "YOUTUBE SHORTS"
  },
  {
    id: 3,
    title: "Video 03",
    label: "MOTION COMPOSITE",
    video: "/assets/projects/video-03.mp4",
    aspectRatio: "9/16",
    tag: "MOTION REEL"
  }
];
