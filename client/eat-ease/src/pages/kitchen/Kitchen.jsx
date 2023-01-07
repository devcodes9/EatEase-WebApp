import React from "react";
import "./kitchen.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../../components/footer/Footer";
export const Kitchen = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    },
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    },
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    },
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    },
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    },
    {
      src: "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a",
    }
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="kitchenCtn">
        <div className="kitchenWrapper">
          <div className="callWrapper">
          For further information: 
          <button href="" className="callBtn btn" style={{backgroundColor: "#DD5642"}}>Contact No</button>
          </div>
          <h1 className="kitchenTitle">D's Ghar</h1>
          <div className="kitchenAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bhaijipura, Raysan</span>
          </div>
          <span className="kitchenDistance">500m from center</span>
          <div className="kitchenImages">
            {images.map((image) => (
              <div className="kitchenImgWrapper">
                <img src={image.src} alt="..." className="kitchenImg" />
              </div>
            ))}
          </div>
          <div className="kitchenDetails">
            <div className="kitchenDetailsTexts">
              <span className="kitchenDesc">Just say Yummmmmm</span>
            </div>
          </div>
          <h1 className="planTitle">Plans</h1>
          <div className="planWrapper">
          <div className="planItem">
            <div className="card mb-5" style={{width: "18rem"}}>
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <a href="#" className="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
              </ul>
            </div>
          </div>
          <div className="planItem">
            <div className="card mb-5" style={{width: "18rem"}}>
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <a href="#" className="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
              </ul>
            </div>
          </div>
          <div className="planItem">
            <div className="card mb-5" style={{width: "18rem"}}>
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <a href="#" className="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
