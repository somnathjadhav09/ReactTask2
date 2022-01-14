import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Adduser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    contact: "",
    email: "",  
    address: ""
  });

  const { name, contact, email,address } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://dry-bayou-99944.herokuapp.com/profiles",user);
    history.push("/");
    alert("User has been added successfully!");
    e.target.reset();
    
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form className="contact-form " onSubmit={e => onSubmit(e)}>
          <div className="form-group ">
            <input
              type="text"
              className="form-control form-control-lg  md-2"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg  md-2"
              placeholder="Enter Your Contact Number"
              name="contact"
              value={contact}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-success btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Adduser;
