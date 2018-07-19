import React, { Component } from "react";
import ChatDom from "./ChatDOM"

export default class Chat extends Component {
    state={
        messages:[]
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
render() {
    return (
      <React.Fragment>
        <div className="card Chat Area" style={{width: `18rem`}}>Chat Area
            <div className="card-body">

        </div>
        {this.state.messages.map(message => (
            <ChatDom
              key={message.id}
              messages={message}
            />
          ))}
    <form>
      
      <label>
          New Message:
          <input type="text" id = "message" onChange={this.handleFieldChange} />
        </label>
        <button type="submit" onClick={() => console.log("Stuff")}> 
                    Add New Message
                </button>
      </form>
        </div>
      </React.Fragment>
    );
  }
}
