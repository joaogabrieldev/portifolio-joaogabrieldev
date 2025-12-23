import { JSX } from "react"
import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiMysql, 
    SiMongodb, 
    SiTypescript, 
    SiReact, 
    SiBootstrap, 
    SiNodedotjs,
    SiVite,
    SiExpress,
    SiTailwindcss,
    SiNextdotjs,
    SiGit,
    SiFigma,
    SiPrisma
} from "react-icons/si"


export type Icons = {
    title: string
    node: JSX.Element  
}

export const icons: Icons[] = [
    {
        node: <SiHtml5 />,
        title: "HTML",
    },
    {
        node: <SiCss3 />,
        title: "CSS"
    },
    {
        node: <SiJavascript />,
        title: "Javascript"
    },
    {
        node: <SiMysql />,
        title: "MySQL"
    },
    {
        node: <SiMongodb />,
        title: "MongoDB"
    },
    {
        node: <SiTypescript />,
        title: "Typescript"
    },
    {
        node: <SiReact />,
        title: "React"
    },
    {
        node: <SiBootstrap />,
        title: "Bootstrap"
    },
    {
        node: <SiNodedotjs />,
        title: "NodeJS"
    },
    {
        node: <SiVite />,
        title: "Vite"
    },
    {
        node: <SiExpress />,
        title: "Express"
    },
    {
        node: <SiTailwindcss />,
        title: "TailwindCSS"
    },
    {
        node: <SiNextdotjs />,
        title: "Next"
    },
    {
        node: <SiGit />,
        title: "Git"
    },
    {
        node: <SiFigma />,
        title: "Figma"
    },
    {
        node: <SiPrisma />,
        title: "Prisma"
    }
] 