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
      "Desenvolvedor web com 2 anos de experiência como freelancer PJ, criando aplicações web e mobile do front-end ao back-end. Trabalho com integração de APIs, autenticação com JWT, modelagem de dados e políticas de acesso por perfil no Supabase, e versionamento com Git e GitHub.",
      "Nos projetos mais recentes trabalho principalmente com TypeScript, React e Next.js no front-end e Node/Express no back-end, com deploy em Render, Railway e Firebase e pipelines de CI/CD no GitHub Actions. Também desenvolvi um sistema em parceria com um colega de faculdade, contribuindo na arquitetura e na implementação.",
    ],
    en: [
      "Web developer with 2 years of experience as an independent contractor, building web and mobile apps from front-end to back-end. I work with API integration, JWT authentication, data modeling and role-based access policies on Supabase, and version control with Git and GitHub.",
      "In my recent projects I work mainly with TypeScript, React and Next.js on the front-end and Node/Express on the back-end, deploying on Render, Railway and Firebase with CI/CD pipelines on GitHub Actions. I also built a system together with a university colleague, contributing to its architecture and implementation.",
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
    itens: ["Node.js", "Express", "APIs REST", "JWT"],
  },
  {
    grupo: { pt: "Dados", en: "Data" } satisfies L10n,
    itens: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    grupo: { pt: "Ferramentas & deploy", en: "Tooling & deploy" } satisfies L10n,
    itens: ["Git / GitHub", "GitHub Actions (CI/CD)", "Docker", "Render · Railway · Firebase"],
  },
];
