import React, { Component } from "react";
import { Grid, withStyles, Box, Paper, TextField } from "@material-ui/core";
import { Styles } from "./Common/styles";
import { RenderText, RenderFormField } from "./Common/displayComponents";
import propTypes from "prop-types";

class FormComponent extends Component {
  state = {
    data: {
      firstname: "",
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

    const { classes } = this.props;
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
              <Box>
                {/* <TextField
                  label="FirstName"
                  variant="outlined"
                  name="firstname"
                  fullWidth={true}
                  size="small"
                  value={this.state.data.firstname}
                  onChange={handleFieldChange}
                ></TextField> */}
                {RenderFormField({
                  label: "FirstName",
                  variant: "outlined",
                  name: "firstname",
                  size: "small",
                  state: this.state,
                  // handleFieldChange: handleFieldChange,
                  handleFieldChange,
                })}
              </Box>
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
