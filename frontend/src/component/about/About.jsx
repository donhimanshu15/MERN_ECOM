import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import ec1 from "../../Assets/about.jpg"

const About = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src={ec1} />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to Nest
                      </span>
                      <p>
                        Nest, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as "one of the most influential economic and cultural forces in the world", and is one of the world's most valuable brands.
                      </p>
                      <p>
                        Nest, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as "one of the most influential economic and cultural forces in the world", and is one of the world's most valuable brands.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>


                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      }
    </>
  );
};

export default About;
