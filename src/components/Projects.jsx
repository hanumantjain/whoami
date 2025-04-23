import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import projectData from '../utils/ProjectData';

const Projects = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-10">
      <h2 className="text-6xl text-center mb-20">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projectData.slice().reverse().map((project) => (
          <Card
            key={project.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-[1.02] overflow-hidden"
          >
            <CardContent className="flex flex-col items-center gap-3">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-56 object-fit mb-5"
              />
              <h1 className="text-2xl font-semibold pb-2">{project.name}</h1>
              <p className="text-sm text-muted-foreground mb-4 px-6">
                {project.description}
              </p>
              {project.tools && (
                <p className="text-sm font-medium text-gray-600 mb-4 px-6">
                  <span className="font-semibold">Tools:</span> {project.tools}
                </p>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-lg font-medium pb-6"
                >
                  View Project
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
