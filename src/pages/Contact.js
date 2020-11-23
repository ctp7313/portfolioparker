import React, { useState } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from '../components/Jumbotron'



export default function Contact() {
  return(
    <div>
      <Jumbotron main="Contact Me" subline="Let's make something together"/>
      <Container>
        <div className="row d-flex justify-content-center">
          <Col size="md-5">
            <form>
              <div class="form-group">
                <label for="contactName">Name</label>
                <input type="name" class="form-control" id="contactName" placeholder="First and last name"/>
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Enter email"/>
                <small class="form-text text-muted">I'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="messageArea">Message</label>
                <textarea class="form-control" id="messageArea" rows="3" placeholder="Questions? Have a fun project in mind? Leave your details!"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </Col>
          <div class="card text-white mb-3">
            <div className="card-body">
              <h6>Feel free to reach me at the following:</h6>
              <ul>
                <li><a href="tel:206-643-0293">206.643.0293</a></li>
                <li><a href = "mailto: ctp7313@gmail.com">CTP7313@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/chrs-prkr/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/ctp7313" target="_blank">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}



