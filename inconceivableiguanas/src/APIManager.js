const ApiManager = Object.create(
  {},
  {
    getAll: {
      value: collectionName => {
        return fetch(`http://localhost:5002/${collectionName}`).then(e =>
          e.json()
        );
      }
    },
    deleteItem: {
      value: (collectionName, itemId) => {
        return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
          method: "DELETE"
        });
      }
    },
    patchItem: {
      value: (collectionName, itemId, theObject) => {
        return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(theObject)
        });
      }
    },
    postItem: {
      value: (collectionName, theObject) => {
        return fetch(`http://localhost:5002/${collectionName}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(theObject)
        });
      }
    },
    updateItem: {
      value: (collectionName, itemId, dataObject) => {
        return fetch(`http://localhost:5002/${collectionName}/${itemId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dataObject)
        });
      }
    },
    friendsExpand: {
      value: (yourId) => {
        return fetch(`http://localhost:5002/friends?_expand=user&yourId=${yourId}`).then(e => e.json())
      }
    },
    postFriend: {
      value: (yourId, userId) => {
        return fetch(`http://localhost:5002/friends`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "yourId": yourId,
            "userId": userId
          })
        });
      }
    }
  }
);

export default ApiManager;
