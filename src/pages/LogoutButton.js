import React from "react";
import axios from "axios";
import navigate from "navigate";

const LogoutButton = () => {
    const authToken = localStorage.getItem("auth-token");

    const handleLogout = async (e) => {
        
        try {
            await axios.post("http://127.0.0.1:8000/users/logout/", {},
                {headers: 
                    {Authorization: authToken}
                }
            );
        } catch (error) {  

            if(error.response.status === 401){  
                localStorage.removeItem("auth-token");

                navigate('/login');
                window.location.reload();
                
                console.error("User loged out:", error);
            } else {
                console.log("Unexpected error:", error)
            }
        }

    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;