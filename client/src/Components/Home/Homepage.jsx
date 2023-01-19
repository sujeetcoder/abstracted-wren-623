import React from "react";
import "./Homepage.css";
import Mtwo from "./Assets/m2.png";
import W8 from "./Assets/watch-series-8-logo.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Homepage = () => {
  return (
    <div>
      <main>
        <section class="homepod">
          <div class="title-iphone">
            <h2>Introducing the</h2>
            <h2>all-new HomePod</h2>
            <button id="watch">
              Watch the film
              <span class="sp">
                <BsFillPlayCircleFill />
              </span>
            </button>
            <h4>Available starting from 3 Feb</h4>
          </div>
          <div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </div>

          <section class="iphone-14"></section>
        </section>
        <section class="macm1">
        <div class="texto-presente">
            <h2>MacBook Pro</h2>
            <h3>Supercharged by M2 Pro and M2 Max</h3>
            <h4>Available starting from 24 Jan</h4>
            <div class="lnk">
                <a href="#">Learn more</a>
                <a class="link-produto-comprar" href="#">
                  Buy
                </a>
              </div>
          </div>
          <section class="presente"></section>
        </section>
        <section class="macmini">
            <div class="texto-ipad">
              <h2>Mac mini</h2>
              <h3>Supercharged by M2 and m2 Pro</h3>
              <h4>Availabe starting from 24 Jan</h4>
              <div>
                <a href="#">Learn more</a>
                <a class="link-produto-comprar" href="#">
                  Buy
                </a>
              </div>
            </div>
          <section class="ipad"></section>

        </section>
        <section class="conjunto-secoes">
          <section class="watch-ultra">
            <div class="title-watch-ultra">
              {/* <img src="./Assets/watch-ultra-logo.webp"></img> */}
              <h3>Creativity and community Woven together</h3>
              <h4>Explore the new Black Unity watch strap and matching face</h4>
            </div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>

          <section class="watch-series-8">
            <div class="title-watch-series-8">
              <img alt="watch-series-8 Air" src={W8} />
              <h3>A healthy leap ahead</h3>
            </div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>

          <section class="iphone-14-pro">
            <figure class="title-iphone-14-pro">
              <h2>iPhone 14 Pro</h2>
              <h3>Pro. Beyond</h3>
              <button id="sup">With Superfast 5G*</button>
            </figure>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>

          <section class="airpods-pro">
            <div class="title-airpods-pro">
              <h2>iPhone 14</h2>
              <h3>Big and bigger</h3>
              <button id="supwh">With superfast 5G*</button>
            </div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>

          <section class="ipad-pro">
            <div class="title-ipad-pro">
              <h2>iPad Pro</h2>
              <div class="h3-ipad-m2">
                <h3>Supercharged by</h3>
                <img alt="Ipad M2" src={Mtwo} />
              </div>
            </div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>

          <section class="fitness">
            <div class="title-fitness">
              <h2>iPad</h2>
              <h3>Lovable. Drawable. Magical</h3>
            </div>
            <div class="link-produto">
              <a href="#">Learn more</a>
              <a class="link-produto-comprar" href="#">
                Buy
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
