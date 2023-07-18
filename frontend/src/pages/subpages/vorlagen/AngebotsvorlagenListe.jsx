import data from './AngebotsvorlagenListe.json'

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AngebotsvorlagenListe = () => {
    // console.log(data.offeringlist);

    //event handler
    function handleAdd() {
        console.log('add');
    }

    function handleCopy() {
        console.log('copied to clipboard');
    }

    function handleDelete() {
        console.log('deleted');
    }

    const fetchList = async () => {
        console.log('data fetched');
    }

    useEffect(() => {
        fetchList()
    })

    return (
        <div>
            <h2>Liste</h2>
            <IconButton onClick={handleAdd}>
                <AddIcon />
            </IconButton>
            {
                data.offeringlist.map((e, index) => (
                    <ul key={index}>
                        <li>{e.title}</li>
                        <Link to='/vorlagen/angebotsvorlageneditor' >
                            <IconButton>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Link>
                        <IconButton onClick={handleDelete}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                        <IconButton onClick={handleCopy}>
                            <ContentPasteIcon />
                        </IconButton>
                    </ul>
                ))
            }
        </div>
    )
}

export default AngebotsvorlagenListe