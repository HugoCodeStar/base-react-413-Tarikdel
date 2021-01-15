import React from "react";

function Citation(props){
    return(
        <div>
            <p>{props.quote}</p>
            <p>-{props.author}</p>

        </div>
    );
}

export default Citation;