import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import "./HELIOS/Watch.css";
import Home from "./HELIOS/Home";
import Login from "./HELIOS/Login";
import Register from "./HELIOS/Register";
import Allwatches from "./HELIOS/Allwatches";
import Men from "./HELIOS/Men";
import Women from "./HELIOS/Women";
import Smart from "./HELIOS/Smart";
import Stores from "./HELIOS/Stores";
import Offers from "./HELIOS/Offers";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";


function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="helios-navbar">
            {/* Logo */}
            <Link className="logo" to="/">
              <img 
                src="https://static.helioswatchstore.com/media/logo/stores/1/Helios-Logo_2.gif" 
                alt="Helios Logo" 
                className="logo-img"
              />
            </Link>

            {/* Navigation Links */}
            <div className="nav-btn">
              <Link to="/Allwatches" className="nav-link">ALL WATCHES</Link>
              <Link to="/Men" className="nav-link">MEN</Link>
              <Link to="/Women" className="nav-link">WOMEN</Link>
              <Link to="/Smart" className="nav-link">SMART</Link>
              <Link to="/" className="nav-link">BRANDS</Link>
              <Link to="/Stores" className="nav-link">STORES</Link>
              <Link to="/Offers" className="nav-link">OFFERS</Link>
            </div>

            {/* Icons */}
            <div className="nav-icons">
              <input type="text" placeholder="Search entire store" className="search" />
              <Link to="/wishlist" className="icon-link"><FaRegHeart /></Link>
              <Link to="/login" className="icon-link"><VscAccount /></Link>
              <Link to="/cart" className="icon-link"><RiShoppingBasketLine /></Link>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Allwatches" element={<Allwatches />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Smart" element={<Smart />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Offers" element={<Offers />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
