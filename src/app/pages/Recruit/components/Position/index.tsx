import './index.css';
import { useTranslation } from 'react-i18next';
import { messages } from './message';
import Icon1 from './assets/Icon1.svg';
import Icon2 from './assets/Icon2.svg';
import Icon3 from './assets/Icon3.svg';
import Icon4 from './assets/Icon4.svg';
import Icon5 from './assets/Icon5.svg';
import Icon6 from './assets/Icon6.svg';

const Recruit = (props: any) => {
  const { t } = useTranslation();
  const setStateId = props.setStateId;
  const stateId = props.stateId;
  const handleOnCLick = event => {
    const id = event.target.getAttribute('id');
    setStateId(id);
  };

  return (
    <div>
      {(stateId !== '0' && <div></div>) ||
        (stateId === '0' && (
          <div className="position_container">
            <div className="position_content">
              <div className="position_content_title">
                <h1>{t(messages.positionTitle())}</h1>
              </div>
              <div className="position_option">
                <div className="position_card" id="1" onClick={handleOnCLick}>
                  <img src={Icon1} alt="" id="1" onClick={handleOnCLick} />
                  <h3 id="1">Project Manager</h3>
                </div>
                <div className="position_card" id="2" onClick={handleOnCLick}>
                  <img src={Icon2} alt="" id="2" onClick={handleOnCLick} />
                  <h3 id="2">Business Analyst</h3>
                </div>
              </div>
              <div className="position_option">
                <div className="position_card" id="3" onClick={handleOnCLick}>
                  <img src={Icon3} alt="" id="3" onClick={handleOnCLick} />
                  <h3 id="3">Quality Control (Test)</h3>
                </div>
                <div className="position_card" id="4" onClick={handleOnCLick}>
                  <img src={Icon4} alt="" id="4" onClick={handleOnCLick} />
                  <h3 id="4">2D/3D Artist</h3>
                </div>
              </div>
              <div className="position_option">
                <div className="position_card" id="5" onClick={handleOnCLick}>
                  <img src={Icon5} alt="" id="5" onClick={handleOnCLick} />
                  <h3 id="5">UI/UX Designer</h3>
                </div>
                <div className="position_card" id="6" onClick={handleOnCLick}>
                  <img src={Icon6} alt="" id="6" onClick={handleOnCLick} />
                  <h3 id="6">Developer</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recruit;
