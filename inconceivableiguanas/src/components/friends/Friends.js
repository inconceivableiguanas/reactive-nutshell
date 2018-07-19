import React from "react";

export default props => {
    return(
        <div>
            <label>{props.friends.name}</label>
            <button>X</button>
        </div>
    )
}