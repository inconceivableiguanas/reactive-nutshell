import React, { Component } from "react"
import { Link } from "react-router-dom"


export default props => {
    // state = { should be able to use props since state is passed down from chat.js
    //    chat:[
        
        //    ]
        //  }
        
        
            return (
                
                <React.Fragment>
            <section>
                <p>User Id{props.chat.userId}</p>

                <p className="card-text">{props.chat.message}
                {
                    // <Link className="card-link"
                    // to={{
                        //     pathname: `/chat/${chat.message.id}/edit`, //link to edit form
                        //     state: { chat: chat } //data going to edit form?????
                        // }}>
                        //     Edit
                        // </Link>
                    }
                </p>
                
            </section>
            
        </React.Fragment>
                //on click call post method, rebuild dom in .then in desending order
            )
        }
    