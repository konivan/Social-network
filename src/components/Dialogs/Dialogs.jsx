import React from "react"
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Talala" },
    { id: 3, name: "Nikita" },
    { id: 4, name: "Krot" },
    { id: 5, name: "Chocomint" },
    { id: 6, name: "Lender" },
  ];


  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How much pp?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialogs;