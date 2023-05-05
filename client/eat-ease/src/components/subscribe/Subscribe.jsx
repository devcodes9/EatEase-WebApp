import { faCalendarDays, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { DateRange } from 'react-date-range';
import { SearchContext } from '../../context/SearchContext';
import { useFetch } from '../../hooks/useFetch';
import { format } from 'date-fns';
import './subscribe.css'

const Subscribe = ({ setOpen, kitchenId }) => {
    const { data, loading, error } = useFetch(`https://eat-ease-backend.onrender.com/kitchens/plan/${kitchenId}`)
    const [destination, setDestination] = useState("");
    const [food, setFood] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const { dates } = useContext(SearchContext);
    
    const [localDates, setDates] = useState([
        {
            startDate: dates[0].startDate,
            endDate: dates[0].endDate,
            key: 'selection'
        }
    ]);
    const dayDiff = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    const handleClick = () => {
        setOpen(false);
    }
    let days = 1;

    if (dates.length != 0 && localDates.length !== 0) {
        days = dayDiff(localDates[0].startDate, localDates[0].endDate) + 1;
    }
    return (
        <div>
            <p className="lead">You have chosen <b>{days} days</b> for Subscription. </p>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={localDates}
                                    minDate={new Date()}
                                    className="date"
                                />}
            <h1 className="planTitle">Plans</h1>
            <FontAwesomeIcon icon={faCircleXmark} className="rClose"
                onClick={handleClick} />
            <div className="planWrapper">
                {
                    data.map(item => {
                        return (<><div className="planItem" key={item._id}>
                            <div className="card mb-5" style={{ width: "18rem" }}>
                                <div className="card-header">{item.title}</div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.desc}</li>
                                    <li className="list-group-item">{item.menu}</li>
                                    <li className="list-group-item">{item.price} Rs / day</li>
                                    <a
                                        href="#"
                                        className="btn"
                                        style={{ backgroundColor: "#DD5642", color: "white" }}
                                    >
                                        Pay {item.price * days} Rs
                                    </a>
                                </ul>
                            </div>
                        </div></>);
                    })}
            </div>
        </div>
    )
}

export default Subscribe
