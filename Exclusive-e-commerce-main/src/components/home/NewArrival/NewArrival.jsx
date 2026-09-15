import "./NewArrival.scss";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import PlayStation from "../../../assets/images/banners/playbox.png";
import WomenCollection from "../../../assets/images/banners/woman.png";
import Speakers from "../../../assets/images/banners/amazon.png";
import Perfume from "../../../assets/images/banners/gucci.png";

function NewArrival() {
  return (
    <section className="new-arrival container">

      <SectionTitle
        subtitle="Featured"
        title="New Arrival"
      />

      <div className="new-arrival__grid">

        <div className="card large">
          <img
                    src={PlayStation}
                    alt="PlayStation"
                  />

          <div className="overlay">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="right">

          <div className="card">
              <img
                    src={WomenCollection}
                    alt="WomenCollection"
                  />

            <div className="overlay">
              <h3>Women's Collections</h3>
              <p>Featured woman collections.</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div className="small-grid">

            <div className="card">
               <img
                    src={Speakers}
                    alt="Speakers"
                  />

              <div className="overlay">
                <h3>Speakers</h3>
                <button>Shop Now</button>
              </div>
            </div>

            <div className="card">
              <img
                src={Perfume}
                alt="Perfume"
              />

              <div className="overlay">
                <h3>Perfume</h3>
                <button>Shop Now</button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default NewArrival;