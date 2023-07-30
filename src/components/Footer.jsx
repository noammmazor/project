import React from "react";
import {CgArrowUp} from "react-icons/cg"
import "../style/CSS.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="d-flex flex-column h-100">
      <footer class="w-100 py-4 flex-shrink-0 footer_area">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
     
              <p class="small text-muted">
                lets found the perfect friend for you
              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a class="text-primary" href="#">
                to up:<CgArrowUp/>   justfoodfordogs.com
                </a>
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-dark mb-3">Pages</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  {" "}
                  <Link className="link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link" to={"/filters"}>
                    Filters
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link" to={"/tips"}>
                    Tips
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="link" to={"/market"}>
                    Market
                  </Link>
                </li>      <li>
                  {" "}
                  <Link className="link" to={"/like"}>
              Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-dark mb-3">Articles</h5>
              <ul class="list-unstyled text-muted">
                <li>
                <Link className="link" to={"/reasonsDog"}>
                Reasons Dog
                  </Link>
                </li>
                <li>
                <Link className="link" to={"/percfetdog"}>
                Percfet Dog
                  </Link>
                </li>
                <li>
                <Link className="link" to={"/foodReasons"}>
                Food Reasons
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-dark mb-3">Newsletter</h5>
              <p class="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
