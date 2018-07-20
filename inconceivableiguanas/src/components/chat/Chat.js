import React, { Component } from "react";
import ChatDom from "./ChatDOM"
import APIManager from "../../APIManager.js"

let dataObject ={
   message:"",
   userId:"9"
}
export default class Chat extends Component {
    state={
        chat:[]
    }
    componentDidMount(){
        APIManager.getAll("chat").then(chat=>this.setState({chat:chat}))
    }
    
    handleFieldChange = evt => { //used on add chat input
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    
    addMessage = (messageObject) => {
        APIManager.postItem("chat",messageObject)
    }
    render() {
    return (
      <React.Fragment>
        <div className="card chat-area" style={{width: `18rem`}}>Chat Area
            <div className="card-body">

        </div>
        {this.state.chat.map(chat => (
            <ChatDom
              key={chat.id}
              chat={chat} //?
            />
          ))}
    <form onSubmit={this.addMessage}>
      
      <label>
          New Message:
          <input type="text" id = "chat.message" onChange={this.handleFieldChange} />
        </label>
        <button type="submit"> 
                    Add New Message
                </button>
      </form>
        </div>
      </React.Fragment>
    );
  }
}
