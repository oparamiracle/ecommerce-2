import React from "react";
import styled from "styled-components";
import Newama from "../remove-bg/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import group34 from "../images/Group 34.png";
import eskter from "../images/ekster-wallet-1589583184_1-removebg-preview.png";
import soundcore from "../images/soundcore-headphones-1612966364_1-removebg-preview.png";
import comford from "../remove-bg/more-comfobuds-pro-1623982766_1-removebg-preview.png";
import Neck from "../images/Neck_massager-removebg-preview.png";

const FiveCard7 = () => {
  return (
    <Wrapper>
      <div className="container-fluid main">
        {/* <h1>hellowing</h1> */}
        <div className="mainny">
          <button className="btn-1">Rencently Viewed</button>
          <button className="btn-2"> See All</button>
          <div className=" container section d-flex">
            <div className="col sec1 bg-light me-2 d-flex">
              <div className="seca mx-4 mb-2">
                <p className="txt1">
                  {" "}
                  <b>
                    {" "}
                    Ububa Echo Dot (4th Gen)
                    <br />
                    Smart Speaker
                  </b>
                </p>
                <p className="txt2">
                  Smart speaker
                  <br />
                  High Sound
                  <br />
                  Home and Office
                </p>
              </div>
              <div className="secb ms-3 mt-3">
                <img src={Newama} alt="" className="increase" />
                <p className="txt3">
                  $44.99 <strike>$49.99</strike>{" "}
                </p>
                <img src={group34} alt="" className="gro" />
              </div>
            </div>
            <div className="col sec2 mx-2 bg-light me-3 d-flex">
              <div className="seca mx-4 mb-2">
                <p className="txt1">
                  {" "}
                  <b>
                    {" "}
                    Zyllion Shiatsu Bback and
                    <br />
                    Neck Messenger
                  </b>
                </p>
                <p className="txt2">
                  Smart speaker
                  <br />
                  High Sound
                  <br />
                  Home and Office
                </p>
              </div>
              <div className="secb ms-3 mt-3">
                <img src={Neck} alt="" className="increase" />
                <p className="txt3">
                  $44.99 <strike>$49.99</strike>{" "}
                </p>
                <img src={group34} alt="" className="gro" />
              </div>
            </div>
            <div className="col sec3 mx-2 bg-light d-flex">
              <div className="seca mx-4 mb-2">
                <p className="txt1">
                  {" "}
                  <b>
                    {" "}
                    Soundcore Lie Q30 Wireless
                    <br />
                    Headphones by Anker
                  </b>
                </p>
                <p className="txt2">
                  Smart speaker
                  <br />
                  High Sound
                  <br />
                  Home and Office
                </p>
              </div>
              <div className="secb ms-3 mt-3">
                <img src={soundcore} alt="" className="increase" />
                <p className="txt3">
                  $44.99 <strike>$49.99</strike>{" "}
                </p>
                <img src={group34} alt="" className="gro" />
              </div>
            </div>
          </div>
          <div className=" container section-a d-flex">
            <div className="col sec1 bg-light me-2 d-flex">
              <div className="seca mx-4 mb-2">
                <p className="txt1">
                  {" "}
                  <b>
                    {" "}
                    ComfoBuds Pro True
                    <br />
                    Smart Speaker
                  </b>
                </p>
                <p className="txt2">
                  Smart speaker
                  <br />
                  High Sound
                  <br />
                  Home and Office
                </p>
              </div>
              <div className="secb ms-3 mt-3">
                <img src={comford} alt="" className="increase" />
                <p className="txt3">
                  $44.99 <strike>$49.99</strike>{" "}
                </p>
                <img src={group34} alt="" className="gro" />
              </div>
            </div>
            <div className="col sec2 mx-2 me-2 bg-light d-flex">
              <div className="seca mx-4 mb-2">
                <p className="txt1">
                  {" "}
                  <b>
                    {" "}
                    Eskter Parliament mart
                    <br />
                    Wallet
                  </b>
                </p>
                <p className="txt2">
                  Smart speaker
                  <br />
                  High Sound
                  <br />
                  Home and Office
                </p>
              </div>
              <div className="secb ms-3 mt-3">
                <img src={eskter} alt="" className="increase" />
                <p className="txt3">
                  $44.99 <strike>$49.99</strike>{" "}
                </p>
                <img src={group34} alt="" className="gro" />
              </div>
            </div>
            <div className="col  sec3 mx-2 d-flex"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FiveCard7;

const Wrapper = styled.div`
  .main {
    background-color: #ecd6c6;
    height: 85vh;
    .btn-1 {
      background-color: #fd6a00;
      border: 0px;
      font-size: 14px;
      color: white;
      margin-left: 15rem;
      padding: 0.5rem;
      width: 9rem;
      margin-top: 5rem;
      margin-bottom: 1rem;
    }
    .btn-2 {
      /* background-color: #fd6a00; */
      border: 1px solid #fd6a00;
      color: #fd6a00;
      font-size: 13px;
      margin-left: 63rem;
      padding: 0.2rem;
      width: 5rem;
    }
    .section {
      width: 80rem;
      height: 14rem;
      margin-bottom: 0.2rem;
    }
    .section-a {
      width: 80rem;
      margin-top: 0rem;
      height: 14rem;
      margin-bottom: 4rem;
    }
    .sec1 {
      height: 12rem;
      width: 15rem;
    }
    .sec2 {
      height: 12rem;
      width: 15rem;
    }
    .sec3 {
      height: 12rem;
      width: 15rem;
    }
    .increase {
      width: 110px;
      height: 110px;
    }
    .gro {
      margin-left: 1.3rem;
    }
    .txt1 {
      /* margin-bottom: 0rem; */
      margin-top: 3rem;
    }
    .txt2 {
      margin-bottom: 0rem;
      font-size: 11px;
    }
    .txt3 {
      margin-bottom: 0rem;
      font-size: 11px;
      margin-left: 0.9rem;
    }
    strike {
      color: #fd6a00;
    }
  }
`;
