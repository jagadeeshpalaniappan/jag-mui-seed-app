import { makeStyles } from '@material-ui/core';
import React, { Suspense } from 'react';
import Page from 'src/modules/app/components/Page';

// import AdhocAnalysis from './AdhocAnalysis';
const AdhocAnalysis = React.lazy(() => import('./AdhocAnalysis'));

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Analysis">
      <Suspense fallback={<div>Anaysis Module Loading...</div>}>
        <AdhocAnalysis />
      </Suspense>
    </Page>
  );
};

export default ProductList;
