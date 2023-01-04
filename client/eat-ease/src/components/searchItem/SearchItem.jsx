import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div>
      <div className="card mb-3" style={{ width: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1268&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="sCtn">
            <h5 className="card-title">Card title</h5>
            <button className="rating">3.5</button>
          </div>
          <span>Distance from center</span>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn" style={{ backgroundColor: "#DD5642", color: "white" }}>
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
