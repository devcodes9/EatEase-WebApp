import React, { useContext } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { format } from 'date-fns';
import './list.css'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import { useFetch } from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'

export const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [food, setFood] = useState(location.state.food)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)

  const url = destination
    ? `/kitchens?city=${destination}&type=${food}`
    : `/kitchens?type=${food}`;
  const {data, loading, error, reFetch} = useFetch(url);

  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
      e.preventDefault();
      await dispatch({type: "NEW_SEARCH", payload: { food, destination, dates }});
      const data = {food: food, destination: destination, dates: dates};     
      navigate("/kitchens", { state: data })
      reFetch();
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Location:</label>
              <input type="text" placeholder={destination} onChange={e => { setDestination(e.target.value); }}/>
            </div>
            <div className="lsItem">
              <label>Food Type:</label>
              <input type="text" placeholder={food} onChange={e => { setFood(e.target.value); }}/>
            </div>
            <div className="lsItem">
              <label>Start date:</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />}
            </div>
            <div className='lsItem'>
              <button className='lsBtn' onClick={handleClick}>Search</button>
            </div>
          </div>
          <div className="listResult">
            {loading ? "Loading" : 
            <>
            {data.map(item => (
              <SearchItem item = {item} key = {item._id} />
            ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
