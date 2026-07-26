import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

IntroBodyLg.propTypes = {
  theme: PropTypes.bool.isRequired
};

export default function IntroBodyLg({theme}){

  useLayoutEffect(()=>{
    const tl = gsap.timeline();
      tl.from(".heroVideo", {
        opacity:0,
        x:30,
        duration: 0.6,
      });
      tl.from(".myName", {
        opacity:0,
        x:-30,
        duration: 0.8,
      });
      tl.from(".myIntro" , {
        y:30,
        opacity:0,
        duration:0.5,
      })
      tl.from(".techLinks" , {
        opacity : 0,
        scale : 0.5,
        duration : 0.7,
        x : -200
      })
  }, [])
    return (
      <div className='lg:h-screen w-full'>
      <div className="mt-20 grid grid-cols-11">
      <main className='grid place-content-center col-span-6'>
        <div className = 'max-w-96 lg:text-2xl text-lg   font-semibold mb-1'>
          <span className={`ml-1 ${theme ? "text-blue-950" : "text-slate-200"}`}>
            <Typewriter 
              words={['Computer Engineer', 'Software Developer', 'Next.js Developer', 'C, C++, JAVA']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={2000}></Typewriter>
          </span>
        </div>
        <div><h1 className = {`myName text-6xl font-bold bg-gradient-to-r ${theme ? "from-blue-950 to-blue-900" : "to-purple-600 from-purple-700"} bg-clip-text text-transparent`}>Pankeet <br /> Manubarwala</h1></div> 
      </main>
      <div className = "col-span-5 grid place-content-center pt-20">
        <video autoPlay loop muted aria-label="Software developer animation" playsInline preload="auto" className={`heroVideo  imgCSS ${theme ? "brightness-105": "brightness-75"}  shadow-lg shadow-white`}>
          <source src="/vid/Sde.mp4" type="video/mp4" />
        </video>
      </div>
      </div>
       <div className={`myIntro mx-36 flex gap-5 font-serif text-xl `}>
       <a href="/files/Pankeet_Resume.pdf" 
          download
          target="_blank"
          className="aboutCSS" >
            Download Resume 
        </a>
        <a href="/files/Offer_Plus_Completion.pdf" 
           target="_blank" 
            className="aboutCSS" >
            View Experience
        </a>
       </div>
       <div className="techLinks flex justify-start mx-36 mt-9 items-center gap-4">
                    <a aria-label='Open my Github' href="https://github.com/Pankeet" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaGithub className="w-9 h-9" />
                    </a>
                    <a aria-label='Open my LinkedIn page' href="https://www.linkedin.com/in/pankeet04/" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaLinkedin className="w-9 h-9" />
                    </a>
        </div>
      </div>
    )
  }