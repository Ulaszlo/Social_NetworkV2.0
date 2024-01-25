import '../../App.css'
import {DialogsItems} from "./DialogsItem/DialogsItems";
import React from "react";
import {Redirect} from "react-router-dom";
import {DialogsDataType, DialogType} from "../../redux/Reducers/dialogs-reducer";
type DialogsPropsType = {
    dialogsPage: DialogsDataType
    isAuth: boolean
}
export const Dialogs = (props: DialogsPropsType) => {

    // @ts-ignore
    // let messageElement = state.messageData.map((message: { message: string; id: number; }) => <Message
    //     message={message.message} id={message.id}/>)

    let state = props.dialogsPage
    // @ts-ignore
    let dialogsElement = state.dialogsData.map((d:DialogType) => < DialogsItems date={d.date} message={d.message} photo={d.photo} name={d.name} id={d.id}/>)

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return (
       <>
           {dialogsElement}
       </>
    )

}