import React from 'react';
import {connect} from "react-redux";

 const Avatar = (props:any) => {
    return (
        <div>
            {props.profile.photos.large}
        </div>
    );
};
const mapStateToProps=(state:any)=>{
   return { userAvatar:state.profilePage.profile.photos.small }
}
 export const UserAvatar = connect(mapStateToProps,{})(Avatar)