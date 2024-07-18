import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navi = useNavigate();

    function BackHandler(){
        // move to about page
        navi(-1);
    }
    
    return(
        <div>
            <p>This is Home Page</p>
            <button onClick={BackHandler}>Go Back</button>
        </div>
    )
}

export default Home