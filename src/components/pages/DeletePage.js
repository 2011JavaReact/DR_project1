import React, { useState } from "react";
import Axios from "axios";
//import { login } from "../../store/actions";
// would need for class components
// import { connect } from "react-redux";
//import { useDispatch } from "react-redux";

const DeletePage = () => {
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
    //console.log(formData);
    const name = document.getElementById('user').value;
    //const password = document.getElementById('password').value;
    Axios.delete(`http://18.191.201.76:8080/MusicianServer/musician?name=${name}` , user, {
        withCredentials: true,
      }).then((resp) => {
        console.log(resp);
      });
}

    return(
        <div id="showcase3">
        <section id="musician-form-delete">
                <div className="form-wrap">
                    <h1>Delete Musician</h1>
                    <p>Enter Username : </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="musician-name">UserName</label>
                            <input type="text" id="user" name="name"  />
                        </div>
                
                        
                        <button id="musician-submit" className="btn">Submit Name</button>
                    </form>
                </div>
        </section>
        </div>
    )
}

export default DeletePage;

