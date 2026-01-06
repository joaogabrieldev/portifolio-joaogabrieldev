import { Projects } from "@/assets/data/projects";
import NonDxtopProjectPreview from "@/components/NonDxtopProjectPreview/NonDxtopProjectPreview";
import React from "react";
import { projects } from "@/assets/data/projects";

const showProjects = projects.length <= 3 ? projects : projects.slice(0, 2);

const MobileProjects = () => {
  return (
    <div className="mx-4 mt-10 flex flex-col items-center justify-center gap-3.5">
      {showProjects.map((item, index) => {
        return (
          <NonDxtopProjectPreview
            key={index}
            url={item.url}
            title={item.title}
            date={item.date}
            description={item.description}
            icons={item.icons}
          />
        );
      })}
    </div>
  );
};

export default MobileProjects;
