import React from 'react';
import newIpad from "../commonResource/images/icons/new-ipad-logo.png"
// import Youtube from './Youtube/Youtube';

function SixthSection() {
  return (
    <>
      <section className="sixth-heghlight-wrapper">
        <div className="row">
          <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="model">16-inch model</div>

              <div className="product-title-small">MacBook Pro</div>

              <div className="description-wraper">The best for the brightest.</div>

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
                  <img src= {newIpad} alt=''/>
                </div>
              </div>

              <div className="description-wraper">
                Like a computer. Unlike any computer.
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
      {/* <section>
        <Youtube/>
      </section> */}
    </>
  );
}

export default SixthSection