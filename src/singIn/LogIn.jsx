import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button, Container } from "react-bootstrap";
import { useUserAuth } from "../context/Context";
import GoogleButton from "react-google-button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      alert("pls enter to login");
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
          >
            <div className="fst-italic"> Log In</div>

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
            <Form.Group>
              <GoogleButton
                className="text-center  g-btn"
                type="black"
                onClick={handleGoogleSignIn}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="dark" type="Submit">
                Log In
              </Button>
              <div class="text-center text-l-start  fst-italic ">
                <p clasName="small fw-bold mt-2  mb-0">
                  Don't have an account?{" "}
                 
                    {" "}
                    <Link className="link" to="/signup">Sign up</Link>
                
                </p>
              </div>
            </div>
          </Form>
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              className="rounded-5 img-fluid"
              src="https://plus.unsplash.com/premium_photo-1669277336130-f5efae4b4d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Sample image"
            />
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}
