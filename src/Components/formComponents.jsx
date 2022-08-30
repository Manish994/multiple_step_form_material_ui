import React, { Component } from "react";
import { Grid, withStyles, Box, Paper, Typography } from "@material-ui/core";
import { Styles } from "./Common/styles";
import propTypes from "prop-types";

class FormComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            <Typography> Stepper Works Here</Typography>
          </Box>
          <Box>
            <Typography> Form Steps</Typography>
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
