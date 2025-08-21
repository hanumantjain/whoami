import React, { useContext } from 'react'
import { RandomColorContext } from '../components/RandomColor'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const experiences = [
  {
    role: 'Student Project Assistant III',
    company: 'George Washington University',
    location: 'Washington, DC',
    date: 'February 2025 - Present',
    tasks: [
      'Architected deployment on AWS EC2, targeting 99.9% uptime and scalable domain management for 1,000+ projected daily users.',
      'Containerized the application using Docker to ensure consistent environments across development and production, targeting a 40% faster deployment cycle.',
      'Designed CI/CD pipelines with GitHub Actions to automate testing, building, and deployment workflows, with the goal of reducing release times by 50%.',
      'Developed the application stack with React.js, Node.js, Express.js, Postgres, and Tailwind CSS to create a responsive, scalable UI capable of supporting 500+ concurrent users and improving load times by 20% based on early benchmarks.'
    ],
  },
];

const Experience = () => {
  const primaryColor = useContext(RandomColorContext)
  
  return (
    <section id="hanumant jain experience" className="w-full max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
      <div data-aos="fade-up" className="flex justify-center items-center">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow max-w-xl p-10 duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center" style={{ color: primaryColor }}>{exp.role}</CardTitle>
              <CardDescription className="flex flex-col justify-between items-center text-sm">
                <span>{exp.company} — {exp.location}</span>
                <span>{exp.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 space-y-2 text-base">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
