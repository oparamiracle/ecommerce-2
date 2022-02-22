import React from "react";
import styled from "styled-components";
import newAmazon from "../images/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import neck from "../remove-bg/Neck_massager-removebg-preview.png";
import homepod from "../remove-bg/homepod-mini-1608325167_1-removebg-preview.png";
import phil from "../remove-bg/philips-somneo-sleep-light-1541437221_1-removebg-preview.png";
import sound from "../remove-bg/soundcore-headphones-1612966364_1-removebg-preview.png";
import groupi from "../images/Group.png";
import vector1 from "../images/Vector (1).png";
import group from "../images/Group 34.png";
import poly from "../images/Polygon 3.png";
const GridSec2 = () => {
  return (
    <Wrapper>
      <div className=" container-fluid ">
        <div className="containera">
          <button className="btn-1">New Arrivals</button>
          <div className="section d-flex">
            <div className="col-4 sec-1">
              <img src={newAmazon} alt="" className="pt-5" />
              <span>
                <h3 className="mx-5">
                  {" "}
                  <b>Echo Dot</b>
                </h3>
                <h4 className="mx-4">(Smart Speaker)</h4>
                <p className="mx-5 txts">
                  $44.99 &nbsp; &nbsp; <strike>$49.99</strike>
                </p>
                <button className="btn btn-2 txts">Buy Now</button>
                <p className="txt1">Hurray! Offer ends in </p>
              </span>
              <div className="d-flex">
                <span>
                  {" "}
                  <button className=" btn btns me-2">6</button>:<p className="txt txt2 ">days</p>
                </span>
                <span>
                  {" "}
                  <button className=" btn btns mx-2">12</button>:<p className="txt mx-3 txt3">HR</p>
                </span>
                <span>
                  {" "}
                  <button className="btn btns me-2 mx-2">09</button>:<p className="txt mx-3 txt4">Mins</p>
                </span>
                <span>
                  {" "}
                  <button className=" btn btns mx-2">10</button>
                  <p className="txt mx-3 txt5">Sec</p>
                </span>
              </div>
              <p className="txt txt6">22 Available</p>
            </div>
            <div className="col-6 sec2">
              <div className="section1a d-flex">
                <div class="card h-80 w-40">
                  <div class="card-body d-1">
                    <div className="img-box card-img-top ">
                      <img src={neck} className="img-1 increase" alt="" />
                    </div>
                    <h6 class="card-title cardtxt mt-2">
                      Zyfilion Siatsu Back and
                      <br />
                      Neck Messager
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
                <div class="card h-80 w-40 ">
                  <div class="card-body">
                    <div className="img-box card-img-top p-0">
                      <img src={phil} className="img-1 increase" alt="" />
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
                    <img src={groupi} className="mx-4" alt="" />
                    <img src={vector1} alt="" />
                  </div>
                </div>
              </div>
              <div className="  d-flex">
                <div class="card h-80  w-40">
                  <div class="card-body">
                    <div className="img-box card-img-top ">
                      <img src={homepod} className="img-1 increase" alt="" />
                    </div>
                    <h6 class="card-title cardtxt mt-2">
                      Apple HomPod mini Smart
                      <br />
                      Speaker
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
                <div class="card h-80 w-40">
                  <div class="card-body ">
                    <div className="img-box card-img-top ">
                      <img src={sound} className="img-1 increase" alt="" />
                    </div>
                    <h6 class="card-title cardtxt mt-2">
                      Soundcore Life Q3O Wireless
                      <br />
                      Headphones by Anker
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GridSec2;

const Wrapper = styled.div`
  .containera {
    padding: 3rem;
    margin-top: 5rem;
    margin-left: 21rem;
    margin-bottom: 6rem;
  }
  .btn-1 {
    background-color: #fd6a00;
    color: white;
    width: 8rem;
    border: #fd6a00;
    padding: 0.7rem;
    width: 8rem;
  }
  .sec-1 {
    background-color: #d6e6f3;
    padding-left: 5rem;
    height: fit-content;

    .btn-2 {
      background-color: #fd6a00;
      color: white;
      margin-left: 4rem;
    }
    .txt1 {
      font-size: 12px;
      margin-top: 2rem;
      margin-left: 3rem;
    }
    .btns {
      border-color: #fd6a00;
      padding: 1rem;
      height: 3rem;
      font-size: 12px;
    }
    .txt {
      font-size: 10px;
    }
    .txts {
      font-size: 12px;
    }
    .txt6 {
      margin-left: 6rem;
      margin-top: 3rem;

      .strik {
        color: #fd6a00;
      }
    }

    .section1a {
      width: 30rem;
    }
  }
  .btncard {
    background-color: #fd6a00;
    border: orange;
    color: white;
    font-size: 12px;
  }
  .feny {
    position: absolute;
    margin-top: -20em;
    margin-left: 4.5em;
  }
  .img-box {
    background-color: #e7e7e8;
  }
  .cardtxt {
    font-size: 12px;
  }
  .increase {
    height: 10.8rem;
  }
  strike {
    color: #fd6a00;
  }
`;
