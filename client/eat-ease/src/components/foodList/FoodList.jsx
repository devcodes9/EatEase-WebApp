import React, { useContext, useState } from "react";
import "./foodList.css";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

export const FoodList = () => {
    const { data, loading, error } = useFetch("/kitchens/countByType");
    const images = [
        "https://www.nehascookbook.com/wp-content/uploads/2022/09/Gujarati-thali-WS-1.jpg",
        "https://www.sodhatravel.com/hubfs/Thali.jpg",
        "https://img.freepik.com/free-photo/dosa-also-called-dosai-dosey-dosha-is-thin-pancake-south-indian-cuisine_466689-91646.jpg?w=360&t=st=1673793821~exp=1673794421~hmac=3a14eb1504d7d2d7394e3768d55b5b49c6c5e24be25b3802e4bc266aed1e6113",
    ];
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

    const { dispatch } = useContext(SearchContext);

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     await dispatch({type: "NEW_SEARCH", payload: { food, destination, dates }});
    //     const data = {food: food, destination: destination, dates: dates};     
    //     navigate("/kitchens", { state: data })
    // }

    const handleSearch = async (e, index) => {
        e.preventDefault();
        const selectedFood = data[index]?.type;
        setFood(selectedFood);
        await dispatch({ type: "NEW_SEARCH", payload: { food: selectedFood, destination, dates } });
        const searchData = { food: selectedFood, destination, dates };
        navigate("/kitchens", { state: searchData });
    };

    return (
        <div className="fList container">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="fListItem" key={i} onClick={(e) => handleSearch(e, i)}>
                                <img
                                    src={img}
                                    className="fListImg"
                                ></img>
                                <div className="fListTitle">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.cnt} Kitchens</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};
