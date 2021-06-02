import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import EngineerAnimation from "components/Animations/Engineer";
import ComputerAnimation from "components/Animations/Computer";

import styles from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function LandingSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>Hi, I'm Bill</h1>
          <h3 className={classes.title}>I like to build software.</h3>
          <h4 className={classes.description}>
            I’m a kiwi hailing from the heart of New Zealand.
            I’ve helped create some cools things from cutting-edge storage software used by renowned universities
            through to different flavours of Software as a Service consumed by over 10,000’s of businesses across the planet.
          </h4>
        </GridItem>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
            <EngineerAnimation/>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{marginTop: "50px"}}>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <ComputerAnimation/>
        </GridItem>
        <GridItem cs={12} sm={6} md={6}>
          <h3 className={classes.title}>Checkout my things</h3>
          <h4 className={classes.description}>
            Things are great. Things are supposed to be shared and used. All the things i've worked on can be found as solutions.
          </h4>
          <Button
              color="rose"
              size="lg"
              href="/solutions"
              style={{marginTop:"20px"}}
          >
            View Solutions
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
