import React from "react";
import "./foodList.css";
import { useFetch } from "../../hooks/useFetch";

export const FoodList = () => {
    const { data, loading, error } = useFetch("/kitchens/countByType");
    const images = [
        "https://www.nehascookbook.com/wp-content/uploads/2022/09/Gujarati-thali-WS-1.jpg",
        "https://www.sodhatravel.com/hubfs/Thali.jpg",
        "https://img.freepik.com/free-photo/dosa-also-called-dosai-dosey-dosha-is-thin-pancake-south-indian-cuisine_466689-91646.jpg?w=360&t=st=1673793821~exp=1673794421~hmac=3a14eb1504d7d2d7394e3768d55b5b49c6c5e24be25b3802e4bc266aed1e6113",
    ];

    return (
        <div className="fList container">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="fListItem" key={i}>
                                <img
                                    src= {img}
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
