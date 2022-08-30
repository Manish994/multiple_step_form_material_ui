import React, { Component } from "react";
import { Grid, withStyles, Box, Paper } from "@material-ui/core";
import { Styles } from "./Common/styles";
import { RenderText } from "./Common/displayComponents";
import propTypes from "prop-types";

class FormComponent extends Component {
  render() {
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
