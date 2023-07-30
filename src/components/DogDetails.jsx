import React from "react";
import {  Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import data from "../data/data.json";

export default function DogDetails() {
  let { dogCard } = useParams();
  console.log(dogCard);
  let dogcard = data.filter((dogData) => dogData.kind == dogCard);

  console.log(dogcard);

  if (dogcard != 0) {
    return (
      <div className="d-flex-column">
        <Container>
          <div className="card p-3">
            <div className="float">
            <img
              src={dogcard[0].img}
              style={{ width: "180px" }}
            />
            <p>
              <h2>{dogcard[0].kind}</h2>
              {dogcard[0].about}
            </p>
            </div>
          </div>
          <br></br>
          <div className="d-flex">
            <div className="card  p-2 ">
              <h3>Up Keep</h3>
              {dogcard[0].up_keep}
            </div>
            <br></br>
            <div className="card p-3 col-4">
              <h4>menu</h4>
              Size: {dogcard[0].size},<br></br>Active: {dogcard[0].active}
              <br></br>Training:{dogcard[0].easy_for_training},<br></br>
              Height:{dogcard[0].height}, Weight: {dogcard[0].weight}
            </div>
          </div>
          <br></br>
          <div className="card p-3">
            <h4>Health</h4>
            {dogcard[0].health}
          </div>
          <br></br>
          <div className="card p-5">
            <h4>History</h4>
            {dogcard[0].history}
          </div>
        </Container>
      </div>
    );
  }
}
