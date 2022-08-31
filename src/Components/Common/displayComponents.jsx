import { Typography, TextField, MenuItem, Button } from "@material-ui/core";

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

const RenderFormTextField = ({
  type,
  label,
  color,
  state,
  variant,
  size,
  name,
  handleFieldChange,
}) => {
  const { data, error } = state;
  return (
    <TextField
      label={label ? label : ""}
      type={type ? type : ""}
      color={color ? color : "primary"}
      variant={variant ? variant : "outlined"}
      fullWidth={true}
      size={size ? size : "small"}
      name={name}
      value={data[name]}
      onChange={handleFieldChange}
      error={error[name] ? true : false}
      helperText={error[name]}
      autoComplete="off"
    ></TextField>
  );
};

const RenderFormSelectField = ({
  label,
  color,
  state,
  variant,
  size,
  name,
  handleFieldChange,
  options,
}) => {
  const { data, error } = state;
  return (
    <TextField
      select
      label={label ? label : ""}
      variant={variant ? variant : "outlined"}
      size={size ? size : "small"}
      fullWidth={true}
      color={color ? color : "primary"}
      name={name}
      value={data[name]}
      onChange={handleFieldChange}
      error={error[name] ? true : false}
      helperText={error[name]}
    >
      {options.map((item, index) => (
        <MenuItem key={index} value={item.key}>
          {item.value}
        </MenuItem>
      ))}
    </TextField>
  );
};

const RenderFormButton = ({ label, variant, handleNextButtonClick }) => (
  <Button
    variant={variant ? variant : "outlined"}
    onClick={handleNextButtonClick}
  >
    {label}
  </Button>
);

export {
  RenderText,
  RenderFormTextField,
  RenderFormSelectField,
  RenderFormButton,
};
