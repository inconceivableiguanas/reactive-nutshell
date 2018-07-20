import React, { Component } from "react";
import Friends from "./Friends";
import Api from "../../APIManager";
export default class FriendsList extends Component {
    componentDidMount() {
        this.props.userState();
        this.props.friendState();
    }
    render() {
        console.log(this.props);
        
        let friends = this.props.friends;
        
        return (
            <React.Fragment>
            <h3>Friends List</h3>
            <label>Search for Friends</label>
            <input id="friendSearch"></input>
            <div>
            {friends.map(friends => (
                <Friends friends={friends} users={this.props.users}/>
            ))}
            </div>
            </React.Fragment>
        )
    }
}