import { styles } from '../styles';
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from '../assets/herobg5.jpg'
const Hero = () => {
  const heroSubText = "I Develop Web applications with attractive user interfaces";
  return (
    <section
      className="relative filter grayscale w-full h-screen mx-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      ></div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto my-auto flex flex-row items-start gap-5`}
      >
        <div className="sm:flex hidden flex-col justify-center items-center mt-16 ">
          <div className="w-5 h-5 rounded-full bg-[#1a1a1a]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className='mt-24 mx-auto flex justify-center flex-col items-center'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#464646]">Raj</span>
          </h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center w-3/4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {heroSubText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(5px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
          <div className='mt-8'>
          <button onClick={() => {
                  const phoneNumber = "916386670487";
                  const message = "Hello! I'd like to connect with you.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }} className="boton-elegante">Ping Me on WhatsApp!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
