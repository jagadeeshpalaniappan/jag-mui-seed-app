import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  desktopDrawer: {
    height: '100%'
  },
  drawer: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      // width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  sideDrawer: {
    width: drawerWidth
  },
  sideDrawerClosed: {
    width: 50
  },
  content: {
    flexGrow: 1,
    height: '100%',
    overflowY: 'auto'
  }
}));

function ResponsiveDrawer(props) {
  const {
    window,
    main,
    drawer,
    mobiledrawer,
    opened,
    toolboxOpened,
    onTabBrowserToggle
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <main className={classes.content}>{main}</main>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={opened}
            onClose={onTabBrowserToggle}
            classes={{
              paper: classes.sideDrawer
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {mobiledrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css" className={classes.desktopDrawer}>
          {drawer}
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
