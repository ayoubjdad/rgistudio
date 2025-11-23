import { TextField } from "@mui/material";

export default function Textfield({
  id = Math.random().toString(36).substring(2, 9),
  name,
  type = "text",
  rows,
  required = false,
  multiline = false,
  placeholder,
}) {
  return (
    <TextField
      id={id}
      name={name}
      type={type}
      rows={rows}
      margin="normal"
      variant="outlined"
      required={required}
      fullWidth
      multiline={multiline}
      placeholder={placeholder}
      sx={{
        fontSize: 16,
        color: "black",
        fontWeight: 400,
        borderRadius: multiline ? 6 : 50,
        padding: "10px 20px",
        margin: 0,
        border: "1px solid #1c1e21",
        width: "-webkit-fill-available",
        fontFamily: '"Inter", sans-serif',

        // Target the actual input element
        "& .MuiOutlinedInput-root": {
          padding: 0,
          borderRadius: 50,
          "& fieldset": { border: "none" },
          "& input": { padding: 0 },
        },

        // Hide floating label background
        "& .MuiInputLabel-root": { background: "transparent" },
      }}
    />
  );
}
