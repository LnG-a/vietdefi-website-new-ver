/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

// import { translations } from '../../locales/translations';
import { translations } from '../../../locales/translations';
import { _t } from '../../../utils/messages';

export const messages = {
  footerOffice: () => _t(translations.footer.office),
  footerAddress: () => _t(translations.footer.address),
  footerPhoneNumber: () => _t(translations.footer.phoneNumber),
  footerEmail: () => _t(translations.footer.email),
  footerOfCompany: () => _t(translations.footer.company),
  footerAboutUs: () => _t(translations.footer.aboutUs),
  footerProduct: () => _t(translations.footer.product),
  footerService: () => _t(translations.footer.Service),
  footerCulture: () => _t(translations.footer.culture),
  footerRecruit: () => _t(translations.footer.recruit),
  footerTechnology: () => _t(translations.footer.technology),
  footerTechEducation: () => _t(translations.footer.techEducation),
  footerTechFinance: () => _t(translations.footer.finance),
  footerBooking: () => _t(translations.footer.booking),
  footerSignup: () => _t(translations.footer.signup),
  footerContact: () => _t(translations.footer.contact),
  footerSubscribe: () => _t(translations.footer.subscribe),
};
