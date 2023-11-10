import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
    // http://localhost:3001/iphones
      .then((response) => response.json())//json is parse method to change the data to object
      .then((data) =>  { 
        console.log(data);
        setProducts(data.products); //setYouTube is updater function, items represent the data we want
      });
  }, []);

  console.log(Products);
let flip = true;
  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphone Page</h1>
              <h3>The best for the brightest.</h3>
              </div>
              </div>

              {Products?.map((product) => {
               let order1 = 1;
                let order2 = 2;
                if (flip){
                  order1 = 2;
                  order2 = 1;
                  flip = !flip;
                } else {
                  flip = !flip;
                }

                let productDiv = (
                  <div
                    key={product.product_url}
                    className="row justify-cintent-center product-holder h-100"
                  >
                    <div
                      className={`col-sm-12 col-md-6 my-auto order-${order1}`}
                    >
                      <div className="product-title">{product.product_name}</div>
                      <div className="product-brief">
                        {product.product_brief_description}
                      </div>
                      <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="links-wrapper">
                        <ul>
                          <li>
                            <Link to={`/iphone/${product.product_name}`}>
                              Learn More
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className={`col-sm-12 col-md-6 order-${order2}`}
                    >
                      <div className="product-image">
                        <img src={product.product_img} alt="product" />
                      </div>
                    </div>
                  </div>
                );
                return productDiv;
              })}
            </div>
        
        
      </section>
    </>
  );
}

export default Iphone;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/iphones.json")
//       .then((res) => res.json())
//       .then((products) => {
//         setProducts(() => products.products);
//       });
//   }, []);

//   console.log(products);
//   let order = 1;
//   return (
//     <div>
//       <section className="internal-page-wrapper top-100">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>
//           {products.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.product_img;
//             let Brief = product.product_brief_description;
//             let StartPrice = product.starting_price;
//             let PriceRange = product.price_range;
//             let productPage = "/iphone/" + id;

//             let order1 = 1;
//             let order2 = 2;
//             if (order !== 1) {
//               order1 = 2;
//               order2 = 1;
//               order--;
//             } else {
//               order++;
//             }

//             let productDiv = (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="prodict-image">
//                     <img src={img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Iphone;