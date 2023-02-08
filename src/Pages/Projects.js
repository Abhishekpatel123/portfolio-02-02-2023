import React, { useState } from 'react';
import Project from '../Components/Project';
import { projects } from '../db';
import { projectType } from '../db/project.db';

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selected, setSelected] = useState(projectType.ALL);

  const handleSort = (type) => {
    if (type === projectType.ALL) setFilteredProjects(projects);
    else
      setFilteredProjects(projects.filter((project) => project.type === type));
    setSelected(type);
  };

  return (
    <main className='container mx-auto max-width pt-10 mb-20'>
      <section>
        {/* project header */}
        <div className='flex justify-between '>
          <h1 className='text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
            Projects
          </h1>
          {/* SORT FUNCTIONALITY */}
          <div className='flex items-center '>
            {Object.keys(projectType)?.map((projectType) => (
              <div
                onClick={() => handleSort(projectType)}
                key={projectType}
                className={`${
                  projectType === selected && 'bg-slate-900  shadow-md'
                } ml-1 py-1 w-16 flex justify-center items-center cursor-pointer hover:bg-slate-900 hover:text-white rounded-lg`}
              >
                <h4
                  className={`${
                    projectType === selected && 'text-white'
                  } text-sm `}
                >
                  {projectType}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div
          // className=' divide-green-600 divide-y-4'
          //className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10"
        >
          {React.Children.toArray(
            filteredProjects.map(
              (
                {
                  title,
                  tech_usages,
                  description,
                  liveLink,
                  githubLink,
                  images,
                  status,
                  id,
                  type,
                },
                idx
              ) => (
                <>
                  <Project
                    key={`project-${id}-${idx}`}
                    title={title}
                    tech_usages={tech_usages}
                    description={description}
                    liveLink={liveLink}
                    githubLink={githubLink}
                    images={images}
                    status={status}
                    type={type}
                  />
                </>
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
