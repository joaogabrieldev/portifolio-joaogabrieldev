import { Projects } from "@/assets/data/projects";
import NonDxtopProjectPreview from "@/components/NonDxtopProjectPreview/NonDxtopProjectPreview";
import React from "react";
import { projects } from "@/assets/data/projects";

const MobileProjects = () => {
  return (
    <div>
      {projects.map((item, index) => {
        return (
          <NonDxtopProjectPreview
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
