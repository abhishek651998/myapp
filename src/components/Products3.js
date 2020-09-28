import React from "react"
import img1 from "../img/demo_p4031.jpeg"
import img2 from "../img/demo_p4042.jpeg"
import img3 from "../img/demo_p4045.jpeg"
import img4 from "../img/demo_p4053.jpeg"
import img5 from "../img/demo_p4048.gif"
import img6 from "../img/demo_p4056.jpeg"



const Products3 =() => {

    return(
        <>
            <h1>Featured products </h1>
            <ul className="mid">
                <li> <img src={img1} alt="" /><br />Acrobots <br /><b>$6.39</b></li>
                <li> <img src={img2}  alt="" /><br />Mini Solar-Powered <br /> Car <br /><b>$19.99</b></li>
                <li> <img src={img3} alt="" /><br />Pyramid Brain Twist <br /> <b>$11.99</b></li>
                <li> <img src={img4} alt="" /><br />R/C Airsoft Battle <br />Tanks <br /> <b>$39.99</b></li>
                <li> <img src={img5} alt="" /><br />Rubik'Mirror Blocks <br />Cube <br /> <b>$19.99</b></li>
                <li> <img src={img6} alt="" /><br/>Palmsize Battle Tanks <br /><b>$39.99</b> </li>
            </ul>
        </>
    )
}

export default Products3;