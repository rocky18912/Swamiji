import React from "react";
import map from "../assets/map.png";
import styled from "styled-components";

export default function Corosal() {
  return (
    <Container>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
            <div className="slide">
              <img src={map} alt="map" />
            </div>
          </div>
          <div className="upper">
            <h1>HELLO</h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  .wrapper {
    display: flex;
    /* align-items: center;
    justify-content: center; */
    /* height: 65vh; */
    padding-top: 40px;
    margin: 0;
  }

  .slider {
    height: 300px;
    margin: 0;
    padding-bottom: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .slide-track {
    position: relative;
  }
  .upper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 45vw;
    padding-top: 87px;
    padding-bottom: 87px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-family: "Courier New", Courier, monospace;
    font-weight: 500;
    letter-spacing: 15px;
  }

  .slider .slide-track {
    -webkit-animation: scroll 30s linear infinite;
    animation: scroll 30s linear infinite;
    display: flex;
    width: calc(250px * 4);
  }

  .slider .slide {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }

  .slider .slide img {
    width: 100%;
    height: 250px;
    width: 250px;
    border-radius: 5px;
    object-fit: cover;
    border: 2px solid #bbbbbb;
  }

  @-webkit-keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
`;
