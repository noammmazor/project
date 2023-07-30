import React, { useContext } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../style/Product.css";
import { useParams } from "react-router-dom";
import { db } from "../firebase/FireBase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUserAuth } from "../context/Context";

export default function ProductList({ data }) {
  const { data2 } = useParams();
 const {plus , setPlus}= useUserAuth()
  console.log(data2);
 
  const [counter, setCounter] = useState(0);


    // Filters the data array to find the current product based on the provided name in the URL parameter
  let currProduct = data.filter((item) => item.name == data2);
  console.log(currProduct);

  const { user } = useUserAuth();
  const users = doc(db, "users", `${user?.email}`);

  const add = () => {
      // Increases the counter for the product
    setCounter(counter + 1);
    console.log(counter);
  };
  
  const remoove = () => {
    // Decreases the counter for the product, if it's greater than 0
    if (counter > 0) setCounter(counter - 1);
  };
  

  const saveProduct = async () => {
    if (0 < counter) {
      // Saves the product to the user's liked items in Firebase Firestore
      console.log(currProduct[0].name);
      await updateDoc(users, {
        newArr: arrayUnion({
          counter: counter,
          id: currProduct[0].id,
          name: currProduct[0].name,
          title: currProduct[0].title,
          pic: currProduct[0].pic,
          price: currProduct[0].price,
        }),
      });
      setPlus(plus+1)
      alert("the prodcut in the cart");
    } else if ((counter === 0)) {
      alert("Please add product to your cart");
    } else {
      return false
    };
  };

  if (currProduct) {
    return (
      <Container>
        <div className="d-wrap-flex ">
          <div className="row"> 
          <div className="p-2 col-xl-8">
           <img
             src={
                currProduct[0].pic
              }
            />
          </div>
          <br></br>
          <div className="p-3 col-4">
            <h1>{currProduct[0].name}</h1>
            <div className="">
              {currProduct[0].title}
              <div className="p-3">
                <li>An Ideal {currProduct[0].title} for All Dogs</li>
                <li>No Animal Protein Ingredients</li>
                <li>Low-Protein {currProduct[0].title}</li>
                <li>Hypoallergenic Dog {currProduct[0].title}</li>
              </div>
              <h1>${currProduct[0].price}</h1>
              <br></br>{" "}
              <div className="p-4 ">
                <div className="d-flex justify-content-evenly">
                   <button className="btn btn-light" onClick={remoove}>
                  -
                </button>
                {counter}{" "}
                <button className="btn btn-light" onClick={add}>
                  +
                </button>
                </div>
               
                <br></br>
                <Button variant="dark" onClick={currProduct ? saveProduct : ""}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className=" p-2">
            <div className="fs-4"> Description:</div>
            {currProduct[0].description}
          </div>
          <br></br>
          <div className="d-flex">
            <div className=" p-2">
              <div className="fs-4">About:</div>
              {currProduct[0].about}
            </div>
            <br></br>
            <div className="card p-3 col-4">
            <div className="fs-4">perkG:</div>
            {currProduct[0].perkG}
            </div>
          </div>
          </div>
        </div>
      </Container>
    );
  }
}
