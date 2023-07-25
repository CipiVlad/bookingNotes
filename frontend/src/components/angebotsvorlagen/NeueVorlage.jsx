import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React from 'react'

const NeueVorlage = () => {
    function handleAdd() {
        console.log('add');
    }

    return (
        <div>
            <IconButton onClick={handleAdd}>
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default NeueVorlage