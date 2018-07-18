import React from "react"
import { Link } from "react-router-dom"
state = {
    newMessage: {
        message: "",
        userId:"0" //placeholder use post method in APIManger to add to Database
    }
 }

handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}
function ChatDOM(chat,children){
    return (
        <div className="card Chat Area" style={{width: `18rem`}}>Chat Area
            <div className="card-body">
                
                <p className="card-text">{chat.message}
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/chat/${chat.message.id}/edit`, //link to edit form
                        state: { chat: chat } //data going to edit form?????
                    }}>
                        Edit
                    </Link>
                }
                </p>
                
            </div>
            <label>
          New Message:
          <input type="text" id = "message" onChange={this.handleFieldChange} />
        </label>
        <button type="submit" onClick={() => console.log("Stuff")}> 
                    Add New Message
                </button>
        </div>
                //on click call post method, rebuild dom in .then in desending order
    )
}
export default ChatDOM;
// this is all wronng. I need to make the chat area static and dynamically add p tags in chat area representing chat. the static container needs to have an input field with new message button