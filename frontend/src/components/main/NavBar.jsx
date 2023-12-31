import { AppBar, Typography, Toolbar, Tabs, Tab, Box, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './SideBar';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar className='appBar' >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        // sx={{ mr: 2 }}
                        onClick={toggleDrawer("left", true)}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Box >
                        <Grid container spacing={6}
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item xs={1}>
                                <Link onClick={() => navigate(-1)}>
                                    <Tooltip title={'Zurück'}>
                                        <Tab icon={<ArrowBackIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/einstellungen'}>
                                    <Tooltip title={'Einstellungen'}>
                                        <Tab icon={<SettingsIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/email'}>
                                    <Tooltip title={'Emails'}>
                                        <Tab icon={<MailIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/'}>
                                    <Tooltip title={'Buchungskalender'}>
                                        <Tab icon={< CalendarMonthIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/buchungen'}>
                                    <Tooltip title={'Buchungsübersicht'}>
                                        <Tab icon={<MenuBookIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/netzwerk'}>
                                    <Tooltip title={'Netzwerk'}>
                                        <Tab icon={<ShareIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Link to={'/kunden'}>
                                    <Tooltip title={'Gäste'}>
                                        <Tab icon={<PermContactCalendarIcon />} iconPosition="end" style={{ color: 'white' }} />
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={1}>
                                <Tooltip title={'Seite drucken'}>
                                    <Tab icon={<PrintIcon />} iconPosition="end" onClick={print} style={{ color: 'white' }} />
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
            <SideBar state={state} setState={setState} toggleDrawer={toggleDrawer}></SideBar>
        </>
    )
}


export default NavBar