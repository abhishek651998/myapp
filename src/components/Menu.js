import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    
   
    return (
        <> 
        <ul className="menu">
            <li><Link className='link'>Categories</Link></li>
            <li><Link className='link'>Shipping</Link></li>
            <li><Link className='link'>Bestseller</Link></li>
            <li><Link className='link'>Sale</Link></li>
            <li><Link className='link'>New arrivals</Link></li>
            <li><Link className='link'>Comimg soon</Link></li>
            <li><Link className='link'>Contact us</Link></li>
        </ul>
        </>
    )
}

export default Menu;