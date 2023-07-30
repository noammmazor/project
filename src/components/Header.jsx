import React from "react";
import { GiSittingDog } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import "../style/CSS.css";

import { Link, useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/Context";

export default function Header() {
  const { logOut } = useUserAuth();
  const {plus , setPlus}=useUserAuth();


  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex ">
            <Link className="logo" to="/">
              <GiSittingDog /> Dog4You
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav d-flex justify-content-between col-2">
              <Link className="nav-link" to={"/market"}>
                Market
              </Link>

              <Link className="nav-link" to={"/tips"}>
                Tips
              </Link>

              <Link className="nav-link" to={"/filters"}>
                filters
              </Link>
              <Link className="nav-link" to={"/parks"}>
                Parks
              </Link>
            </ul>
            <Link className="nav-link  d-flex p-4 ms-auto" to={"/like"}>
              <Button
                variant="black"
              >
                <BsFillCartFill />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
             {plus}
                </span> 
              </Button>
            </Link>

            <div className="ms p-2">
              <Button variant="black" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
