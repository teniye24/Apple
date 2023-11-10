import React from 'react'
import "./Main.css"
// import mac from "../commonResource/newImages/hero_iphone15pro__i70z9oz3hj2i_medium_2x.jpg"
import Watch from '../commonResource/newImages/promo_logo_apple_watch_series_9__ckz0hbex0yeu_small_2x.png';
import appCard from "../commonResource/newImages/logo__dcojfwkzna2q_large.png"
import tradeIn from "../commonResource/newImages/logo_tradein__d1fpktgipvki_small.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Youtube from "./Youtube/Youtube"


function Main() {
  return (
    <div>
      <section className="main-highlight-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper3">
                <h1>MacBook Pro</h1>
              </div>

              <div className="description-wrapper3">
                <h3>Mind-blowing.Head-turning</h3>
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Order</a>
                  </li>
                </ul>
              </div>

              {/* <div className="main-image-wrapper">
                <img src={mac} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">iMac</div>

              <div className="description-wrapper">Packed with more juice.</div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-highlight-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="new-alert1">Iphone 15 Pro</div>

              <div className="title-wraper1 ">
                Titanium.So strong.So light.So Pro
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-heghlight-wrapper">
        <div className="row">
          <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="top-logo-wrapper"></div>
              <div className="product-title-small">iPhone 15</div>

              <div className="description-wraper">
                New camera.New design.Newphoria.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
            <div className="right-side-inner-wrapper">
              <div className="top-logo-wrapper">
                {/* <div className="logo-wrapper">
                  <img src={newIpad} alt="" />
                </div> */}
              </div>
              <div className="product-title-small">Wonder awaits.</div>

              <div className="description-wraper">
                Give the gifts they've been
                <br />
                looking forward to all year.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-heghlight-wrapper">
        <div className="row">
          <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={Watch} alt="" />
                </div>
              </div>
              <div className="description-wraper">
                <h2>Smarter.Brighter.Mightier.</h2>
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
            <div className="right-side-inner-wrapper">
              <div className="description-wraper">
                <h2> AirPods Pro</h2>
                <p>Adaptive Audio.Now playing</p>
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sixth-heghlight-wrapper">
        <div className="row">
          <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="logo-wrapper">
                <img src={appCard} alt="" />
              </div>

              <div className="product-title-small">
                Get up to 3% Daily Cash back
                <br />
                with every Purchase
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
            <div className="right-side-inner-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={tradeIn} alt="" />
                </div>
              </div>

              <div className="description-wraper">
                Get $200-$650 in credit when <br />
                you trade in iPhone 11 or higher.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">see what your divice is worth</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={2000}
        >
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/q46xd9gSrEJ6ILu4eAHtRg/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/htJoSCg_9CML6hANmTrQlg/980x551.jpg"
              alt="/"
            />
          </div>

          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Qel4W8kSxvD_KV3HxyCaeA/980x551.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/3_emSGtqKrdKh-MNRvGwFQ/980x551.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home_image"
              src="https://is1-ssl.mzstatic.com/image/thumb/9ewxNiQdC032DQcorTcsvA/980x551.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <section>
        <Youtube/>
      </section>
    </div>
  );
}

export default Main