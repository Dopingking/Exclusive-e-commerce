import Button from "../../ui/Button/Button";
import "./MusicBanner.scss";
import speaker from "../../../assets/images/banners/speaker.png";

function MusicBanner() {
  return (
    <section className="music-banner container">

      <div className="music-banner__content">

        <span className="category">Categories</span>

        <h2>
          Enhance Your <br />
          Music Experience
        </h2>

        <div className="timer">

          <div>
            <h3>23</h3>
            <small>Hours</small>
          </div>

          <div>
            <h3>05</h3>
            <small>Days</small>
          </div>

          <div>
            <h3>59</h3>
            <small>Minutes</small>
          </div>

          <div>
            <h3>35</h3>
            <small>Seconds</small>
          </div>

        </div>

        <Button>Buy Now</Button>

      </div>

      <div className="music-banner__image">
         <img
                  src={speaker}
                  alt="Speaker"
                />
      </div>

    </section>
  );
}

export default MusicBanner;