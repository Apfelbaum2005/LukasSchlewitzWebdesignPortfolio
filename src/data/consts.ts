// Site-wide and business constants. The editable values live in the CMS-managed
// src/content/settings.json; this file re-exports them plus a few technical
// constants (URLs, Cal.com IDs) that aren't meant to be casually edited.

import settings from '../content/settings.json';

export const SITE_TITLE = settings.siteTitle;
export const SITE_DESCRIPTION = settings.siteDescription;
export const SITE_URL = 'https://webdesign.lukasschlewitz.de';

export const CONTACT_EMAIL = settings.contactEmail;
export const CONTACT_PHONE = settings.contactPhone;

export const BUSINESS_ADDRESS = settings.businessAddress;

export const CONTACT_ADDRESS = `${BUSINESS_ADDRESS.name}<br/>${BUSINESS_ADDRESS.street}<br/>${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.city}`;

export const SERVICE_AREAS = settings.serviceAreas;

// Cal.com booking widget (EU-hosted instance), used for the inline embed on the Kontakt page
export const CAL_ORIGIN = 'https://app.cal.eu';
export const CAL_EMBED_JS = 'https://app.cal.eu/embed/embed.js';
export const CAL_NAMESPACE = 'erstgespraech';
export const CAL_LINK = 'lukasschlewitzwebdesign/erstgespraech';
