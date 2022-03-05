import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "0" },
      { id: 2, message: "My first post", likesCount: "23" },
      { id: 3, message: "Blabla", likesCount: "15" },
      { id: 4, message: "Hello!", likesCount: "2" },
    ],
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;