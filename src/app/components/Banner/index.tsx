import './banner.css';

const Banner = props => {
  return (
    <div className="banner-container">
      <div className="banner-background">
        <div className="banner-background-override">
          <div className="banner-content">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
