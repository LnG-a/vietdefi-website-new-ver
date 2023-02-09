import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  //slide title
  slide1Title: () => _t(translations.slide1.title),
  slide2Title: () => _t(translations.slide2.title),
  slide3Title: () => _t(translations.slide3.title),
  //slide content
  slide1Content: () => _t(translations.slide1.content),
  slide2Content: () => _t(translations.slide2.content),
  slide3Content: () => _t(translations.slide3.content),
  // button content
  buttonTitle: () => _t(translations.buttonSeeMore.title),
};
