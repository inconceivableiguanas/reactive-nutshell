import React, { Component } from "react";
import Friends from "./Friends";
import Api from "../../APIManager";
import FriendSearch from "./FriendSearch"
export default class FriendsList extends Component {
    componentDidMount() {
        // this.props.userState();
        this.props.friendState();
    }
    friendDelete = (id) => {
        fetch(`http://localhost:5002/friends/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            this.props.friendState();
        })
    }
    
    render() {   
        let friends = this.props.friends;
        
        // console.log(friends);
        let inputVal = document.getElementById("friendSearch")
        // console.log(inputVal);
        
        return (
            <React.Fragment>
            <h3>Friends List</h3>
            <label>Search for Friends</label>
            <input id="friendSearch"></input><button onClick={() => {
                // console.log("is this running")
                this.props.friendSearch(inputVal.value)}}>Search</button>
            <div>
            {this.props.results.map(result => (
                <FriendSearch key={result.id} addFriend={this.props.addFriend} users={result} />
            ))}
            {friends.map(oneFriend => (
                <Friends key={oneFriend.id} friends={oneFriend} friendDelete={this.friendDelete} />
            ))}
            </div>
            </React.Fragment>
        )
    }
}