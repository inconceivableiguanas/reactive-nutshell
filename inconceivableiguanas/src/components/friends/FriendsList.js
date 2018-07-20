import React, { Component } from "react";
import Friends from "./Friends";
import Api from "../../APIManager";
export default class FriendsList extends Component {
    componentDidMount() {
        // this.props.userState();
        this.props.friendState();
    }
    render() {   
        let friends = this.props.friends;
        console.log(friends);
        
        return (
            <React.Fragment>
            <h3>Friends List</h3>
            <label>Search for Friends</label>
            <input id="friendSearch"></input>
            <div>
            {friends.map(oneFriend => (
                <Friends friends={oneFriend} />
            ))}
            </div>
            </React.Fragment>
        )
    }
}