import React from "react";
import { Link , NavLink } from 'react-router-dom';

const NavBar = () => {

   // state ={
   //     items:[]
    //}

    
        return(
            <header>
                <nav className="">
                    <div className="nav-container">
                        <div className="logo"><a href="/">Musicians Studio</a></div>
                        <ul className="navli">
                            
                            <li id="list"><Link as={Link} to="/view">View Musicians</Link></li>
                            <li id="list"><Link as={Link} to="/add">Add Musicians</Link></li>
                            <li id="list"><Link as={Link} to="/delete">Delete Musicians</Link></li>
                            <li id="list"><Link as={Link} to="/update">Update Musicians</Link></li>
                            <li id="list"><Link as={Link} to="/loginpage">Login</Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
   

};
export default NavBar;