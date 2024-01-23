import s from './MyPosts.module.css'
import {Post} from "./Post";
import React from "react";
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";
import {MyPostType} from "./MyPostsContainer";
import Card from "@mui/material/Card";


export const MyPosts = React.memo((props: MyPostType) => {
    const myPostFormik = useFormik({
        initialValues: {
            newPost: '',
        },
        onSubmit: values => {
            props.addPost(values.newPost)
        },
    });
    let postsElement = props.posts.map(((p: { message: string; likeCount: number; }) => <Post profile={props.profile}
                                                                                              userPhoto={props.profile?.photos.small}
                                                                                              message={p.message}
                                                                                              likeCount={p.likeCount}/>))
    return (
        <>
            <Card sx={{minWidth: 1000,maxWidth: 1000, marginBottom: 2, borderRadius:5}}>
                <form onSubmit={myPostFormik.handleSubmit}>
                    <TextField
                        sx={{paddingLeft:6, width:900,paddingRight:6,minHeight:30}}
                        multiline
                        placeholder="Что у вас нового?"
                        id="newPost"
                        name="newPost"
                        type="text"
                        onChange={myPostFormik.handleChange}
                        value={myPostFormik.values.newPost}
                        variant="standard"
                        margin="dense"

                    />
                    <Button variant="text" type='submit'>Add Post</Button>
                </form>
            </Card>
            <div>{postsElement}</div>
        </>
    );
})

