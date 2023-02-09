/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

// import { translations } from '../../locales/translations';
import { translations } from '../../../locales/translations';
import { _t } from '../../../utils/messages';

export const messages = {
  employeeTitle: () => _t(translations.employees.title),
  employeeDescription: () => _t(translations.employees.description),
  positionNameBusinessAnalysis: () =>
    _t(translations.positionName.businessAnalysis),
  positionNameDesigner: () => _t(translations.positionName.designer),
  positionNameDevelopment: () => _t(translations.positionName.development),
  positionNameGeneralManager: () =>
    _t(translations.positionName.generalManager),
};
