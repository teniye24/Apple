import React from "react";

function FirstSection() {
  return (
    <div>
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert1">Iphone 15 Pro</div>

          <div className="title-wraper ">
            Titanium.So strong.So light.So Pro
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

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
