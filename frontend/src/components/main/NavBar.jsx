import { AppBar, Typography, Toolbar, Tabs, Tab, Box, Grid } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>
                        <MenuIcon />
                    </Typography>
                    <Box sx={{ flexGrow: 2 }}>
                        <Grid container spacing={6}

                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item xs={1}>
                                <Tab icon={<ArrowBackIcon />} iconPosition="start" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<SettingsIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<MailIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={< CalendarMonthIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<MenuBookIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<ShareIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<PermContactCalendarIcon />} iconPosition="end" />
                            </Grid>
                            <Grid item xs={1}>
                                <Tab icon={<PrintIcon />} iconPosition="end" />
                            </Grid>
                        </Grid>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar