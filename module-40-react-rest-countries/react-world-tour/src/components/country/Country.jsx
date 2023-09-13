import "./Country.css"

const Country = ({ country }) => {
    console.log(country);
    const { name, flags } = country;
    // console.log(flags);
    return (
        <div>
            <div className="flex">
                <h3>Country : {name?.common}</h3>
                <img src={flags?.png} className="flag" />
            </div>
        </div>
    );
};

export default Country;