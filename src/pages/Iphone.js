import React, { useState, useEffect } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import classes from "./Iphone.module.css";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchIphone = async () => {
      const response = await fetch(
        "https://apple-react-58577-default-rtdb.firebaseio.com/Iphone.json"
      );
      const responseData = await response.json();
      let LoadedIphone = [];
      for (const key in responseData) {
        LoadedIphone.push({
          id: key,
          title: responseData[key].Title,
          img: responseData[key].img,
          Brief: responseData[key].Brief,
          StartPrice: responseData[key].StartPrice,
          PriceRange: responseData[key].PriceRange,
          Description: responseData[key].Description,
        });
      }
      setProducts(LoadedIphone);
    };
    fetchIphone();
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
      <section className={classes["internal-page-wrapper"]}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.id;
            let title = product.title;
            let img = product.img;
            let Brief = product.Brief;
            let StartPrice = product.StartPrice;
            let PriceRange = product.PriceRange;
            let productPage = "/iphone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};
export default Iphone;
