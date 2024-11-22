import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Mango Burst Effect",
    description:
      "A commercial video project created using Adobe After Effects and Adobe Premiere Pro.",
    technologies: [SiAdobeaftereffects, SiAdobepremierepro],
    techNames: ["After Effect", "Premeire Pro"],
    demo: "https://res.cloudinary.com/dcggpbjur/video/upload/v1729798137/Purevita_Mango_uew8jr.mp4",
    image: "/projects/mangovideo.jpg",
    available: true,
  },
  {
    id: 1,
    name: "3D Oil Can",
    description:
      "A 3D animation project created using a combination of Adobe After Effects, Maya, Blender, and Adobe Premiere Pro.",
    technologies: [SiAdobeaftereffects, SiAdobepremierepro],
    techNames: ["After Effect", "Premeire Pro"],
    

    demo: "https://res.cloudinary.com/dcggpbjur/video/upload/v1729798887/royal_oil_001_ciwrau.mp4",
    image: "/projects/oilvideo.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Trading Video",
    description:
      "A commercial video project for a trading platform, created using Adobe After Effects and Adobe Premiere Pro.",
    technologies: [SiAdobeaftereffects, SiAdobepremierepro],
    techNames: ["After Effect", "Premeire Pro"],
   

    demo: "https://res.cloudinary.com/dcggpbjur/video/upload/v1730991021/Trading_commercial_pzvd6n.mp4",
    image: "/projects/tradingvideo.jpg",
    available: true,
  },
  {
    id: 3,
    name: "E-learning Video",
    description:
      "An educational video project created using Adobe After Effects and Adobe Premiere Pro.",
    technologies: [SiAdobeaftereffects, SiAdobepremierepro],
    techNames: ["After Effect", "Premeire Pro"],
    

    demo: "https://res.cloudinary.com/dcggpbjur/video/upload/v1729798048/Yogi_Sir_2nd_Draft_-_Demo_wyjqld.mp4",
    image: "/projects/yogivideo.jpg",
    available: true,
  },
];
