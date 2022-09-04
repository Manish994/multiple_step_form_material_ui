import React, { Component } from "react";
import {
  Grid,
  withStyles,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { Styles } from "./Common/styles";
import { RenderText } from "./Common/displayComponents";
import propTypes from "prop-types";
import Step01 from "./Steps/step01";
import Step02 from "./Steps/step02";
import Step03 from "./Steps/step03";
import Finished from "./Steps/finished";

class FormComponent extends Component {
  state = {
    data: {
      //step01
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      phonenumber: "",

      //step02
      address: "",
      country: "",
      salary: "",

      //step03
      year: "",
      location: "",
      drink: "",
    },
    error: {},
    currentstep: 0,
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

    //handle Next Button Click
    //increase stepper step
    const handleNextButtonClick = () => {
      let { currentstep } = this.state;
      currentstep = currentstep + 1;
      // this.setState({ currentstep: currentstep });
      this.setState({ currentstep });
    };

    //decrease stepper step
    const handlePreviousButtonClick = () => {
      let { currentstep } = this.state;
      currentstep = currentstep - 1;
      // this.setState({ currentstep: currentstep });
      this.setState({ currentstep });
    };

    //gender array
    const options = [
      {
        key: "male",
        value: "Male",
      },
      {
        key: "female",
        value: "Female",
      },
      {
        key: "other",
        value: "Other",
      },
    ];

    //gender array
    const yearOptions = [
      {
        key: "1",
        value: "2000",
      },
      {
        key: "2",
        value: "2003",
      },
      {
        key: "3",
        value: "2004",
      },
      {
        key: "4",
        value: "2008",
      },
      {
        key: "5",
        value: "2010",
      },
    ];
    const stepperStep = [
      { key: "01", value: "STEP 01" },
      { key: "02", value: "STEP 02" },
      { key: "03", value: "STEP 03" },
    ];
    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={5} component={Paper}>
            <Stepper activeStep={this.state.currentstep} alternativeLabel>
              {stepperStep.map((item, index) => (
                <Step key={index}>
                  <StepLabel>{item.value}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
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
                handleNextButtonClick={handleNextButtonClick}
                options={options}
              ></Step01>
              <Step02
                state={this.state}
                handleFieldChange={handleFieldChange}
                handleNextButtonClick={handleNextButtonClick}
                handlePreviousButtonClick={handlePreviousButtonClick}
                options={yearOptions}
              ></Step02>
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
