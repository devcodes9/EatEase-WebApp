import React from 'react'
import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { format } from 'date-fns';
import './list.css'

export const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [food, setFood] = useState(location.state.food)
  const [date, setDate] = useState(location.state.date)
  return (
    <div>
    <Navbar />
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
        <h1 className="lsTitle">Search</h1>
        <div className="lsItem">
        <label>Location:</label>
        <input type="text" placeholder={destination} />
        </div>
        <div className="lsItem">
          <label>Start date:</label>
          <span>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
        </div>
        </div>
        <div className="listResult">
        </div>
      </div>
    </div>
    </div>
  )
}
