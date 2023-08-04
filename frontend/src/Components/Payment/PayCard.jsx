import React from "react";
import "./styles.css"
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";
import {  Card, Grid,  TextField, Typography } from '@mui/material';




export default class PayCard extends React.Component {
 
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment" >
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ marginTop: "50px" }}>
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Enter Your Card Details
              </Typography>
              <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={this.handleCallback}
              />
            </Grid>
            <Grid item xs={6}>
              <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <TextField
                    variant="outlined"
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Card Number | E.g.: 49..., 51..., 36..., 37..."
                    pattern="[\d| ]{16,22}"
                    required
                    style={{ width: 300, margin: "5px" }}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    variant="outlined"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    style={{ width: 300, margin: "5px" }}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      variant="outlined"
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="Valid Thru"
                      pattern="\d\d/\d\d"
                      required
                      style={{ width: 300, margin: "5px" }}
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      variant="outlined"
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC"
                      pattern="\d{3,4}"
                      required
                      style={{ width: 300, margin: "5px" }}
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                </div>
                <input type="hidden" name="issuer" value={issuer} />
                </form>
            </Grid>
          </Grid>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

// render(<PayCard />, document.getElementById("root"));
