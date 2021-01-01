import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Page from 'src/modules/app/components/Page';
import ImageGridListAdv from '../../components/ImageGridListAdv';
import ImageGridList from '../../components/ImageGridList';
import ImageTitlebar from '../../components/ImageTitlebar';
import PhotoTab from './PhotoTab';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const PhotoTabContainer = ({ selectedTab }) => {
  switch (selectedTab) {
    case 0:
      return <ImageTitlebar />;
    case 1:
      return <ImageGridList />;
    case 2:
      return <ImageGridListAdv />;
    default:
      return <Typography>Tab Default</Typography>;
  }
};

const PhotoIndexView = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Page className={classes.root} title="Photos">
      <PhotoTab selectedTab={selectedTab} onChange={handleChange} />
      <Container maxWidth={false}>
        <PhotoTabContainer selectedTab={selectedTab} />
      </Container>
    </Page>
  );
};

export default PhotoIndexView;
