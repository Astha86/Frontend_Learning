import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navi = useNavigate();

    function BackHandler(){
        // move to about page
        navi(-1);
    }

    return(
        <div>
            <p>This is Contact Page</p>
            <button onClick={BackHandler}>Go Back</button>
        </div>
    )
}

export default Contact