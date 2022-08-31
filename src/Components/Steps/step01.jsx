import React from "react";
import { Grid } from "@material-ui/core";
import {
  RenderText,
  RenderFormTextField,
  RenderFormSelectField,
  RenderFormButton,
} from "../Common/displayComponents";

function Step01({ options, state, handleFieldChange, handleFormSubmit }) {
  return (
    <>
      {RenderText({ label: "Form Componet Step 01" })}

      {/* <Box> */}
      {/* <TextField
    label="FirstName"
    variant="outlined"
    name="firstname"
    fullWidth={true}
    size="small"
    value={this.state.data.firstname}
    onChange={handleFieldChange}
  ></TextField> */}
      {/* {RenderFormField({
    label: "FirstName",
    variant: "outlined",
    name: "firstname",
    size: "small",
    state: this.state,
    // handleFieldChange: handleFieldChange,
    handleFieldChange,
  })} */}
      {/* </Box> */}
      <pre>{JSON.stringify(state.data, undefined, 2)}</pre>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "FirstName",
            type: "",
            variant: "outlined",
            name: "firstname",
            size: "small",
            state,
            // state: this.state,
            // handleFieldChange: handleFieldChange,
            handleFieldChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "LastName",
            type: "",
            variant: "outlined",
            name: "lastname",
            size: "small",
            state,
            // state: this.state,
            // handleFieldChange: handleFieldChange,
            handleFieldChange,
          })}
        </Grid>
      </Grid>
      {/* <Grid
  container
  style={{ marginBottom: "10px", marginTop: "10px" }}
>
  <Grid item xs={12} sm={12}>
    <TextField
      select
      label="Select Gender"
      variant="outlined"
      color="primary"
      name="gender"
      fullWidth={true}
      size="small"
      value={this.state.data.gender}
      onChange={handleFieldChange}
    >
      {options.map((item, index) => {
        return (
          <MenuItem key={index} value={item.key}>
            {item.value}
          </MenuItem>
        );
      })}
    </TextField>
  </Grid>
</Grid> */}
      <Grid container style={{ marginBottom: "10px", marginTop: "10px" }}>
        <Grid item xs={12} sm={12}>
          {RenderFormSelectField({
            label: "Select Gender",
            variant: "outlined",
            size: "small",
            color: "primary",
            name: "gender",
            state,
            // state: this.state,
            handleFieldChange,
            options,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Email",
            type: "",
            name: "email",
            color: "primary",
            variant: "outlined",
            size: "small",
            state,
            // state: this.state,
            handleFieldChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {RenderFormTextField({
            label: "Phone Number",
            type: "Number",
            color: "primary",
            variant: "outlined",
            size: "small",
            name: "phonenumber",
            handleFieldChange,
            state,
            // state: this.state,
          })}
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginBottom: "10px", marginTop: "10px" }}
        justifyContent="flex-end"
      >
        {/* <Button variant="outlined" onClick={handleFormSubmit}>Next</Button> */}
        {RenderFormButton({
          label: "Next",
          variant: "outlined",
          handleFormSubmit,
        })}
      </Grid>
    </>
  );
}

export default Step01;
