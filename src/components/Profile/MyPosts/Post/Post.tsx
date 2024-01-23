import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {TypeProfileDataType} from "../../../../redux/Reducers/profile-reducer";
import style from './Post.module.css'
import userAvatar from '../../../../assets/imges/user-images.png'
type PostType = {
    userPhoto:string | undefined
    message:{}
    likeCount :number
    profile:TypeProfileDataType | null
}

export function Post (props:PostType) {
    return (
        <Card sx={{minWidth: 1000,maxWidth: 1000, marginTop:3}}>
            <CardHeader
                avatar={
                   <img className={style.userAvatar} src={props.userPhoto || userAvatar}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={props.profile?.fullName || "User"}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="250"
                image="https://masterpiecer-images.s3.yandex.net/13fd5148748e11ee8edb2aacdc0146ad:upscaled"
                alt="Post Media"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.message}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>

            </CardActions>
        </Card>
    );
}