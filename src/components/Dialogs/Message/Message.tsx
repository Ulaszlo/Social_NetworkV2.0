import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {useFormik} from "formik";
import DialogContentText from '@mui/material/DialogContentText';
import style from './Message.module.css'
import {TextField} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export  function Message(props:any) {
        const myPostFormik = useFormik({
            initialValues: {
                newPost: '',
            },
            onSubmit: values => {
               // props.addPost(values.newPost)
                console.log(values.newPost)
            },
        });

    return (
        <React.Fragment>

            <Button variant="outlined" onClick={props.handleClickOpen}>
                Open dialog
            </Button>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Personal message"}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'black'
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent >

                    <DialogContentText id="alert-dialog-description">
                        <img className={style.userPhoto} src={props.photo}/>
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <form onSubmit={myPostFormik.handleSubmit}>
                    <TextField
                        multiline
                        placeholder="Want to send messages?"
                        id="newPost"
                        name="newPost"
                        type="text"
                        onChange={myPostFormik.handleChange}
                        value={myPostFormik.values.newPost}
                        variant="standard"
                        margin="dense"

                    />
                        <Button variant="outlined" type='submit'>Add Post</Button>
                    </form>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}