import React from "react";
import "../style/CSS.css";
import { GiJumpingDog, GiSittingDog, GiSniffingDog } from "react-icons/gi";
import { useUserAuth } from "../context/Context";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Mycard from "../components/Mycard";

export default function Home() {
  const { user } = useUserAuth();

  console.log("chack user in private :", user);

  return ( <>   
   <figure class="text-center">
  <blockquote class="blockquote fst-italic">
    <p>Welcome To Are Website.  {user?.displayName}</p>
  </blockquote>
  <figcaption class="blockquote-footer fst-italic">
    lets find dog for you <cite title="Source Title">  {user?.email}</cite>
  </figcaption>
</figure>    
  <div>
    <Mycard/>
      <div className="container">
        <Image src="https://cdn.shopify.com/s/files/1/0201/1744/files/Dogs-natural-treatments-depression-anxiety.jpg?v=1618612287" />
        <div className="header-wrapper"></div>
        <div className="float">
          <h2>Life is better with dogs</h2>
          Nothing beats a long walk with your four-legged friend on a fresh,
          spring morning. Or seeing the joy on their faces when you pick up a
          ball and they know it's playtime in the local park Even relaxing at
          home feels better in each other's company. There's an old saying,
          which is certainly true, that dogs repay the love you give them
          ten-fold. Before you rush out and adopt a dog, it's important to think
          it through very thoroughly. Caring for a dog can be hard work and it's
          a lifetime commitment, as your dog will be relying on you for many
          years to come. Once you're sure you have the time and lifestyle to
          include a dog in your life, and you've done your research about
          different dog breeds and personalities it's time to look at all.
        </div>
        <div className="header-wrapper"></div>

        <div
          className="bgk"
          src="https://cdn.shopify.com/s/files/1/0201/1744/articles/10-Reasons-Get-Dog-What-Youll-Need_1200x.jpg?v=1618612737"
        >
          <Button variant="dark">
            <Link className="link text-white" to={"/reasonsDog"}>
              Reed More for 10 reasons
            </Link>
          </Button>
        </div>
      </div>
      <footer></footer>
    </div>
</>
 
  );
}
