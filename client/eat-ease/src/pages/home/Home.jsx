import React from 'react'
import "./home.css"
import {Navbar} from "../../components/navbar/Navbar.jsx"
import { Header } from '../../components/header/Header'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )
}
