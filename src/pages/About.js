import React from "react";
import {Navbar} from "../components/Navbar";

export default function About(){
    const page = 2
    return(
        <div>
        <Navbar page={page} />
        <br></br>
        <div id="about">
            <h1>About</h1>
            <p style={{fontWeight:'bold'}}><br></br>
                    &nbsp; &nbsp; Hi, I am Robinson Khwairakpam, currently studying in the 6th Semester in NIT Manipur. 
                                My stream is Computer Science and Engineering in B. Tech.
            </p>
            </div>
        </div>
    )
}