import React from "react";
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
import Parallax from "components/Parallax/Parallax.js";
import Anime from 'react-anime';
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import {useState, useEffect} from "react";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const landingTextOptions = ["Developer", "Engineer", "Architect"];
    const [featureText, setFeatureText] = useState("Developer");
    const [featureTextIndex, setFeatureTextIndex] = useState(0);

    const landingContent = () => {
        const items = [];
        for (let character of featureText) {
            items.push(<div>{character}</div>)
        }
        return (<Anime easing="easeInExpo"
                       duration={600}
                       delay={(el, i) => i * 60}
                       opacity={[0, 1]}
                       scale={[0.3, 1]}
        >{items}</Anime>)
    };

    useEffect(() => {
        const featureTextTimer = setTimeout(() => {
            setFeatureText("");
            setTimeout(()=>{
                setFeatureTextIndex((featureTextIndex + 1) % 3);
                setFeatureText(landingTextOptions[(featureTextIndex + 1) % 3]);
            },5)
        },3500);
        return () => clearTimeout(featureTextTimer)
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
                        <GridItem xs={12} sm={12} md={8}>
                            <h1 className={classNames(classes.title)} style={{display: "flex", flexDirection: "row"}}>
                                {landingContent()}
                            </h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main)}>
                <div className={classes.container}>
                    <ProductSection/>
                    <TeamSection/>
                    <WorkSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
