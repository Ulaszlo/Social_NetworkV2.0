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
    let messagePath = "/personalMessages/" + props.id
        return (
                    <Link to={messagePath} className={style.userName}>
        <Card sx={{
            minWidth: 800,
            maxWidth: 1000,
            marginBottom: 1,
            borderRadius: 7,
            borderBottomColor: 'rgba(0,79,194,0.31)',

        }}>
            <CardHeader
                avatar={
                    <React.Fragment>
                        <Link to={path}><img className={style.userAvatar} src={props.photo}/></Link>
                    </React.Fragment>
                }
                title={<Typography variant="h6"><Link className={style.userName}
                                                      to={path}>{props.name}</Link></Typography>}
                subheader={<Typography variant="subtitle2">{props.message}</Typography>}
                action={<Typography sx={{paddingRight:2,paddingTop:2}} >{props.date}</Typography>}
            />
        </Card>

                    </Link>
    )
    // <div className={s.dialog + ' ' + s.dialogsItem}>
    //  <div className={s.block}> <img className={s.userAvatar} src={userAvatar}/></div>    <Link to={path}>{props.name}</Link>
    // </div>
}