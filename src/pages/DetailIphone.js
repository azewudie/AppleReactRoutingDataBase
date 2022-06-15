import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "./DetailIphone.module.css";
const DetailIphone = () => {
  const [IphoneProduct, setIphoneProduct] = useState([]);
  const { IphoneId } = useParams();

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
      const singleProduct = LoadedIphone.filter((x) => x.id === IphoneId);
      setIphoneProduct(singleProduct);
    };
    fetchIphone();
  }, []);

  console.log(IphoneProduct);
  return (
    <div>
      <section className={classes["internal-page-wrapper"]}>
        <div className="container">
          {IphoneProduct.map((product) => {
            let id = product.id;
            let title = product.title;
            let img = product.img;
            let Brief = product.Brief;
            let StartPrice = product.StartPrice;
            let PriceRange = product.PriceRange;
            let Description = product.Description;
            let IphonePage = "/iphone/";

            let productDiv = (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{Description}</div>

                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={IphonePage}> Watch Iphone List</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} />
                    </div>
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

export default DetailIphone;
