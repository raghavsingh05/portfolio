import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, proprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  hideGithubLink,
}) => {
  return (
    <motion.div
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px]">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={1500}
        glareEnable={false}
        className="bg-tertiary p-5 rounded-2xl shadow-lg"
        style={{ opacity: 1 }}
      >
        <div className="relative w-full h-[230px]">
          <a href={live_link} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover cursor-pointer rounded-2xl"
            />
            {!hideGithubLink && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </a>
        </div>
        <div className={`mt-5 ${hideGithubLink ? "text-center" : ""}`}>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {!hideGithubLink && (
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          )}
        </div>
        {!hideGithubLink && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  
  return (
    
    <section className="relative " >
      <div>
        <motion.div 
        // variants={textVariant()}
        >
          <p className={`${styles.sectionSubText} text-center`} id="projects">My work</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Personal Projects.</h2>
        </motion.div>
        <div className="w-full flex justify-center">
          <motion.p
            // variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
          >
            These projects highlight my skills and real-world experience, with brief
            descriptions, code links, and live demos, showcasing my problem-solving, tech
            expertise, and project management.
          </motion.p>
        </div>
        <div className="mt-16 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <div>
        <motion.div 
        // variants={textVariant()}
        >
          <h2 className={`${styles.sectionHeadText} text-center pt-16`}>Professional Projects</h2>
        </motion.div>
        <div className="w-full flex justify-center">
          <motion.p
            // variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
          >
            Explore my professional work crafted for real-world users. Each project
            showcases live links to solutions in production, reflecting my expertise in
            delivering impactful and user-centric results.
          </motion.p>
        </div>
        <div className="mt-16 flex flex-wrap gap-7 justify-center">
          {proprojects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} hideGithubLink />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
