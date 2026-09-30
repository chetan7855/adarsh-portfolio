export const portfolioData = {
  name: "Adarsh",
  role: "Video Editor",
  status: "Freelance",
  year: "2026",
  location: "India",
  email: "adrash.32004@gmail.com",
  phone: "9871691541",
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
  profile: "/adarsh face/adarsh-face.jpeg",
  anime: [
    "/adarsh face/adarsh-face.jpeg",
    "/adarsh face/adarsh-face.jpeg"
  ],
  software: {
    afterEffects: "/assets/software/after-effects.png",
    premierePro: "/assets/software/premiere-pro.png",
    capcut: "/assets/software/capcut.png",
    photoshop: "/assets/software/photoshop.png"
  }
};

export const projects = Array.from({ length: 18 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    title: `Video ${num}`,
    video: `/assets/projects/video-${num}.mp4`,
    aspectRatio: "9/16",
    tag: "SHORT FORM"
  };
});
