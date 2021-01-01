import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  IconButton
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/modules/app/components/Page';
import MenuIcon from '@material-ui/icons/Menu';
import AnalysisTab from '../../components/AnalysisTab';
import ChartsList from '../../components/ChartsList';
import DrawerLayout from '../../components/DrawerLayout';
import AnalysisToolbox from '../../components/AnalysisToolbox';
import Header from '../../components/Header';
import AnalysisMain from '../../components/AnalysisMain';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%'
  },
  productCard: {
    height: '100%'
  }
}));

const Main = ({ onTabBrowserToggle }) => {
  return (
    <>
      <Header />
      <AnalysisTab />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onTabBrowserToggle}
      >
        <MenuIcon />
      </IconButton>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </>
  );
};

const ProductList = () => {
  const classes = useStyles();
  const [toolboxOpened, setToolboxOpened] = useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = useState('Inbox');
  const handleDrawerToggle = () => {
    console.log('handleDrawerToggle', mobileOpen);
    setMobileOpen(!mobileOpen);
  };
  const handleToolboxToggle = () => {
    console.log('handleToolboxToggle', toolboxOpened);
    setToolboxOpened(!toolboxOpened);
  };
  const handleTabSelect = tab => {
    console.log('handleTabSelect', tab);
    if (tab === selectedTab) handleToolboxToggle();
    setSelectedTab(tab);
  };

  return (
    <>
      <DrawerLayout
        opened={mobileOpen}
        onTabBrowserToggle={handleDrawerToggle}
        toolboxOpened={toolboxOpened}
        onToolboxToggle={handleToolboxToggle}
        main={<AnalysisMain onTabBrowserToggle={handleDrawerToggle} />}
        main1={
          <>
            <AnalysisTab />
            <ChartsList />
          </>
        }
        drawer={
          <AnalysisToolbox
            opened={toolboxOpened}
            selectedTab={selectedTab}
            onTabSelect={handleTabSelect}
          />
        }
        mobiledrawer={
          <AnalysisToolbox
            opened
            selectedTab={selectedTab}
            onTabSelect={handleTabSelect}
          />
        }
      />
    </>
  );
};

export default ProductList;
