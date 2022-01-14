import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Adduser from "../users/Adduser";

const Home = () => {
    const [users, setUser] = useState([]);

    return (
        <div className="container">
           <div className="py-4">
           <h1>Home Page</h1>
           <div className="homecontainer">
                    <div class="d-grid gap-5 d-md-flex justify-content">
                        <Link type="button" className="btn btn-primary btn-lg mr-2" to="/">Add Data</Link>
                        <Link type="button" className="btn btn-secondary btn-lg mr-2" to="/showusers" >Show Data</Link>
                    </div>
                </div>
           </div>
        </div>
    );

};

export default Home;