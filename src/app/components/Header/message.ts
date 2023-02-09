import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  homeTitle: () => _t(translations.home.title),
  aboutTitle: () => _t(translations.about.title),
  productTitle: () => _t(translations.product.title),
  recruitTitle: () => _t(translations.recruit.title),
};
