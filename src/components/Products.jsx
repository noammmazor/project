import React, {  useState } from "react";
import { Link, useParams } from "react-router-dom";

import {  Col, Container, Image, Row } from "react-bootstrap";
import "../style/CSS.css";


export default function Products({ data }) {
  const [loading, setLoading] = useState(0);

  const { product } = useParams();
  console.log(product);

  const curr = data.filter((item) => item.title == product);
  console.log(data);
  console.log(curr);

  setTimeout(() => {
    setLoading(1);
  }, 2000);
  if (loading) {
    return (
      <Container>
        <Image className="border-bottom" src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw380c5f5b/jffd-reviews.jpg"></Image>
        <Row md={2} xs={1} lg={3} className="p-3" >
          {curr.map((item) => {
            return (
              <Col>
                <Link className="link" to={`/market/${item.title}/${item.name}`}>
                  <section className="articles d-flex">
                    <article>
                      <div className="article-wrapper">
                        <figure>
                          <img src={item.pic} alt="" />
                        </figure>
                        <div className="article-body ">
                          {item.name}
                          <div className="fs-6">${item.price}</div>
                          <br></br>
                          <a type="button" className="btn btn-outline-secondary">
                           View Product
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article></article>
                  </section>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else {
    return <h1  className="d-flex justify-content-around">Loading...</h1>;
  }
}
