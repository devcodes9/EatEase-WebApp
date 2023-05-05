import React from "react";
import "./kitchen.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Subscribe from "../../components/subscribe/Subscribe";

export const Kitchen = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const { data, loading, error } = useFetch(`https://eat-ease-backend.onrender.com/api/kitchens/find/${id}`)
  const { dates } = useContext(SearchContext);
  const [openPlanModal, setPlanModal] = useState(false);

  const dayDiff = (date1, date2) => {
    const timeDiff = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return diffDays;
  }
  
  let days = 1;

  if(dates.length != 0){
    days = dayDiff(dates[0].startDate, dates[0].endDate) + 1;
  }

  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      setPlanModal(true);
    }
    else {
      navigate("/login");
    }
  }
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
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? ("Loading") :
        (<div className="kitchenCtn">
          <div className="kitchenWrapper">
            <div className="callWrapper">
              For further information:
              <button
                href=""
                className="callBtn btn"
                style={{ backgroundColor: "#DD5642" }}
              >
                Contact No
              </button>
            </div>
            <h1 className="kitchenTitle">{data.name}</h1>
            <div className="kitchenAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="kitchenDistance">{data.distance} from center</span>
            <div className="kitchenImages">
              {data.photos?.map((image) => (
                <div className="kitchenImgWrapper">
                  <img src={image.src} alt="..." className="kitchenImg" />
                </div>
              ))}
            </div>
            <div className="kitchenDetails">
              <div className="kitchenDetailsTexts">
                <span className="kitchenDesc">{data.desc}</span>
              </div>
            </div>
            <div className="days">
              <button onClick={handleClick} className="btn" style={{ backgroundColor: "#DD5642", color: "white" }}>Subscribe Now</button>
            </div>
            {openPlanModal && <Subscribe setOpen = {setPlanModal} kitchenId = {id} />}
          </div>
        </div>)}
      <Footer />
    </div>
  );
};
