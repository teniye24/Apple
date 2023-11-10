import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function SingleAppleProduct() {
  const [product, setProduct] = useState([]);
  //   console.log(useParams);
  const { productID } = useParams();
  //  console.log(productID);
  useEffect(() => {
    fetch("/iphone.json")
      // http://localhost:3001/iphones
      .then((response) => response.json())

      .then((data) => {
        const productList = data.products;
        // console.log(productList);

        const SingleProduct = productList.filter(
          (product) => product.product_name === productID
        );
        setProduct(SingleProduct);
      })
      .catch(() => console.log("Error"));
  }, [productID]);
  // console.log(iphoneProduct);

  return product.length ? (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {product?.map((product) => {
            return (
              <div key={product.product_id}>
                <div className="row justify-content-center text-center">
                  <div className={`col-12 mt-5 pt-5`}>
                    <div className="title-wrapper front-weight-bold">
                      {product.product_name}
                    </div>
                    <div className="brief-description">
                      {product.product_breif_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${product.starting_price}`}
                    </div>
                    <div className="monthly-price">{product.price_range}</div>
                    <div className="product-details">
                      {product.product_description}
                    </div>
                  </div>
                  <div className={`col-sm-12 col-md-6`}>
                    <div className="product-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  ) : (
    <Four04 />
  );
}

export default SingleAppleProduct;

// import React, { Component } from "react";

// class singleProduct extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       products: [],
//       productID: props.match.params.pid,
//     };
//   }

//   componentDidMount() {
//     fetch("/iphones.json")
//       .then((res) => res.json())
//       .then((products) => {
//         const productList = products.products;
//         const singleProduct = productList.filter(
//           (x) => x.product_url == this.state.productID
//         );
//         this.setState((state) => {
//           return {
//             products: singleProduct,
//           };
//         });
//       });
//   }

//   render() {
//     // console.log(this.state.productID);
//     return (
//       <div>
//         <section className="internal-page-wrapper top-100">
//           <div className="container">
//             {this.state.products.map((product) => {
//               let id = product.product_url;
//               let title = product.product_name;
//               let img = product.product_img;
//               let Brief = product.product_brief_description;
//               let StartPrice = product.starting_price;
//               let PriceRange = product.price_range;
//               let productPage = "/iphone/" + id;
//               let details = product.product_description;

//               let productDiv = (
//                 <div key={id} className="bottom-100">
//                   <div className="row justify-content-center text-center bottom-50">
//                     <div className="col-12">
//                       <div className="title-wraper bold">{title}</div>
//                       <div className="brief-description">{Brief}</div>
//                     </div>
//                   </div>

//                   <div className="row justify-content-center text-center product-holder h-100">
//                     <div className={`col-sm-12 col-md-6 my-auto`}>
//                       <div className="starting-price">
//                         {`Starting at ${StartPrice}`}
//                       </div>
//                       <div className="monthly-price">{PriceRange}</div>
//                       <div className="product-details">{details}</div>
//                     </div>

//                     <div className={`col-sm-12 col-md-6`}>
//                       <div className="prodict-image">
//                         <img src={img} alt="image"/>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return productDiv;
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default singleProduct;
