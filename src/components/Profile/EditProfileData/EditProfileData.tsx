import React, {ChangeEvent, useState} from 'react';
import {savePhoto} from "../../../redux/Reducers/profile-reducer";
import InputFileUpload from "../../common/Upload/UploadButton";
import {connect} from "react-redux";
import style from "../EditProfileData/EditProfileData.module.css"
 const EditProfileData = (props: any) => {

    return (
        <div className={style.dataWrapper}>
            <div className={style.headerProfileData}>
                <div className={style.overlay}>  <div className={style.ImgWrapper}><img className={style.photo} src={props.profile.photos.large || "Вы ещё не загружали фото"}/>
                    <span className={style.DataFullName}>{props.profile.fullName}</span>
                </div></div>


                {/*<InputFileUpload savePhoto={props.savePhoto}/>*/}

            </div>

            <div>{props.profile.aboutMe || "О себе - данные не установлены"}</div>

            <div className={style.contactsItems}>
                <div>{props.profile.contacts.vk || 'vk - установить данные'}</div>
                <div>{props.profile.contacts.instagram || 'instagram - установить данные'} </div>
                <div>{props.profile.contacts.github || 'github - установить данные'} </div>
                <div>{props.profile.contacts.website || 'website - установить данные'}  </div>
            </div>

        </div>
    );
};
let mapStateToProps = (state: any) => ({

    profile: state.profilePage.profile,

})
export default connect(mapStateToProps,{savePhoto})(EditProfileData)


