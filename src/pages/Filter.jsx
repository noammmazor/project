import React, { useState } from "react";
import data from "../data/data.json";
import "../style/filter.css";
import { InputGroup, Form, Row, Col, Container, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import DogCard from "../components/DogCard";


export default function Filter() {

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [friendly, setFriendly] = useState("");
  const [training, setTraining] = useState("");
  const [intelligent, setIntelligent] = useState("");
  const [size, setSize] = useState("");



  let cards = data
    .filter((dog) => {
      if (search == "") return dog;
      else if (dog.kind.toLowerCase().includes(search.toLowerCase()))
        return dog;
    })
    .filter((dog) => {
      if (size == "") return dog;
      else if (dog.size == size) return dog;
    })
    .filter((dog) => {
      if (select == "") return dog;
      else if (dog.activity == select) return dog;
    })
    .filter((dog) => {
      if (friendly == "") return dog;
      else if (dog.family_freinds == friendly) return dog;
    })
    .filter((dog) => {
      if (training == "") return dog;
      else if (dog.training_mode == training) return dog;
    })
    .filter((dog) => {
      if (intelligent == "") return dog;
      else if (dog.intelligent == intelligent) return dog;
    })
    .map((dog,i) => {
      return (
        <div className="row">
           <Link className="link" to={`/${dog.kind}`}>
          <Col className="d-flex justify-content-around"  key={dog.kind}>
            <DogCard {...dog} />
          </Col>
        </Link>
   
        </div>
       
      );
    });
    console.log(data);

  return (
    <div>
    
      <Container>
        <div className="header-wrapper">
          <h1 className="title">How To Found Your Percfet Dog For You?</h1>
          <span>
            You sat, you thought, you talked, you cooked and you decided it was
            time to bring in the house dog. how fun! Now all that's left is to
            choose the right dog... and that's not obvious. Dogs have character,
            temperament, different needs, different energy levels. Not every dog
            ​​is suitable for every family. That is why it is very important to
            make the choice more from an informed place and less from an
            emotional place. After all, this dog is going to accompany you plus
            or minus for the next decade. No pressure though.
          </span><br/>
          <Button variant="dark"><Link className="percfet " to={"/percfetdog"}>So how to choose a dog?</Link> </Button>
        </div>

        <InputGroup size="sm">
          <InputGroup.Text id="inputGroup-sizing-sm">
            <AiOutlineSearch />
          </InputGroup.Text>
          <Form.Control
            aria-label="large"
            aria-describedby="inputGroup-sizing-xl"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Row style={{width:"100%"}}>
          <Form.Select
            style={{ width: "20%" }}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Active Level</option>
            <option value="Hight">Hight</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </Form.Select>
          <Form.Select
            style={{ width: "20%" }}
            onChange={(e) => setFriendly(e.target.value)}
          >
            <option value="">Friendly Level</option>
  
            <option value="4">4/10</option>
            <option value="5">5/10</option>
            <option value="6">6/10</option>
            <option value="7">7/10</option>
            <option value="8">8/10</option>
            <option value="9">9/10</option>
            <option value="10">10/10</option>
          </Form.Select>
          <Form.Select
            style={{ width: "20%" }}
            onChange={(e) => setTraining(e.target.value)}
          >
            <option value="">Easy For Training</option>
            <option value="Easy">Easy</option>
            <option value="Average">Aveage</option>
            <option value="Difficult">Dificule</option>
          </Form.Select>
          <Form.Select
            style={{ width: "20%" }}
            onChange={(e) => setIntelligent(e.target.value)}
          >
            <option value="">Intelligent</option>
            <option value="lower">lower</option>
            <option value="Half">Half</option>
            <option value="very">very</option>
          </Form.Select>
          <Form.Select
            style={{ width: "20%" }}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Form.Select>
        </Row>
        <Row md={2} xs={1} lg={3} className="g-3 mt-4">
          {cards}
        </Row>
      </Container>
      <div className="header-wrapper"></div>
    </div>
  );
}
