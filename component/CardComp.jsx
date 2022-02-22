import React from "react";
import styled from "styled-components";
import guarantee from "../images/guarantee 1.png";
import fast from "../images/fast 1.png";
import secure from "../images/secure-payment 1.png";
import group1 from "../images/Group (1).png";

const CardComp = () => {
  return (
    <Wrapper>
      <div className="container-fluid pt-3">
        <div className="container d-flex bg-light pt-4 shadow p-3 mb-5 bg-body rounded">
          {cards.map((card) => (
            <div className="card2 imgsec bg-light d-flex" key={card.id}>
              <span className="mx-4">
                <img src={card.Image} alt="" className=" mt-2" />
              </span>
              <span>{card.Text}</span>
            </div>
          ))}
          <hr className="hr-v" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CardComp;

const Wrapper = styled.div`
  .container-fluid {
    background-color: #d6e6f3;
    height: 8rem;
    border: 3px solid #d6e6f3;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .container {
    height: 8rem;
    margin-top: 2rem;
  }
  .card2 {
    height: 5rem;
    width: 20rem;
    background-color: white;
    display: flex;
    padding-top: 5px;
    position: relative;
    background-color: #f2f8f9;
    border-radius: 4px;
    text-decoration: none;
    border: 3px solid #f2f8f9;

    &:hover {
      transition: all 0.3s ease-out;
      box-shadow: 0px 8px 16px rgba(38, 38, 38, 0.2);
      top: -4px;
      border: 3px solid #cccccc;
      background-color: white;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: -16px;
      right: -16px;
      background: #00838d;
      border-radius: 32px;
      transform: scale(3);
      transform-origin: 50% 50%;
      transition: transform 0.16s ease-out;
    }

    &:hover:before {
      transform: scale(3.15);
    }
  }
  .hr-v {
    border: 0;
    height: 0;
    border-top: 2px solid #fd6a00;
  }
  .text1 {
    font-size: 13px;
    margin-top: 1rem;
  }
`;

const cards = [
  {
    id: 1,
    Image: guarantee,
    Text: (
      <p className="text1 ">
        <b>100% Warantee</b> <br />
        You have 30 days to return
      </p>
    ),
  },
  {
    id: 2,
    Image: fast,
    Text: (
      <p className="text1 ">
        <b>100% Warantee</b> <br />
        You have 30 days to return
      </p>
    ),
  },
  {
    id: 3,
    Image: secure,
    Text: (
      <p className="text1 ">
        <b>100% Warantee</b> <br />
        You have 30 days to return
      </p>
    ),
  },
  {
    id: 4,
    Image: group1,
    Text: (
      <p className="text1 ">
        <b>100% Warantee</b> <br />
        You have 30 days to return
      </p>
    ),
  },
];
