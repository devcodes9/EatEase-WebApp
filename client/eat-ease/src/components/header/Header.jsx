import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faTags, faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useContext } from 'react'
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';


export const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [food, setFood] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const {dispatch} = useContext(SearchContext);

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        await dispatch({type: "NEW_SEARCH", payload: { food, destination, dates }});
        const data = {food: food, destination: destination, dates: dates};     
        navigate("/kitchens", { state: data })
    }
    return (
        <div className="header">
            <div className={type === "list" ? 'headerContainer listType' : 'headerContainer'}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span>Kitchens</span>
                    </div>

                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTags} />
                        <span>Offers</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">Crave for "Ghar ka khana"? Well,Welcome😉</h1>
                        <p className="headerDesc">Food just like your Mom makes(even tastier) on Subscription basis!</p>
                        {!user && <Link to="/login" className="headerBtn" style={{ textDecoration: 'none', textEmphasis: 'none', color: "#E9EAED" }}>Sign In/Register</Link>}
                        <form onSubmit={handleSearch}>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faUtensils} className="headerIcon" />
                                <input type="text"
                                    placeholder="What food do you prefer?"
                                    className="headerSearchInput"
                                    onChange={e => { setFood(e.target.value); }}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                                <input type="text"
                                    placeholder="Enter your delivery location"
                                    className="headerSearchInput"
                                    onChange={e => { setDestination(e.target.value); }}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    minDate={new Date()}
                                    className="date"
                                />}
                            </div>
                            {/* <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUtensils}  className="headerIcon" />
                <span className="headerSearchText"></span>
            </div> */}
                            <div className="headerSearchItem">
                                <button className="headerBtn" type='submit'>Find Food</button>
                            </div>
                        </div>
                        </form>
                    </>}
            </div>
        </div>

    )
}
