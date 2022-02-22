import React from "react";
import styled from "styled-components";
import newama from "../remove-bg/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import vector1 from "../images/Vector (1).png";
import group from "../images/Group 34.png";
import poly from "../images/Polygon 3.png";
import pablo from "../images/pablo-figueroa-NoUQt_qdKjg-unsplash 1.png";
import jens from "../images/jens-kreuter-PKnn-nXCNhs-unsplash 1.png";
import josh from "../images/josh-marshall-lLOZVSa7DGU-unsplash 2.png";
import alexan from "../images/alexander-ruiz-sHAucwW08Fk-unsplash 1.png";
import Group from "../images/Group.png";

const CardComp4 = () => {
  return (
    <Wrapper>
      <div className="container cont-1">
        <div className="row mainy d-flex">
          <div className="col  section1 d-flex">
            <div className="me-2 spain">
              <h5 className=" px-5">Brand Partners</h5>
              <p className=" txtB px-5">
                he Union Jack, or Uion Flag <br /> United Kingdom
              </p>
              <button className="btn-1">Buy New</button>
            </div>
            <div className=" mx-2">
              <img src={newama} alt="" className="mich h-75 w-75" />
            </div>
          </div>
          <div className="col section2 d-flex">
            <div className="spain me-2">
              <h5 className=" px-5">Brand Partners</h5>
              <p className="txtB px-5">
                he Union Jack, or Uion Flag <br /> United Kingdom
              </p>
              <button className="btn-1">Buy New</button>
            </div>
            <div className="mx-2">
              <img src={newama} alt="" className="mich h-75 w-75" />
            </div>
          </div>
        </div>
      </div>

      <div className="container cont-2 ">
        <div className="">
          {" "}
          <button className="btn-11">New Arrivals</button>
          <button className="btn-2">See All</button>
        </div>
        <div className="sectioncard d-flex">
          <div class="card h-80  ">
            <div class="card-body">
              <div className="img-box card-img-top p-0">
                <img src={jens} className="img-1 increase" alt="" />
              </div>
              <h6 class="card-title cardtxt mt-2">
                Philips Somnec Sleep and
                <br />
                Wake-up light
              </h6>
              <img src={group} alt="" />
              <p className="card-text cardtxt ">
                $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
              </p>
              <button className="btncard"> Buy now</button>
              <img src={poly} className="feny position-absolute top-1 end-1" alt="" />
              <img src={Group} className="mx-4" alt="" />
              <img src={vector1} alt="" />
            </div>
          </div>
          <div class="card h-80 ">
            <div class="card-body">
              <div className="img-box card-img-top p-0">
                <img src={alexan} className="img-1 increase" alt="" />
              </div>
              <h6 class="card-title cardtxt mt-2">
                Philips Somnec Sleep and
                <br />
                Wake-up light
              </h6>
              <img src={group} alt="" />
              <p className="card-text cardtxt ">
                $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
              </p>
              <button className="btncard"> Buy now</button>
              <img src={Group} className="mx-4" alt="" />
              <img src={vector1} alt="" />
            </div>
          </div>
          <div class="card h-80 ">
            <div class="card-body">
              <div className="img-box card-img-top p-0">
                <img src={josh} className="img-1 increase" alt="" />
              </div>
              <h6 class="card-title cardtxt mt-2">
                Philips Somnec Sleep and
                <br />
                Wake-up light
              </h6>
              <img src={group} alt="" />
              <p className="card-text cardtxt ">
                $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
              </p>
              <button className="btncard"> Buy now</button>
              <img src={poly} className="feny position-absolute top-1 end-1" alt="" />
              <img src={Group} className="mx-4" alt="" />
              <img src={vector1} alt="" />
            </div>
          </div>
          <div class="card h-80  ">
            <div class="card-body">
              <div className="img-box card-img-top p-0">
                <img src={pablo} className="img-1 increase" alt="" />
              </div>
              <h6 class="card-title cardtxt mt-2">
                Philips Somnec Sleep and
                <br />
                Wake-up light
              </h6>
              <img src={group} alt="" />
              <p className="card-text cardtxt ">
                $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
              </p>
              <button className="btncard"> Buy now</button>
              <img src={Group} className="mx-4" alt="" />
              <img src={vector1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="col d-flex mainy">
          <div className="col banner-1">
            <h5 className="banatxt">Banner</h5>
          </div>
          <div className="col banner-2">
            <h5 className="banatxt">Banner</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardComp4;

const Wrapper = styled.div`
  .container {
    margin-top: 8rem;
    margin-bottom: 5rem;
  }
  .sectioncard {
    margin-left: 12rem;
  }
  .mainy {
    width: 63rem;
    height: 15rem;
    margin-left: 9.9rem;
  }
  .section1 {
    background-color: #d6e6f3;
    margin-right: 1.5rem;
    width: 20rem;
    height: 13.5rem;
  }
  .section2 {
    background-color: #d6e6f3;
    margin-left: 1.5rem;
    width: 20rem;
    height: 13.5rem;
  }
  .btncard {
    background-color: #fd6a00;
    border: orange;
    color: white;
    font-size: 12px;
  }
  .txtB {
    font-size: 12px;
  }
  .btn-1 {
    background-color: #fd6a00;
    border: #fd6a00;
    font-size: 12px;
    color: white;
    margin-left: 3rem;
    padding: 0.3rem;
    width: 5rem;
  }
  .spain {
    margin-top: 3rem;
  }
  .mich {
    width: 500px;
    height: 500px;
    padding-top: 4rem;
    margin-left: 3rem;
  }
  .btn-11 {
    background-color: #fd6a00;
    color: white;
    border: #fd6a00;
    padding: 0.8rem;
    width: 11rem;
    margin-left: 12rem;
  }
  .btn-2 {
    border-color: #fd6a00;
    padding: 0.3rem;
    width: 7rem;
    color: #fd6a00;
    margin-left: 44rem;
  }
  .feny {
    position: absolute;
    margin-top: -22.5em;
    margin-left: 7em;
  }
  .img-box {
    background-color: #e7e7e8;
  }
  .cardtxt {
    font-size: 12px;
  }
  .sec1a {
    padding-left: 3rem;
  }
  .sec2a {
    padding-top: 4rem;
    padding-left: 3rem;
  }
  .cont-2 {
    margin-top: 7rem;
    margin-left: 12rem;
  }
  strike {
    color: #fd6a00;
  }
  .banner-1 {
    background-color: #d6e6f3;
    height: 13.5rem;
    width: 20rem;
    margin-right: 1.5rem;
  }
  .banner-2 {
    background-color: #d6e6f3;
    margin-left: 1.5rem;
    height: 13.5rem;
    width: 20rem;
  }
  .banatxt {
    text-align: center;
    margin-top: 6rem;
  }
`;
