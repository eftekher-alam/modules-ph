import { useState } from "react";
import "./Country.css"

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags } = country;

    const [isVisited, setVisited] = useState(false);

    const handlerVisited = () => {
        setVisited(true);
        handleVisitedCountry(country);
    }

    return (
        <div className="country-container">
            <div className="flex">
                <h3>Country : {name?.common}</h3>
                <img src={flags?.png} className="flag" />
            </div>
            <button className={isVisited ? "visited-button" : "default-button"} onClick={handlerVisited} >{isVisited ? "Visited" : "Visit"}</button>
        </div>
    );
};

export default Country;