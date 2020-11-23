import React from "react";
import data from '../components/projects/data.json'
import {Container, Row} from '../components/Grid'
import Jumbotron from "../components/Jumbotron/index";

const project = data.map((data) => {
  return  (
        <div className="card text-white mb-3 col-4" key={data.id}>
                <div className="card-body">
                  <img  className="img-fluid rounded mx-auto d-block" 
                        src={data.image}
                        alt={data.title} 
                        style={{paddingBottom: 10}} />
                  <div className="d-flex justify-content-between">
                    <h3>{data.title}</h3>
                  </div>
                  <p>{data.desc}</p>
                  <Row className="">
                    <button className="btn btn btn-primary"><a className="text-white" href={data.url}>Site</a></button>
                    <button className="btn btn btn-primary"><a className="text-white" href={data.github}>Code</a></button>
                  </Row>       
                </div>
              </div>
  )
})

export default function Portfolio() {
  return(
    <div>
      <Jumbotron main="Portfolio" subline="Past & Current Projects" />
      <Container>
        <Row>
          {project}
        </Row>
      </Container> 
    </div>
  )
}
