import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink?: string; // Optional prop for the GitHub link
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Conditionally render the button */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-[#2A0E61] hover:bg-[#1a0846] rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

