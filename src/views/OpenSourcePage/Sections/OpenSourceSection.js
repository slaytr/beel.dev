import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import uowLogo from "assets/img/uow-logo.jpg"
import slsLogo from "assets/img/sls.png"
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
import {Animated} from "react-animated-css";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(styles);

export default function OpenSourceSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={8} md={8}>
                    <h1 className={classes.title}>Serverless Framework</h1>
                    <h3 className={classes.title}>A framework used to quickly build cloud applications and
                        infrastructure - Commerical</h3>
                    <h4 className={classes.description}>
                        As a huge advocate of serverless technology, I drove the initiative at Rocketspark to leverage
                        serverless framework to construct their cloud infrastructure. I loved it so much and wanted to
                        help
                        others have a smoother experience so I worked to publish a serverless example which is now
                        officially recognised.
                    </h4>
                    <Button
                        color="primary"
                        href="https://www.serverless.com/"
                        style={{marginTop: "20px", marginRight: "20px"}}
                        round="true"
                    >
                        More Info
                    </Button>
                    <Button
                        color="primary"
                        href="https://github.com/serverless/examples"
                        style={{marginTop: "20px",  marginRight: "20px"}}
                        round="true"
                    >
                        Github Repo
                    </Button>
                    <Button
                        color="primary"
                        href="https://github.com/slaytr/aws-node-screenshot-to-s3"
                        style={{marginTop: "20px"}}
                        round="true"
                    >
                        Contribution
                    </Button>
                </GridItem>
                <Hidden xsDown>
                    <GridItem cs={12} sm={4} md={4} className={classes.imgContainer}>
                        <img src={slsLogo}
                             style={{maxWidth: "300px", width: "auto", height: "auto", maxHeight: "300px"}}/>
                    </GridItem>
                </Hidden>
            </GridContainer>
            <GridContainer justify="center" style={{marginTop: "50px"}}>
                <Hidden xsDown>
                    <GridItem cs={12} sm={6} md={6} className={classes.imgContainer}>
                        <img src={uowLogo}
                             style={{maxWidth: "300px", width: "auto", height: "auto", maxHeight: "400px"}}/>
                    </GridItem>
                </Hidden>
                <GridItem cs={12} sm={6} md={6}>
                    <Animated animationIn="fadeInUp">
                        <h1 className={classes.title}>WEKA</h1>
                        <h3 className={classes.title}>Waikato Environment for Knowledge Analysis - University of
                            Waikato</h3>
                        <h4 className={classes.description}>
                            WEKA is a machine learning application used by professionals, researchers and students. Over
                            a period of 6
                            months I researched methods and implemented changes to improve the appeal of the application
                            to a larger audience.
                        </h4>
                        <Button
                            color="primary"
                            href="https://www.cs.waikato.ac.nz/ml/weka/"
                            target="_blank"
                            round="true"
                            style={{marginTop: "20px",  marginRight: "20px"}}
                        >
                            More Info
                        </Button>
                        <Button
                            color="primary"
                            href="https://github.com/Waikato/weka-3.8"
                            target="_blank"
                            round="true"
                            style={{marginTop: "20px",  marginRight: "20px"}}
                        >
                            Github Repo
                        </Button>
                        <Button
                            color="primary"
                            href="https://github.com/slaytr/weka-3.8/tree/themes"
                            target="_blank"
                            round="true"
                            style={{marginTop: "20px"}}
                        >
                            Contribution
                        </Button>
                    </Animated>
                </GridItem>
            </GridContainer>
        </div>
    );
}
