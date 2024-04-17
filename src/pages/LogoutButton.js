import React from "react";

const LogoutButton = () => {

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
