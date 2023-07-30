import React from 'react'
import { GiSittingDog } from "react-icons/gi";
import "../style/CSS.css"
import { Link,  } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Shortheader() {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand d-flex ">
                    <Link className="logo" to='/'>
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
                 <Button variant='black' >  <Link className="nav-link d-flex justify-content-between outline-success" to={"/login"}>Login</Link></Button>  
            </div>
        </nav>
    )
}
