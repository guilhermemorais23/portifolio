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
      pt: "Criação e manutenção de aplicações web e mobile, no front-end e no back-end. Integração de APIs e gerenciamento de requisições. Manutenção do repositório GitHub da empresa. Desenvolvimento de um sistema em parceria, atuando na arquitetura e na implementação.",
      en: "Building and maintaining web and mobile apps, front-end and back-end. API integration and request handling. Maintenance of the company's GitHub repository. Development of a system in partnership, working on architecture and implementation.",
    },
  },
];
