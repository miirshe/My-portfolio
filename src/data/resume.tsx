import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdikafi Isse Isak",
  resumeUrl: "/Abdikafi isseCV.pdf",
  initials: "Miirshe",
  url: "https://miirshe.vercel.app/",
  location: "Mogadishu, Somalia",
  locationLink: "https://www.google.com/maps/place/mogadishu",
  description:
    "🚀 Full-Stack Developer | MERN Stack Specialist | Problem Solver 💻 Proficient in Front-End & Back-End Development",
  summary:
    "Hi there! 👋 I'm a Full-Stack Developer specializing in Next.js and the MERN stack. I build scalable, high-performance applications with modern frameworks and tools. Passionate about crafting seamless user experiences and architecting robust back-end systems with microservices.",
  avatarUrl: "/me.jpg",
  skills: [
    "Javascript / Typescript",
    "React (Next.js)",
    "React Native",
    "Node (Nest, Express)",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "UI/UX",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "miirshe@gmail.com",
    tel: "+252618302314",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/miirshe",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/miirshe",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "facebook",
        url: "hhttps://www.facebook.com/miirshe",
        icon: Icons.facebook,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "miirshe@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wa.me/252618302314",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Jamhuriya Technology Solutions - Jtech",
      href: "https://jtech.so",
      badges: [],
      location: "Mogadishu, Somalia",
      title: "Full Stack Developer",
      logoUrl: "/work/jtech-light-logo.png",
      start: "APR 2024",
      end: "PRESENT",
      description:
        "Played a key role in the design, development, and maintenance of web applications using the MERN stack, delivering robust and scalable solutions.\nCollaborated closely with cross-functional teams, including designers, product managers, and developers, to ensure high-quality and timely product delivery.\nImplemented responsive UI designs and optimized performance for better user experiences.\nDeveloped RESTful APIs and integrated secure authentication mechanisms to enhance application functionality.",
    },
    {
      company: "Dugsiiye Platform",
      badges: [],
      href: "https://dugsiiye.com",
      location: "Remote",
      title: "Mentor / Assistant",
      logoUrl: "/work/dugsiiye_dark.png",
      start: "MAY 2024",
      end: "NOV 2024",
      description:
        "Provided personalized mentorship and guidance to students, supporting their academic and personal development goals.\nAssisted students in understanding programming concepts and building projects using modern technologies.\nCollaborated with educators and mentors to design and execute comprehensive development programs and workshops.",
    },
    {
      company: "Gabi School",
      badges: [],
      href: "https://gabischool.com/",
      location: "Remote",
      title: "Part-Time Mentor",
      logoUrl: "/work/gabi-logo.png",
      start: "JAN 2023",
      end: "PRESENT",
      description:
        "Mentored students across different time zones in programming and full-stack development.\nDesigned coding examples and educational materials to foster practical understanding.\nGuided students in debugging and optimizing their code, promoting best practices and problem-solving skills.",
    },
    {
      company: "Jamhuriya University of Science & Technology (JUST)",
      badges: [],
      href: "https://just.edu.so",
      location: "Mogadishu, Somalia",
      title: "Assistant Lecturer",
      logoUrl: "/work/just-logo.png",
      start: "SEP 2023",
      end: "MAY 2024",
      description:
        "Assisted in delivering Python lectures, creating practical examples, and evaluating student progress.\nSupported Java and C# lectures by preparing course materials and providing hands-on assistance during lab sessions.\nFacilitated interactive learning environments to enhance student engagement and comprehension.",
    },
  ],

  education: [
    {
      school: "Nugaal High School Primary Education",
      href: "#",
      degree: "Primary Education",
      start: "2013",
      end: "2016",
    },
    {
      school: "Hamar Jajab High School ",
      href: "#",
      degree: "Secondary Education",
      logoUrl: "/education/jaabir-bin-hayan-logo.png",
      start: "2016",
      end: "2019",
    },
    {
      school: "Jamhuriya University of Science and Technology",
      href: "https://just.edu.so",
      degree: "Bachelor Degree Of Computer Application",
      start: "2020",
      end: "2024",
    },
    {
      school: "Jamhuriya University of Science and Technology",
      href: "https://just.edu.so",
      degree: "MSc Cybersecurity",
      start: "2025",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Toxic Comment Classification in Somali Language",
      href: "https://github.com/miirshe/somali-classifier-comments-bert",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "As online platforms grow, the need for oversight to prevent harmful posts becomes crucial. Some individuals use these platforms to hurt, insult, and spread hatred. This problem must be addressed using Natural Language Processing (NLP). Several Machine Learning models have been developed to filter out malicious content and protect users from online harassment. The aim is to create a safer and more respectful online environment. Effective models have been deployed to achieve this purpose.",
      technologies: [
        "Nextjs",
        "Typescript",
        "Flask-restful",
        "MongoDB",
        "Next-auth",
        "Nativewind",
        "RTK",
        "Prisma",
        'Bert-model',
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/miirshe/somali-classifier-comments-bert",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/projects/attendly-thumbnail.png",
      // video: "",
    },
    {
      title: "Yonode - NodeJS Toolkit",
      href: "https://www.yonode.org",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Yonode is a Node.js toolkit that streamlines your workflow, enabling you to craft efficient server solutions rapidly.",
      technologies: ["Javascript/Typescript", "Node.js", "MDX", "bash"],
      links: [
        {
          type: "Website",
          href: "https://www.yonode.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sharafdin/yonode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/projects/yonode.png",
      // video: "",
    },
    {
      title: "Markdown Master",
      href: "https://marketplace.visualstudio.com/items?itemName=Sharafdin.markdown-master",
      dates: " Feb, 22, 2024",
      active: true,
      description:
        "Unleash the power of our pre-production extension, transforming your Markdown writing experience. Compose Markdown effortlessly with a user-friendly GUI, while enjoying real-time previewing. Generate files or seamlessly copy to platforms like GitHub. Stay tuned for the official release and revolutionize your Markdown workflow like never before.",
      technologies: ["Javascript/Typescript", "Vscode-extension", "MDX", "bash"],
      links: [
        {
          type: "marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=Sharafdin.markdown-master",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sharafdin/yonode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/projects/yonode.png",
      // video: "",
    },
  ],
} as const;
