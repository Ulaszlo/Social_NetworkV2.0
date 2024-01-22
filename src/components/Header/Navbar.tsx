import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Badge,
    Avatar,
    styled,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import React, {useState} from "react";
import {Mail, Notifications} from "@mui/icons-material";
import {HeaderType} from "./Header";
import {Link} from 'react-router-dom';
import style from './NavBar.module.css'
import commonUserAva from '../../assets/imges/user-images.png'

export const Navbar = (props: HeaderType) => {
    const [open, setOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const Icons = styled(Box)(({theme}) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    }));

    const UserBox = styled(Box)(({theme}) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }));
    return (
        <AppBar color="default" position="fixed">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>
                    Social NetWork
                </Typography>
                <Icons color='default'>
                    <Link className={style.link} to='/dialogs'>
                        <Button>
                        <Badge badgeContent={4} color="error"><Mail/></Badge>
                    </Button>
                    </Link>
                    <Button>
                        <Avatar
                        sx={{width: 30, height: 30}}
                        src={props.userAvatar || commonUserAva}
                        alt="Avatar"
                        onClick={(e) => setOpen(true)}
                    />
                    </Button>


                </Icons>
                <UserBox>
                    <Typography variant="h6">{props.isAuth ? props.login : null}</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem>
                    <Link to='/edit' className={style.link}> {props.isAuth ?
                        <Typography
                         color='primary' variant='h6'>{props.login}</Typography>
                        : "User"} </Link>
                </MenuItem>
                <MenuItem><Link to='/profile' className={style.link}>My account</Link></MenuItem>
                <MenuItem>{props.isAuth? <Button size='small' variant='outlined' onClick={props.logout}> Logout</Button> : <Link className={style.link} to='/login'></Link>}</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;