import * as React from 'react';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import style from './Message.module.css'
import {TextField} from "@mui/material";
import Card from "@mui/material/Card";
import {DialogsInitialStateType, DialogType} from "../../../redux/Reducers/dialogs-reducer";
import CardHeader from '@mui/material/CardHeader';
import {useState} from "react";
import {TypeProfileDataType} from "../../../redux/Reducers/profile-reducer";

type MessageType = {
    personalDialog: DialogsInitialStateType
    messageId:any
    profile:TypeProfileDataType | null
}

export function Message(props: MessageType) {
    let currentPersonalDialog= props.personalDialog.dialogsData.filter((d)=>d.id==props.messageId)
    const myPostFormik = useFormik({
        initialValues: {
            newMessage: '',
        },
        onSubmit: values => {
            console.log(values.newMessage)

        },
    });



    return (
        <Card className={style.card}   sx={{minWidth:1000,minHeight:400,}}>
            {currentPersonalDialog.map((d)=>
                <Card>
                <CardHeader
                    avatar={<img className={style.userPhoto} src={d.photo}/>}
                    action={d.date}
                    subheader={d.message}
                />
            </Card>

            )}
            <form onSubmit={myPostFormik.handleSubmit}>
            <TextField
                sx={{flex:'auto'}}
                multiline
                placeholder="Write message"
                id="newMessage"
                name="newMessage"
                type="text"
                onChange={myPostFormik.handleChange}
                value={myPostFormik.values.newMessage}
                variant="standard"
                margin="dense"
                required
                fullWidth
            />
                <Button variant="text" type='submit'>Add Post</Button>
            </form>
        </Card>

    );
}
