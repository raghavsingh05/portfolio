import { useState } from 'react';
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import earth from '../assets/earth.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import Tick from '../assets/tick.svg';
import Copy from '../assets/copy.svg';
import Button from './Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('rajraghavsingh05@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 max-w-7xl mx-auto" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={grid1} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Raj Raghav</p>
              <p className="grid-subtext">
                With years of experience and a computer science, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={grid2} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build attractive and robust
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <img src={earth} alt="earth" className="w-full sm:h-[276px] h-fit object-contain filter grayscale" />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={() => {
                  const phoneNumber = "916386670487";
                  const message = "Hello! I'd like to connect with you.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              />

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src={grid3} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="copy-container flex items-center space-x-2 justify-center"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? Tick : Copy}
                  alt="copy"
                />
                <p className="lg:text-sm md:text-base font-medium text-gray_gradient text-white break-all">
                  rajraghavsingh05@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
