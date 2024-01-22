import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/Reducers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
    login: null | string
    isFetching: null | boolean
    isAuth: boolean
    userAvatar: string
};
type mapDispatchToPropsType = {
    logout: () => void
    getAuthUserData: () => void
    authStatus: () => void
};

class HeaderComponent extends React.Component<HeaderContainerType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthUserData()

    }

    render = () => {
        return (
            <Header setAuthUserData={function (): void {
                throw new Error("Function not implemented.");
            }} {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userAvatar: state.profilePage.profile?.photos?.small
    }
}

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData: getAuthUserData, logout})(HeaderComponent)