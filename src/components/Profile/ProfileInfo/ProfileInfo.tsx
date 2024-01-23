import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import style from './ProfileInfo.module.css'
import userAvatar from '../../../assets/imges/user-images.png'
import {TypeProfileDataType} from "../../../redux/Reducers/profile-reducer";

type ProfileInfoType = {
    profile: TypeProfileDataType
    UserStatus: string
    updateUserStatus: (NewStatus: string) => void
    getUserStatus: (userId: number) => void
    getProfile: (userId: number) => void
    isOwner: boolean
    savePhoto: (userPhoto: any) => void
}

export function ProfileInfo(props: ProfileInfoType) {

    return (
        <Card sx={{minWidth: 1000,maxWidth: 1000, marginBottom:6,borderRadius:7, borderBottomColor:'rgba(0,79,194,0.31)'}}>
            <CardHeader
                avatar={
                    <img className={style.userAvatar} src={props.profile.photos.large || userAvatar}/>
                }
                title={<Typography variant="h4" >{props.profile?.fullName || "User"} </Typography>}
                subheader={<div className={style.statusWrapper}> {props.UserStatus || "Frontend developer with learning skills and the ability to solve problems without giving up." +
                    " My goal as a developer is to apply my technical skills" +
                    " in IT development and troubleshooting to further the company's vision and mission."}</div>}
            />
        </Card>
    );
}