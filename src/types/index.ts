export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  level: "Başlangıç" | "Orta" | "İleri";
  color: string;
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Theme = "light" | "dark";
