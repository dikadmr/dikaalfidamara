"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const people = [
  {
    id: 1,
    name: "React",
    designation: "JavaScript Framework",
    image: "/images/physics.png",
  },
  {
    id: 2,
    name: "Vite",
    designation: "React Bundler",
    image: "/images/vite.svg",
  },
  {
    id: 3,
    name: "Next.js",
    designation: "React Framework",
    image: "/images/next.js.svg",
  },
  {
    id: 4,
    name: "Bootstrap",
    designation: "CSS Framework",
    image: "/images/bootstrap.png",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "CSS Framework",
    image: "/images/TailwindCSS.png",
  },
];

const soft = [
  {
    id: 1,
    name: "Teamwork",
  },
  {
    id: 2,
    name: "Problem Solving",
  },
  {
    id: 3,
    name: "Adaptability",
  },
  {
    id: 4,
    name: "Creativity",
  },
  {
    id: 5,
    name: "Communication",
  },
];

export function Stacks() {
  return (
    <div className="w-full py-20 flex flex-col md:flex-row items-center md:items-stretch justify-center mx-auto max-w-7xl px-4 md:px-8 lg:px-10 gap-16">
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold dark:text-white text-center py-8">
          Skills
        </h2>
        <div className="flex-grow flex items-center justify-center flex-row gap-8">
          <AnimatedTooltip items={people} />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold dark:text-white text-center py-8">
          Soft Skills
        </h2>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {soft.map((person) => (
            <HoverBorderGradient
              key={person.id}
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <>
                <span>{person.name}</span>
              </>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </div>
  );
}
