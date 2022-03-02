import React from "react"
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Ivan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Talala</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Nikita</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Krot</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Chocomint</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Lender</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How much pp?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
}

export default Dialogs;