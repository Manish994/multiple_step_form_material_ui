import React from "react";
import { Grid } from "@material-ui/core";
import { RenderText, RenderFormTextField } from "../Common/displayComponents";
function Step02({
  state,
  handleFieldChange,
  handleNextButtonClick,
  handlePreviousButtonClick,
  options,
}) {
  return (
    <>
      {RenderText({ label: "Form Component 02" })}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Address",
            type: "",
            variant: "outlined",
            name: "address",
            size: "small",
            state,
            handleFieldChange,
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Step02;
