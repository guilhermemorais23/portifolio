import type { L10n } from "../lib/i18n";

export interface ProjetoLink {
  /** "repo" renders as a link; "repo-private" renders as plain text; "demo" links to the local demo. */
  tipo: "repo" | "repo-private" | "demo";
  href?: string;
}

export interface Projeto {
  nome: string;
  /** Optional suffix shown after the name (already localized at render). */
  sufixo?: L10n;
  ano: string;
  descricao: L10n;
  stack: string[];
  links: ProjetoLink[];
}

export const projetos: Projeto[] = [
  {
    nome: "Gerenciador de OS",
    ano: "2025—26",
    descricao: {
      pt: "Sistema de ordens de serviço para uma empresa de manutenção. Quatro perfis (admin, técnico e portal do cliente), fluxo de antes/depois com fotos e assinatura, geração de PDF e disparo de WhatsApp e e-mail. Feito em parceria — atuei na arquitetura, na implementação e na migração do banco de MongoDB para PostgreSQL/Supabase (com migrations).",
      en: "Service-order system for a maintenance company. Four roles (admin, technician and a client portal), a before/after flow with photos and signature, PDF generation and WhatsApp and email dispatch. Built in partnership — I worked on architecture, implementation and the database migration from MongoDB to PostgreSQL/Supabase (with migrations).",
    },
    stack: ["Next.js", "React", "Node / Express", "Supabase", "PostgreSQL", "JWT"],
    links: [
      { tipo: "repo-private" },
      { tipo: "demo", href: "/demo/gerenciador-os/" },
    ],
  },
  {
    nome: "PAR.",
    sufixo: { pt: "— finanças em grupo", en: "— group finance" },
    ano: "2026",
    descricao: {
      pt: "App que eu uso no dia a dia para finanças compartilhadas, sem limite de pessoas por grupo: despesas divididas igualmente, saldo “quem deve quem”, orçamento mensal, metas e relatórios. Login pelo Google, tema claro/escuro.",
      en: "An app I use day to day for shared finances, no member limit per group: expenses split equally, a “who owes whom” balance, monthly budget, goals and reports. Google sign-in, light/dark theme.",
    },
    stack: ["React", "Vite", "TypeScript", "Node / Express", "Firebase"],
    links: [
      { tipo: "repo", href: "https://github.com/guilhermemorais23/financas-casal" },
      { tipo: "demo", href: "/demo/par/" },
    ],
  },
];
