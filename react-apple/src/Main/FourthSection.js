import React from 'react';
import watch from "../commonResource/images/icons/watch-series5-logo.png"
import appCard from "../commonResource/images/icons/apple-card-logo.png"


function FourthSection() {
  return (
    <>
      <section className="fourth-heghlight-wrapper">
        <div className="row">
          <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={watch} alt='' />
                </div>
              </div>
              <div className="description-wraper">
                With the new Always-On Retina display.
                <br />
                You’ve never seen a watch like this.
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
                <div className="logo-wrapper">
                  <img src= {appCard} alt='' />
                </div>
              </div>
              <div className="description-wraper">
                Get 3% Daily Cash on purchases from Apple using Apple Card.
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
    </>
  );
}

export default FourthSection