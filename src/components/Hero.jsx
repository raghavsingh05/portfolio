

import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row item-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient' />

        </div>

        <div>
          <h1 className={`${styles.heroHeadText } text-white`}>Hi, I'm <span className='text-[#915eff]'>Raj</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I Develop Web applications <br className='sm:block hidden'/> with attractive user interfaces

          </p>
        </div>
      </div>
          <ComputersCanvas />
          <div className='absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center'>
            <a href='#about'>
              <div className=' w-[30px] h-[53px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.dev 
                  animate = {{
                    y: [0, 15, 0]
                  }}
                  transition = {{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className ='w-8 h-2 rounded-full bg-secondary mb-1'



                  />
              </div>
            </a>

          </div>
    </section>
  )
}

export default Hero