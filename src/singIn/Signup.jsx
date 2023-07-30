import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/Context";
import { db } from "../firebase/FireBase";
import { setDoc, doc } from "firebase/firestore";
import "../style/signup.css"

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await signUp(email, password);
      setDoc(doc(db, "users", email), {
        newArr: [],
      });
      user.user.displayName = name;
      console.log(user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
 
    
    <section className="vh-100 mt-6">
      <div className="container-fluid h-custom ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {error && <Alert variant="danger">{error}</Alert>}
    
          <Form
            className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            onSubmit={handleSubmit}
          >             <div className="fst-italic"> Sign up</div><Form.Group>
          <Form.Control
            className="mb-3"
            controlId="formName"
            type="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
  

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <div claclassNamess="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label
                  className="form-check-label fst-italic"
                  for="form2Example3"
                >
                  Remember me
                </label>
              </div>
            </div>
          
            <div className="d-grid gap-2">
              <Button variant="dark" type="Submit">
                Sign Up
              </Button>
              <div class="text-center text-l-start  fst-italic ">
                <p clasName="small fw-bold mt-2  mb-0">
                  Do You have account?{" "}
                 
                    {" "}
                    <Link className="link"  to="/login">Log In</Link>
                
                </p>
              </div>
            </div>
          </Form>
      <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              className="rounded-5 img-fluid"
              src="https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=612x612&w=0&k=20&c=Ot63dQOYplm0kLJdlSVWbtKGwGkuZfnfdwH5ry9a6EQ="
        alt="Sample image"
            />
          </div>
          <hr />
        </div>
      </div>
    </section>

  );
}
