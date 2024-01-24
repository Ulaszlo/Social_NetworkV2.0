import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import style from './ProfileInfo.module.css'
import userAvatar from '../../../assets/imges/user-images.png'
import {TypeProfileDataType} from "../../../redux/Reducers/profile-reducer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TransitionProps } from '@mui/material/transitions';
import Dialog from '@mui/material/Dialog';
import Slide from "@mui/material/Slide";
import InputFileUpload from "../../common/CommonMUI/Upload/UploadButton";

type ProfileInfoType = {
    profile: TypeProfileDataType
    UserStatus: string
    updateUserStatus: (NewStatus: string) => void
    getUserStatus: (userId: number) => void
    getProfile: (userId: number) => void
    isOwner: boolean
    savePhoto: (userPhoto: any) => void
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export function ProfileInfo(props: ProfileInfoType) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card sx={{minWidth: 1000,maxWidth: 1000, marginBottom:6,borderRadius:7, borderBottomColor:'rgba(0,79,194,0.31)'}}>
            <CardHeader
                avatar={
                    <React.Fragment>
                        <img onClick={handleClickOpen} className={style.userAvatar} src={props.profile.photos.large || userAvatar}/>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Want to change your profile photo?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Click on the 'UPLOAD FILE' button to upload a new photo or the 'CANCEL' button to close the dialog box.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <InputFileUpload savePhoto={props.savePhoto}/>
                                <Button onClick={handleClose}>CANCEL</Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                }
                title={<Typography variant="h4" >{props.profile?.fullName || "User"} </Typography>}
                subheader={<div className={style.statusWrapper}> {props.UserStatus || "Frontend developer with learning skills and the ability to solve problems without giving up." +
                    " My goal as a developer is to apply my technical skills" +
                    " in IT development and troubleshooting to further the company's vision and mission."}</div>}
            />
        </Card>
    );
}