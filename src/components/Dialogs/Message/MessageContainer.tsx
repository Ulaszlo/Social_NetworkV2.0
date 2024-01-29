import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch, EmptyObject} from "redux";
import { whitAuthRedirect } from "../../../HOC/withAuthRedirect";
import {
    addNewMessageTextActionCreator, DialogsDataType,
    DialogType,
    UpdateNewMessageTextActionCreator
} from "../../../redux/Reducers/dialogs-reducer";
import { AppStateType } from "../../../redux/redux-store";
import {Message} from "./Message";
import {match} from "react-router";

const MessageContainer = (props:any) => {
  return <Message profile={props.profile} personalDialog={props.dialogsPage} messageId={props.match.params.userId}/>
}
const mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        newValueOnChangeMessage: (text: string) => {
            dispatch(UpdateNewMessageTextActionCreator(text))
        },
        addMessageButton: (currentText: string) => {
            dispatch(addNewMessageTextActionCreator(currentText))
        },
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),whitAuthRedirect) (MessageContainer);
