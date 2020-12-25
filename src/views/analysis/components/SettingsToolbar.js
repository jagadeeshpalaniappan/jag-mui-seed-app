import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AttachFile as AttachFileIcon,
  Favorite as FavoriteIcon,
  Flag as FlagIcon,
  Share as ShareIcon,
  Sync as SyncIcon
} from '@material-ui/icons';
import React from 'react';
import DatePicker from './DatePicker';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.background.dark,

    position: 'sticky',
    top: 0,
    left: 'auto',
    right: 0
  },
  datePicker: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

const SettingsToolbar = ({ pinned }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box flexGrow={1} display="flex">
        <DatePicker label="Start Date" classes={{ root: classes.datePicker }} />
        <DatePicker label="End Date" classes={{ root: classes.datePicker }} />
        <Button color="inherit">Apply</Button>
      </Box>

      <IconButton color="inherit">
        <AttachFileIcon />
      </IconButton>
      <IconButton color="inherit">
        <FlagIcon />
      </IconButton>
      <IconButton color="inherit">
        <ShareIcon />
      </IconButton>
      <IconButton color="inherit">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="inherit">
        <SyncIcon />
      </IconButton>
    </div>
  );
};

export default SettingsToolbar;
