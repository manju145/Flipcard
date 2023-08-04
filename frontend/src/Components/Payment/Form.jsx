import React from "react";
import "./styles.css"
import {
  AppBar, Button, CardContent,
  Grid, Step, StepLabel,
  Stepper, Toolbar, Typography, Card,
  styled} from "@mui/material";
import PaymentMode from "./PaymentMode";
import Details from "./Details";
import PayCard from "./PayCard";
import Success from "./Success";
import { useNavigate } from 'react-router-dom';

const Instructions = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

const ButtonCom = styled(Button)(({ theme }) => ({
 color:"white",
  marginTop:"3px",
  padding:"2px",
  fontSize:"16px",
  backgroundColor:"#808080",
  fontWeight:500,
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))

const useStyles = styled((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
    
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <PaymentMode />;
    case 2:
      return <PayCard />;
    case 3:
      return <Success />;
    default:
      return "Unknown step";
  }
}

export default function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const navigate = useNavigate();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate('/')
    };

  return (
    <div style={{    width: "100%",
    height: "50vw",

     }} >
      <Grid container direction="row" justify="center" alignItems="center" > 
        <Grid item xs={6} >
          <Card variant="outlined"    style={{marginTop: "6%" ,border:"0px solid red"}} >
            <CardContent >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <AppBar
                    position="static"
                    style={{ background: "#2E3B55", alignItems: "center" }}
                  >
                    <Toolbar>
                      <img
                        src="https://nikhilsahu.me/favicon.png"
                        style={{ height: 30 }}
                        alt="logo"
                        className={classes.logo}
                      />
                    </Toolbar>
                  </AppBar>
                </Grid>
                <Grid item xs={12} style={{padding:"10px", marginTop:"15px",marginBottom:"10px",border:"0px solid red"}}>
                  <Stepper activeStep={activeStep} 
                  // className={classes.stepper}
                  style={{ iconColor: "#2E3B55"}}
                  >
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Grid>
                <Grid item xs={12} >
                  <div 
                  // className={classes.actions}
                  style={{ display: "flex",
                  justifyContent: "center",
                  alignItems: "center"}}
                  >
                    {activeStep === steps.length ? (
                      <div>
                        <Instructions
                          // className={classes.instructions}
                          // style={{  marginTop: theme.spacing(1),
                          //   marginBottom: theme.spacing(1)}}
                        ></Instructions>
                        <ButtonCom 
                          onClick={handleReset}
                          // className={classes.button}
                          // style={{ marginRight: theme.spacing(1)}}
                        >
                          Home
                        </ButtonCom>
                      </div>
                    ) : (
                      <div>
                        <Instructions
                          // className={classes.instructions}
                          // style={{ height: "350px", marginTop: theme.spacing(1),
                          //   marginBottom: theme.spacing(1)}}
                          style={{ height: "350px" }}
                        >
                          {getStepContent(activeStep)}
                          <br />
                        </Instructions>
                        <div 
                        // className={classes.actions}
                         style={{ display: "flex",
                         justifyContent: "center",
                         alignItems: "center", gap:"15px"}}
                        >
                          <ButtonCom
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            // className={classes.button}
                            // style={{  marginRight: theme.spacing(1)}}
                          >
                            Back
                          </ButtonCom>

                          <ButtonCom

                            variant="contained"
                            style={{ background: "#2E3B55", color: "#ffffff"
                             }}
                            onClick={handleNext}
                            // className={classes.button}
                        
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </ButtonCom>
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
