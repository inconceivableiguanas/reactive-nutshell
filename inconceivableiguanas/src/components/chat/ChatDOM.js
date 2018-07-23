import React, { Component } from "react"
import { Link } from "react-router-dom"


export default props => {
        const secStyle= {
            border: '1px solid black'
        }
        
            return (
                
                <React.Fragment>
            <section style = {secStyle} id = {props.chat.id}>
                <p>User Id{props.chat.userId}</p>

                <p className="card-text">{props.chat.message}
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/chat/${props.chat.id}/edit`,
                        state: { chat: props.chat }
                    }}>
                        Edit
                    </Link>
                    }
                </p>
                
            </section>
            
        </React.Fragment>
            )
        }
    