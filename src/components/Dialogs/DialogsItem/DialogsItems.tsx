import {Link} from "react-router-dom";
import style from '../Dialogs.module.css'
import React from 'react';
import {DialogType} from "../../../redux/Reducers/dialogs-reducer";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import {Message} from "../Message/Message";

export const DialogsItems = (props: DialogType) => {
    let path = "/profile/" + props.id;
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (

        <Card sx={{
            minWidth: 1000,
            maxWidth: 1000,
            marginBottom: 4,
            borderRadius: 7,
            borderBottomColor: 'rgba(0,79,194,0.31)'
        }}>
            <CardHeader
                avatar={
                    <React.Fragment>
                        <Link to={path}><img className={style.userAvatar} src={props.photo}/></Link>
                    </React.Fragment>
                }
                title={<Typography variant="h6"><Link className={style.userName}
                                                      to={path}>{props.name}</Link></Typography>}
                subheader={<Typography variant="h5">{props.message}</Typography>}
                action={<Typography>{props.date}</Typography>}
            />
            <Message message={props.message} open={open}
                     handleClickOpen={handleClickOpen} handleClose={handleClose}
            name={props.name} photo={props.photo}
            />
        </Card>

    )
    // <div className={s.dialog + ' ' + s.dialogsItem}>
    //  <div className={s.block}> <img className={s.userAvatar} src={userAvatar}/></div>    <Link to={path}>{props.name}</Link>
    // </div>
}