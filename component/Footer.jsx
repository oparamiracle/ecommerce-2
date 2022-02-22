import React from "react";
import styled from "styled-components";
import facebook from "../images/Facebook (1).png";
import twitter from "../images/Group (2).png";
import instagram from "../images/Instagram (1).png";
import linkedin from "../images/Instagram (1).png";
import ububa from "../images/Group 4.png";
import paypal from "../images/paypal 1.png";
import visa from "../images/visa 1.png";
import vector2 from "../images/Vector (2).png";
import vector3 from "../images/Vector (3).png";
import vector4 from "../images/Vector (4).png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container-fluid pt-3">
        <div className="mainny">
          <div className="container d-flex bg-light pt-4 shadow p-3 mb-5 bg-body rounded">
            <div className="col txt-1">
              <h6>Subscribe to our News Letter</h6>
            </div>
            <div className=" col d-flex">
              <input type="text" placeholder="Enter your email address" className="inpot" />
              <button className="  btn-1">Submit</button>
            </div>
          </div>
          <div className="container-1 d-flex row">
            <div className="col">
              <img src={facebook} alt="" />
              &nbsp; &nbsp;
              <img src={twitter} alt="" className=" twi bg-light " />
              &nbsp; &nbsp;
              <img src={linkedin} alt="" />
              &nbsp; &nbsp;
              <img src={instagram} alt="" />
            </div>
            <div className=" col">
              <img src={ububa} alt="" />
            </div>
            <div className=" col d-flex">
              <img src={paypal} alt="" />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <img src={visa} alt="" />
            </div>
          </div>
          <hr className="hr-v" />
          <div className="container-1 d-flex row">
            <div className="col">
              <img src={vector2} alt="" className="para1" />
              <h6 className="txt2 para">Mail</h6>
              <p className="txt2 paraa">+2349012624162</p>
            </div>
            <div className=" col">
              <img src={vector3} alt="" className="para1" />
              <h6 className="txt2 para">Call</h6>
              <p className="txt2 paraa">+2349012624162</p>
            </div>
            <div className=" col">
              <img src={vector4} alt="" className="para1" />
              <h6 className="txt2 para">Find us</h6>
              <p className="txt2 paraa">+2349012624162</p>
            </div>
          </div>
          <hr className="hr-v" />
          <div>
            <p className="txt2 parae">
              copywrite@copy2021 <b className="text-danger">UBUBA</b>.All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  .container-fluid {
    background-color: #12111e;
    /* height: 8rem; */
    border: 3px solid #12111e;
    height: 45vh;
  }
  .mainny {
    margin-left: 9rem;
  }
  .container {
    height: 6rem;
    width: 55rem;
    margin-top: -4rem;
    margin-left: 18rem;
    border-top: 2px solid #3b3b41;
  }
  .container-1 {
    width: 55rem;
    margin-left: 18rem;
  }
  .hr-v {
    border: 2px solid darkgray;
    width: 55rem;
    margin-left: 18rem;
  }
  .btn-1 {
    width: 7rem;
    height: 3rem;
    background-color: #12111e;
    color: white;
    border: 0px;
  }
  h6 {
    margin-top: 1rem;
    margin-left: 5rem;
  }
  h5 {
    margin-top: 1rem;
  }
  .inpot {
    width: 25rem;
  }
  input {
    height: 3rem;
    background-color: #d6e6f3;
    border: 0px;
    padding: 0%.5rem;
    font-size: 12px;
    color: darkgray;
  }
  .twi {
    border-radius: 60px;
    padding: 6px;
  }
  .txt2 {
    color: darkgray;
    font-size: 12px;
  }
  .paraa {
    margin-left: 3rem;
  }
  .parae {
    text-align: center;
  }
  .para1 {
    margin-left: 5rem;
    margin-bottom: 0.5rem;
  }
`;
