import React, { useContext, useState } from 'react'
import { RandomColorContext } from '../components/RandomColor'
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import projectData from '../utils/ProjectData'

const Projects = () => {
    const[showAll, setShowAll] = useState(false)

    const handleShowAll = () => {
        setShowAll(true)
    }

    const handleHide = () => {
      setShowAll(false)
    }    

    const projectToShow = showAll ? projectData.slice().reverse() : projectData.slice().reverse().slice(0, 4)
    const primaryColor = useContext(RandomColorContext)
  return (
    <div id='hanumant jain projects' className="w-full max-w-6xl mx-auto p-10 py-20">
      <h2 className="text-5xl text-center mb-20 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {projectToShow.map((project) => (
          <Card data-aos="fade-up"
            key={project.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-[1.02] overflow-hidden border border-neutral-800"
          >
            <CardContent className="flex flex-col items-center gap-3">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-56 object-fit mb-5"
              />
              <h1 className="text-2xl font-semibold pb-2" style={{ color: primaryColor }}>{project.name}</h1>
              <p className="text-sm text-muted-foreground mb-4 px-6">
                {project.description}
              </p>
              {project.tools && (
                <p className="text-sm font-medium text-gray-600 mb-4 px-6">
                  <span className="font-semibold" style={{ color: primaryColor }}>Tools:</span> {project.tools}
                </p>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline text-lg font-medium pb-6"
                  style={{ color: primaryColor }}
                >
                  View Project
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {projectData.length > 4 && (
        <div data-aos="fade-up"  className="flex justify-center mt-16">
          {!showAll ? (
            <button
              onClick={handleShowAll}
              className="relative text-2xl group overflow-hidden"
            >
              Show All Projects
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>
          ) : (
            <button
              onClick={handleHide}
              className="relative text-2xl group overflow-hidden"
            >
              Hide Projects
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
