import 'date-fns';
import React, { Fragment, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers';

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(
//     new Date("2014-08-18T21:11:54")
//   );

//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <KeyboardDatePicker
//         margin="normal"
//         id="date-picker-dialog"
//         label="Date picker dialog"
//         format="MM/dd/yyyy"
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//           "aria-label": "change date"
//         }}
//       />
//     </MuiPickersUtilsProvider>
//   );
// }

import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';

function InlineDatePickerDemo({ label, ...rest }) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        size="small"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy h:mm:a"
        value={selectedDate}
        InputAdornmentProps={{ position: 'start' }}
        onChange={date => handleDateChange(date)}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
}

export default InlineDatePickerDemo;
