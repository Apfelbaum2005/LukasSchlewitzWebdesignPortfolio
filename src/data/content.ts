// Typed re-exports of the page copy stored in src/content/*.json. Pages only ever
// import from here; the JSON files are the actual, CMS-editable source of truth.

import homeData from '../content/home.json';
import leistungenData from '../content/leistungen.json';
import ueberMichData from '../content/ueber-mich.json';
import kontaktData from '../content/kontakt.json';
import impressumData from '../content/impressum.json';
import datenschutzData from '../content/datenschutz.json';
import { CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_PHONE } from './consts';

export interface CardItem {
  title: string;
  description: string;
  iconName: string;
}

export interface SectionIntro {
  titleTextStart: string;
  titleTextHighlight: string;
  titleTextEnd: string;
}

export interface CtaContent {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface PageHeader {
  titleStart: string;
  titleHighlight: string;
  titleEnd?: string;
  subtitle: string;
}

// --- Homepage ---

export interface HeroContent {
  headlineStart: string;
  headlineHighlight: string;
  headlineEnd: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface SolutionsIntro extends SectionIntro {
  buttonLeistungenText: string;
  buttonLeistungenLink: string;
}

export interface DemoProject {
  title: string;
  description: string;
  imageAlt: string;
  buttonText: string;
  link: string;
  tags: string[];
}

export interface AboutWorkContent {
  aboutTagline: string;
  aboutHeadline: string;
  aboutText1: string;
  aboutText2: string;
  workTagline: string;
  workHeadline: string;
  demoProject: DemoProject;
}

export const homeHero: HeroContent = homeData.hero;
export const homeProblemsIntro: SectionIntro = homeData.problemsIntro;
export const problemCards: CardItem[] = homeData.problemCards;
export const homeSolutionsIntro: SolutionsIntro = homeData.solutionsIntro;
export const solutionCards: CardItem[] = homeData.solutionCards;
export const homeAboutWork: AboutWorkContent = homeData.aboutWork;
export const homeCta: CtaContent = homeData.cta;

// --- Leistungen page ---

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
  badge?: string;
}

export const leistungenHeader: PageHeader = leistungenData.header;
export const leistungenServicesIntro: SectionIntro = leistungenData.servicesIntro;
export const serviceCards: CardItem[] = leistungenData.serviceCards;
export const processTimelineHeading = leistungenData.processTimelineHeading;
export const processTimelineHighlight = leistungenData.processTimelineHighlight;
export const processTimeline: TimelineStep[] = leistungenData.processTimeline;
export const pricingHeading = leistungenData.pricingHeading;
export const pricingHighlight = leistungenData.pricingHighlight;
export const pricingPackages: PricingPackage[] = leistungenData.pricingPackages;
export const pricingDisclaimer = leistungenData.disclaimer;
export const leistungenCta: CtaContent = leistungenData.cta;

// --- Impressum page ---

export const impressumContent = impressumData;

// --- Über-mich page ---

export const ueberMichHeader: PageHeader = ueberMichData.header;
export const ueberMichIntroParagraphs: string[] = ueberMichData.introParagraphs;
export const ueberMichWhy = ueberMichData.why;
export const ueberMichDifferentiators: CardItem[] = ueberMichData.differentiators;
export const ueberMichCta: CtaContent = ueberMichData.cta;

// --- Kontakt page ---

export const kontaktHeader: PageHeader = kontaktData.header;

export const contactFormContent = {
  ...kontaktData.form,
  errorText: kontaktData.form.errorText.replace('{email}', CONTACT_EMAIL)
};

export const bookingContent = kontaktData.booking;

// --- Datenschutz page ---

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface LegalSubsection {
  heading?: string;
  blocks: LegalBlock[];
}

export interface LegalSection {
  heading: string;
  subsections: LegalSubsection[];
}

const businessContactLines = `Telefon: ${CONTACT_PHONE}<br />E-Mail: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const datenschutzContent: LegalSection[] = (datenschutzData.sections as LegalSection[]).map((section) => ({
  ...section,
  subsections: section.subsections.map((sub) => ({
    ...sub,
    blocks: sub.blocks.map((block) =>
      block.type === 'p'
        ? { ...block, text: block.text.replace('{businessAddress}', CONTACT_ADDRESS).replace('{businessContact}', businessContactLines) }
        : block
    )
  }))
}));
