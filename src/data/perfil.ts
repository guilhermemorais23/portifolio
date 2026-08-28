import type { L10n } from "../lib/i18n";

export const perfil = {
  nome: "Guilherme Morais",
  titulo: {
    pt: "Guilherme Morais | Desenvolvedor Web",
    en: "Guilherme Morais | Web Developer",
  } satisfies L10n,
  descricao: {
    pt: "Desenvolvedor full-stack (PJ) em João Pessoa. Aplicações web e mobile de ponta a ponta com TypeScript, React, Next.js e Node.",
    en: "Full-stack developer (contractor) in João Pessoa, Brazil. End-to-end web and mobile apps with TypeScript, React, Next.js and Node.",
  } satisfies L10n,
  sobre: {
    pt: [
      "Desenvolvedor web com 3 anos de experiência como freelancer PJ, criando aplicações web e mobile do front-end ao back-end. Trabalho com integração de APIs, autenticação com JWT e Firebase Auth, modelagem de dados e SQL em PostgreSQL — incluindo escrever migrations e conduzir uma migração de MongoDB para PostgreSQL/Supabase.",
      "Nos projetos mais recentes uso principalmente TypeScript, React e Next.js no front-end e Node/Express no back-end, com integrações de e-mail, WhatsApp, geração de PDF e um assistente com a API da Claude (SDK da Anthropic). Deploy em Render, Railway, Firebase e Cloudflare, com Docker e pipelines de CI/CD no GitHub Actions. Também desenvolvi um sistema em parceria com um colega de faculdade, atuando na arquitetura e na implementação.",
    ],
    en: [
      "Web developer with 3 years of experience as an independent contractor, building web and mobile apps from front-end to back-end. I work with API integration, JWT and Firebase authentication, data modeling and SQL on PostgreSQL — including writing migrations and running a MongoDB-to-PostgreSQL/Supabase migration.",
      "In recent projects I mainly use TypeScript, React and Next.js on the front-end and Node/Express on the back-end, with email, WhatsApp and PDF-generation integrations and an in-app assistant built on the Claude API (Anthropic SDK). Deploys on Render, Railway, Firebase and Cloudflare, with Docker and CI/CD pipelines on GitHub Actions. I also built a system in partnership with a university colleague, working on architecture and implementation.",
    ],
  },
  contato: [
    { k: "e-mail", label: "guilherme.morais23@outlook.com", href: "mailto:guilherme.morais23@outlook.com" },
    { k: "GitHub", label: "github.com/guilhermemorais23", href: "https://github.com/guilhermemorais23" },
    { k: "LinkedIn", label: "in/guilherme-morais", href: "https://www.linkedin.com/in/guilherme-morais-5b028a3aa" },
    { k: "WhatsApp", label: "(11) 97096-8721", href: "https://wa.me/5511970968721" },
  ],
};

export const stack = [
  {
    grupo: { pt: "Front-end", en: "Front-end" } satisfies L10n,
    itens: ["TypeScript / JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    grupo: { pt: "Back-end", en: "Back-end" } satisfies L10n,
    itens: ["Node.js", "Express", "APIs REST", "Python"],
  },
  {
    grupo: { pt: "Dados", en: "Data" } satisfies L10n,
    itens: ["PostgreSQL / SQL", "Migrations", "Supabase", "Firebase", "MongoDB"],
  },
  {
    grupo: { pt: "Integrações & IA", en: "Integrations & AI" } satisfies L10n,
    itens: ["Claude API (SDK Anthropic)", "Auth (JWT, Firebase)", "E-mail transacional", "WhatsApp", "Geração de PDF"],
  },
  {
    grupo: { pt: "Ferramentas & deploy", en: "Tooling & deploy" } satisfies L10n,
    itens: ["Git / GitHub", "GitHub Actions (CI/CD)", "Docker", "Render · Railway · Firebase · Cloudflare"],
  },
];
