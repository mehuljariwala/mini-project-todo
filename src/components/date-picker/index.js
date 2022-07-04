import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DateTSelecter = ({ initialDate, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} size="small" fullWidth />}
        value={initialDate || new Date()}
        onChange={(newValue) => onChange(newValue)}
      />
    </LocalizationProvider>
  );
};
export default DateTSelecter;
