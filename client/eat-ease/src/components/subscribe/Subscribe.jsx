import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext';
import { useFetch } from '../../hooks/useFetch';
import './subscribe.css'

const Subscribe = ({ setOpen, kitchenId }) => {
    const { data, loading, error } = useFetch(`http://localhost:8080/api/kitchens/plan/${kitchenId}`)
    const { dates } = useContext(SearchContext);
    const dayDiff = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    const handleClick = () => {
        setOpen(false);
    }
    let days = 1;

    if (dates.length != 0) {
        days = dayDiff(dates[0].startDate, dates[0].endDate) + 1;
    }
    return (
        <div>
            <h1 className="planTitle">Plans</h1>
            <FontAwesomeIcon icon={faCircleXmark} className="rClose"
                onClick={handleClick} />
            <div className="planWrapper">
                {
                    data.map(item => {
                        return (<><div className="planItem">
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
