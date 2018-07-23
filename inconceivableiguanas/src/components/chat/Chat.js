import React, { Component } from "react";
import ChatDom from "./ChatDOM"
import APIManager from "../../APIManager.js"
import "bulma/css/bulma.css";
import { Card,CardHeader,CardHeaderTitle,Button} from 'bloomer';

export default class Chat extends Component {
    state={
        chat:[],
        message:"",
        userId:"9"
    }
    componentDidMount(){
        //passing a sort into collection
        APIManager.getAll("chat?_sort=id&_order=asc").then(chat=>this.setState({chat}))
        //don't need tp do chat:chat is they are named the same
    }
    
    handleFieldChange = evt => { //used on add chat input
        this.setState({
            message:evt.target.value //took out evt.target.id and changed to message since I only have to worry about one input field
        });
    };
    addMessage = e => {
        e.preventDefault();
        APIManager.postItem("chat",{
            message:this.state.message,
            userId:this.state.userId})
        .then(e => e.json())
        .then(
            messageToPush =>
                this.setState(
                    ({ chat, message }) => ({ chat: [...chat, messageToPush], message: '' })
                    //({ chat, message }) is previous state destructured => new state destructured state with new property, empty message string sets input to empty string
                ))
    }

    editMessage = (chatId) =>{
        APIManager.updateItem("chat",chatId)
        .then(() => {
            return APIManager.getAll("chat?_sort=id&_order=asc")
          })      
          .then(chatList => 
            this.setState(
                ({chat})=> ({chat:[...chat,chatList]})
          //took out brackets because it is a one line function and another pair of {} is omitted for syntax since we are using previous state as ({chat}). chat = chat + new edited chat
            )
          );
      };

    render() {
        
    return (
      <React.Fragment>
          <Card>
          <CardHeader>
        <CardHeaderTitle>
        Chat Area
        </CardHeaderTitle>
        </CardHeader>
        
            <div className="card-body"></div>

            {this.state.chat.map(chat => (
                <ChatDom
                key={chat.id}
                chat={chat} 
                editMessage ={this.editMessage}
                />
            ))}
        <form onSubmit={this.addMessage}>
            <label>
                New Message:
                <input 
                    type="text" 
                    id="message" 
                    value={this.state.message}
                    onChange={this.handleFieldChange}
                />
            </label>

        <Button type="submit" isColor = "info">Add New Message</Button>

        </form>
    
    </Card>
      </React.Fragment>
    );
  }
}
