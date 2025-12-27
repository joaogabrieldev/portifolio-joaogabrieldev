import { Target, Zap, Handshake } from "lucide-react";
import { JSX } from "react";

export type Characteristics = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const characteristics: Characteristics[] = [
  {
    icon: <Target />,
    title: "Detalhismo",
    description:
      "Um olhar minucioso para o visual e a experiência do usuário, garantindo interfaces polidas e intuitivas.",
  },
  {
    icon: <Zap />,
    title: "Agilidade",
    description:
      "Respeito rigoroso aos prazos estabelecidos para que o seu projeto não pare e o negócio evolua.",
  },
  {
    title: "Comprometimento",
    icon: <Handshake />,
    description:
      "Transparência total na comunicação e uma postura de verdadeira parceria do início ao fim do projeto.",
  },
];
