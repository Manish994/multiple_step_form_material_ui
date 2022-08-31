import React, { Component } from "react";
import { Grid, withStyles, Box, Paper } from "@material-ui/core";
import { Styles } from "./Common/styles";
import { RenderText } from "./Common/displayComponents";
import propTypes from "prop-types";
import Step01 from "./Steps/step01";

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
      console.log(this.state.data);
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
              <Step01
                state={this.state}
                handleFieldChange={handleFieldChange}
                handleFormSubmit={handleFormSubmit}
                options={options}
              ></Step01>
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
