import React, { Component } from "react";

export default props => {
  return (
    <div>
      <label>{props.users.name}</label>
      <button
        onClick={() => {
          props.addFriend("1", props.users.id);
        }}
      >
        add
      </button>
    </div>
  );
};
