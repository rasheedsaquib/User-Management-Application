import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";


const Editusers = () => {

    let history=useHistory();
    const {id}=useParams();
    const[user,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    const {name,username,email,phone,website}=user;
    const onInputChange=e=>{
        setUsers({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        history.push("/");
    };
    const loadUser= async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`,user);
        setUsers(result.data);
    };



    return(
        <div className='container'>
           <h1>Edit Users</h1>
           <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Update User</button>
                </form>
            </div>
           
        </div>
    );
}
   

export default Editusers;