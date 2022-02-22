import React from "react";
import styled from "styled-components";
import New from "../images/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import Gro2 from "../images/Gro2.png";
import Gro1 from "../images/Gro1.png";
import groupi from "../images/Group.png";
import vector1 from "../images/Vector (1).png";
import group from "../images/Group 34.png";
import group80 from "../images/Group 80.png";
import eclips6 from "../images/Ellipse 6.png";
import googletv from "../remove-bg/google-tv-player-1612186244_1-removebg-preview.png";
import grovmade from "../remove-bg/grovemade-magsafe-stand-1612194198_2__1_-removebg-preview.png";
import nimble from "../remove-bg/nimble-battery-pack-1616685253_1-removebg-preview.png";
import sony from "../remove-bg/sony-speaker-1616941193_1-removebg-preview.png";
import spigin from "../remove-bg/spigen-airpods-max-1615400225_1-removebg-preview.png";
import coway from "../remove-bg/coway-airmega-150-1614951359_1-removebg-preview.png";

const cardComp5 = () => {
  return (
    <Wrapper>
      <div className="container-fluid ">
        <div className="main">
          <div className="grid d-flex ">
            <div className="section1 col-3 mx-5">
              <div className="sec1">
                <div className="d-flex">
                  <h6 className="txt-2">
                    {" "}
                    <b> Latest Product</b> &nbsp;&nbsp;
                  </h6>
                  <img src={Gro2} alt="" className="gro" /> &nbsp;&nbsp;
                  <img src={Gro1} alt="" className="gro" />
                </div>
                <div className="card-smal d-flex p-2  ">
                  <img src={New} alt="" className="increase" />
                  <span className="spany">
                    <p className="txtt-1 mb-0">Sample Product</p>
                    <img src={group} alt="" />
                    <p className="txt-1 mb-0">$44.99</p>
                  </span>
                </div>
                <div className="card-smal d-flex p-2  ">
                  <img src={New} alt="" className="increase" />
                  <span className="spany">
                    <p className="txtt-1 mb-0">Sample Product</p>
                    <img src={group} alt="" />
                    <p className="txt-1 mb-0">$44.99</p>
                  </span>
                </div>
                <div className="card-smal d-flex p-2  ">
                  <img src={New} alt="" className="increase" />
                  <span className="spany">
                    <p className="txtt-1 mb-0">Sample Product</p>
                    <img src={group} alt="" />
                    <p className="txt-1 mb-0">$44.99</p>
                  </span>
                </div>
                <div className="card-smal d-flex p-2 ">
                  <img src={New} alt="" className="increase" />
                  <span className="spany">
                    <p className="txtt-1 mb-0">Sample Product</p>
                    <img src={group} alt="" />
                    <p className="txt-1 mb-0">$44.99</p>
                  </span>
                </div>
                <div className="card-smal d-flex p-2 ">
                  <img src={New} alt="" className="increase" />
                  <span className="spany">
                    <p className="txtt-1 mb-0">Sample Product</p>
                    <img src={group} alt="" />
                    <p className="txt-1 mb-0">$44.99</p>
                  </span>
                </div>
                <div className="card-smal empty-1 d-flex p-2 "></div>
                <div className="card-smal empty-2 d-flex p-2 "></div>
                <div className="card-smal empty-3 d-flex p-2 "></div>
              </div>
            </div>
            <div className="section2 col-8">
              <div className="section3 mt-4 p-3 row">
                <div className="sectionb p-3 mx-3 row">
                  <div className="col">
                    <img src={eclips6} alt="" />
                    <h3 className="mx-5">Gadget Combo</h3>
                    <p className="mx-5 mb-0 txt3">
                      the Union Jack, or Union flag,United
                      <br />
                      Jack, or Union flag
                    </p>
                    <button className="btn btn-1">Buy Now</button>
                  </div>
                  <div className="col">
                    <img src={group80} alt="" className="tree-1" />
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div class="card h-80">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={googletv} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Chromecast with Google TV
                        <br />
                        Streaming Player
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
                  </div>
                  <div class="card h-80 ">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={grovmade} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Grovemade wood MagSafe
                        <br />
                        Stand
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
                  </div>
                  <div class="card h-80">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={nimble} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Nimble CHAMP Portable
                        <br />
                        Battery Pack
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div class="card h-80">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={sony} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Sony SRS-RA3000 360
                        <br />
                        Reality Audio Wi-Fi Speaker
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
                  </div>
                  <div class="card h-80 ">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={spigin} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Spigen Ultra Hybrd PRO
                        <br />
                        Case or AirPods Max
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
                  </div>
                  <div class="card h-80 ">
                    <div class="card-body">
                      <div className="img-box card-img-top ">
                        <img src={coway} className="img-1 increaseA" alt="" />
                      </div>
                      <h6 class="card-title cardtxt mt-3">
                        Coway Airmags ISO HEPA Air
                        <br />
                        Purifier
                      </h6>
                      <img src={group} alt="" />
                      <p className="card-text cardtxt ">
                        $44.99 &nbsp; &nbsp;<strike>$44.99</strike>
                      </p>
                      <button className="btncard"> Buy now</button>
                      <img src={groupi} className="mx-4" alt="" />
                      <img src={vector1} alt="" />
                    </div>
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

export default cardComp5;

const Wrapper = styled.div`
  .main {
    margin-top: 7rem;
    margin-left: 12.5rem;
  }
  .card-smal {
    border: 1px solid lightgray;
    width: 15rem;
    height: 6rem;
    margin-left: 9rem;
  }
  .empty-1 {
    border: 1px solid lightgray;
    width: 15rem;
    height: 4rem;
    margin-left: 9rem;
  }
  .empty-2 {
    border-radius: 10px solid lightgray;
    width: 15rem;
    height: 4rem;
    margin-left: 9rem;
    background-color: #c4c4c4;
  }
  .empty-3 {
    border: 1px solid lightgray;
    width: 15rem;
    height: 15rem;
    margin-left: 9rem;
    background-color: #e7e7e8;
  }
  .increase {
    width: 80px;
    height: 80px;
  }
  .spany {
    margin-left: 2rem;
    margin-top: 0.7rem;
  }
  .txtt-1 {
    font-size: 12px;
    color: #fd6a00;
  }
  .txt-1 {
    font-size: 10px;
  }
  .sectionb {
    border: 1px solid lightgray;
    width: 42rem;
  }
  .sec1 {
    margin-top: 1rem;
  }
  .txt-2 {
    margin-left: 12rem;
  }
  .txt3 {
    font-size: 12px;
    color: darkgray;
  }
  .btn-1 {
    width: 8rem;
    padding: 0.6 rem;
    background-color: #fd6a00;
    margin-left: 2.7rem;
    margin-top: 0.9rem;
    color: white;
  }
  .tree-1 {
    width: 18rem;
  }
  .img-box {
    background-color: #e7e7e8;
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
    color: darkgray;
  }
  .btncard {
    font-size: 12px;
  }
  .section3 {
  }
  .section1 {
    margin-top: 3rem;
  }
  .increaseA {
    padding: 2rem;
    height: 12rem;
    width: 12rem;
    align-items: center;
  }
  .gro {
    height: 1rem;
  }
`;
