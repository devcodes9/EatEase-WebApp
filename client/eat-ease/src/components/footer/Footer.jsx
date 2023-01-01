import "./footer.css"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
      <div>
  <footer className="text-center text-white" style={{backgroundColor: "#03989E"}}>
    <div className="container p-4">
      <section className="mb-4">
        <p>
          To partner with us, mail us at <a href="eatease@xyz.com" style={{color: "white"}}>eatease@xyz.com</a>
        </p>
      </section>
      <section className="">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Available  Cities</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">Gandhinagar</a>
              </li>
              <li>
                <a href="#!" className="text-white">Ahmedabad</a>
              </li>
              <li>
                <a href="#!" className="text-white">Surat</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2022 Copyright:
      <a className="text-white" href="#">EatEase</a>
    </div>
  </footer>
    </div>
  )
}
