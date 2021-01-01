import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Tabs from './Tabs';
import Accordian from './Accordian';

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    height: '100%'
    // borderLeft: `1px solid rgba(0, 0, 0, 0.12)`
  },
  tabContainer: {
    flexGrow: 1,
    width: 300,
    // backgroundColor: theme.palette.background.paper,
    borderLeft: `1px solid ${theme.palette.background.dark}`
    // backgroundColor: theme.palette.background.level2
    // bac,kgroundColor: theme.palette.grey[200]
  },
  tabContainerTitle: {
    color: 'inherit',
    padding: theme.spacing(1.5)
  }
}));

function AnalysisToolbox({
  selectedTab,
  opened,
  onTabSelect,
  onToolboxToggle
}) {
  const classes = useStyles();
  const theme = useTheme();
  console.log('AnalysisToolbox', { theme });
  return (
    <div className={classes.root}>
      <Box maxWidth={50}>
        <Tabs selectedTab={selectedTab} onSelect={onTabSelect} />
      </Box>
      <Box className={classes.tabContainer} display={opened ? null : 'none'}>
        <Typography variant="h5" noWrap className={classes.tabContainerTitle}>
          {selectedTab}
        </Typography>
        <Accordian />
      </Box>
    </div>
  );
}
export default AnalysisToolbox;
