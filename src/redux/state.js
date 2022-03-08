let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "0" },
        { id: 2, message: "My first post", likesCount: "23" },
        { id: 3, message: "Blabla", likesCount: "15" },
        { id: 4, message: "Hello!", likesCount: "2" },
      ],
      newPostText: "konivan",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How much pp?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Talala" },
        { id: 3, name: "Nikita" },
        { id: 4, name: "Krot" },
        { id: 5, name: "Chocomint" },
        { id: 6, name: "Lender" },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};


window.store = store;
export default store;