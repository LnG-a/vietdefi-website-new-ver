import './index.css';
import { useTranslation } from 'react-i18next';
import arrow_left from './assets/arrow-left.png';
import tick_available from './assets/tick-square.png';
import tick_unavailable from './assets/tick-square-unavailable.png';
import { messages } from './message';
import Artist from '../2D_Artist';
import { Button } from 'app/components/Button';
import Designer from '../Designer';
import ProjectManagement from '../Project_Management';
import BusinessAnalyst from '../Business_Analysis';
import InternDev from '../Intern_Dev';
import QualityControl from '../Quality_Control';

const Recruit = (props: any) => {
  const { t } = useTranslation();
  const setStateId = props.setStateId;
  const stateId = props.stateId;

  const form = {
    1: <ProjectManagement />,
    2: <BusinessAnalyst />,
    3: <QualityControl />,
    4: <Artist />,
    5: <Designer />,
    6: <InternDev />,
  };

  return (
    <div>
      {stateId === '0' ||
        (stateId !== '0' && (
          <div className="JD_container">
            <div className="JD_content">
              <div className="JD_content_left">
                <div className="return_button" onClick={() => setStateId('0')}>
                  <img src={arrow_left} alt="arrow-left" />
                  {t(messages.back())}
                </div>
                <div className="list_option">
                  <div
                    className="option_item"
                    onClick={() => setStateId('1')}
                    style={{
                      color: stateId === '1' ? '#fcb019' : '',
                      fontWeight: stateId === '1' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '1' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    Project Manager
                  </div>
                  <div
                    className="option_item"
                    onClick={() => setStateId('2')}
                    style={{
                      color: stateId === '2' ? '#fcb019' : '',
                      fontWeight: stateId === '2' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '2' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    Business Analyst
                  </div>
                  <div
                    className="option_item"
                    onClick={() => setStateId('3')}
                    style={{
                      color: stateId === '3' ? '#FF9501' : '',
                      fontWeight: stateId === '3' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '3' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    Quality Control (Test)
                  </div>
                  <div
                    className="option_item"
                    onClick={() => setStateId('4')}
                    style={{
                      color: stateId === '4' ? '#FF9501' : '',
                      fontWeight: stateId === '4' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '4' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    2D/3D Artist
                  </div>
                  <div
                    className="option_item"
                    onClick={() => setStateId('5')}
                    style={{
                      color: stateId === '5' ? '#FF9501' : '',
                      fontWeight: stateId === '5' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '5' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    UI/UX Designer
                  </div>
                  <div
                    className="option_item"
                    onClick={() => setStateId('6')}
                    style={{
                      color: stateId === '6' ? '#FF9501' : '',
                      fontWeight: stateId === '6' ? 700 : '',
                    }}
                  >
                    <img
                      src={stateId === '6' ? tick_available : tick_unavailable}
                      alt="tick-square"
                    />
                    Developer
                  </div>
                </div>
              </div>
              <div className="JD_content_right">
                <div className="JD_content_right_text">{form[stateId]}</div>
                <div className="submit_button">
                  <a href="mailto:borostudio2018@gmail.com">
                    <Button className="alter ">{t(messages.apply())}</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recruit;
