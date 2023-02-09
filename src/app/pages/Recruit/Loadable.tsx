import { lazyLoad } from 'utils/loadable';

export const Recruit = lazyLoad(
  () => import('./index'),
  module => module.Recruit,
);
