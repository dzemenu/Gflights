import * as React from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface CustomDatePickerProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  label: string;
}

export default function CustomDatePicker({
  value,
  onChange,
  label,
}: CustomDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => onChange(newValue)}
        label={label}
      />
    </LocalizationProvider>
  );
}
