import { Separator } from "@/components/ui/separator";
import { ProjectCard, ProjectCardMobile } from "./ui/project-card";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1522871465649-53a34924fdcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altImg: "Image 1",
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: `Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.

Research conducted in the 1970s revealed that he designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium, and varnished wood.

[Are.na block](https://www.are.na/block/12759029)`,
  },
  {
    img: "https://images.unsplash.com/photo-1522871465649-53a34924fdcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altImg: "Image 1",
    title: "EB27",
    subtitle: "Edouard Wilfrid Buquet",
    description: `Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery.

Research conducted in the 1970s revealed that he designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium, and varnished wood.

[Are.na block](https://www.are.na/block/12759029)`,
  },
];

const Projects = ({ componentToShow }) => {
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Projects
      </h1>
      <Separator className="mt-1 bg-zinc-700 w-full" />
      <div className="mt-2 p-1 flex w-full gap-2 flex-row flex-wrap mx-auto">
        {projects.map((project, index) =>
          componentToShow ? (
            <ProjectCardMobile key={index} {...project} />
          ) : (
            <ProjectCard key={index} {...project} />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
