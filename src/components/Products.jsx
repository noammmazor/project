import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Col, Container, Image, Row } from "react-bootstrap";
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
  {/*       <Image className="border-bottom" src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw380c5f5b/jffd-reviews.jpg"></Image>
        */} <Row md={2} xs={1} lg={3} className="p-3" >
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
    return <h1 className="d-flex justify-content-around">
       {/*  <div className="wrapperLoading">
      <img className="loader" src={loading} /> 
      </div>*/}Loading...</h1>
  }
}
{/**/ }