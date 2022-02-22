import React from "react";
import styled from "styled-components";
import nick from "../images/nick-kane-d_fcZcJdWPc-unsplash45 1.png";

const GridSec3 = () => {
  return (
    <Wrapper>
      <div className="container-fluid cont-1 ">
        <div className="container d-flex">
          <div className=" col section-1 ">
            <button className="btn btn-1 mb-4"> Gaming Accessories</button>
            <h1 className="para">
              <b>Game Controller</b>
            </h1>
            <p className="para mt-4">
              he Union Jack, or Union flag, is the de acto national flag of
              <br />
              the United kingdom. Though no law has been passed
              <br /> oficially making efectively
            </p>
            <p className="para mt-3">
              $44.99 &nbsp; &nbsp; <strike>$49.99</strike>
            </p>
            <button className=" btn btn-2 mt-4">Buy Now</button>
          </div>
          <div className="col">
            <img src={nick} alt="" className="nicky" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GridSec3;

const Wrapper = styled.div`
  .cont-1 {
    background-image: url("../images/Group 86.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
  }
  strike {
    color: red;
  }
  .nicky {
    margin-top: -3rem;
    margin-left: -2rem;
  }
  .btn-1 {
    background-color: #243065;
    color: white;
    border-color: #243065;
    padding: 0.5rem;
    width: 15rem;
  }
  .btn-2 {
    background-color: #fd6a00;
    color: white;
    border: 1.5px solid whitesmoke;
    width: 8rem;
    padding-top: 1rem;
  }
  .para {
    color: white;
  }
  .section-1 {
    padding-top: 5rem;
    margin-left: 7rem;
  }
`;
