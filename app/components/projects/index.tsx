import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import Image from 'next/image';
import { projects } from './projectDetails';


const ProjectSection = () => {
     const container = useRef(null);
     const { scrollYProgress } = useScroll({
          target: container,
          offset: ['start start', 'end end'],
     });

     return (
          <ReactLenis root>
               <main id='project' className="w-full h-full bg-[#0E1016]" ref={container}>
                    <section className=" flex items-center justify-center relative">

                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
                              Featured Projects
                         </h1>
                    </section>

                    <section className="relative ">
                         {projects.map((project, i) => (
                              <Card
                                   key={project.id}
                                   project={project}
                                   progress={scrollYProgress}
                                   index={i}
                                   totalProjects={projects.length}
                              />
                         ))}
                    </section>
               </main>
          </ReactLenis>
     );
};

const Card = ({ project, progress, index, totalProjects }) => {
     const container = useRef(null);
     const { scrollYProgress: elementProgress } = useScroll({
          target: container,
          offset: ['start end', 'start start'],
     });

     const scale = useTransform(
          progress,
          [index * 0.25, 1],
          [1, 1 - (totalProjects - index) * 0.05]
     );

     const imageScale = useTransform(elementProgress, [0, 1], [1.5, 1]);
     const y = useTransform(elementProgress, [0, 1], [100, 0]);
     const opacity = useTransform(elementProgress, [0, 0.5], [0, 1]);

     return (
          <div
               ref={container}
               className="min-h-screen flex items-center justify-center sticky top-0 px-4 md:px-8 "
          >
               <motion.div
                    style={{
                         scale,
                         top: `calc(-5vh + ${index * 25}px)`,
                    }}
                    className="bg-white/5 backdrop-blur-2xl relative w-full max-w-5xl rounded-2xl p-4 md:p-8 origin-top"
               >
                    <motion.div
                         style={{ y, opacity }}
                         className="grid md:grid-cols-2 gap-6 md:gap-12"
                    >
                         <div className="space-y-4 md:space-y-6">
                              <h2 className="text-2xl md:text-3xl font-bold text-white">
                                   {project.name}
                              </h2>
                              <p className="text-gray-400 text-sm md:text-base">
                                   {project.description}
                              </p>

                              <div className="flex flex-wrap gap-3">
                                   {project.technologies.map((Icon, idx) => (
                                        <div
                                             key={idx}
                                             className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                                             title={project.techNames[idx]}
                                        >
                                             <Icon className="w-5 h-5 text-white" />
                                        </div>
                                   ))}
                              </div>

                              <motion.a
                                   href={project.demo}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors px-4 py-2 "
                                   whileHover={{ scale: 1.05 }}
                                   whileTap={{ scale: 0.95 }}
                              >
                                   View Project
                                   <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                   </svg>
                              </motion.a>
                         </div>

                         <motion.div
                              className="relative h-48 md:h-72 rounded-xl overflow-hidden"
                              style={{ scale: imageScale }}
                         >
                              <Image
                                   src={project.image}
                                   alt={project.name}
                                   fill
                                   className="object-contain"
                              />
                              {project.available && (
                                   <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        Available
                                   </div>
                              )}
                         </motion.div>
                    </motion.div>
               </motion.div>
          </div>
     );
};

export default ProjectSection;