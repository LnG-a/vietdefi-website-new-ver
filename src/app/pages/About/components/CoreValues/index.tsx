import 'bootstrap/dist/css/bootstrap.min.css';
import './coreValues.css';
import { useTranslation } from 'react-i18next';
import { messages } from './message';
import productImage from 'app/assets/product.svg';
import humanImage from 'app/assets/human.svg';
import { useState } from 'react';

export default function CoreValues() {
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  const { t } = useTranslation();
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="core-values-title">{t(messages.title())}</div>
        <div className="core-values-subtitle">
          <div
            className={`core-values-card left ${isHoveringLeft ? 'big' : ''}`}
            onMouseEnter={() => setIsHoveringLeft(true)}
            onMouseLeave={() => setIsHoveringLeft(false)}
            onClick={() => setIsHoveringLeft(!isHoveringLeft)}
          >
            <div className={`title ${isHoveringLeft ? 'hide' : ''}`}>
              {t(messages.human_title())}
            </div>
            <img
              className={`${isHoveringLeft ? 'hide' : ''}`}
              src={humanImage}
              alt=""
            />
            <div className={`title-hidden ${isHoveringLeft ? '' : 'hide'}`}>
              {t(messages.human_subtitle())}
            </div>
            <div className={`description ${isHoveringLeft ? '' : 'hide'}`}>
              {t(messages.human_description())}
            </div>
          </div>
          <div
            className={`core-values-card right ${isHoveringRight ? 'big' : ''}`}
            onMouseEnter={() => setIsHoveringRight(true)}
            onMouseLeave={() => setIsHoveringRight(false)}
            onClick={() => setIsHoveringRight(!isHoveringRight)}
          >
            <div className={`title ${isHoveringRight ? 'hide' : ''}`}>
              {t(messages.product_title())}
            </div>
            <img
              className={`${isHoveringRight ? 'hide' : ''}`}
              src={productImage}
              alt=""
            />
            <div className={`title-hidden ${isHoveringRight ? '' : 'hide'}`}>
              {t(messages.product_subtitle())}
            </div>
            <div className={`description ${isHoveringRight ? '' : 'hide'}`}>
              {t(messages.product_description())}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
