import { FaReact , FaJava , FaPython , FaNodeJs , FaHtml5 , FaCss3 , FaGit , FaAngular } from "react-icons/fa";
import cpp from "/img/cpp.svg";
import next from "/img/nextjs.svg";
import mongo from "/img/mongodb.png";
import tsc from "/img/typescript.svg";
import Bot  from "/img/GptBot.png";

export default function AboutMeSm(){
    return (
        <main className="w-full mt-10 mb-10">
            <div>
            <span className="text-2xl text-purple-700 mx-12">
                <b>About Me :-</b>
            </span>
            </div>

            <div className="grid grid-cols-3">
                    <div className="col-span-1 flex justify-center items-center mt-10 mx-2">
                        <img src={Bot} alt="Software Engineer" className="size-28 shadow-xl shadow-[#631FF0] rounded-xl" />
                    </div>
                    <div className="col-span-2 flex justify-center items-center mt-7">
                    <div className="text-sm font-sans text-justify mx-7 bg-gradient-to-l bg-clip-text text-transparent from-[#B253FC] to-[#551AF3] space-y-4">      
                        <p>
                           <i>Welcome to my portfolio.</i> I'm Pankeet, a Software Development Engineer, System Designer, and 
                           Full Stack Developer. I specialize in Next.js and turborepo, enabling seamless cross-platform web-app development. I have a strong hold on Data Structures and Algorithms.
                           My long-term ambition is to master advanced algorithms
                        </p> 
                        <p>
                            <b><i>Education :-</i></b>
                        </p>
                        <p>
                            Graduate in Bachelor of Technology in Computer Science and Engineering with specialization in IOT <br />
                            G H Patel College of Engineering and Technology under CVM university <br />
                            <b>2022 - 2026 | CGPA :- 9.26</b>
                        </p>
                    </div>
                    </div>
            </div>
            <div className="flex justify-start mx-12 items-center text-purple-700 text-2xl my-6">
                <b>My TechStack</b>
            </div>
            <div className="flex gap-3 m-5 flex-wrap break-words">
               <img src={cpp} alt="cpp" className="w-9 h-9" />
                <FaReact className="text-4xl"/>
                <img src={tsc} className="w-9 h-9" alt="typescript" />
                <FaGit  className="text-4xl" />
                <FaNodeJs className="text-4xl"/>
                <img src={mongo} alt="mongodb" className="w-9 h-9" />
                <img src={next} alt="nextjs" className="w-9 h-9" />
                <FaHtml5 className="text-4xl" />
                <FaCss3  className="text-4xl" />
                <FaAngular  className="text-4xl" />
                <FaJava className="text-4xl"/>
                <FaPython className="text-4xl"/>
            </div>
        </main>
    )
}
