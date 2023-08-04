import "./styles.css"
import { Card, CardContent, TextField, Typography, styled } from "@mui/material";
import React from "react";



const useStyles = styled({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details() {
  const classes = useStyles();
  const bull = <span style={{ display: "inline-block",
  margin: "0 2px",
  transform: "scale(0.8)"}} 
  // className={classes.bullet}
  >•</span>;

  return (
    <Card 
    // className={classes.root}
     style={{ minWidth: 400,
      margin: "20px"}} >
      <CardContent >
        <Typography
          // className={classes.title}
             style={{fontSize: 14,}}
             color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Enter Your Details
        </Typography>
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          // className={classes.text}
          style={{width: 350,
            margin: "10px"}}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          multiline
          rows={4}
          // className={classes.text}
          style={{width: 350,
            margin: "10px"}}
        />
      </CardContent>
    </Card>
  );
}
