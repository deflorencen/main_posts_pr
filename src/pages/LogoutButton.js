import React from "react";

const LogoutButton = () => {

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        window.location.reload();
    };

    return (
        <div>
            <a onClick={handleLogout}>Logout</a>
        </div>
    );
};

export default LogoutButton