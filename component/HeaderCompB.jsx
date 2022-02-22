import React from "react";
import styled from "styled-components";
import ububa from "../images/Ububa.png";
import icon from "../images/icon-park-outline_menu-fold-one.png";
import group4 from "../images/Vector.svg";
import vector1 from "../images/Vector (1).png";
import grouppng from "../images/Group.png";
import bxbx from "../images/bx_bx-help-circle.png";
import group5 from "../images/Group 5.png";

const HeaderCompB = () => {
  return (
    <Wrapper className="">
      <section className="container-fluid row">
        <div className="container main ">
          <div className="col-3  ububa">
            &nbsp; <img src={ububa} alt="logo1" />
            &nbsp;&nbsp;
            <img src={icon} className="ms-5" alt="logo2" />
          </div>
          <div className="col-4 mt-3 allcat">
            <div class="dropdown">
              <a className="btn  dropdown-toggle dropen" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                All categories
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">
                    Grocerries
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Toletries
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Foodstuffs
                  </a>
                </li>
              </ul>
            </div>

            <hr className="hr-v" />

            <form class="d-flex">
              <input className="form-control  me-2 text-small" type="search" placeholder="Search product, categories" aria-label="Search" />
              <button className="btn bigo" type="submit">
                <img src={group4} alt="" />
              </button>
            </form>
          </div>

          <div className="col-   img1 ">
            {" "}
            <img src={vector1} alt="" />
            &nbsp; &nbsp; &nbsp;
            <img src={grouppng} alt="" />
          </div>
          <div className="col-  img2">
            <img src={bxbx} alt="" />
            &nbsp; &nbsp; &nbsp;
            <img src={group5} alt="" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HeaderCompB;

const Wrapper = styled.div`
  .main {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    height: 9vh;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .bigo {
    background-color: #fd7e14;
    width: 6em;
    margin-left: 5rem;
  }
  input {
    border-color: white;
    font-size: 13px;
  }
  .dropen {
    align-content: center;
    margin-top: 0.3rem;
    font-size: 13px;
  }
  .hr-v {
    border: 5px;
    width: 2px;
    height: 22px;
    margin-left: 1rem;
    margin-top: 0.5em;
  }
  .allcat {
    display: flex;
    border: 0.3px solid #e7e7e8;
    height: 2.5rem;
    padding-bottom: 0%;
    margin-bottom: 2%;
  }

  .magb {
    margin-bottom: 5rem;
  }
  .ububa {
    padding-left: 1.5em;
  }
  .endnav {
    align-items: right;
    margin-left: 12rem;
    justify-content: space-evenly;
  }
  .img1 {
    padding-top: 1%;
    padding-left: 4em;
  }
  .img2 {
    padding-top: 1%;
    margin-right: 6em;
    padding-right: 0em;
  }
`;
