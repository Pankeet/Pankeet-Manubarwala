import { FaReact , FaJava , FaPython , FaNodeJs , FaHtml5 , FaCss3 , FaGit , FaAngular } from "react-icons/fa";
import cpp from "/img/cpp.svg";
import next from "/img/nextjs.svg";
import mongo from "/img/mongodb.png";
import tsc from "/img/typescript.svg";
import Bot  from "/img/GptBot.png";
export default function AboutMe_lg(){
    return (
        <div className="h-screen w-full grid grid-cols-4 font-serif">
            <div className="col-span-2 flex justify-center items-center">
                <img src={Bot} alt="Software Engineer" className="size-96 shadow-xl shadow-[#631FF0] rounded-xl" />
            </div>
            <div className="col-span-2 mt-5 grid place-content-center">
                <div>
                <span className="text-2xl font-semibold text-purple-700">
                    About Me
                </span>
                </div>
                <div>
                    <div className="text-lg text-justify mr-20 mt-6 bg-gradient-to-l bg-clip-text text-transparent from-[#B253FC] to-[#551AF3] space-y-6">      
                        <p>
                            <i>Welcome to my portfolio.</i> I'm Pankeet, a Computer Science graduate passionate about building scalable full-stack applications with Next.js and Turborepo . I also enjoy solving complex problems using Data Structures and Algorithms.
                        </p>
                        <p>
                            My experience spans wireframing, front-end and back-end development, and application testing, allowing me to build software that is both intuitive and dependable. I've developed web platforms, and interactive dashboards with a strong focus on scalability, usability, and performance.
                        </p>
                        <p>
                            I'm constantly improving my problem-solving skills and exploring advanced algorithms, especially Dynamic Programming. I approach every project with attention to detail and a focus on building intuitive, high-performance user experiences.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mt-6">
                        <span className="text-2xl font-semibold text-purple-700">My TechStack</span>
                    </div>
                    <div className="flex gap-3 mt-3 flex-wrap">
                        <img src={cpp} alt="cpp" className="w-9 h-9" />
                        <FaReact className="text-4xl" />
                        <img src={tsc} className="w-9 h-9" alt="typescript" />
                        <FaGit className="text-4xl" />
                        <FaNodeJs className="text-4xl" />
                        <img src={mongo} alt="mongodb" className="w-9 h-9" />
                        <img src={next} alt="nextjs" className="w-9 h-9" />
                        <FaHtml5 className="text-4xl" />
                        <FaCss3 className="text-4xl" />
                        <FaAngular className="text-4xl" />
                        <FaJava className="text-4xl" />
                        <FaPython className="text-4xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
