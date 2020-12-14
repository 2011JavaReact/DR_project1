//import React from "react";
import Axios from 'axios';
import React, { useState } from "react";
//import { useHistory, useParams } from "react-router-dom";

const AddPage = () =>{

    const [formData, setFormdata] = useState({
        name: "",
        mood: "",
        instruments: [],
    });

    //cosnt [ Mname ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await Axios.post('http://18.191.201.76:8080/MusicianServer/musician', formData ,{
            withCredentials: true,
          }).then((resp) => {
            console.log(resp);
          });
        console.log(response);
    }

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }

    const handleArrayChange = (e) => {
        setFormdata({...formData, [e.target.name]: [e.target.value]});
    }




    return(
    <div id="showcase2">
        
    <section id="musician-form-main">
        <div className="form-wrap">
            <h1>Add new musician</h1>
            <p>Enter name, mood, and instruments: </p>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name="name" value={formData["name"]} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="musician-mood">Musician Mood</label>
                    <input type="text" id="musician-mood" name="mood" value={formData["mood"]} onChange={handleChange}/> 
                </div>
                
                <div className="form-group">
                    <label htmlFor="musician-instruments">Musician Instruments</label>
                    <select type="text" name="instruments" id="musician-instruments" value={formData['instruments']} onChange={handleArrayChange}  >
                            <option value="">Choosse Instrument:</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Vocals">Vocals</option>
                            <option value="Drums">Drums</option>
                            <option value="Keystar">Keystar</option>
                            <option value="Bass">Bass</option>
                    </select>
                </div>
                
                <button id="musician-submit" className="btn">Submit Musician</button>
            </form>
        </div>
    </section>
    </div>
    )
}

export default AddPage;
//Remove authenication to check if thats the issue with 401 error