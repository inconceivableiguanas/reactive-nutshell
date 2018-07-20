import React, { Component } from "react";
import ChatDom from "./ChatDOM"
import APIManager from "../../APIManager.js"


export default class Chat extends Component {
    state={
        chat:[]
    }
    componentDidMount(){
        APIManager.getAll("chat").then(chat=>this.setState({chat:chat}))
    }
    
    dataObject ={}
    handleFieldChange = evt => { //used on add chat input
        
        console.log("Is Firing")
            this.dataObject = {message:"",
        userId:"9"};
        this.dataObject[evt.target.id] = evt.target.value;
        this.setState(this.dataObject);
    };
    
    addMessage = (messageObject) => {
        console.log(" in addMessage")
        APIManager.postItem("chat",{message:this.state.message,userId:this.state.userId})
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
          <input type="text" id = "message" onChange={this.handleFieldChange} />
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
