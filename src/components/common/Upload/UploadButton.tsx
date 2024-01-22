import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import uploadIcon from '../../../assets/imges/user-images.png'
import style from './Upload.module.css'
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

export default function  InputFileUpload(props:any) {
    const onChangeFile=(e:any)=>{
        debugger;
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }

    }

    return (
        <Button component="label" variant="contained" startIcon={<img className={style.uploadIcon} src={uploadIcon}/>} >
            Upload file
            <VisuallyHiddenInput type="file" onChange={onChangeFile} />
        </Button>
    );
}