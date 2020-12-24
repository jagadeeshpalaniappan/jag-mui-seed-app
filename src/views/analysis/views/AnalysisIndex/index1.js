import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import AnalysisTab from '../../components/AnalysisTab';
import ChartsList from '../../components/ChartsList';

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

const ProductList = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Products">
      <AnalysisTab />
      <ChartsList />
    </Page>
  );
};

export default ProductList;
