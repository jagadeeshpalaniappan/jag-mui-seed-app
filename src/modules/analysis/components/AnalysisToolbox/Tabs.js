import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import theme from 'src/theme';

const useStyles = makeStyles(theme => ({
  listItem: {
    color: 'inherit',
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'center',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  listItemSelected: {
    // backgroundColor: theme.palette.background.dark,
    color: theme.palette.primary.main,
    paddingLeft: 0,
    '&.Mui-selected': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main,
      borderLeft: '2px solid'
    },
    '&.Mui-selected&:hover': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main
    }
  },
  icon: {
    color: 'inherit',
    justifyContent: 'center'
  }
}));

export default function Tabs({ selectedTab, onSelect }) {
  const classes = useStyles();
  return (
    <>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => onSelect(text)}
            selected={selectedTab === text}
            classes={{
              root: classes.listItem,
              selected: classes.listItemSelected
            }}
          >
            <ListItemIcon className={classes.icon}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </>
  );
}
