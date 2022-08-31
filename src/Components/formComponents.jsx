import React, { Component } from "react";
import { Grid, withStyles, Box, Paper } from "@material-ui/core";
import { Styles } from "./Common/styles";
import {
  RenderText,
  RenderFormTextField,
  RenderFormSelectField,
  RenderFormButton,
} from "./Common/displayComponents";
import propTypes from "prop-types";

class FormComponent extends Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      phonenumber: "",
    },
    error: {},
  };
  render() {
    //  const handleFieldChange = (e) => {
    //    console.log(e.target);
    //  console.log("Name", e.target.name, "Value Is", e.target.value);
    //  };
    const handleFieldChange = ({ target }) => {
      const { data, error } = this.state;

      target.value.trim().length <= 3
        ? (error[target.name] = `${target.name} have at least 3 letter`)
        : (error[target.name] = "");

      data[target.name] = target.value;
      // this.setState({ data: data });
      this.setState({ data, error });
      // this.setState({ error: error });
    };

    //css styling
    const { classes } = this.props;

    //handle Form Submit
    const handleFormSubmit = () => {
      console.log(this.state);
    };

    //gender array
    const options = [
      {
        key: "male",
        value: "Male",
      },
      {
        key: "female",
        value: "Femal",
      },
      {
        key: "other",
        value: "Other",
      },
    ];
    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={4} component={Paper}>
            {/* <Typography> Stepper Works Here</Typography> */}
            {RenderText({ label: "Stepper Works Here" })}
          </Box>
          <Box component={Paper}>
            {/* <Typography> Form Steps</Typography> */}
            <form className={classes.form}>
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
              <pre>{JSON.stringify(this.state.data, undefined, 2)}</pre>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {RenderFormTextField({
                    label: "FirstName",
                    type: "",
                    variant: "outlined",
                    name: "firstname",
                    size: "small",
                    state: this.state,
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
                    state: this.state,
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
              <Grid
                container
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <Grid item xs={12} sm={12}>
                  {RenderFormSelectField({
                    label: "Select Gender",
                    variant: "outlined",
                    size: "small",
                    color: "primary",
                    name: "gender",
                    state: this.state,
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
                    state: this.state,
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
                    state: this.state,
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
            </form>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: propTypes.object.isRequired,
};
export default withStyles(Styles)(FormComponent);
