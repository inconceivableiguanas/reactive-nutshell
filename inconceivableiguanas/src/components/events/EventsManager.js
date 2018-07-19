import React, { Component } from "react";
import { Route } from "react-router-dom";
import ApiManager from "./APIManger ";

export default Object.create(ApiManager, {
  allDOM: {
    value: function() {
      return this.getAll("events");
    }
  },
  add: {
    value: function(resource) {
      return this.postItem("events", resource);
    }
  },
  removeAndList: {
    value: function(id) {
      return this.deleteItem("events", id).then(() => this.all());
    }
  }
});
