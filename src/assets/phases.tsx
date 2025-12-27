import { MessageCircle, Pencil, Code, Check } from "lucide-react"
import  { JSX }  from "react" 
  
export type Phases = {
    icon: JSX.Element
    date: string
    title: string
    description: string
}

const defaultIconStyle = { 
    width: '30px', 
    height: '30px', 
    left: 0, 
    top: 0, 
    margin: 0
}

export const phases: Phases[] = [
    {
        icon: <MessageCircle style={defaultIconStyle} />,
        date: "Fase 1",
        title: "Descoberta & Alinhamento",
        description: "Tudo começa com uma conversa. Nesta etapa, fazemos uma reunião para entender seus objetivos, seu público-alvo e as necessidades reais do projeto. Aqui definimos o escopo e o cronograma."
    },
    {
        icon: <Pencil style={defaultIconStyle} />,
        date: "Fase 2",
        title: "Estratégia & Design",
        description: "Antes de escrever qualquer código, eu planejo. Crio a estrutura visual e lógica do projeto para garantir que ele não seja apenas bonito, mas funcional e intuitivo para o seu usuário."
    },
    {
        icon: <Code style={defaultIconStyle} />,
        date: "Fase 3",
        title: "Desenvolvimento",
        description: "É aqui que a mágica acontece. Utilizo tecnologias modernas para construir seu projeto com foco em performance, segurança e responsividade."
    },
    {
        icon: <Check style={{
            width: '30px', 
            height: '30px', 
            left: 0, 
            top: 2, 
            margin: 0}} stroke="rgb(10, 255, 10)" />,
        date: "Fase 4",
        title: "Revisão & Entrega",
        description: "Nenhum projeto sai sem testes. Validamos tudo juntos, faço os ajustes finais e coloco seu projeto no ar. Além disso, te ensino a gerenciar o que for necessário."
    }
]