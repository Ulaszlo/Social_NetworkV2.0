import s from './ProfileInfo.module.css'
import {ProfileStatusFC} from "./ProfileStatusFC";
import { TypeProfileDataType} from "../../../redux/Reducers/profile-reducer";
import userAvatar from "../../../assets/imges/user-images.png"
import React  from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
type ProfileInfoType = {
    profile:TypeProfileDataType
    UserStatus: string
    updateUserStatus: (NewStatus: string) => void
    getUserStatus:(userId:number) => void
    getProfile:(userId:number)=>void
    isOwner:boolean
    savePhoto:(userPhoto:any)=>void
}
export const ProfileInfo = (props: ProfileInfoType) => {



    return (
        <div className={s.profileInfoContent}>
            <img className={s.profileUserPhoto} src={props.profile.photos.large || userAvatar }/>
            <span className={s.userName}>{props.profile.fullName}</span>
            <div title="изменить статус"><ProfileStatusFC UserStatus={props.UserStatus} updateUserStatus={props.updateUserStatus}/></div>
            <div className={s.editLinkWrapper}>{props.isOwner? <span > <div><Link className={ s.editLink}  to='/edit'>Редактировать профиль</Link></div> </span> : null }</div>

        </div>

    );
};