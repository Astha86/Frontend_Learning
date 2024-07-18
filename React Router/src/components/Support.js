import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
    const navi = useNavigate();

    function BackHandler(){
        // move to about page
        navi(-1);
    }

    function ClickHandler(){
        // move to about page
        navi("/About");
    }

    return(
        <div>
            <p>This is Support Page</p>
            <button onClick={ClickHandler}>Move to About Page</button>
            <button onClick={BackHandler}>Go Back</button>
        </div>
    )
}

export default Support