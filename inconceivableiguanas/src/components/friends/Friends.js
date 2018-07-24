import React from "react";

export default props => {
        // console.log("props", props);
        
        return (
            <div id={props.friends.id}>
                <label>{props.friends.user.name}</label>
                <button onClick={() => {
                        props.friendDelete(props.friends.id)
                        // console.log("This is working", props.friends.id);
                    }}>X</button>
            </div>
        )

}