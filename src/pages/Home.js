import React from 'react';
import Jumbotron from '../components/Jumbotron'
import { Col, Row, Container } from "../components/Grid";

export default function Home() {
  return(
    <div>
      <Jumbotron main="Chris Parker" subline="HTML/CSS | Javascript | MongoDB | Express | React | Node"/>
      <Container>
      <div className="d-flex justify-content-center">
        <Col size="md-4">
          <img className="img-fluid" src="https://raw.githubusercontent.com/ctp7313/portfolioparker/master/src/assets/main_pic.JPG" alt="Portrait of Chris"/>
        </Col>
        <Col size="md-6">
            <p>Welcome! I'm a videographer, podcaster, and now recent web development boot camp graduate working for a Seattle-based global logistic provider.
              My true passions lie in cooking, making craft cocktails at home, and a particular love for modern hobby board gaming.
            </p>
            <p>  
              I see board games as interactive sculptures powerful enough to teach history, critical thinking, empathy, sportsmanship, and more. 
              I also consider them as "cardboard computers" with their rule books as technical documentation, and I believe these perspectives have sparked my interests in development. 
              With these new skills, I hope to have an impact on the industry that's affected me so positively and create applications that can bring families and friends closer through gaming.
            </p>
        </Col>
      </div>
      </Container>
    </div>
  )
}

