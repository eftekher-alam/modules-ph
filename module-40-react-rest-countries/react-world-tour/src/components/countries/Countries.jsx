import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css"

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(request => request.json())
            .then(data => setCountries(data));
    }, []);
    // console.log(countries[0]?.cca3);
    return (
        <div>
            <h2>Country Details</h2>
            <div className="grid">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;