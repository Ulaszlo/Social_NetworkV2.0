import {NavLink} from "react-router-dom";
import React from "react";
import {usersAPI} from "../../api/api";
import s from "../Users/Users.module.css"
import userPhoto from "../../assets/imges/user-images.png"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const User = (props:any) => {

    return (
        <Card>
        {
            props.users.map((u: { id: React.Key | null | undefined; followed: any; photos: { small: string | null | undefined; }; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                <div key={u.id}>
                    <div>

                        {u.followed ? <Button onClick={() => {
                            if (typeof u.id === "number") {
                                usersAPI.unFollow(u.id).then((response: { data: { resultCode: number; }; }) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                            }

                        }}>UnFollow</Button> : <Button variant='outlined' onClick={() => {


                            if (typeof u.id === "number") {
                                usersAPI.follow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                            }
                        }}>Follow</Button>}
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.photoUrl} src={u.photos.small != null  ? u.photos.small : userPhoto}/>
                            </NavLink>
                            <Typography>{u.name}</Typography>
                        </div>
                    </div>
                </div>
            )
        }


        </Card>
    )
}
