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
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Article/>
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Group/>
                            </ListItemIcon>
                            <ListItemText primary="Groups"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
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
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <ModeNight/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

