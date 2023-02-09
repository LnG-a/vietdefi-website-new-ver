import img_1 from 'app/pages/HomePage/components/Recruit/assets/Rectangle_372.png';
import './Recruit.css';
import { useTranslation } from 'react-i18next';
import { messages } from './message';
import { Link } from 'react-router-dom';
import { Button } from 'app/components/Button';

const Recruit = () => {
  const { t } = useTranslation('translation');
  return (
    <div className="recruit_container">
      <div className="background_image">
        <div className="recruit_content">
          <div className="recruit_content_left">
            <h2>{t(messages.recruitTitle())}</h2>
            <p id="set_font">{t(messages.recruitContent())}</p>
            <ul>
              <li>Project Manager</li>
              <li>Business Analyst</li>
              <li>2D/3D Artists</li>
              <li>UI/UX Designers</li>
              <li>Quality Control (Test)</li>
              <li>Developers (Front-end, Back-end, Fullstack)</li>
            </ul>
            <Link
              to={'/recruit'}
              style={{
                textDecoration: 'none',
                outline: 'none',
              }}
            >
              <Button
                className="default"
                style={{ margin: '35px 0 0', width: 230 }}
              >
                {t(messages.buttonTitle())}
              </Button>
            </Link>
            {/* <p>
              {t(messages.recruitContact())}{' '}
              <a href="mailto:borostudio2018@gmail.com">
                borostudio2018@gmail.com
              </a>
            </p> */}
          </div>
          <div className="recruit_content_right">
            <img src={img_1} alt="recruit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
