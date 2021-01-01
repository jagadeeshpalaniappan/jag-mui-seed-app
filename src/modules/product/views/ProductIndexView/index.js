import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Page from 'src/modules/app/components/Page';
import data from '../../data';
import ProductList from './ProductList';
import ProductsTab from './ProductsTab';

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

const ProductsTabContainer = ({ selectedTab }) => {
  switch (selectedTab) {
    case 0:
      return <ProductList />;
    case 1:
      return <Typography>Tab 1</Typography>;
    default:
      return <Typography>Tab Default</Typography>;
  }
};

const ProductIndexView = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Page className={classes.root} title="Products">
      <ProductsTab selectedTab={selectedTab} onChange={handleChange} />
      <Container maxWidth={false}>
        <ProductsTabContainer selectedTab={selectedTab} />
      </Container>
    </Page>
  );
};

export default ProductIndexView;
