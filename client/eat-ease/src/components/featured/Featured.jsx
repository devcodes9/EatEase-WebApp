import React from 'react'
import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
    <div className="container"> 
        <div className="card text-bg-dark mb-3">
            <img src="https://images.unsplash.com/photo-1616170687910-2edb17b633d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img" alt="..." ></img>
            <div className="card-img-overlay">
                <h5 className="card-title">Apna Kitchen</h5>
                <p className="card-text">Delicious Apne vale Plans</p>
                <a href="#" class="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
                <p className="card-text"><small>30 Subscribed</small></p>
            </div>
            </div>
    </div>
    <div className="container">
        <div className="card text-bg-dark mb-3">
        <img src="https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img" alt="..." ></img>
        <div className="card-img-overlay">
            <h5 className="card-title">Mumma's best</h5>
            <p className="card-text">Quality & Reasonable</p>
            <a href="#" class="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
            <p className="card-text"><small>28 Subscribed</small></p>
        </div>
        </div>
    </div>
    <div className="container">
    <div className="card text-bg-dark mb-3">
        <img src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg" className="card-img" alt="..." ></img>
        <div className="card-img-overlay">
            <h5 className="card-title">Khana Khazana</h5>
            <p className="card-text">South Indian's Vadakkam</p>
            <a href="#" class="btn" style={{backgroundColor: "#DD5642"}}>Subscribe</a>
            <p className="card-text"><small>18 Subscribed</small></p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Featured

