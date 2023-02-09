import './index.css';
import { useTranslation } from 'react-i18next';
import { messages } from './message';

const Designer = () => {
  const { t } = useTranslation();
  return (
    <div className="artist_container">
      <div className="artist_content">
        <h1>UI/UX Designer</h1>
        <h2>{t(messages.jdTitle())}</h2>
        <ul>
          <li>{t(messages.jdLine_1())}</li>
          <li>{t(messages.jdLine_2())}</li>
        </ul>
        <h2>{t(messages.requireTitle())}</h2>
        <ul>
          <li>{t(messages.requireLine_1())}</li>
          <li>{t(messages.requireLine_2())}</li>
          <li>{t(messages.requireLine_3())}</li>
        </ul>
        <h2>{t(messages.interestTitle())}</h2>
        <ul>
          <li>{t(messages.interestLine_1())}</li>
          <li>{t(messages.interestLine_2())}</li>
          <li>{t(messages.interestLine_3())}</li>
          <li>{t(messages.interestLine_4())}</li>
          <li>{t(messages.interestLine_5())}</li>
        </ul>
        <h2>{t(messages.applyTitle())}</h2>
        <ul>
          <li>
            {t(messages.applyLine_1())}
            <a href="mailto:borostudio2018@gmail.com">
              borostudio2018@gmail.com
            </a>
          </li>
          <li>{t(messages.applyLine_2())}</li>
          <li>{t(messages.applyLine_3())}</li>
        </ul>
        <h2>{t(messages.locationTitle())}</h2>
        <ul>
          <li>{t(messages.locationAddress())}</li>
        </ul>
      </div>
    </div>
  );
};

export default Designer;
