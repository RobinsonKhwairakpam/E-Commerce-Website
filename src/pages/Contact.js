import React from "react";
import {Navbar} from "../components/Navbar";

export default function Contact(){
    const page = 3
    return(
        <div>
        <Navbar page={page} />
        <br></br>
        <div id="contact">
           <h1>Contact</h1> 
           <br></br>
           <ul style={{fontWeight : 'bold'}}>
            <li>Phone : 8787886320</li>
            <li>Email : robsonkhzepflo@gmail.com</li>
            <li>Address : Kakwa Ningomthong, Imphal</li>
           </ul>
        </div>
        </div>
    )
}