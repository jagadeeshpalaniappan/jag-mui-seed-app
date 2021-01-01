import React, { useState } from "react";
import { Box, Chip, ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Today as TodayIcon,
  Favorite as FavoriteIcon,
  Done as DoneIcon
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  chip: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const SettingChipList = () => {
  const classes = useStyles();
  const handleDelete = () => {
    console.log("handleDelete");
  };
  const handleClick = () => {
    console.log("handleClick");
  };

  const [layout, setLayout] = useState(1);
  const changeLayout = layout => {
    console.log("changeLayout", layout);
    setLayout(layout);
  };
  return (
    <Box py={2} display="flex" justifyContent="flex-start">
      <Box display="flex" flexGrow={1}>
        {/*
          <Chip
              icon={<TodayIcon />}
              label="04/06/2020 12:10 to 04/12/2020 12:10"
              onClick={handleClick}
            />
        */}

        <Chip
          icon={<FavoriteIcon />}
          size="small"
          label="SOM: SI"
          onClick={handleClick}
          onDelete={handleDelete}
          classes={{ root: classes.chip }}
        />
        <Chip
          icon={<FavoriteIcon />}
          size="small"
          label="Filter 1"
          onClick={handleClick}
          onDelete={handleDelete}
          classes={{ root: classes.chip }}
        />

        <Chip
          icon={<FavoriteIcon />}
          size="small"
          label="Filter 2"
          onClick={handleClick}
          onDelete={handleDelete}
          classes={{ root: classes.chip }}
        />
        <Chip
          icon={<FavoriteIcon />}
          size="small"
          label="Filter 3"
          onClick={handleClick}
          onDelete={handleDelete}
          classes={{ root: classes.chip }}
        />
        <Chip
          label="Filter 4"
          size="small"
          deleteIcon={<DoneIcon />}
          onClick={handleClick}
          onDelete={handleDelete}
          classes={{ root: classes.chip }}
        />
      </Box>

      <Box>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button
            color={layout === 1 ? "primary" : "default"}
            onClick={() => changeLayout(1)}
          >
            1
          </Button>
          <Button
            color={layout === 2 ? "primary" : "default"}
            onClick={() => changeLayout(2)}
          >
            2
          </Button>
          <Button
            color={layout === 3 ? "primary" : "default"}
            onClick={() => changeLayout(3)}
          >
            3
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SettingChipList;
