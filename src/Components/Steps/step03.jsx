import React from "react";
import { Grid } from "@material-ui/core";
import {
  RenderText,
  RenderFormTextField,
  RenderFormButton,
} from "../Common/displayComponents";

const Step03 = ({
  state,
  handleFieldChange,
  handleNextButtonClick,
  handlePreviousButtonClick,
}) => {
  return (
    <>
      {RenderText({
        label: "Form Component 03",
      })}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Location",
            type: "",
            color: "primary",
            variant: "outlined",
            size: "small",
            name: "location",
            state,
            handleFieldChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Drink",
            type: "",
            color: "primary",
            variant: "outlined",
            size: "small",
            name: "drink",
            state,
            handleFieldChange,
          })}
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "10px" }}
        spacing={3}
        justifyContent="flex-end"
      >
        {RenderFormButton({
          label: "Previous",
          variant: "outlined",
          handleButtonClick: handlePreviousButtonClick,
        })}
        {RenderFormButton({
          label: "Finished",
          variant: "outlined",
          handleButtonClick: handleNextButtonClick,
        })}
      </Grid>
    </>
  );
};

export default Step03;
