import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/Context";
import { db } from "../firebase/FireBase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import "../style/CSS.css";

export default function Like() {
  const { user } = useUserAuth();
  const [show, setShow] = useState([]);
  const {plus , setPlus}=useUserAuth();
 

useEffect(()=>{
  setPlus(show.length)
  console.log(plus);
  console.log(show.length);
},[show.length]);

let sum=0 , sumPrice=0 ;
for (let index = 0; index < show.length; index++) {
sum+=show[index].counter;
sumPrice+=show[index].price;
}
console.log(sum);
console.log(sumPrice);



  useEffect(() => {
       // Fetches data from Firebase Firestore when the component mounts or when the user email changes
    onSnapshot(doc(db, "users", `${user?.email}`),
       (doc) => {
      setShow(doc.data()?.newArr);
    });
  }, [user?.email]);

  const productRef = doc(db, "users", `${user?.email}`);


  const deleteProduct = async (passedID) => {
    try {
           // Deletes a product from the user's liked items
      const result = show.filter((item) => item.id !== passedID);

      await updateDoc(productRef, {
        newArr: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {   
     // Renders the liked items if there are items and a user is logged in
  
    return (
      <div>
        <div className="row">
          {" "}
          {show.map((item) => {
            return (
              <>
                <div className=" col-lg-8">
                  <div className="cart_container">
                    <div className="cart_items">
                      <ul className="cart_list">
                        <li className="cart_item clearfix">
                          <Link
                            className="link"
                            to={`/market/${item.title}/${item.name}`}
                          >
                            {" "}
                            <div className="cart_item_image">
                              <img src={item.pic} alt="" />
                            </div>{" "}
                          </Link>
                          <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                            <div className="cart_item_name cart_info_col">
                              <div className="cart_item_title">Name</div>
                              <div className="cart_item_text">{item.name}</div>
                            </div>
                            <div className="cart_item_color cart_info_col">
                              <div className="cart_item_title">Category</div>
                              <div className="cart_item_text">{item.title}</div>
                            </div>{" "}
                            <div className="cart_item_price cart_info_col">
                              {" "}
                              <div className="cart_item_title">Price</div>
                              <div className="cart_item_text">{item.price}</div>
                            </div>
                            <div className="cart_item_quantity cart_info_col">
                              <div className="cart_item_title">Quantity</div>
                              <div className="cart_item_text">
                                {" "}
                                {item.counter}{" "}
                              </div>
                            </div>
                            <div className="cart_item_price cart_info_col">
                              <div className="cart_item_title">remove</div>
                              <div className="cart_item_text">
                                <a
                                  type="button "
                                  className="btn btn-outline-danger"
                                  onClick={() => deleteProduct(item.id)}
                                >
                                  <FaTrashAlt />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div class="col-lg-3">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Summary</h5>
              </div>
            </div>{" "}
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>{sum}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>{sumPrice}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>""</strong>
                  </span>
                </li>
              </ul>
              <button type="button" class="btn  btn-outline-secondary  ">
                Go to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>The Cart Is Empty!!!</h1>;
  }
}
