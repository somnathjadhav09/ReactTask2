import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark ">
           <div  className='container'>
          
                    <NavLink className="navbar-brand" to="#">React Task-2</NavLink>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <NavLink className="nav-link " exact to="/">Home</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className="nav-link " exact to="/about">About</NavLink>
                            </li>
                            
                        </ul>
                      
                    </div>                       
           </div>
        </nav>
    )
}

export default Navbar;
