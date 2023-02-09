import { useTranslation } from 'react-i18next';
import { messageStory } from '../../message';
import './quote.css';

const Quote = () => {
  const { t } = useTranslation();

  return (
    <div className="quote-container">
      <div className="quote-background">
        <div className="quote-background-override">
          <div className="quote-content">{t(messageStory.quote())}</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
