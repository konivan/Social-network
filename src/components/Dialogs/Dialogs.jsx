import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newDialog = React.createRef();

  let addDialog = () => {
    let text = newDialog.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>

      <textarea ref={newDialog}></textarea>
      <button onClick={addDialog}>Add</button>
    </div>
  );
}

export default Dialogs;