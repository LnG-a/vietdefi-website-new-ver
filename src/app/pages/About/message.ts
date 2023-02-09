/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

// import { translations } from '../../locales/translations';
import { translations } from '../../../locales/translations';
import { _t } from '../../../utils/messages';

export const messageStory = {
  about_storyTitle: () => _t(translations.aboutPage.story.title),
  about_storyDescription: () => _t(translations.aboutPage.story.description),
  quote: () => _t(translations.aboutPage.story.quote),
};

export const messageMission = {
  about_missionTitle: () => _t(translations.aboutPage.mission.title),
  about_missionDescription: () =>
    _t(translations.aboutPage.mission.description),
};

export const messageBenefit = {
  about_benefitTitle: () => _t(translations.aboutPage.benefit.title),
  about_benefit_box1_title: () => _t(translations.aboutPage.benefit.box1.title),
  about_benefit_box1_description: () =>
    _t(translations.aboutPage.benefit.box1.description),
  about_benefit_box2_title: () => _t(translations.aboutPage.benefit.box2.title),
  about_benefit_box2_description: () =>
    _t(translations.aboutPage.benefit.box2.description),
  about_benefit_box3_title: () => _t(translations.aboutPage.benefit.box3.title),
  about_benefit_box3_description: () =>
    _t(translations.aboutPage.benefit.box3.description),
};

export const messageJoining = {
  about_joiningTitle: () => _t(translations.aboutPage.joining.title),
  about_joiningDescription: () =>
    _t(translations.aboutPage.joining.description),
  about_joiningButtonJoin: () => _t(translations.aboutPage.joining.buttonJoin),
};
