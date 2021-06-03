import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ShadesAnimation from "components/Animations/Shades";
import SummaryAnimation from "components/Animations/Summary";

import MessagesAnimation from "components/Animations/Messages";
import styles from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge";

const useStyles = makeStyles(styles);

export default function SolutionsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>Deep Summary</h1>
          <h3 className={classes.title}>Automatically converts code to plain english</h3>
          <Badge color="info">In Progress</Badge>
          <h4 className={classes.description}>
            Ever wanted to know what code does without reading the code?
            This tool uses deep learning to analyze static code and explain what it does in plain english.
          </h4>
          <Button
              color="primary"
              size="lg"
              href="/solutions/deep-summary"
              style={{marginTop:"20px"}}
          >
            Deep Summary
          </Button>
        </GridItem>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <SummaryAnimation/>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{marginTop: "50px"}}>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <MessagesAnimation/>
        </GridItem>
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>HuriWhakatau</h1>
          <h3 className={classes.title}>A consensus platform for academic research</h3>
          <Badge color="success">Released</Badge> <Badge color="warning">Legacy</Badge>
          <h4 className={classes.description}>
            A consensus platform is like a jury room, where a conclusion must be reached. Think of a discussion
            forum where each question must have an answer, the answer is determined by the participants.
          </h4>
          <Button
              color="primary"
              size="lg"
              href="https://www.huriwhakatau.ac.nz"
              target="_blank"
              style={{marginTop:"20px"}}
          >
            HuriWhakatau
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{marginTop: "50px"}}>
        <GridItem cs={12} sm={6} md={6}>
          <h1 className={classes.title}>Cross Contrast</h1>
          <h3 className={classes.title}>Automatically calculate multiple WCAG colour combinations in realtime</h3>
          <Badge color="success">Released</Badge>
          <h4 className={classes.description}>
            A helpful tool created as a by-product of a postgraduate research project to determine relevant
            usability requirements for a machine learning application called WEKA.
          </h4>
          <Button
              color="primary"
              size="lg"
              href="https://www.crosscontrast.com"
              target="_blank"
              style={{marginTop:"20px"}}
          >
            Cross Contrast
          </Button>
        </GridItem>
        <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
          <ShadesAnimation/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
