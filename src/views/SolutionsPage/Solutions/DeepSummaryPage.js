import React, {useState} from "react";
import AceEditor from "react-ace";
import Typist from 'react-typist';
import {Animated} from "react-animated-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import summary from "assets/img/summary.png";
import styles from "assets/jss/material-kit-react/views/deepSummaryPage.js";
import Card from "components/Card/Card";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    function onChange(newValue) {
        console.log("change", newValue);
    }

    const deepSummaryExample1 = "const landingContent = () => {\n" +
        " const items = [];\n" +
        " for (let character of featureText) {\n" +
        "  items.push(<div>{character}</div>)\n" +
        "  }\n" +
        " return {items}\n" +
        "};"

    const deepSummaryResult1 = "The code above is the code for landing content. The code will iterate through a list " +
        "of characters and create an array of divs. Each div will have the character inside of it.";

    const [deepSummary, setDeepSummary] = useState("");

    const handleSummarizeClick = () => {
        setDeepSummary(deepSummaryResult1)
    };

    const displayDeepSummary = () => {
        if (deepSummary) {
            return (<Typist avgTypingDelay={20}>{deepSummary}</Typist>)
        }
    };
    return (
        <div>
            <Header
                color="transparent"
                brand="beel.dev"
                rightLinks={<HeaderLinks/>}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax
                small
                filter
                image={require("assets/img/landing-background.png").default}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8}>
                            <Animated animationIn="fadeInUp">
                                <h1 className={classNames(classes.title)}
                                    style={{display: "flex", flexDirection: "row"}}>
                                    Deep Summary
                                </h1></Animated>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={summary} alt="..." className={imageClasses}/>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>Deep Summary Version 1.0.0</p>
                            <p>Initial Build</p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12} style={{marginTop: "60px"}}>
                                <Button color="info" disabled>Example 1</Button>
                                <Button disabled>Example 2</Button>
                                <Button disabled>Example 3</Button>
                                <Button disabled>Example 4</Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={5}>
                                <Animated animationIn="fadeInUp">
                                    <Card style={{minHeight: "425px"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <h3>Code</h3>
                                        </div>
                                        <AceEditor
                                            mode="javascript"
                                            theme="github"
                                            onChange={onChange}
                                            name="UNIQUE_ID_OF_DIV"
                                            editorProps={{$blockScrolling: true}}
                                            style={{margin: "30px 50px"}}
                                            width="unset"
                                            height="300px"
                                            readOnly={true}
                                            value={deepSummaryExample1}
                                            showGutter={false}
                                            fontSize={14}
                                        />
                                    </Card>
                                </Animated>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}
                                      style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Button color="info" onClick={handleSummarizeClick}>
                                    Summarize
                                    <i className="fas fa-arrow-circle-right" style={{marginLeft: "12px"}}/>
                                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={5} style={{marginBottom: "60px"}}>
                                <Animated animationIn="fadeInUp">
                                    <Card style={{minHeight: "425px"}}>
                                        <div style={{display: "flex", justifyContent: "center"}}>
                                            <h3>Deep Summary</h3>
                                        </div>
                                        <div style={{margin: "30px 50px"}}>
                                            {displayDeepSummary()}
                                        </div>
                                    </Card>
                                </Animated>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description} style={{padding:"0 0 60px 0"}}>
                            <p>
                                Deep Summary reads a block of code and automatically it into plain english using
                                AI <br/>
                                OpenAI API - Davinci Engine | Autoregressive Language Model<br/>
                                Version 1 is designed to support React Javascript
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
