import {Link} from "react-router-dom";
import s from '../Dialogs.module.css'
import React from 'react';
import { DialogType} from "../../../redux/Reducers/dialogs-reducer";
import userAvatar from "../../../assets/imges/avaInMessaages.png";

export const DialogsItems = (props:DialogType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.dialogsItem}>
     <div className={s.block}> <img className={s.userAvatar} src={userAvatar}/></div>    <Link to={path}>{props.name}</Link>
    </div>
}