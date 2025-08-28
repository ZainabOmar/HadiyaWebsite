import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            {/* <div className="logo">
               <h1>Hadiya</h1> 
            </div> */}
            <ul className="nav-links">
                <li>
                    <Link to ={"/"}>Main</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;