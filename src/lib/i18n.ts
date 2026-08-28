export const LANGS = ["pt", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "pt";

/** A string that has both language versions. */
export type L10n = Record<Lang, string>;

/** Pick the right language from an `L10n` value. */
export function t(value: L10n, lang: Lang): string {
  return value[lang] ?? value[DEFAULT_LANG];
}

/** Home URL for a given language (`/` for pt, `/en/` for en). */
export function homeUrl(lang: Lang, base = import.meta.env.BASE_URL): string {
  const clean = base.endsWith("/") ? base : `${base}/`;
  return lang === "pt" ? clean : `${clean}en/`;
}

/** UI strings that live outside the content data files. */
export const ui = {
  nav: {
    projects: { pt: "projetos", en: "work" },
    experience: { pt: "experiência", en: "experience" },
    stack: { pt: "stack", en: "stack" },
    contact: { pt: "contato", en: "contact" },
    switchLang: { pt: "EN", en: "PT" },
    switchLangLabel: { pt: "Switch to English", en: "Mudar para português" },
    themeLabel: { pt: "Alternar tema", en: "Toggle theme" },
  },
  hero: {
    eyebrow: { pt: "// desenvolvedor full-stack · PJ · 3 anos", en: "// full-stack developer · contractor · 3 yrs" },
    lede: {
      pt: "Construo aplicações web e mobile de ponta a ponta — do front-end à API, ao banco e ao deploy.",
      en: "I build web and mobile applications end to end — from front-end to API, database and deploy.",
    },
    ctaProjects: { pt: "Ver projetos", en: "View projects" },
    ctaContact: { pt: "Falar comigo", en: "Get in touch" },
  },
  ficha: {
    head: { pt: "ficha / spec", en: "spec sheet" },
    role: { pt: "função", en: "role" },
    roleValue: { pt: "Full-stack Web", en: "Full-stack Web" },
    experience: { pt: "experiência", en: "experience" },
    experienceValue: { pt: "3 anos (PJ)", en: "3 yrs (contract)" },
    based: { pt: "base", en: "based" },
    basedValue: { pt: "João Pessoa, PB · remoto", en: "João Pessoa, BR · remote" },
    stack: { pt: "stack", en: "stack" },
    stackValue: { pt: "React · Next · Node · Supabase", en: "React · Next · Node · Supabase" },
    status: { pt: "status", en: "status" },
    statusValue: { pt: "disponível", en: "available" },
  },
  sections: {
    about: { pt: "Sobre", en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    projects: { pt: "Projetos", en: "Selected work" },
    stack: { pt: "Stack", en: "Stack" },
    contact: { pt: "Contato", en: "Contact" },
  },
  projects: {
    note: {
      pt: "dois sistemas em uso real — como não dá pra expor dados, cada um tem uma demo navegável com dados fictícios",
      en: "two systems in real use — since real data can't be exposed, each has a navigable demo with fictional data",
    },
    repo: { pt: "repositório →", en: "repository →" },
    repoPrivate: { pt: "repositório privado", en: "private repository" },
    demo: { pt: "ver demo →", en: "view demo →" },
  },
  footer: {
    tagline: { pt: "desenhado como folha de obra", en: "drawn as a spec sheet" },
  },
} satisfies Record<string, Record<string, L10n>>;
