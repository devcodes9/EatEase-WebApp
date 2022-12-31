import React from 'react'
import "./home.css"
import {Navbar} from "../../components/navbar/Navbar.jsx"
import { Header } from '../../components/header/Header'
import  Featured  from '../../components/featured/Featured.jsx'
import { FoodList } from '../../components/foodList/FoodList'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer container'>
            <h1 className='homeTitle'>Browse by Cuisine</h1>
            <FoodList />
            <Featured /> 
            </div>
            <Footer />
        </div>
    )
}
