

import React from 'react'
import { Link } from 'react-router-dom';

const Header =()=> {
    const name="guru";
  return (
    <div>

     
       <header className="font-mono flex justify-around bg-black text-amber-50">
        <div className="py-5">
            
        <img  className= " px-3 py-2 w-25 h-15"src="https://up.yimg.com/ib/th/id/OIP.ak9l1dNZ4EEMC8-Es9N3kwHaHa?pid=Api&rs=1&c=1&qlt=95&w=123&h=123" /> 
                
            
        </div>
        <ul className="py-5 flex justify-center gap-x-10">
            <Link to='/'>
              <li className="transition duration-5s ease-in-out text hover:text-lg hover:text-pink-300">Home</li>
            </Link>
            <Link to='/About'>
              <li className="transition duration-5s ease-in-out text hover:text-lg  hover:text-pink-300">About</li>
            </Link>
            <Link to='/Contact'>
              <li className="transition duration-5s ease-in-out text hover:text-lg  hover:text-pink-300">Contact</li>
            </Link>
            
        </ul>
       </header>
    </div>
  )
}

export default Header;