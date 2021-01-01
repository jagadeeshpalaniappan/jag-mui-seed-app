import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AnalysisTab from './AnalysisTab';
import AppToolbar from './AppToolbar';
import ChartCard from './ChartCard';
import Header from './Header';
import LineChart from './LineChart';
import SettingChipList from './SettingChipList';
import SettingsToolbar from './SettingsToolbar';
import SettingsModal from './SettingsModal';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));
export default function AnalysisMain({ onTabBrowserToggle }) {
  const classes = useStyles();
  const [pinSettingsMenu, setPinSettingsMenu] = useState(true);

  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsOpen = () => {
    setOpenSettings(true);
  };
  const handleSettingsClose = () => {
    setOpenSettings(false);
  };
  const handleSettingsOk = settings => {
    console.log('handleSettingsOk: settings:', settings);
    setOpenSettings(false);
  };

  const leftConfig = {
    width: 60
  };

  const toggleSettingsMenu = () => {
    setPinSettingsMenu(!pinSettingsMenu);
  };
  return (
    <div>
      {/* <Header /> */}

      {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onTabBrowserToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton> */}

      <AppToolbar
        toggleDrawer={null}
        pinSettingsMenu={pinSettingsMenu}
        toggleSettingsMenu={handleSettingsOpen}
      />
      <AnalysisTab />
      <SettingsToolbar pinned={pinSettingsMenu} />
      <Box p={3}>
        <SettingChipList />
        <Grid container spacing={4}>
          <Grid item lg={3} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
          <Grid item lg={3} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
          <Grid item lg={3} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
          <Grid item lg={3} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>

          <Grid item lg={6} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>

          <Grid item lg={12} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ChartCard chart={<LineChart />} />
          </Grid>
        </Grid>
      </Box>
      <SettingsModal
        open={openSettings}
        onOk={handleSettingsOk}
        onClose={handleSettingsClose}
      />
    </div>
  );
}
