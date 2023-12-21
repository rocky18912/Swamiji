import React, { useState } from "react";
import "./newNav.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import logo from "../assets/logo.png";
import styled from "styled-components";

export default function NewNavbar({ isScrolled }) {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} navbar`}>
        <div className="container">
          <img src={logo} alt="" />
          <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
            <li
              onClick={() => {
                navigate("/courses");
              }}
            >
              Courses
            </li>
            <li
              onClick={() => {
                navigate("/treatment");
              }}
            >
              Treatment
            </li>
            <li
              onClick={() => {
                navigate("/diesease");
              }}
            >
              Diseases
            </li>
            <li
              onClick={() => {
                navigate("/yogadhara");
              }}
            >
              Yoga Dhara
            </li>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              About Us
            </li>
            <Modal />
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 10;
  }
  li {
    font-weight: 300;
    margin: 0 5px;
    &:hover {
      color: #02a66e;
      font-weight: bolder;
    }
  }
`;
