import React from "react";
import { Grid } from "@material-ui/core";
import {
  RenderText,
  RenderFormTextField,
  RenderFormSelectField,
  RenderFormButton,
} from "../Common/displayComponents";
function Step02({
  state,
  handleFieldChange,
  handleNextButtonClick,
  handlePreviousButtonClick,
  options_List,
}) {
  // console.log(options_List[1].Country_List);
  //0 year
  //1 country
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
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Salary",
            type: "number",
            variant: "outlined",
            name: "salary",
            size: "small",
            state,
            handleFieldChange,
          })}
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: "10px", marginTop: "10px" }}>
        <Grid item xs={12} sm={12}>
          {RenderFormSelectField({
            label: "Select Country",
            variant: "outlined",
            size: "small",
            color: "primary",
            name: "country",
            state,
            options: options_List[1].Country_List,
            handleFieldChange,
          })}
        </Grid>
      </Grid>
      <Grid container style={{ marginBottom: "10px", marginTop: "10px" }}>
        <Grid item xs={12} sm={6}>
          {RenderFormSelectField({
            label: "Select Year",
            variant: "outlined",
            size: "small",
            color: "primary",
            name: "year",
            state,
            options: options_List[0].Year_List,
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
          label: "Next",
          variant: "outlined",
          handleButtonClick: handleNextButtonClick,
        })}
      </Grid>
    </>
  );
}

export default Step02;
