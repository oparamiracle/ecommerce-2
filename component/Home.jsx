import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="mainsec">
          <button className="btn text-white btn-1"> Trending Discounts</button>
          <h1 className="txt1">Try Next levels</h1>
          <h1 className="mb-4 txt2">
            <b>Smart gadgets </b>
          </h1>
          <p className="para1">
            he Union Jack, or Union Flag, is the de facto national flag of <br /> the United Kingdom. Though no law has been pased <br /> officially making effectively
          </p>
          <button className="btn  btn-lg btn-2 text-white" tabindex="-1" role="button">
            Shop Now
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  .container-fluid {
    background-image: url("/images/Group 81.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    margin-top: 0.5rem;
  }
  .btn-1 {
    background-color: #12111e;
    margin-bottom: 1.5rem;
  }
  .btn-2 {
    background-color: #fd6a00;
    margin-top: 1.5rem;
  }
  .mainsec {
    padding-left: 8.5rem;
    padding-top: 10rem;
  }
  .para1 {
    font-size: 14px;
  }
  .txt1 {
    font-size: 41px;
  }
  .txt2 {
    font-size: 41;
  }
  .btn-1 {
    font-size: 14px;
  }
`;
