import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// react-anime animations
import Anime from 'react-anime';
// @material-ui/icons

// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/ShortParallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SolutionsSection from "./Sections/SolutionsSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SolutionsPage(props) {
    const classes = useStyles();
    const {...rest} = props;

    const landingContent = () => {
        const items = [];
        for (let character of "Solutions") {
            items.push(<div>{character}</div>)
        }
        return (<Anime easing="easeInExpo"
                       duration={300}
                       delay={(el, i) => i * 60}
                       opacity={[0, 1]}
                       scale={[0.8, 1]}
        >{items}</Anime>)
    };

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
                        <GridItem xs={12} sm={12} md={8}>
                            <h1 className={classNames(classes.title)} style={{display: "flex", flexDirection: "row"}}>
                                {landingContent()}
                            </h1>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            <h4 className={classes.description}>
                                Things, all the things that do stuff
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main)}>
                <div className={classes.container}>
                    <SolutionsSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
