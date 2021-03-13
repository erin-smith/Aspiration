import React from "react";

function Term(props) {
    return(
        <div>
            <li>{props.item.name}.</li>
            <li>{props.item.starGazers}</li>
        </div>
    );
}

export default Term;