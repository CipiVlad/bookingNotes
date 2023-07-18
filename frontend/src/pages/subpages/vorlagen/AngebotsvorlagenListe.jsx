import data from './AngebotsvorlagenListe.json'

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const AngebotsvorlagenListe = () => {
    console.log(data.offeringlist);
    function handleDelete() {
        console.log('deleted');
    }


    return (
        <div>
            <h2>Liste</h2>
            {
                data.offeringlist.map((e, index) => (
                    <ul key={index}>
                        <li>{e.title}</li>
                        <Link >
                            <IconButton>
                                <EditIcon></EditIcon>
                            </IconButton>
                        </Link>
                        <IconButton onClick={handleDelete}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                        <IconButton>
                            <ContentPasteIcon />
                        </IconButton>
                    </ul>
                ))
            }
        </div>
    )
}

export default AngebotsvorlagenListe