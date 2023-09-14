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

    const [visitedList, setVisitedList] = useState([]);

    function handleVisitedCountry(country) {
        const newVisitedList = [...visitedList, country?.name?.common];
        setVisitedList(newVisitedList)
    }

    console.log("count visited : ", visitedList);

    return (
        <div>
            <h2>Country Details Here..!</h2>
            <div>
                <h3>Visited Country List</h3>
                <ol>
                    {
                        //to ignore the error, key is passed.
                        visitedList.map(name => <li key={name}>{name}</li>)
                    }
                </ol>
            </div>
            <div className="grid">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;