// Site-wide and business constants, kept in one place so future content changes
// (or a CMS hooked up later) only need to touch this file.

export const SITE_TITLE = 'Lukas Schlewitz Webdesign';
export const SITE_DESCRIPTION = 'Modernes Webdesign für lokale Unternehmen im Großraum Nürnberg.';
export const SITE_URL = 'https://webdesign.lukasschlewitz.de';

export const CONTACT_EMAIL = 'kontakt@lukasschlewitz.de';
export const CONTACT_PHONE = '+49 177 2585786';

export const BUSINESS_ADDRESS = {
  name: 'Lukas Schlewitz',
  street: 'Zur Reuthschaft 3i',
  postalCode: '91126',
  city: 'Rednitzhembach',
  country: 'DE',
};

export const CONTACT_ADDRESS = `${BUSINESS_ADDRESS.name}<br/>${BUSINESS_ADDRESS.street}<br/>${BUSINESS_ADDRESS.postalCode} ${BUSINESS_ADDRESS.city}`;

export const SERVICE_AREAS = ['Rednitzhembach', 'Nürnberg', 'Erlangen', 'Roth'];
