import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="masthead-wrap">
      <div id="title" className="work-head">
        <div className="container">
          <div className="transistion cloud left-cloud"></div>
          <div className="transistion cloud right-cloud"></div>

          <div className="transistion flag flag-left"></div>
          <div className="transistion flag flag-right"></div>

          <div className="row">
            <div className="col-md-12">
              <div id="head-slider" className="transistion">
                <div className="slide-contents">
                  <div className="slide">
                    <h2 className="work">I'm Sushmitha</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
