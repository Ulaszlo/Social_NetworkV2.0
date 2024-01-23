import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
} from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import style from "./SideBar.module.css"

type SideBarType = {}
export const Sidebar = (props: SideBarType) => {
    return (
        <Box padding={2} flex={1} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <Link to='/profile' className={style.link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon>
                                <ListItemText primary="Homepage"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to='/dialogs' className={style.link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Article/>
                                </ListItemIcon>
                                <ListItemText primary="Dialogs"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to='/users' className={style.link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Group/>
                                </ListItemIcon>
                                <ListItemText primary="Users"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to='/news' className={style.link}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Storefront/>
                                </ListItemIcon>
                                <ListItemText primary="News"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

