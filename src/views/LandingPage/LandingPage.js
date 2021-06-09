import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/LandingParallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import LandingSection from "./Sections/LandingSection";
import Typist from "react-typist";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const [featureContent, setFeatureContent] = useState((<Typist cursor={{show: false}}>Develop</Typist>));
    const [featureIndex, setFeatureIndex] = useState(0);
    const featureTitleOptions = ["Architect", "Engineer", "Develop"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setFeatureContent("");
            const newIndex = (featureIndex+1)%3;
            setFeatureIndex(newIndex);
            setFeatureContent(<Typist cursor={{show: false}}>{featureTitleOptions[newIndex]}</Typist>)
        }, 3000);
        return () => clearTimeout(timer)
    });

    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="beel.dev"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax filter image={require("assets/img/landing-background.png").default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h1 className={classNames(classes.title)} style={{display: "flex", flexDirection: "row"}}>
                                {featureContent}
                            </h1>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            <h4 className={classes.description}>
                                beel.dev is a hub for research, projects and more...
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main)}>
                <div className={classes.container}>
                    <LandingSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
