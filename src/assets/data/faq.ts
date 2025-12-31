import type { FAQ, Question } from "./types/assets.types";

export interface IQuestionBlockProps {
  title: string
  questions: Question[]
  index: number
}

export const questions: FAQ[] = [
  {
    title: "Prazos e Processos",
    questions: [
      {
        questionID: 1,
        questionTitle: "Qual é o prazo de entrega do meu site?",
        questionBody:
          "O prazo varia conforme a complexidade. Para o Pacote One Page, a entrega média é de 5 a 7 dias úteis após o recebimento do conteúdo. Para o Pacote Standard, o prazo é de 10 a 15 dias úteis. Projetos personalizados têm cronogramas definidos sob medida.",
      },
      {
        questionID: 2,
        questionTitle:
          "Quais materiais são necessários para iniciar o projeto?",
        questionBody:
          "Para iniciarmos o projeto, precisaremos do seu logotipo em alta resolução e, fundamentalmente, de fotos profissionais da sua empresa, produtos e/ou perfil pessoal, e de textos descritivos sobre o seu negócio. Não recomendamos o uso de bancos de imagem, pois materiais autênticos aumentam a percepção de valor da marca e geram muito mais confiança no seu cliente. Caso ainda não tenha um fotógrafo, podemos indicar parceiros de confiança.",
      },
      {
        questionID: 3,
        questionTitle: "Existe um formato padrão para o envio dos textos?",
        questionBody:
          "Para poupar seu tempo, nós fornecemos um Guia de Conteúdo exclusivo. É um arquivo estruturado e simples para você preencher exatamente com o que precisamos para cada seção, sem complicações.",
      },
    ],
  },
  {
    title: "Custos e Pagamento",
    questions: [
      {
        questionID: 4,
        questionTitle: "O pagamento é mensal ou único?",
        questionBody:
          "O valor do desenvolvimento do site é único. Você paga pelo projeto e o site é seu. Não cobramos mensalidade pelo desenvolvimento. As únicas taxas recorrentes que você terá (externas a nós) são o registro do domínio (seu endereço .com.br) e a hospedagem anual, lembrando que no plano personalizado o valor do domínio está incluso no valor do pacote",
      },
      {
        questionID: 5,
        questionTitle: "Vocês incluem o domínio e a hospedagem?",
        questionBody:
          "A hospedagem é contratada diretamente por você em seu nome (para garantir que a propriedade do site seja 100% sua), mas fique tranquilo: nós te guiamos para escolher a melhor opção do mercado sem nenhum custo adicional. Quanto ao domínio (seu endereço .com.br), ele é contratado à parte nos pacotes iniciais. Porém, como bônus exclusivo, no Pacote Personalizado nós presenteamos você com 1 ano de domínio totalmente grátis.",
      },
    ],
  },
  {
    title: "Técnico e Manutenção",
    questions: [
      {
        questionID: 6,
        questionTitle: "O site vai funcionar no celular?",
        questionBody:
          "Sim, absolutamente. Todos os nossos projetos são desenvolvidos com a metodologia Mobile First. Isso significa que seu site se adaptará perfeitamente a qualquer tamanho de tela, seja computador, tablet ou smartphone, garantindo uma navegação fluida para o usuário.",
      },
      {
        questionID: 7,
        questionTitle: "Meu site vai aparecer no Google?",
        questionBody:
          "Sim. Todos os nossos sites são entregues com SEO Técnico configurado. Isso inclui a estrutura correta de cabeçalhos, otimização de velocidade, sitemap e indexação no Google Search Console, facilitando que sua empresa seja encontrada nas pesquisas.",
      },
      {
        questionID: 8,
        questionTitle: "O que é SEO?",
        questionBody:
          "SEO (Otimização para Mecanismos de Busca) é um conjunto de técnicas que aplicamos na estrutura do seu site para que o Google 'goste' dele. O objetivo é fazer com que sua empresa apareça nas melhores posições quando alguém pesquisar pelo seu serviço na internet, ajudando você a receber mais visitas e clientes de forma orgânica (gratuita), sem depender apenas de anúncios pagos.",
      },
      {
        questionID: 9,
        questionTitle: "O que é um site 'One Page'?",
        questionBody:
          "Também conhecida como SPA (Single Page Application), A estrutura 'One Page' é uma estrutura moderna onde todo o conteúdo (Sobre, Serviços, Contato) é apresentado em uma única página longa, com rolagem suave. É a tendência atual para quem busca objetividade, carregamento rápido e alta conversão, especialmente em dispositivos móveis.",
      },
    ],
  },
];
