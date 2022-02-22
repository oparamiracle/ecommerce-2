import React from "react";
import styled from "styled-components";
import rectangle1 from "../images/Rectangle 71.png";
import rectangle2 from "../images/Rectangle 72.png";
import rectangle3 from "../images/Rectangle 73.png";
import rectangle4 from "../images/Rectangle 74.png";

const CardComp2 = () => {
  return (
    <Wrapper>
      <div className="container-fluid cardpics  pt-4 shadow p-3  rounded">
        <div className="container  ">
          <h3 className="txtinng">Brand Partners</h3>
          <div className="d-flex carrier">
            {cards.map((card) => (
              <div className="card2 imgsec  d-flex" key={card.id}>
                <span className="mx">
                  <img src={card.Image} alt="" className=" mt" />
                  <h3 className=" cardtxt ">{card.Text}</h3>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardComp2;

const Wrapper = styled.div`
  .cardpics {
    background-color: #d6e6f3;
    margin-top: 7rem;
    margin-bottom: 4rem;
  }

  .txtinng {
    text-align: center;
    margin-bottom: 1rem;
  }

  .carrier {
    margin-left: 5rem;
    margin-bottom: 1rem;
  }
  .imgsec {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
  }
  .cardtxt {
    margin-top: -6rem;
    color: white;
    margin-left: 6rem;
    margin-bottom: 5rem;
  }
`;

const cards = [
  {
    id: 1,
    Image: rectangle1,
    Text: <h3 className="text1 ">ASUS</h3>,
  },
  {
    id: 2,
    Image: rectangle2,
    Text: <h3 className="text1 ">SONY</h3>,
  },
  {
    id: 3,
    Image: rectangle3,
    Text: <h3 className="text1 ">APPLE</h3>,
  },
  {
    id: 4,
    Image: rectangle4,
    Text: <h3 className="text1 ">HP</h3>,
  },
];
