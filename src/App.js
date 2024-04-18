import './styles/App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import LogoutButton from "./pages/LogoutButton";
import UserPostsPanel from './pages/UserPostsPanel';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth-token') !== null);

    const handleLogout = () => {
        setIsLoggedIn(false);

    };



    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                {isLoggedIn && <Link to="/createpost">Create Post</Link>}
                {isLoggedIn && <Link to="/user_panel">My Posts</Link>}
                {!isLoggedIn && <Link to="/login">Login</Link>}
                {!isLoggedIn && <Link to="/registration">Registration</Link>}
                {/*{isLoggedIn && <LogoutButton onLogout={handleLogout} />}*/}
                {isLoggedIn && <LogoutButton onLogout={handleLogout} />}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                {isLoggedIn && <Route path="/createpost" element={<Posts />} />}
                {isLoggedIn && <Route path="/user_panel" element={<UserPostsPanel/>} />}
                {!isLoggedIn && <Route path="/login" element={<Login />} />}
                {!isLoggedIn && <Route path="/registration" element={<Registration />} />}
            </Routes>
        </Router>
    );
}
