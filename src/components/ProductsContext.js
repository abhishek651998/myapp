import React from "react"

import img1 from "../img/demo_c1002.jpeg"
import img2 from "../img/demo_c1004.jpeg"
import img3 from "../img/demo_p3002.jpeg"
import img4 from "../img/demo_p4010.gif"
import img5 from "../img/demo_p4015.jpeg"
import img6 from "../img/demo_p4019.jpeg"

const ProductsContext =() => {

 
   

return(
   <>
   <h1>Bestsellers</h1>
   <ul className="img">
     <li> <img src={img1} alt="mypic" /> <br/> Binary Mom <br /> <b>$17.99</b> </li>
     <li> <img src={img2} alt="mypic" /> <br/>Yoda plush Backpac  <br /> <b>$34.99</b></li>
     <li> <img src={img3} alt="mypic" /> <br/> Binary Mom <br /> <b>$17.99</b></li>
     <li> <img src={img4} alt="mypic" /> <br/> Wi-Fi Detector Shirt<br /> <b>$21.99</b></li>
     <li> <img src={img5} alt="mypic" /> <br/> Bare Metal Bender <br /> Wind-up <br /> <b>$21.24</b></li>
     <li> <img src={img6} alt="mypic" /> <br/>Albert Einstein Action <br />figure  <br /> <b>$17.99</b></li>
   </ul>
   </>
)




} 


export default ProductsContext;