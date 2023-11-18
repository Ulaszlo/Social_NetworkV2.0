import React from 'react'
import s from '../Dialogs.module.css'
import {MessageType} from "../../../redux/Reducers/dialogs-reducer";

export const Message = (props: MessageType) => {


    return (

        <div className={s.messageItem}>{props.message}</div>

    )
}