import React from "react";
import {  Container } from "react-bootstrap";

import "../style/CSS.css";

export default function DogCard({ kind, img }) {
  return (
        <Container>
        <section className="articles d-flex">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src={img} alt="" />
              </figure>
              <div className="article-body ">
                {kind}
                <br></br>
                <a>
                  Read more..
                </a>
              </div>
            </div>
          </article>
          <article></article>
        </section>
      </Container>
    
  );
}
