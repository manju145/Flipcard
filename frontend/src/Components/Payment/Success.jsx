import React from "react";
import "./styles.css"
import succlogo from "../../assets/animat-checkmark.gif";
import { Card, CardContent, 
  Typography, styled } from "@mui/material";


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
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
  img: { width: "200px" },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Success() {
  const classes = useStyles();

  const bull = <span 
  // className={classes.bullet}
  style={{ display: "inline-block",
  margin: "0 2px",
  transform: "scale(0.8)"}}
  >•</span>;

  return (
    <Card
    //  className={classes.root}
    style={{  minWidth: 400,
      margin: "20px"}}
    >
      <CardContent>
        <div 
        // className={classes.con}
        style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center"}}
        >
          <img src={succlogo} alt="loading..." 
          // className={classes.img} 
          style={{width: "200px"}}
          />
        </div>
        <Typography
          // className={classes.title}
          style={{ fontSize: 14,
            textAlign: "center"}}
          variant="h2"
          color="success"
          gutterBottom
        >
          <b> Order Confirmed </b>
        </Typography>
      </CardContent>
    </Card>
  );
}
