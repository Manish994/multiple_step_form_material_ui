import { Typography, TextField } from "@material-ui/core";

const RenderText = ({ label, color, align, variant, component }) => {
  return (
    <Typography
      color={color ? color : "primary"}
      align={align ? align : "center"}
      variant={variant ? variant : "h6"}
    >
      {label}
    </Typography>
  );
};

const RenderFormField = ({
  label,
  color,
  state,
  variant,
  size,
  name,
  handleFieldChange,
}) => {
  const { data } = state;
  return (
    <TextField
      label={label ? label : ""}
      color={color ? color : "primary"}
      variant={variant ? variant : "outlined"}
      fullWidth={true}
      size={size ? size : "sm"}
      name={name}
      value={data[name]}
      onChange={handleFieldChange}
    ></TextField>
  );
};

export { RenderText, RenderFormField };
