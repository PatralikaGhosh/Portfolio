import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/shell_bg.jpg"
          title="_MyShell"
          description="Built a personal shell in C++ that supports various Unix commands and features."
          githubLink = "https://github.com/PatralikaGhosh/_myShell/tree/main"
        />
        <ProjectCard
          src="/portfolio_bg.png"
          title="Portfolio Website"
          description="I made this portfolio to summarize all of my skills, certifications, projects and experience."
          githubLink = "https://github.com/PatralikaGhosh/PatralikaGhosh.github.io.git"
        />
        <ProjectCard
          src="/pos_system.png"
          title="POS System"
          description="The system offered tailored views for Customers, Managers, and Cashiers, made using a Django backend, React.js frontend, and a PostgreSQL database."
        />
        <ProjectCard
          src="/docAssist.png"
          title="DocAssist"
          description="📂📑docAssist is an AI-powered assistant to help users navigate and understand complex documentation easily"
          githubLink = "https://github.com/PatralikaGhosh/doc_assist_p"
        />
        <ProjectCard
          src="/bandit_typer.png"
          title="Online Keyboard"
          description="🦝⌨️ An app to help users with a limited range of motion get the best typing experience!"
          githubLink = "https://github.com/peicasey/bandit-typer"
        />
      </div>
    </div>
  );
};

export default Projects;