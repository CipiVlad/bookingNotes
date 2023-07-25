import AngebotsEditor from '../../../AngebotsEditor'
import '../../../Editor.css'
import './Angebotsvorlage.css'
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AngebotsvorlagenEditor = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    // console.log(id);
    //ermöglicht es den state aus der ÜbersichtsCard hierher mitzunehmen
    const location = useLocation()
    //wenn loaction.state null ist und User auf zurück klickt, dann navigate zu '/buchungen'
    let data = location.state || [];
    // console.log('data= ', data);


    useEffect(() => {
        if (!location.state) {
            navigate("/vorlagen/angebotsvorlage");
        }
    }, [location.state, navigate]);

    let detail = data.filter((elt) => {
        return elt.id == id
    });
    // console.log(detail[0].text);


    function handleSave() {
        console.log('changes saved');
        navigate('/vorlagen/angebotsvorlage')
    }
    function handleSend() {
        console.log('go to send');
        navigate('/email')
    }
    function handleCancel() {
        console.log('cancel');
        navigate('/vorlagen/angebotsvorlage')
    }

    return (
        <div>AngebotsvorlagenEditor
            <AngebotsEditor detail={detail} />
            <IconButton onClick={handleSave}>
                <SaveIcon />
            </IconButton>
            <IconButton onClick={handleSend}>
                <SendIcon />
            </IconButton>
            <IconButton onClick={handleCancel}>
                <CloseIcon />
            </IconButton>
        </div>
    )
}

export default AngebotsvorlagenEditor