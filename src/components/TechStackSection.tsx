"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import frontendLogo from "../assets/html-css-img.jpg";

export function TechStackSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <strong>Tech Stack</strong>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const SkillContent = ({ title, description, image }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={image}
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(1).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <img
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];

const data = [
  {
    category: "Frontend",
    title: "HTML5 & CSS3",
    src: "https://img.freepik.com/premium-vector/male-programmers-with-development-codes_24911-63459.jpg?w=1480",
    content: (
      <SkillContent
        title="HTML5 & CSS3"
        description="Building modern, responsive, and accessible UIs with semantic HTML and advanced CSS techniques."
        image="https://img.freepik.com/premium-vector/male-programmers-with-development-codes_24911-63459.jpg?w=1480"
      />
    ),
  },
  {
    category: "Frontend",
    title: "JavaScript",
    src: "https://cdn3d.iconscout.com/3d/free/preview/free-javascript-3d-icon-png-download-5453022.png?f=webp&h=700",
    content: (
      <SkillContent
        title="JavaScript"
        description="Dynamic and scalable frontends using modern JS and React ecosystem with hooks, context, and reusable components."
        image="https://cdn3d.iconscout.com/3d/free/preview/free-javascript-3d-icon-png-download-5453022.png?f=webp&h=700"
      />
    ),
  },
  {
    category: "Frontend",
    title: "React",
    src: "https://cdn3d.iconscout.com/3d/free/preview/free-react-native-logo-3d-icon-png-download-4642743@0.png?f=webp&h=700",
    content: (
      <SkillContent
        title="React"
        description="Dynamic and scalable frontends using modern JS and React ecosystem with hooks, context, and reusable components."
        image="https://cdn3d.iconscout.com/3d/free/preview/free-react-native-logo-3d-icon-png-download-4642743@0.png?f=webp&h=700"
      />
    ),
  },
  {
    category: "State Management",
    title: "Redux",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=3000&auto=format&fit=crop",
    content: (
      <SkillContent
        title="Redux"
        description="Predictable state management for complex apps with Redux Toolkit and middleware integrations."
        image="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=3000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Backend",
    title: "Node.js & Express",
    src: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=3000&auto=format&fit=crop",
    content: (
      <SkillContent
        title="Node.js & Express"
        description="REST APIs, middleware, and scalable backend services built with Node.js and Express."
        image="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=3000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Database",
    title: "MongoDB",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3000&auto=format&fit=crop",
    content: (
      <SkillContent
        title="MongoDB"
        description="NoSQL database design, aggregation pipelines, and performant queries with MongoDB Atlas."
        image="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=3000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Architecture",
    title: "Microservices",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3000&auto=format&fit=crop",
    content: (
      <SkillContent
        title="Microservice Architecture"
        description="Decoupled and resilient systems using microservice principles, message brokers, and APIs."
        image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=3000&auto=format&fit=crop"
      />
    ),
  },
  {
    category: "Collaboration",
    title: "Git & GitHub",
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=3000&auto=format&fit=crop",
    content: (
      <SkillContent
        title="Git & GitHub"
        description="Version control, branching strategies, and CI/CD pipelines with GitHub Actions."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=3000&auto=format&fit=crop"
      />
    ),
  },
];
