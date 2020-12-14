import React, { useState } from "react";
import Axios from "axios";
//import { login } from "../../store/actions";
// would need for class components
// import { connect } from "react-redux";
//import { useDispatch } from "react-redux";

const LoginPage = () => {
    const[user] = useState({
        name:"",
        password:""
    })

    //const dispatch = useDispatch();

// const handleChange = (e) =>{
//     setUser({...user,[e.target.name]: e.target.value});
// }

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit call');
    const name = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    Axios.post(`http://18.191.201.76:8080/MusicianServer/user?username=${name}&userpass=${password}` , user, {
        withCredentials: true,
      }).then((resp) => {
        console.log(resp);
      });
}

    return(
        <div id="showcase2">
        <section id="musician-form-login">
                <div className="form-wrap">
                    <h1>Login</h1>
                    <p>Enter Username and Password:  </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="musician-name">UserName</label>
                            <input type="text" id="user" name="name"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="musician-code">Password</label>
                            <input type="text" id="password"  name="musician-code"  /> 
                        </div>
                        
                        <button id="musician-submit"  className="btn">Submit User</button>
                    </form>
                </div>
        </section>
        </div>
    )
}

export default LoginPage;

//value={user.password} onChange={handleChange}
//value={user.name} onChange={handleChange}