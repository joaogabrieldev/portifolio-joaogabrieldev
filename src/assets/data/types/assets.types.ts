//? Plans
export type Beneficts = {
  title: string;
};

export type Plans = {
  title: string;
  price: number;
  originalPrice?: number | null;
  emphasis: boolean;
  description: string;
  recommendation: string;
  beneficts: Beneficts[];
};

//? FAQ
export type Question = {
  questionID: number;
  questionTitle: string;
  questionBody: string;
};

export type FAQ = {
  title: string;
  questions: Question[];
};
