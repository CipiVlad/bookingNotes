import { Link } from 'react-router-dom'
import { Grid, IconButton, Paper } from '@mui/material';
//Room 'n Price 
import RoomPreferencesTwoToneIcon from '@mui/icons-material/RoomPreferencesTwoTone';
//ligth-dark mode
import SettingsBrightnessTwoToneIcon from '@mui/icons-material/SettingsBrightnessTwoTone';
//Edit Password and Email Settings
import LockResetTwoToneIcon from '@mui/icons-material/LockResetTwoTone';
//Backup-Plan
import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
//delete Account
import PersonOffTwoToneIcon from '@mui/icons-material/PersonOffTwoTone';
//create Account
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';


const SettingsDashboard = (props) => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ padding: '20px' }}>
            <Grid item xs={6} >
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton  >
                            <RoomPreferencesTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Zimmer & Preise</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton>
                            <SettingsBrightnessTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Light/Dark Mode</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton>
                            <LockResetTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Passwörter & Email</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton>
                            <CloudSyncTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Backup</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton>
                            <PersonOffTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Aktuellen Account löschen</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link>
                    <Paper elevation={3} style={{ textAlign: 'center', padding: '10%' }}>
                        <IconButton>
                            <PersonAddTwoToneIcon style={{ fontSize: '100px' }} />
                            <p>Neuen Account erstellen</p>
                        </IconButton>
                    </Paper>
                </Link>
            </Grid>

        </Grid>
    )
}
export default SettingsDashboard