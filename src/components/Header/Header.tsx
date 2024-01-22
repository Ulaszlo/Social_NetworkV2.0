import React from 'react';
import Navbar from "./Navbar";

export type HeaderType = {
    login: null | string
    isFetching: null | boolean
    isAuth: boolean
    logout: () => void
    setAuthUserData: () => void
    authStatus: () => void
    userAvatar: string
}
export const Header = (props: HeaderType) => {
    return (
        <Navbar userAvatar={props.userAvatar} login={props.login} isFetching={props.isFetching}
                logout={props.logout} setAuthUserData={props.setAuthUserData}
                authStatus={props.authStatus} isAuth={props.isAuth}
        />
    );
};

