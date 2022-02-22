import React from "react";
import styled from "styled-components";
import frame from "../images/Frame 6.png";
import amazon from "../images/New-amazon-echo-dot-1606058621_1-removebg-preview.png";
import mask from "../images/Mask Group.png";

const GridSec1 = () => {
  return (
    <Wrapper>
      <div className="container-fluid mt-5">
        <div className="sectionny">
          <h1 className="txt1">Trending</h1>
          <div className="container  d-flex">
            <div className="col-4 bg-info speaker mx-4">
              <img src={amazon} alt="" className="px-4 " />
              <img src={frame} className="position-absolute top-1 end-1" alt="" />
              <p className="txt-2 mt-5 mb-0 ">Ububa’s Echo Dot (4th Gen) Smart Speaker</p>
              <div className="d-flex">
                <p className="txt-3 mtop">
                  <strike>$49.99</strike>
                </p>
                <p className="mx-4 txt-4 mtop"> $44.99</p>
                <button className="btn-small btn-1">Shop Now</button>
              </div>
            </div>
            <div className="col-8 main-1 ">
              <div className="row  slant">
                <img src={mask} alt="" className="maskk" />
              </div>
              <div className="row   straight">
                <div className="col-6 straight1">
                  <img src={frame} className="teny position-absolute top-1 end-1" alt="" />
                  <p className="second-T ">
                    Ububa’s Echo Dot (4th <br /> Gen) Smart Speaker
                  </p>
                  <div className="d-flex">
                    <p className="third-T ">
                      <strike>$49.99</strike>
                    </p>
                    <p className="mx-4 fourth-T"> $44.99</p>
                    <button className="btn-small btn-1a">Shop Now</button>
                  </div>
                </div>
                <div className="col-6 straight2">
                  <img src={frame} className=" position-absolute top-1 end-1" alt="" />
                  <p className="second-T">
                    Ububa’s Echo Dot (4th <br /> Gen) Smart Speaker
                  </p>
                  <div className="d-flex">
                    <p className="third-T ">
                      <strike>$49.99</strike>
                    </p>
                    <p className="mx-4 fourth-T "> $44.99</p>
                    <button className="btn-small btn-1a">Shop Now</button>
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

export default GridSec1;

const Wrapper = styled.div`
  .container-fluid {
    .container {
      margin-left: 14rem;
    }
    .sectionny {
      margin-left: 7rem;
    }
    .txt1 {
      margin-top: 4em;
      padding-bottom: 2rem;
      margin-left: 6.4em;
    }
    .txt-2 {
      font-size: 12px;
      margin-top: 3rem;
    }
    .second-T {
      font-size: 12px;
      margin-top: 6.5rem;
      margin-left: 0.3rem;
    }
    .txt-3 {
      color: #fd6a00;
      font-size: 12px;
    }
    .third-T {
      color: #fd6a00;
      font-size: 12px;
      margin-left: 0.3rem;
    }
    .txt-4 {
      font-size: 12px;
    }
    .fourth-T {
      font-size: 12px;
    }
    .mtop {
      margin-top: 6px;
    }
    .speaker {
      background: linear-gradient(236.31deg, #9eedfa 0%, #f5fdff 160.07%);
      padding: 3rem;
      height: 26rem;
    }
    .btn-1 {
      background-color: #fd6a00;
      border-color: whitesmoke;
      margin-left: 7rem;
      color: white;
      font-size: 10px;
      width: 6rem;
      border-radius: 5px;
    }
    .btn-1a {
      background-color: #fd6a00;
      border: 0.5px solid white;
      margin-left: 2rem;
      color: white;
      font-size: 10px;
      width: 6rem;
      border-radius: 5px;
    }
    .main-1 {
      width: 65%;
    }
    .teny {
      margin-left: 13rem;
    }
    .straight {
      display: flex;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      margin-bottom: 2rem;
      height: 12rem;
      margin-top: 1rem;
      margin-bottom: 2px;
      width: 68%;
    }
    .straight1 {
      background-image: url("/images/90angle.png");
      background-repeat: no-repeat;
      background-position-x: right;
      width: 17rem;
      margin-right: 0.5rem;
      height: 12rem;
      background-color: whitesmoke;
      /* background-color: red; */
      border: 4px solid white;
      box-sizing: border-box;
    }
    .straight2 {
      background-image: url("/images/90angle.png");
      background-repeat: no-repeat;
      background-position: right;
      width: 17rem;
      margin-left: 0.5rem;
      height: 12rem;
      background-color: #f5f5f5;
      border: 4px solid white;
      box-sizing: border-box;
    }
    .shift {
      margin-left: 9rem;
    }
  }
  .maskk {
    width: 36rem;
    height: 13rem;
  }
`;
