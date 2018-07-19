import React, { Component } from "react";
import Friends from "./Friends";

export default class FriendsList extends Component {
    render() {
        let friends = this.props.friends;
        console.log(friends);
        return (
            <React.Fragment>
            <h3>Friends List</h3>
            <label>Search for Friends</label>
            <input id="friendSearch"></input>
            <div>
            {friends.map(friends => (
                <Friends friends={friends} />
            ))}
            </div>
            </React.Fragment>
        )
    }
}