// Page copy as typed, plain data. Components only ever consume these exports,
// so swapping this file for a CMS fetch later won't require touching any page or component.

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

// --- Homepage: hero ---

export interface HeroContent {
  headlineStart: string;
  headlineHighlight: string;
  headlineEnd: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export const homeHero: HeroContent = {
  headlineStart: "Modernes Webdesign für lokale Unternehmen im",
  headlineHighlight: "Großraum Nürnberg",
  headlineEnd: "",
  subtitle: "Gewinnen Sie mehr Kunden durch einen professionellen Internetauftritt und intelligente Terminbuchungen. Ich nehme Ihnen die komplette Technik ab - unkompliziert, persönlich vor Ort und zum fairen Festpreis.",
  buttonText: "Jetzt kostenloses Erstgespräch vereinbaren",
  buttonLink: "#kontakt"
};

// --- Homepage: problems & solutions ---

export const homeProblemsIntro: SectionIntro = {
  titleTextStart: "Kennen Sie diese",
  titleTextHighlight: "Probleme",
  titleTextEnd: "in Ihrem Geschäftsalltag?"
};

export const problemCards: CardItem[] = [
  {
    title: "Ständige Anrufe?",
    description: "Das Telefon klingelt ununterbrochen wegen Terminanfragen und reißt Sie aus der Arbeit. Es fehlt ein intelligentes Online-Buchungssystem, das Ihnen die Arbeit abnimmt.",
    iconName: "Phone"
  },
  {
    title: "Unsichtbar auf Google?",
    description: "Lokale Kunden suchen online nach Ihren Dienstleistungen, landen aber bei der Konkurrenz, weil Sie nicht gefunden werden. Es mangelt an regionaler Sichtbarkeit.",
    iconName: "MapPinOff"
  },
  {
    title: "Veraltetes Design?",
    description: "Ihre aktuelle Seite sieht auf Smartphones unschön aus. 70% der Kunden surfen mobil. Ein schlechtes Design kostet Vertrauen und macht die Seite unbrauchbar.",
    iconName: "Smartphone"
  }
];

export interface SolutionsIntro extends SectionIntro {
  buttonLeistungenText: string;
  buttonLeistungenLink: string;
}

export const homeSolutionsIntro: SolutionsIntro = {
  titleTextStart: "Meine",
  titleTextHighlight: "Lösungen",
  titleTextEnd: "für Ihren digitalen Erfolg",
  buttonLeistungenText: "Alle Leistungen im Detail ansehen",
  buttonLeistungenLink: "leistungen"
};

export const solutionCards: CardItem[] = [
  {
    title: "Modernes Webdesign",
    description: "Ich erstelle Ihnen eine blitzschnelle, optisch ansprechende Website, die auf jedem Smartphone perfekt aussieht und Ihre Besucher in Kunden verwandelt.",
    iconName: "Monitor"
  },
  {
    title: "24/7 Terminbuchung",
    description: "Sparen Sie sich das Telefon-Chaos! Ich integriere ein smartes Buchungstool, mit dem Ihre Kunden rund um die Uhr selbst freie Termine eintragen können.",
    iconName: "CalendarCheck"
  },
  {
    title: "Lokale Sichtbarkeit",
    description: "Was nützt die schönste Website, wenn sie niemand findet? Ich optimiere Ihre Seite so, dass Kunden aus der Region Sie bei Google ganz oben sehen.",
    iconName: "MapPin"
  }
];

// --- Homepage: about me & featured work ---

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

export const homeAboutWork: AboutWorkContent = {
  aboutTagline: "Über mich",
  aboutHeadline: "Hallo, ich bin Lukas.",
  aboutText1: "Dank meiner Erfahrung durch vier Semester Informatikstudium sorge ich unter der Haube Ihrer neuen Website für sauberen Code, schnelle Ladezeiten und höchste Sicherheit.",
  aboutText2: "Aber noch wichtiger: Als angehender Lehrer weiß ich, wie man komplexe Dinge einfach und verständlich erklärt. Bei mir gibt es keine verwirrenden IT-Begriffe und keine versteckten Kosten. Ich nehme Sie an die Hand, erkläre Ihnen genau, was ich tue, und bin Ihr persönlicher Ansprechpartner direkt hier aus der Region.",
  workTagline: "Meine Arbeit",
  workHeadline: "Ausgewählte Projekte",
  demoProject: {
    title: "Demo-Website: Lokaler Dienstleister",
    description: "Eine voll funktionsfähige Demo-Seite mit modernem Design, extrem schnellen Ladezeiten und integrierter Terminbuchung. Perfekt optimiert für Smartphones.",
    imageAlt: "Vorschau der Demo Website",
    buttonText: "Demo-Projekt ansehen",
    link: "demo-link",
    tags: ["Astro", "Performance", "Buchungssystem"]
  }
};

// --- Homepage: closing call-to-action ---

export const homeCta: CtaContent = {
  headline: "Bereit für eine Website, die Ihnen Kunden statt Kopfschmerzen bringt?",
  description: "Lassen Sie uns ganz unverbindlich über Ihr Projekt sprechen.",
  buttonText: "Jetzt kostenloses Erstgespräch vereinbaren",
  buttonLink: "kontakt"
};

// --- Leistungen page: header & services ---

export interface PageHeader {
  titleStart: string;
  titleHighlight: string;
  subtitle: string;
}

export const leistungenHeader: PageHeader = {
  titleStart: "Transparente Leistungen für Ihren",
  titleHighlight: "digitalen Erfolg",
  subtitle: "Von der ersten Idee bis zur fertigen High-Performance-Website. Erfahren Sie genau, wie ich arbeite und welche Pakete am besten zu Ihrem Unternehmen passen."
};

export const leistungenServicesIntro: SectionIntro = {
  titleTextStart: "Meine",
  titleTextHighlight: "Kernkompetenzen",
  titleTextEnd: "im Detail"
};

export const serviceCards: CardItem[] = [
  { title: "Individuelles Webdesign", description: "Maßgeschneiderte Designs, die exakt zu Ihrer Marke passen und sich von Baukasten-Seiten abheben.", iconName: "Code" },
  { title: "Lokales SEO", description: "Werden Sie in der Region gefunden. Ich optimiere Ihre Seite für Google, damit Kunden direkt zu Ihnen kommen.", iconName: "Search" },
  { title: "Performance-Boost", description: "Ladezeiten unter einer Sekunde dank moderner Architektur. Das freut Ihre Kunden und das Google-Ranking.", iconName: "Gauge" },
  { title: "Hosting & Wartung", description: "Lehnen Sie sich zurück. Ich kümmere mich um Updates, Backups und einen sicheren Serverbetrieb.", iconName: "Server" },
  { title: "Terminbuchung", description: "Sparen Sie Zeit mit integrierten Systemen, die Ihre Kundenanfragen und Termine rund um die Uhr automatisch verwalten.", iconName: "CalendarCheck" },
  { title: "Mobile Optimierung", description: "Ihre Website sieht auf jedem Smartphone perfekt aus und bietet eine makellose Nutzererfahrung für unterwegs.", iconName: "Smartphone" }
];

// --- Leistungen page: process timeline ---

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export const processTimelineHeading = "Der Weg zu Ihrer";
export const processTimelineHighlight = "neuen Website";

export const processTimeline: TimelineStep[] = [
  { step: 1, title: "Briefing & Konzept", description: "Wir besprechen Ihre Ziele, Zielgruppe und Wünsche. Ich erstelle ein erstes Konzept und die Seitenstruktur." },
  { step: 2, title: "Design-Entwurf", description: "Sie erhalten einen visuellen Prototypen. Hier feilen wir gemeinsam an Farben, Schriften und dem Look & Feel." },
  { step: 3, title: "Programmierung", description: "Ich setze das Design in sauberen Code um. Ihre Seite wird rasend schnell und sieht auf dem Smartphone perfekt aus." },
  { step: 4, title: "Launch & Support", description: "Die Seite geht live! Auch danach stehe ich Ihnen für Änderungen, Wartung und Fragen zur Verfügung." }
];

// --- Leistungen page: pricing packages ---

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

export const pricingHeading = "Transparente";
export const pricingHighlight = "Festpreise";

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter",
    price: "990€",
    description: "Perfekt für die digitale Visitenkarte.",
    features: ["One-Pager Website", "Template-basiertes Design", "Basis Performance-Setup", "1 Monat Support"],
    ctaText: "Anfragen",
    ctaLink: "/kontakt"
  },
  {
    name: "Pro",
    price: "1.890€",
    description: "Für etablierte lokale Unternehmen.",
    features: ["Bis zu 5 Unterseiten", "Individuelles Design", "High-Speed Architektur", "Lokales SEO Basis-Setup", "3 Monate Support"],
    ctaText: "Projekt starten",
    ctaLink: "/kontakt",
    highlighted: true,
    badge: "Empfehlung"
  },
  {
    name: "Premium",
    price: "2.990€",
    description: "Das Rundum-Sorglos-Paket.",
    features: ["Unbegrenzte Seiten (CMS)", "Individuelles Design + Logo", "Erweitertes SEO & Analytics", "Terminbuchungssystem", "12 Monate Support"],
    ctaText: "Anfragen",
    ctaLink: "/kontakt"
  }
];

// --- Leistungen page: package configurator placeholder ---

export const configuratorContent = {
  windowTitle: "konfigurator.js",
  heading: "Oder stellen Sie sich Ihr Paket selbst zusammen",
  description: "Wählen Sie genau die Features aus, die Sie benötigen.",
  placeholderLabel: "[ Hier kommt die interaktive Konfigurator-Component rein ]"
};

// --- Leistungen page: closing call-to-action ---

export const leistungenCta: CtaContent = {
  headline: "Noch unsicher, welches Paket das richtige ist?",
  description: "Lassen Sie uns ganz unverbindlich über Ihr Projekt und Ihre Ziele sprechen.",
  buttonText: "Kostenloses Erstgespräch buchen",
  buttonLink: "/kontakt"
};

// --- Impressum page ---

export const impressumContent = {
  pageTitle: "Impressum",
  addressTitle: "Angaben gemäß § 5 TMG",
  contactTitle: "Kontakt",
  responsibleTitle: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
};
