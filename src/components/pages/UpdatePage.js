import React, { useState } from "react";
import Axios from "axios";
//import { userData } from "react-router-dom";

const UpdatePage = () =>{

const [formData, setFormdata] = useState({
    name: "",
    mood: "",
});
//const [musician, setMusician] = useState({
//    name: "",
//    mood: "",

//});


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await Axios.put('http://18.191.201.76:8080/MusicianServer/musician', formData,  {
            withCredentials: true,
          }).then((resp) => {
            console.log(resp);
          });
        console.log(response);
    }

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }
    return(
    <div id="showcase4">
    <section id="musician-form-update">
        <div className="form-wrap">
            <h1>Update Musician Mood</h1>
            <p>Enter name and mood:  </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name = "name" value={formData["name"]} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="musician-mood">Musician Mood</label>
                    <input type="text" id="musician-mood" name="mood" value={formData["mood"]} onChange={handleChange}/> 
                </div>
                
                <button id="musician-submit" className="btn">Submit Change</button>
            </form>
        </div>
    </section>
    </div>
    )
}

export default UpdatePage;