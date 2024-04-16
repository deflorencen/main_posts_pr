import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/createpost">Create Post</Link>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<Posts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </Router>
  );
}