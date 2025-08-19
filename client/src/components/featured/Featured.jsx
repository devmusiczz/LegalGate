import React from "react";
import "./Featured.scss";
import "./lawyer.png"

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the best <span>Legal Service Provider</span> as per your requirement
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Advocates"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Advocates</button>
            <button>Mediators</button>
            <button>Arbitrators</button>
            <button>Notaries</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
          {/* <img src="./lawyer.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Featured;
