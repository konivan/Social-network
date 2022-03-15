const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
      stateCopy.newMessageBody = [...state.newMessageBody];
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    };
    case SEND_MESSAGE: {
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy;
    };
    default:
      return state;
  };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;
