import React from "react";
import img1 from "../img/facebook_icon.gif"
import img2 from "../img/twitter_icon.gif"


const Footer =() => {

    return(
    
        <div className="foot">
        <table>
            <tr>
                <th> <h2>Special products</h2><br/> </th>
                <th><h2>Information</h2><br/></th>
                <th><h2>My account</h2><br/></th>
            </tr>
            <tr>
                <td>New arrivals</td>
                <td>Term & Condition</td>
                <td>Sign in</td>
            </tr>
            <tr>
                <td>Coming soon</td>
                <td>Shipping</td>
                <td>Register</td>
            </tr>
            <tr>
                <th>Sale</th>
                <th>Sitemap</th>
            </tr>
            <tr>
                <th>Bestseller</th>
            </tr>
        </table> <br/><br/>
        <h2>Contact</h2> <br/>
        <p>Test Address,Test City,TX,US,10001</p> <br/> <br/>
        Phone:(555) 555-5555  <br/><br/>
        <img src={img2} alt="" />
        <img src={img1} alt="" />



        </div>
         
    )
}

export default Footer;