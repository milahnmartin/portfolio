import { useState } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { FiExternalLink } from 'react-icons/fi';
import { RiGithubLine } from 'react-icons/ri';
interface ProjectData {
  title: string;
  techstack: string[];
  link?: string;
  slogan: string;
  github?: string;
}

const ProjectLabel = ({
  title,
  techstack,
  link,
  slogan,
  github,
}: ProjectData) => {
  const [view, setView] = useState<boolean>(false);
  const handleGithub = () => {
    window.open(github, '_blank');
  };
  const handlePreview = () => {
    window.open(link, '_blank');
  };
  return (
    <div className="w-[400px] h-[400px] relative flex flex-col items-center justify-center bg-navy2 rounded-md p-4 group cursor-pointer project-view">
      <div className="w-full h-fit flex items-center justify-around">
        <div className="w-1/2 h-full flex items-center justify-start">
          <CiFolderOn
            className="w-1/2 flex cursor-pointer"
            fill="#64ffda"
            size={50}
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-end space-x-4">
          {github && (
            <RiGithubLine
              title="View Source Code"
              onClick={handleGithub}
              className="text-text hover:text-secondary animation-all duration-500 cursor-pointer"
              size={25}
            />
          )}

          {link && (
            <FiExternalLink
              title="Live Preview"
              onClick={handlePreview}
              className=" text-text hover:text-secondary animation-all duration-500 cursor-pointer"
              size={25}
            />
          )}
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-around text-left p-2 ">
        <h1 className="text-text text-2xl group-hover:text-secondary animation-all duration-500">
          {title}
        </h1>
        <h2 className="text-text/60 text-base h-fit">{slogan}</h2>
        <ul className="flex flex-wrap content-center justify-start w-full h-fit gap-2">
          {techstack.map((tech: string, i: number) => {
            return (
              <li className="text-text/50 text-sm" key={i}>
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLabel;
