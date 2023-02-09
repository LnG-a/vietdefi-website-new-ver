import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { useTranslation } from 'react-i18next';
import { HomePage } from './pages/HomePage/Loadable';
import About from './pages/About';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Recruit } from './pages/Recruit/Loadable';
import { Product } from './pages/Product';
export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        // titleTemplate="%s - VietDefi"
        titleTemplate="VIETDEFI"
        defaultTitle="VIETDEFI COMPANY WEBSITE"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="VIETDEFI COMPANY WEBSITE" />
      </Helmet>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/about'} component={About} />
        <Route path={'/recruit'} component={Recruit} />
        <Route path={'/product'} component={Product} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
