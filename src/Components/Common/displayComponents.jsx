import { Typography } from "@material-ui/core";

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

export { RenderText };
