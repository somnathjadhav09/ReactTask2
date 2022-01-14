import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Adduser from "../users/Adduser";


const Showusers = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://dry-bayou-99944.herokuapp.com/profiles");
        setUser(result.data)
    }
    return (
        <div className="container py-4">
         <div className="homecontainer"><h2>All Records</h2></div>
         {
                    users.map((user, index) => (
                        <div className="showdata">
                            
                            <ul className="list-group w-75">
                                <li className="list-group-item">Name: {user.name}</li>
                                <li className="list-group-item">Contact: {user.contact}</li>
                                <li className="list-group-item">Email: {user.email}</li>
                                <li className="list-group-item">Adddress: {user.address}</li>
                               
                            </ul>
                        </div>
                    ))
                }
            
        </div>
    )
}

export default Showusers
