import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div>
      <div className="card mb-3" style={{ width: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1268&q=80"
          className="card-img-top"
          alt="..."
        />
        {/* <img
          src={item.photos[0]}
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <div className="sCtn">
            <h5 className="card-title">{item.name}</h5>
            {item.rating &&
              <button className="rating">{item.rating}</button>}
          </div>
          <p className="card-text" style={{color: "grey"}}>
            {item.totalSubCnt} Subscribed
          </p>
          <span>{item.distance} from center</span>
          <p className="card-text">
            {item.desc}
          </p>
          <Link to={`/kitchens/${item._id}`} className="btn" style={{ backgroundColor: "#DD5642", color: "white" }}>
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
