import React from "react";

export default props => {
    props.users.map(user =>{
        return (
            <div>
                <label>{user.name}</label>
                <button>X</button>
            </div>
        )
    })
}