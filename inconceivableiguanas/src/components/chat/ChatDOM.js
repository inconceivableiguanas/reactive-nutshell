import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../APIManager.js"

export default class props extends Component {
        state = {
           chat:[
               
           ]
         }
     render(){   
    return (
        
        <React.Fragment>
                
                <p className="card-text">{this.state.chat.message}>
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
                
            
            
        </React.Fragment>
                //on click call post method, rebuild dom in .then in desending order
            )
        }
}