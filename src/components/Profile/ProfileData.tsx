import React from 'react'
import {TypeProfileDataType} from "../../redux/Reducers/profile-reducer";
type ProfileDataType = {
    profile:TypeProfileDataType
}
export const ProfileData = (props:ProfileDataType) => {
    return (
        <div>
        {/*<div>{props.profile.aboutMe}</div>*/}
        {/*    <div>*/}
        {/*        <div>{props.profile.contacts.vk || 'vk - установить данные'}</div>*/}
        {/*        <div>{props.profile.contacts.instagram || 'instagram - установить данные'} </div>*/}
        {/*        <div>{props.profile.contacts.github || 'github - установить данные'} </div>*/}
        {/*        <div>{props.profile.contacts.website || 'website - установить данные'}  </div>*/}
        {/*    </div>*/}
        {/*    <div>Имя- {props.profile.fullName}</div>*/}
        {/*    <div> Фото - <img src={props.profile.photos.small || "Вы ещё не загружали фото"}/></div>*/}
        </div>
    )
}