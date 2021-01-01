import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoIcon from '@material-ui/icons/Info';
import { tileData } from 'src/data/imageTiles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
    // padding: theme.spacing(1)
  },
  gridList: {
    // width: 500,
    // height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const cols = isDesktop ? 4 : isTablet ? 2 : 1;

  return (
    <div className={classes.root}>
      <GridList cols={cols} cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
