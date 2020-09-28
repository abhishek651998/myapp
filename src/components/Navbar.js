import React from "react";
import img1  from "../img/logo.png"
const Navbar =() => {
    return(
        <nav>
        <ul className="logo">
          <li> <img src={img1}alt="" /> </li>

        </ul>
        
       </nav>
    )
}

export default Navbar;