import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({ isScrolled }) {
  const navigate = useNavigate();
  const [courseOpen, setCourseOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const [course, setCourse] = useState("");
  const [treatment, setTreatment] = useState("");
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div
          className="left"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="right">
          <div className="courses">
            <div
              className="menu-trigger "
              onClick={() => {
                if (treatOpen) {
                  setTreatOpen(false);
                  setCourseOpen(true);
                } else {
                  setCourseOpen(!courseOpen);
                }
              }}
            >
              <div className="text">Courses</div>
              <FaAngleDown className="downArrow" />
            </div>
            <div
              className={`dropdown-menu ${courseOpen ? "active" : "inactive"} `}
            >
              <ul>
                <DropdownItem text={"Option 1"} type={"course"} />
                <DropdownItem text={"Option 2"} type={"course"} />
              </ul>
            </div>
          </div>
          <div className="treatment">
            <div
              className="menu-trigger "
              onClick={() => {
                if (courseOpen) {
                  setTreatOpen(true);
                  setCourseOpen(false);
                } else {
                  setTreatOpen(!treatOpen);
                }
              }}
            >
              <div className="text">Treatment</div>
              <FaAngleDown className="downArrow" />
            </div>
            <div
              className={`dropdown-menu ${treatOpen ? "active" : "inactive"} `}
            >
              <ul>
                <DropdownItem text={"Option 1t"} type={"treatment"} />
                <DropdownItem text={"Option 2t"} type={"treatment"} />
              </ul>
            </div>
          </div>
          <div
            className="disease"
            onClick={() => {
              navigate("/disease");
            }}
          >
            Disease
          </div>
          <div
            className="yoga_dhara"
            onClick={() => {
              navigate("/yogadhara");
            }}
          >
            Yoga Dhara
          </div>
          <div
            className="about"
            onClick={() => {
              navigate("/");
            }}
          >
            About Us
          </div>
          <Modal />
        </div>
      </nav>
    </Container>
  );
}

function DropdownItem(props) {
  const navigate = useNavigate();
  return (
    <li className="dropdownItem">
      <a
        href=""
        onClick={() => {
          navigate(`/${props.type}/${props.text}`);
        }}
      >
        {props.text}
      </a>
    </li>
  );
}

const Container = styled.div`
  .logo-img {
    width: 40px;
    height: 40px;
  }
  font-family: sans-serif;
  .disease,
  .yoga_dhara,
  .about,
  .treatment,
  .courses {
    &:hover {
      cursor: pointer;
      color: #02a66e;
    }
  }
  .scrolled {
    border-bottom: 0.5px solid gray;
    z-index: 5;
    h1 {
      color: #126656;
    }
    a {
      color: #126656;
    }
  }
  .menu-trigger {
    display: flex;
  }
  .menu-trigger,
  .disease,
  .yoga_dhara,
  .about {
    padding: 0px 6px;
  }
  .dropdown-menu {
    position: absolute;
    background-color: #ccc;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    color: black;
    /* left: -10px */
  }
  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.3ms ease-in-out;
  }
  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.3ms ease-in-out;
  }
  .dropdown-menu ul {
    padding: 0px 8px;
  }
  .dropdown-menu ul li {
    padding: 10px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    list-style: none;
  }
  .dropdown-menu ul li a {
    text-decoration: none;
    left: -10px;
  }
  nav {
    position: sticky;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    position: fixed;
    align-items: center;
    background-color: #fff;
    transition: 0.3s ease-in-out;
  }
  .left {
    padding-left: 100px;
  }
  .right {
    display: flex;
    padding-right: 120px;
    align-items: center;
    gap: 20px;
    /* font-family: "Courier New", Courier, monospace; */
    color: #460954;
    text-decoration: none;
    font-size: 18px;
    /* font-weight: bolder; */
  }
`;
