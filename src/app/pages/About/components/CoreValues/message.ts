import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.aboutPage.coreValues.title),
  human_title: () => _t(translations.aboutPage.coreValues.human.title),
  human_subtitle: () => _t(translations.aboutPage.coreValues.human.subtitle),
  human_description: () =>
    _t(translations.aboutPage.coreValues.human.description),
  product_title: () => _t(translations.aboutPage.coreValues.product.title),
  product_subtitle: () =>
    _t(translations.aboutPage.coreValues.product.subtitle),
  product_description: () =>
    _t(translations.aboutPage.coreValues.product.description),
};
