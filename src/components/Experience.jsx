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
      'Developing a responsive front-end for LaborLedger using React, HTML, CSS, and JavaScript, improving user accessibility by 30%.',
      'Integrated 10+ smart contract functions to enhance blockchain-based work agreements.',
      'Collaborating with a team of 4+ researchers on documentation, testing, and compliance monitoring.',
    ],
  },
];

const Experience = () => {
  const primaryColor = useContext(RandomColorContext)
  
  return (
    <section id="hanumant jain experience" className="w-full max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>
      <div className="flex justify-center items-center">
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
