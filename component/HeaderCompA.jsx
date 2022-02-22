import React from "react";
import styled from "styled-components";
import img1 from "../images/img1.png";
import facebook from "../images/Facebook.png";
import instagram from "../images/Instagram.png";
import linldin from "../images/Linkedin.png";
import vector from "../images/Vector.png";
import twitter from "../images/Twitter.png";
import { Link } from "react-router-dom";

const HeaderCompA = () => {
  return (
    <Wrapper>
      <section className=" container-fluid  gather">
        <div className="container main ">
          <div className="left">
            <div className="menu">
              <div class="dropdown  ">
                <div class=" dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={img1} className="mx-2" alt="us" />
                  English
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Mathematics
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Agriculture
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Economics
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <hr className="hr-v" />
              </div>
              <div class="dropdown ">
                <div class=" dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown">
                  Currency: USD
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <button class="dropdown-item" type="button">
                      Europe
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Dollar
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      naira
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <hr className="hr-v" />
              </div>
            </div>
            <div className="  d-flex fa-icons ">
              <div>
                <img src={facebook} className="me-4 ms-4" alt="" />
                &nbsp;
              </div>

              <div>
                <img src={twitter} className="me-4" alt="" />
                &nbsp;
              </div>

              <div>
                <img src={instagram} className="me-3" alt="" />
                &nbsp;
              </div>

              <div>
                <img src={linldin} className="me-4" alt="" />
                &nbsp;
              </div>
            </div>
            <div className=" call text-dark">
              <img src={vector} alt="" /> &nbsp; &nbsp; +234 801 262 4162
            </div>
          </div>
          <div className="right">
            <div className="lastlink">
              <ul className="ul-link">
                <li>
                  <Link to="/react" className="text-danger">
                    About us
                  </Link>
                  &nbsp; &nbsp;
                </li>
                <li>
                  <Link to="/react" className="text-dark">
                    &nbsp; &nbsp; &nbsp;Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HeaderCompA;

const Wrapper = styled.div`
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .left {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  .right {
    display: flex;
    justify-content: end;
    width: 32%;
  }
  .menu {
    display: flex;
  }
  .gather {
    display: flex;
    background-color: #d6e6f3;
    font-size: 13px;
    padding-top: 1rem;
  }

  .hr-v {
    border: 0px;
    border-left: 1px solid hsla(200, 10%, 50%, 100);
    height: 20px;
    width: 1px;
    padding: 0%;
    margin-top: 5%;
    margin-left: 2em;
  }
  .ul-link {
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: flex-end;
  }
  a {
    text-decoration: none;
  }
  .lastlink {
    align-content: flex-end;
    text-decoration: none;
  }
  .fa-icons {
    justify-content: space-around;
  }
  .call {
  }
`;
