import React, {useState} from "react";
import Axios from "axios";
import {Navigate,useHistory,useNavigate} from "react-router-dom";

function Logout (){
    const [val,setval] = useState("no");
    function logout(){
        alert("logged out successfully");
        setval("yes");
        
    }
    function redir(){
        return <Navigate to="/login" />;
    }
    return(
        <div>
            <button onClick={logout}>Logout</button>
            {val === "yes" ? redir() : null}
        </div>
    );
}

export default Logout;