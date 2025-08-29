"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

// const content = [
//     {
//       title: "Collaborative Editing",
//       description:
//         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//       content: (
//         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//           Collaborative Editing
//         </div>
//       ),
//     },
//     {
//       title: "Real time changes",
//       description:
//         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//       content: (
//         <div className="flex h-full w-full items-center justify-center text-white">
//           <img
//             src="/linear.webp"
//             width={300}
//             height={300}
//             className="h-full w-full object-cover"
//             alt="linear board demo"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Version control",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
//           Version control
//         </div>
//       ),
//     },
//     {
//       title: "Running out of content",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//           Running out of content
//         </div>
//       ),
//     },
//   ];

const content = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build robust and scalable web applications using the latest technologies like React, Node.js, and MongoDB. From crafting beautiful frontends to designing efficient backends, I ensure seamless performance and user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] text-white">
        <img
          src="https://www.webstackacademy.com/wp-content/uploads/2023/01/fullStack-MERN.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Full-Stack Web Development"
        />
      </div>
    ),
  },
  {
    title: "Modern Frontend with React & Redux",
    description:
      "I specialize in building interactive and high-performance user interfaces using React.js and Redux for state management. With optimized components and reusable code patterns, I deliver pixel-perfect designs that users love.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.seekpng.com/png/full/38-381338_frontend-and-backend-development-android-hybrid-apps-development.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Frontend Development"
        />
      </div>
    ),
  },
  {
    title: "Backend & API Development",
    description:
      "Using Node.js and Express, I create secure, scalable REST APIs and microservices. With MongoDB as the database, I ensure data consistency, performance, and a seamless connection between frontend and backend systems.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white">
        <img
          src="https://png.pngtree.com/png-clipart/20240719/original/pngtree-flat-design-backend-developer-landing-page-png-image_15592866.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Frontend Development"
        />
      </div>
    ),
  },
  {
    title: "End-to-End Project Delivery",
    description:
      "From idea to deployment, I handle the complete lifecycle of your web application. With version control via Git/GitHub and deployment strategies on modern platforms, I deliver production-ready solutions on time.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--pink-500))] text-white">
        <img
          src="https://img.freepik.com/free-vector/business-project-delivery-concept-project-development-presentation-idea-project-planning-promotion-management-marketing-flat-vector-illustration_613284-3094.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Frontend Development"
        />
      </div>
    ),
  },
];

function ServiceSection() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default ServiceSection;
