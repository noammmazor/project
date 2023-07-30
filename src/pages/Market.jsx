import React, { useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/market.css";
import {
  GiHealthCapsule,
  GiChickenOven,
  GiNotebook,
  GiCash,
} from "react-icons/gi";

export default function Market({ data }) {
  console.log(data);

  
  const [loading, setLoading] = useState(0);

  //console.log(market);
  setTimeout(() => {
    setLoading(1);
  }, 2000);
  if (loading) {
    return (
      <div>
        {" "}
        <div
          className="bg "
          src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw9edf628b/homepage/1440x652%20homepage%20image.jpg"
        >
          <h1 class="tit p-4">
            Give us two weeks we'll change your Dog's Life Forever
          </h1>
          <span className="article p-3  ">
            <p className="tit">
              Fresh food made right: human-grade nutrition, backed by 10 years
              of research.
            </p>
          </span>
          <div className="p-4" style={{ height: "230px" }}>
            <Button calssName=" d-flex-center " variant="dark">
              <Link className="Food" to={"/foodReasons"}>
                Reed More...
              </Link>
            </Button>
          </div>
        </div>
        <div className="desc">
          <Container className="">
            <t className="fs-1 p-2 fst-italic"> Pioneers in Fresh Pet Food</t>
            <div className="d-flex flex-wrap">
              <iframe
                className="vid rounded p-3"
                video-id="Sj0T8n2PoU8"
                frameborder="1"
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="JustFoodForDogs"
                width="350"
                height="425"
                src="https://www.youtube.com/embed/Sj0T8n2PoU8?loop=1&amp;playlist=Sj0T8n2PoU8&amp;controls=0&amp;playsinline=1&amp;rel=0&amp;modestbranding=1&amp;iv_load_policy=3&amp;fs=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.justfoodfordogs.com&amp;widgetid=1"
                id="widget2"
                data-gtm-yt-inspected-6="true"
              ></iframe>
              <div className="col">
                
                  {" "}
                  <div className="pic vr">
                    <GiChickenOven />
                  </div>{" "}
                  <div>
                      Whole food, human-grade meals gently cooked for superior
                  nutrient absorption.
              
                
                </div>
                <div className="pic vr">
                  <GiHealthCapsule />
                </div>
                <div className="">
                  As the #1 vet recommended fresh food, our vet-developed
                  recipes support specific health needs.
                </div>
                <div className="pic vr">
                  <GiNotebook />
                </div> 
                <div className=" "> 
                Proven to be more digestible and promote immune system health
                through extensive research.
                </div>
                <div className="pic vr">
                  <GiCash />
                </div> 
                <div className=""> 
                More affordable than our peers, thanks to our mission-based
                pricing approach.</div>
                
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="article__header-wrapper"></div>
          <div className="d-flex flex-warp">
            <Row md={2} xs={1} lg={3}>
              <Link className="link"to={`/market/treats`}>
                <Card className="card ">
                  <Card.Img
                    variant="top"
                    src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw1455aa8c/homepage/Homepage%20catImg%20-%20Treats%20R3.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="p-2">
                      Treats
                      <Card.Text className="">
                        Round out your pet's whole food diet with healthy treats
                        made right.
                      </Card.Text>{" "}
                    </Card.Title>{" "}
                  </Card.Body>
                </Card>
              </Link>
              <Link className="link" to={`/market/FreshFrozen`}>
                <Card className="card ">
                  <Card.Img
                    variant="top"
                    src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw872ca5fe/homepage/Homepage%20catImg%20-%20FF%20R3.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="p-2">
                      Daily Meals: Fresh Frozen
                      <Card.Text className="">
                        Frozen instantly after cooking to lock in nutrients.
                      </Card.Text>{" "}
                    </Card.Title>{" "}
                  </Card.Body>
                </Card>
              </Link>


              <Link className="link"to={`/market/PantryFresh`}>
                <Card className="card ">
                  <Card.Img
                    variant="top"
                    src="https://www.justfoodfordogs.com/on/demandware.static/-/Library-Sites-JustFoodForDogsSharedLibrary/default/dw58eda55c/homepage/Homepage%20catImg%20-%20PF-R3.jpg"
                  />
                  <Card.Body>
                    <Card.Title className="p-2">
                    Pantry Fresh
                      <Card.Text className="">
                      Shelf-stable packaging makes this the easiest way to feed fresh.
                      </Card.Text>{" "}
                    </Card.Title>{" "}
                  </Card.Body>
                </Card>
              </Link>


            </Row>
          </div>
        </Container>
      </div>
    );
  } else {
    return <h1  className="d-flex justify-content-around">Loading...</h1>;
  }
}
