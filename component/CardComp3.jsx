import React from "react";
import styled from "styled-components";
import homepod from "../images/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import morecom from "../images/more-comfobuds-pro-1623982766_1-removebg-preview.png";
import sony from "../images/sony-headphones-1606067964_1-removebg-preview.png";
import ankara from "../images/anker-power-bank-powercore-iii-elite-25600-1623426442_1-removebg-preview.png";
import group from "../images/Group 34.png";
import poly from "../images/Polygon 3.png";
import groupi from "../images/Group.png";
import vector1 from "../images/Vector (1).png";
import eskter from "../images/ekster-wallet-1589583184_1-removebg-preview.png";
import tribit from "../images/tribit-speaker-1602156080_1-removebg-preview.png";
import soundcore from "../images/soundcore-headphones-1612966364_1-removebg-preview.png";
import jabra from "../images/jabra-earbuds-1606751909_1-removebg-preview.png";

const CardComp3 = () => {
  return (
    <Wrapper>
      <div className="container ">
        <div className="main">
          <div className="btns ">
            <button className="   btn-1">
              <h5>Best Seller</h5>
            </button>
            <button className="btn btn-large btn-2">
              <h6 className="twin">Newest</h6>
            </button>
            <button className="btn btn-large btn-3">
              <h6 className="twin">Hotdeals</h6>
            </button>
          </div>
          <div className="container d-flex">
            <div class="card h-100">
              <div class="card-body">
                <div className="img-box card-img-top ">
                  <img src={homepod} className="img-2 increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
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
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100">
              <div class="card-body">
                <div className="img-box card-img-top ">
                  <img src={morecom} class="card-img-top increase" alt="" />
                </div>
                <h6 className=" cardtxt mt-3">
                  ComfoBuds Pro True Wireless
                  <br />
                  Earbuds
                </h6>
                <img src={group} alt="" />
                <p class=" cardtxt">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard">Buy now</button>
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100 ">
              <div class="card-body">
                <div className="img-box card-img-top">
                  <img src={sony} class="card-img-top increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Sony WH-1000XM4 wireless
                  <br />
                  Noise-Cancelling Headephones
                </h6>
                <img src={group} alt="" />
                <p class=" cardtxt ">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={poly} className="feny-1 " alt="" />
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100 ">
              <div class="card-body">
                <div className="img-box card-img-top">
                  <img src={ankara} class="card-img-top increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Anker PowerCore ill Elite
                  <br />
                  Laptop Battery Pack
                </h6>
                <img src={group} alt="" />
                <p className=" cardtxt">
                  $44.99 &nbsp; &nbsp;<strike className="cardtxt">$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
          </div>
          <div className="container d-flex">
            <div class="card h-100 ">
              <div class="card-body">
                <div className="img-box card-img-top ">
                  <img src={eskter} className="img-1 increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Ekster Parliament smart
                  <br />
                  Wallet
                </h6>
                <img src={group} alt="" />
                <p className="card-text cardtxt ">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={poly} className="feny position-absolute top-1 end-1" alt="" />
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100">
              <div class="card-body">
                <div className="img-box card-img-top ">
                  <img src={tribit} class="card-img-top increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Tribit StormBox Micro
                  <br />
                  Waterproof Bluetooth Speaker
                </h6>
                <img src={group} alt="" />
                <p class=" cardtxt">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard">Buy now</button>
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100 ">
              <div class="card-body">
                <div className="img-box card-img-top">
                  <img src={soundcore} class="card-img-top increase" alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Soundcore life Q#O Wireless
                  <br />
                  Headephones by Anker
                </h6>
                <img src={group} alt="" />
                <p class=" cardtxt ">
                  $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={poly} className="feny-1 " alt="" />
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
            <div class="card h-100">
              <div class="card-body">
                <div className="img-box card-img-top  ">
                  <img src={jabra} className="card-img-top img-2 mt-5 mb-4 " alt="" />
                </div>
                <h6 class="card-title cardtxt mt-3">
                  Jabra Elite Active 75t Wireless
                  <br />
                  Earbuds
                </h6>
                <img src={group} alt="" />
                <p className=" cardtxt">
                  $44.99 &nbsp; &nbsp;<strike className="cardtxt">$44.99</strike>
                </p>
                <button className="btncard"> Buy now</button>
                <img src={groupi} className="mx-4" alt="" />
                <img src={vector1} alt="" />
              </div>
            </div>
          </div>
          <button className="btn-last">See All</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardComp3;

const Wrapper = styled.div`
  .container {
    margin-top: 3rem;
  }
  .main {
    margin-left: 9rem;
    max-width: 1140px;
    margin-top: 6rem;
  }
  .img-box {
    background-color: #e7e7e8;
    width: 13rem;
  }
  .img-1 {
    padding: 15px;
  }
  .img2 {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .feny {
    position: absolute;
    margin-top: -19.8em;
    margin-left: 7em;
  }
  .feny-1 {
    position: absolute;
    margin-top: -19.8em;
    margin-left: 7em;
  }
  .btns {
    margin-left: 8.2rem;
  }
  .btn-1 {
    background-color: #fd6a00;
    color: white;
    border: orange;
    width: 8rem;
    padding: 3px;
    padding-top: 0.7rem;
    margin-left: -7.4rem;
  }
  h5 {
    font-size: 12px;
  }
  .twin {
  }
  .btn-2 {
    background-color: #e7e7e8;
    margin-left: 4rem;
    margin-right: 3rem;
    width: 6rem;
    padding: 0.4rem;
  }
  .btn-3 {
    background-color: #e7e7e8;
    width: 6rem;
    padding: 0.4rem;
  }
  .btncard {
    background-color: orangered;
    border: orange;
    color: white;
  }
  strike {
    color: #fd6a00;
  }
  .cardtxt {
    font-size: 12px;
  }
  .btncard {
    font-size: 12px;
  }
  .shorty {
    padding: 7px;
  }
  .increase {
    height: 10rem;
    width: 10rem;
  }
  .btn-last {
    color: #fd6a00;
    border-color: #fd6a00;
    width: 6rem;
    margin-left: 55.4rem;
  }
`;
