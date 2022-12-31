import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faTags, faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'
import { format } from 'date-fns';


export const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className="header">
        <div className= {type === "list" ? 'headerContainer listType':'headerContainer'}>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faUtensils} />
                    <span>Kitchens</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTags} />
                    <span>Plans</span>
                </div>
            </div>
            {type !== "list" &&
                <>
            <h1 className="headerTitle">Crave for "Ghar ka khana"? Well,Welcome😉</h1>
            <p className="headerDesc">Food just like your Mom makes(even tastier) on Subscription basis!</p>
            <button className="headerBtn">Sign In/Register</button>
            <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUtensils}  className="headerIcon" />
                <input type="text" placeholder="What food do you prefer?" className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocationDot}  className="headerIcon" />
                <input type="text" placeholder="Enter your delivery location" className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon" />
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                />}
            </div>
            {/* <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUtensils}  className="headerIcon" />
                <span className="headerSearchText"></span>
            </div> */}
            <div className="headerSearchItem">
                <button className="headerBtn">Find Food</button>
            </div>
            </div>
            </>}   
        </div>
    </div>
  )
}
