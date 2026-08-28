import type { L10n } from "../lib/i18n";

export interface Experiencia {
  periodo: L10n;
  detalhe: L10n;
  cargo: L10n;
  texto: L10n;
}

export const experiencia: Experiencia[] = [
  {
    periodo: { pt: "2024 — hoje", en: "2024 — present" },
    detalhe: { pt: "Payflex · PJ", en: "Payflex · contract" },
    cargo: {
      pt: "Desenvolvedor Web (PJ) — Payflex",
      en: "Web Developer (contract) — Payflex",
    },
    texto: {
      pt: "Criação e manutenção de aplicações web e mobile, no front-end e no back-end. Integração de APIs, autenticação e gerenciamento de requisições. Modelagem de dados e SQL em PostgreSQL, com migrations e uma migração de MongoDB para PostgreSQL/Supabase. Integrações de e-mail, WhatsApp, geração de PDF e um assistente com a API da Claude. Manutenção do repositório GitHub da empresa e pipelines de CI/CD.",
      en: "Building and maintaining web and mobile apps, front-end and back-end. API integration, authentication and request handling. Data modeling and SQL on PostgreSQL, with migrations and a MongoDB-to-PostgreSQL/Supabase migration. Email, WhatsApp and PDF-generation integrations, plus an assistant built on the Claude API. Maintenance of the company's GitHub repository and CI/CD pipelines.",
    },
  },
];
