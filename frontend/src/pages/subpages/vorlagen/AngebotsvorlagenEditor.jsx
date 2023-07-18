import Editor from '../../../Editor'
import '../../../Editor.css'
import './Angebotsvorlage.css'
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const AngebotsvorlagenEditor = () => {
    const navigate = useNavigate()

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
            <Editor />
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