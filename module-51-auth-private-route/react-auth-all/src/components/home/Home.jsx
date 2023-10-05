import { useContext } from "react";
import { AuthContext } from "../../provider/authProvider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
            <h1>This is Home </h1>
        </div>
    );
};

export default Home;