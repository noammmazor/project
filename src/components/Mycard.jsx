import React from 'react'
import { GiJumpingDog, GiSittingDog,GiSniffingDog } from "react-icons/gi";
import "../style/CSS.css"
export default function Mycard() {
  return (
    <div className="container">
    <div className="card" style={{border : 'none'}}>
      <div className="face face1">
        <div className="content">
          <i><GiSittingDog/></i>
          <h3>Who are we?</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            We are "Dog4You"- a special team of dog trainers and vets that know dogs and the benefits of handle one well.
          </p>
        </div>
      </div>
    </div>
    <div className="card" style={{border : 'none'}}>
      <div className="face face1">
        <div className="content">
          <i><GiSniffingDog/></i>
          <h3>What is our purpose?</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            Our purpose is make everyone knows the dogs and their benefits like guarding and even their social benefits like their contribution about development of little childrens' social sense.
          </p>
        </div>
      </div>
    </div>
    <div className="card" style={{border : 'none'}}>
      <div className="face face1">
        <div className="content">
        <i><GiJumpingDog/></i>
          <h3>How can I find the perfect dog?</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            In our platform you can find the perfect dog for you by all the filters we added to our "Filters" page, there are a lot of filters like activity, size,training mode and more that will make the choice way easier for you.
          </p>
        </div>
      </div>

    </div>
  </div>



);
}
  
