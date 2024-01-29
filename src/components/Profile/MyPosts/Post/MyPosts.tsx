import style from './MyPosts.module.css'
import {Post} from "./Post";
import React from "react";
import {useFormik} from "formik";
import {Button, ButtonProps, Dialog, TextField} from "@mui/material";
import {MyPostType} from "./MyPostsContainer";
import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";
import Collapse from '@mui/material/Collapse';

interface ExpandMoreProps extends ButtonProps {
    expand: boolean;

}
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <Button fullWidth disableElevation={true}  disableFocusRipple={true} variant='text'  {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
}));
export const MyPosts = React.memo((props: MyPostType) => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const myPostFormik = useFormik({
        initialValues: {
            newPost: '',
            photo: undefined
        },
        onSubmit: values => {
            props.addPost(values.newPost)
            values.newPost=""
        },
    });
    let postsElement = props.posts.map(((p: { message: string; likeCount: number; photo:string | undefined }) => <Post profile={props.profile}
                                                                                              userPhoto={props.profile?.photos.small}
                                                                                              message={p.message}
                                                                                              likeCount={p.likeCount}
                                                                                              photo={p.photo}
        />
    ))
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Card sx={{minWidth: 1000, maxWidth: 1000, marginBottom: 2, borderRadius: 5}}>
                <form onSubmit={myPostFormik.handleSubmit}>
                    <ExpandMore

                        expand={expanded}
                        onDoubleClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"

                    >
                        <TextField
                            sx={{paddingLeft: 6, width: 900, paddingRight: 6, minHeight: 20}}
                            multiline
                            placeholder="Double click to write a post"
                            id="newPost"
                            name="newPost"
                            type="text"
                            onChange={myPostFormik.handleChange}
                            value={myPostFormik.values.newPost}
                            variant="standard"
                            margin="dense"
                            required
                        />
                    </ExpandMore>


                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Button sx={{
                            marginLeft:6
                        }} variant="text" type='submit'>Add Post</Button>
                    </Collapse>
                </form>
            </Card>
            <div>{postsElement}</div>
        </>
    );
})

