import React from "react";
import {Container} from "../Grid"

function Jumbotron({ main, subline }) {
  return (
    <div style={{ 
      height: 150, 
      clear: "both", 
      paddingTop: 40, 
      textAlign: "center"
      }} 
      className="jumbotron jumbotron-fluid"
      >
      <Container>
        <h1 className="display-8">
          {main}
        </h1>
        <p className="lead">
          {subline}
        </p>
      </Container>
    </div>
  );
}

export default Jumbotron;
