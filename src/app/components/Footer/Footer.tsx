import { useTranslation as UseTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import { messages } from './messages';
import { Button } from '../Button';

export default function Footer() {
  const { t } = UseTranslation();

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="foot_image-company"></div>
        <div className="footer-link-wrapper-4">
          <div className="footer-link-wrapper-2">
            <div className="footer-link-items office">
              <h3>{t(messages.footerOffice())}</h3>
              <p>{t(messages.footerAddress())}</p>
              <p>{t(messages.footerPhoneNumber())}</p>
              <p
                className="cursor-pointer"
                onClick={() =>
                  ((window as any).location = 'mailto:borostudio2018@gmail.com')
                }
              >
                {t(messages.footerEmail())}
              </p>
            </div>
            <div className="footer-link-items company">
              <h3>{t(messages.footerOfCompany())}</h3>
              <Link to="/about">{t(messages.footerAboutUs())}</Link>
              <Link to="/recruit">{t(messages.footerRecruit())}</Link>
            </div>
          </div>
          <div className="footer-link-wrapper-2">
            <div className="footer-link-items">
              <h3>{t(messages.footerTechnology())}</h3>
              <Link to="/">{t(messages.footerTechEducation())}</Link>
              <Link to="/">{t(messages.footerTechFinance())}</Link>
              <Link to="/">{t(messages.footerBooking())}</Link>
            </div>
            <div className="footer-link-items input-areas">
              <h3>{t(messages.footerSignup())}</h3>
              <form>
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <Button className="default">Subscribe</Button>
              </form>
              <div className="foot-signup_image">
                <img
                  src={require('../../assets/map.png')}
                  alt="Failed loading"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
