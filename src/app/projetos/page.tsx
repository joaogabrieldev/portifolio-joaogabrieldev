import Aurora from "@/components/ReactBits/Aurora/Aurora";
import ProjectsPageContent from "./../../widgets/ProjectsPageContent/ProjectsPageContent";

const ProjectsPage = () => {
  return (
    <div className="h-full">
      <div className="">
        <Aurora
          blend={0.65}
          colorStops={["#413b72", "#342e59", "#0d0d0d"]}
          speed={0.4}
          amplitude={8}
        />
      </div>
      <ProjectsPageContent />
    </div>
  );
};

export default ProjectsPage;
