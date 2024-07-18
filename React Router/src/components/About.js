import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navi = useNavigate();

    function BackHandler(){
        // move to about page
        navi(-1);
    }
    return(
        <div>
            <p>This is About Page</p>
            <button onClick={BackHandler}>Go Back</button>
        </div>
    )
}

export default About