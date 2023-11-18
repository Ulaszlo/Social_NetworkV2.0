import TextField from '@mui/material/TextField';
import React from 'react';
export const Chat = () => {
    return (
        <div>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
            />
        </div>
    );
};

