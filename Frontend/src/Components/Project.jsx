import * as motion from "motion/react-client"
import { Helmet } from "react-helmet"
export default function ScrollTriggered() {
    return (
        <div style={container}>

            <Helmet>
                <title>Pankeet Manubarwala | Full Stack Developer Projects</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Explore full-stack projects built by Pankeet Manubarwala using React, Next.js, TypeScript, WebSockets, Prisma, and modern backend systems." />
                <meta name="keywords" content="Pankeet, Pankeet Manubarwala, Full Stack Developer, React Developer, Next.js Projects, TypeScript, WebSockets, Portfolio, Software Engineer" />
                <meta name="author" content="Pankeet Manubarwala" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pankeet-manubarwala.vercel.app/projects" />
                <meta property="og:title" content="Pankeet | Full Stack Developer" />
                <meta property="og:image" content="https://pankeet-manubarwala.vercel.app/img/Logo.png" />
                <meta property="og:description" content="Real-world full-stack projects featuring modern UI, scalable backend systems, authentication, WebSockets, and collaborative applications." />
                <link rel="canonical" href="https://pankeet-manubarwala.vercel.app/projects" />
            </Helmet>

            {homepageSections.map(({content, hueA, hueB, i , href}) => (
                <Card i={i} content={content} hueA={hueA} hueB={hueB} href={href} key={i} />
            ))}
        </div>
    )
}

function Card({ content , hueA, hueB, i , href }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <a 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none"}} >
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {content}
            </motion.div>
        </motion.div>
        </a>
    )
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom : "50px"
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "var(--white)",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const homepageSections = [
    { content: <ExcalDraw />,  hueA: 250, hueB: 280  , href:"https://excal-draw.vercel.app/" },
    { content: <Socket />, hueA: 250, hueB: 280 , href:"https://socket-talk-liart.vercel.app/"},
    { content: <Neuro />, hueA: 250, hueB: 280 , href:"https://neuro-nest-eta.vercel.app/" },
    { content: <Ivy />, hueA: 250, hueB: 280  , href:"https://ivy-academy.vercel.app/"},
    { content: <Zeroh />, hueA: 250, hueB: 280 , href:"https://zerohda.vercel.app/"}
];

function Ivy(){
    return (
        <img src="/img/Ivy.png" alt="Ivy Academy:- Educational Platform" className="w-72 h-72" loading="lazy"/>
    )
}

function Zeroh(){
    return(
        <img src="/img/Zeroh.png" alt="Zeroh Trading Dashboard" className="w-72 h-72" loading="lazy"/>
    )
}

function Socket(){
    return(
        <img src="/img/Socket.png" alt="Socket Talk :- Real Time Chat Application" className="w-72 h-72" />
    )
}

function Neuro(){
    return(
        <img src="/img/Neuro.png" alt="Neuro Nest:- Second Brain Application" className="w-72 h-72" loading="lazy"/>
    )
}

function ExcalDraw(){
    return (
        <img src="/img/excal.png" alt="Excal.Draw:- Collaborative Drawing App" className="w-72 h-72" />
    )
}
