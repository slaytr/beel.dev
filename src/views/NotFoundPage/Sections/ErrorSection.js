import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.js";
import Button from "components/CustomButtons/Button.js";
import ErrorAnimation from "components/Animations/Error";

const useStyles = makeStyles(styles);

export default function ErrorSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>Lost?</h1>
          <h3 className={classes.title}>Try backspace</h3>
          <h4 className={classes.description}>
            Otherwise if you click this button below enough times, you might start thinking it does something like me
          </h4>
          <Button
              color="primary"
              size="lg"
              style={{marginTop:"20px"}}
          >
            Not a Button
          </Button>
        </GridItem>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <ErrorAnimation/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
