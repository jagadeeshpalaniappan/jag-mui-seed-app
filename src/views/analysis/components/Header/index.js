import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AssetTemplateBreadcrumb from './AssetTemplateBreadcrumb';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function AnalysisHeader() {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" py={2}>
      <Box flexGrow={1}>
        <AssetTemplateBreadcrumb />
        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Send
        </Button>
        */}
      </Box>

      <Box>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}
