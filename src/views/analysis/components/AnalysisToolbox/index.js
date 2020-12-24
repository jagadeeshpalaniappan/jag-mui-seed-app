import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Tabs from './Tabs';

function AnalysisToolbox() {
  const [selectedTab, setSelectedTab] = useState('one');
  const handleSelect = tab => {
    setSelectedTab(tab);
  };
  return (
    <Box display="flex" height="100%">
      <Box maxWidth={50}>
        <Tabs onSelect={handleSelect} />
      </Box>
      <Box flexGrow={1}>...{selectedTab}...</Box>
    </Box>
  );
}
export default AnalysisToolbox;
