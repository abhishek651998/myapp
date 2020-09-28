import React from "react"
import img1 from "../img/demo_c1002.jpeg"
import img2 from "../img/demo_c1004.jpeg"


const Products2 =() => {


    return(
        <ul className="product">
            <li> <img src={img1} alt="mypic" /> <br/> Apparel</li>
            <li> <img src={img2} alt="mypic" /> <br/> Toys</li>
        </ul>
    )
}


export default Products2;
