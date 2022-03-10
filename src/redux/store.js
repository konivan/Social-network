import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      ],
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Talala" },
        { id: 3, name: "Nikita" },
        { id: 4, name: "Krot" },
        { id: 5, name: "Chocomint" },
        { id: 6, name: "Lender" },
      ],
      newMessageBody: ""
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },
};
window.store = store;
export default store;