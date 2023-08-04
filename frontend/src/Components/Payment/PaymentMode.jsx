import React from "react";
import "./styles.css"
import { CardContent, Checkbox,
   FormControl, FormControlLabel, 
   FormGroup, FormHelperText,Card,
    FormLabel, styled } from "@mui/material";


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

export default function PaymentMode() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    card: true,
    cod: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { card, cod } = state;
  const error = [card, cod].filter((v) => v).length !== 2;
  return (
    <Card
    //  className={classes.root}
    style={{ minWidth: 400,
      margin: "20px"}}
    >
      <CardContent>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Payment Mode</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={card}
                  onChange={handleChange}
                  name="card"
                  color="primary"
                />
              }
              label="Credit / Debit Card"
            />
            <FormControlLabel
              disabled
              control={
                <Checkbox checked={cod} onChange={handleChange} name="cod" />
              }
              label="COD(Cash On Delivery) *"
            />
          </FormGroup>
          <FormHelperText>* Not Available </FormHelperText>
        </FormControl>
      </CardContent>
    </Card>
  );
}
