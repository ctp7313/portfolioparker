import React from "react";
import data from "../projects/data.json"
// import {Card} from 'react-bootstrap'

export default function ProjectCard() {
    data.map((data) => {
    return  (
          <div className="card text-white mb-4" key={data.id}>
                  <div className="card-body">
                    <img  className="img-fluid rounded mx-auto d-block" 
                          src={data.image}
                          alt={data.title} 
                          style={{  height: 300, 
                                    clear: "both", 
                                    paddingBottom: 10}} />
                    <div className="d-flex w-100 justify-content-between">
                      <h3>{data.title}</h3>
                    </div>
                    <p>{data.desc}</p>
                    <button className="btn btn btn-primary"><a className="text-white" href={data.url}>Site</a></button>
                    <button className="btn btn btn-primary"><a className="text-white" href={data.github}>Code</a></button>
  
                  </div>
                </div>
    )
  })
}