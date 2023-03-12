import React, { useContext, useState } from 'react'
import './featured.css';
import { useFetch } from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Featured = () => {
    const { data, loading, error } = useFetch("/kitchens?featured=true")
    // console.log(data);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const { dispatch } = useContext(SearchContext);

    const navigate = useNavigate()

    const handleSearch = async (e, id) => {
        e.preventDefault();
        await dispatch({ type: "NEW_SEARCH", payload: { dates } });
        navigate(`/kitchens/${id}`, {state: dates})
    };

    return (
        <div className='featured'>
            {
                loading ? ("Loading, Please Wait...")
                    : (
                        <>
                            {data.map((item) => (
                                <div className="container" key = {item._id}>
                                    <div className="card text-bg-dark mb-3" key={item._id}>
                                        <img src="https://images.unsplash.com/photo-1616170687910-2edb17b633d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img" alt="..." ></img>
                                        {/* <img src= {item.photos[0]} className="card-img" alt="..." ></img> */}
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.desc}</p>
                                            <Link to={`/kitchens/${item._id}`} onClick={(e) => handleSearch(e, item._id)} className="btn" style={{ backgroundColor: "#DD5642", color: "white" }}>Subscribe</Link>
                                            <p className="card-text"><small>{item.totalSubCnt} Subscribed</small></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )
            }
        </div>
    )
}

export default Featured

