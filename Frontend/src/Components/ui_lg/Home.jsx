import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function IntroBody_lg({theme}){

  useLayoutEffect(()=>{
    const tl = gsap.timeline();
      tl.from("video", {
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
        <Helmet>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="A comprehensive presentation of my professional identity, technical skill set, and practical experience" />
          <meta property="og:title" content="Pankeet | Software Development Engineer" />
          <meta property="og:description" content="Get to know me , my side hustles, and my TechStack" />
          <meta property="og:image" content="https://pankeet-manubarwala.vercel.app/img/Logo.png" />
          <link rel="canonical" href="https://pankeet-manubarwala.vercel.app/" />
        </Helmet>
      <div className="mt-20 grid grid-cols-11">
      <div className='grid place-content-center col-span-6'>
        <div className = 'max-w-96 lg:text-2xl text-lg   font-semibold mb-1'>
          <span className={`ml-1 ${theme ? "text-blue-950" : "text-slate-200"}`}>
            <Typewriter 
              words={['C++ Programmer' , 'Software Developer', 'Computer Engineer' , 'Full Stack Developer' ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={2000}></Typewriter>
          </span>
        </div>
      <div className = {`myName text-6xl font-bold bg-gradient-to-r ${theme ? "from-blue-950 to-blue-900" : "to-purple-600 from-purple-700"} bg-clip-text text-transparent`}><b>Pankeet</b></div> 
      <div className = {`myName text-6xl  font-bold bg-gradient-to-r ${theme ? "from-blue-950 to-blue-900" : "to-purple-600 from-purple-700"} bg-clip-text text-transparent`}><b>Manubarwala</b></div>
      </div>
      <div className = "col-span-5 grid place-content-center">
        <video autoPlay loop muted alt="SDE" className={`imgCSS ${theme ? "brightness-105": "brightness-75"}  shadow-lg shadow-white`}>
          <source src="/vid/Sde.mp4"></source>
        </video>
      </div>
      </div>
       <div className={`myIntro mx-36 mt-3 flex gap-5 font-serif text-xl `}>
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
       <div className="techLinks flex justify-start lg:mx-36 lg:mt-10 items-center gap-3 mx-16 mt-7">
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