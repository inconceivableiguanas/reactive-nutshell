import React from "react";

export default props => {
        console.log("props", props);
        
        return (
            <div>
                <label>{props.friends.user.name}</label>
                <button>X</button>
            </div>
        )

}