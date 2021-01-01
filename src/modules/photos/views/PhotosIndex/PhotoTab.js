import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles(theme => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
    minHeight: 30,
    marginBottom: theme.spacing(3)
  },
  indicator: {
    backgroundColor: '#1890ff'
  }
}))(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    minHeight: 30,
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff'
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7'
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: '#2e1534'
  }
}));

export default function CustomizedTabs({ selectedTab, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AntTabs value={selectedTab} onChange={onChange} aria-label="ant example">
        <AntTab label="Tab 0" />
        <AntTab label="Tab 1" />
        <AntTab label="Tab 2" />
      </AntTabs>
    </div>
  );
}
