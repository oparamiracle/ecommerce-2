import React from "react";
import styled from "styled-components";
import vector1 from "../images/Vector (1).png";
import group from "../images/Group 34.png";
import poly from "../images/Polygon 3.png";
import Group from "../images/Group.png";
import amazon from "../remove-bg/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import spigen from "../remove-bg/spigen-airpods-max-1615400225_1-removebg-preview.png";
import comford from "../remove-bg/more-comfobuds-pro-1623982766_1-removebg-preview.png";
import jabra from "../remove-bg/jabra-earbuds-1606751909_1-removebg-preview.png";

const FourCards6 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="main">
          <div className="section1a d-flex">
            <button className="btn-1"> Fast Sellers </button>
            <button className="btn-2">See All</button>
          </div>
          <div className="section1b d-flex">
            <div class="card h-80 ">
              <div class="card-body">
                <div className="img-box card-img-top p-0">
                  <img src={amazon} className="img-1 increasea" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-2">
                  Ububa's Echo Dot (4th Gen)
                  <br />
                  Smart Speaker
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
                  <img src={spigen} className="img-1 increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-2">
                  Spigen Ultra Hybrid PRO
                  <br />
                  Case for AirPods Max
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
                  <img src={comford} className="img-1 increase mb-3" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-2">
                  Chromecast with Google-TV
                  <br />
                  Strtreaming Player
                </h6>
                <img src={group} alt="" />
                <p className="card-text cardtxt ">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={poly} className=" position-absolute green top-1 end-1" alt="" />
                <img src={Group} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-80 ">
              <div class="card-body">
                <div className="img-box card-img-top p-0">
                  <img src={jabra} className="img-1 increasee" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-2">
                  Jabra Elite Active 75t
                  <br />
                  Wireless Earbuds
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
      </div>
    </Wrapper>
  );
};

export default FourCards6;

const Wrapper = styled.div`
  .container {
    margin-bottom: 10rem;
  }
  .main {
    margin-left: 13rem;
    margin-top: 6rem;
  }
  .feny {
    position: absolute;
    margin-top: -22.3em;
    margin-left: 6.6em;
  }
  .green {
    position: absolute;
    margin-top: -22.2em;
    margin-left: 5.6em;
  }
  .img-box {
    background-color: #e7e7e8;
  }
  .cardtxt {
    font-size: 12px;
  }
  .btn-1 {
    background-color: #fd6a00;
    border: 0px;
    font-size: 14px;
    color: white;
    padding: 0.5rem;
    width: 7rem;
  }
  .btn-2 {
    border-color: #fd6a00;
    border: 0.5px solid #fd6a00;
    float: right;
    width: 6rem;
    margin-left: 43rem;
  }
  .btncard {
    background-color: #fd6a00;
    border: 0px;
    color: white;
    font-size: 12px;
  }
  .cont-2 {
    margin-top: 7rem;
  }
  strike {
    color: #fd6a00;
  }
  .increasea {
    width: 13rem;
    height: 13rem;
  }
  .increasee {
    margin-top: 4.8rem;
    margin-bottom: 2rem;
  }
`;
