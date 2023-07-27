import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthContextProvider";

const Catagories = () => {
    const {user,loading} = useContext(AuthContext)

    return (
        <div className="pb-10"> 

            <h2>this is categories section</h2>

            {
                // user && <p>{user}</p>
            }

        </div>
    );
};

export default Catagories;