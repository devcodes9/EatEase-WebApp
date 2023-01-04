import React from 'react'
import './kitchen.css'
import {Navbar} from '../../components/navbar/Navbar'
import {Header} from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const Kitchen = () => {
  const images = [
    {
      src : "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a"
    },
    {
      src : "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a"
    },
    {
      src : "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a"
    },
    {
      src : "https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073331.jpg?w=900&t=st=1672825926~exp=1672826526~hmac=2127faf18c21ca0f66b0290f07408cd9714635f3122ca2639c14f255efb9763a"
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type = "list" />
      <div className="kitchenCtn">
        <div className="kitchenWrapper">
          <div className="kitchenTitle">
          D's Ghar
          </div>
          <div className="kitchenAddress">
            <FontAwesomeIcon icon = {faLocationDot}/>
            <span>Bhaijipura, Raysan</span>
          </div>
          <span className="kitchenDistance">500m from center</span>
          <div className="kitchenImages">
          {
            images.map(image => (
              <div className="kitchenImgWrapper">
                <img src={image.src} alt="" className="kitchenImg" />
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}
