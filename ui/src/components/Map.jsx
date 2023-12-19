import React, { useState } from "react";
import styled from "styled-components";
import ind from "../assets/india.png";
import world from "../assets/world.png";
import one from "../assets/indi-icon.png";
import two from "../assets/continents.png";

export default function Selector() {
  const [opt, setOpt] = useState("one");
  const [selected, setSelected] = useState(false);
  return (
    <Container>
      <div className="wrap">
        <span>
          We Present all over<span className="decor"> India</span> and
          <span className="decor"> World</span>....
        </span>
        <p>
          We are proud to present our offerings to the world, spreading wellness
          and wisdom across borders and cultures.
        </p>
        <a href="">Know More</a>
      </div>
      <div className="buttons">
        <button
          className="active"
          onClick={() => {
            setOpt("ind");
          }}
        >
          <img src={one} alt="" />
          India
        </button>
        <button
          onClick={() => {
            setOpt("world");
          }}
        >
          <img src={two} alt="" />
          World
        </button>
      </div>
      <div className="display">
        <FetchDisp option={opt} />
      </div>
      <script></script>
    </Container>
  );
}

function FetchDisp(props) {
  if (props.option === "ind") {
    return (
      <div className="disp">
        <img src={ind} alt="" />
      </div>
    );
  }
  if (props.option === "world") {
    return (
      <div className="disp">
        <img src={world} alt="" />
      </div>
    );
  }
}

const Container = styled.div`
  span {
    margin: 0;
    font-size: 90px;
    font-weight: 500;
  }
  .decor {
    font-size: 90px;
    color: #3bc797;
    font-weight: 500;
  }
  .wrap {
    margin-left: 8vw;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    p {
      font-size: 20px;
    }
    a {
      padding-left: 440px;
      font-size: 24px;
      text-decoration: none;
      font-weight: 500;
      color: #007d52;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .selected {
    background-color: red;
  }
  .display {
    padding: 20px 2px 20px 2px;
  }
  padding: 20px 150px 20px 150px;
  .disp {
    display: flex;
    flex: 50%;
    justify-content: center;
    align-items: center;
    /* gap: 200px; */
    img {
      width: 850px;
      height: 850px;
      object-fit: contain;
    }
  }
  .buttons {
    display: flex;
    padding-left: 27vw;
    gap: 12px;
    button {
      display: flex;
      flex-direction: column;
      min-height: 7rem;
      min-width: 200px;
      color: black;
      img {
        width: 60px;
        height: 60px;
      }
      background-color: #f4f4f4;
      border-radius: 10px;
      transition: 0.3ms ease-in-out;
    }
    button:active {
      background-color: #3bc797;
      color: #fff;
      img {
        width: 60px;
        height: 60px;
      }
    }
    button:focus {
      background-color: #3bc797;
      color: #fff;
      img {
        color: #fff;
      }
    }
  }
`;
