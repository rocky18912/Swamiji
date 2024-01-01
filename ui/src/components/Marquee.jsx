import React from "react";
import styled from "styled-components";
import news1 from "../assets/portfolio/new1.png";
import news2 from "../assets/portfolio/news2.png";
import news3 from "../assets/portfolio/news3.png";
import news4 from "../assets/portfolio/news4.png";
import news5 from "../assets/portfolio/news5.png";

export default function () {
  return (
    <Container>
      <div className="badge">Acharya Ashutosh Kumar in media</div>
      <div className="slider">
        <div className="slider-container">
          <div className="slider-content-wrapper">
            <div style={{ display: "inline-block" }}>
              <div className="pictures-container">
                <div className="item">
                  <img src={news1} alt="" />
                </div>
                <div className="item">
                  <img src={news2} alt="" />
                </div>
                <div className="item">
                  <img src={news3} alt="" />
                </div>
                <div className="item">
                  <img src={news4} alt="" />
                </div>
                <div className="item">
                  <img src={news5} alt="" />
                </div>
                <div className="item">
                  <img src={news3} alt="" />
                </div>
                <div className="item">
                  <img src={news2} alt="" />
                </div>
              </div>
            </div>
            <div style={{ display: "inline-block" }}>
              <div className="pictures-container">
                <div className="item">
                  <img src={news1} alt="" />
                </div>
                <div className="item">
                  <img src={news2} alt="" />
                </div>
                <div className="item">
                  <img src={news3} alt="" />
                </div>
                <div className="item">
                  <img src={news4} alt="" />
                </div>
                <div className="item">
                  <img src={news5} alt="" />
                </div>
                <div className="item">
                  <img src={news3} alt="" />
                </div>
                <div className="item">
                  <img src={news2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  body {
    margin: 0;
  }
  .badge {
    margin: 0;
    padding-top: 4px;
    padding-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bedcd5;
    color: #fff;
    font-size: 36px;
    font-weight: bolder;
  }
  .slider {
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #ebf4f1;
  }

  .slider-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .slider-content-wrapper {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 20s linear infinite;
  }

  .pictures-container {
    white-space: nowrap;
    overflow: hidden;
  }

  .item {
    display: inline-block;
    margin-left: 30px;
    height: 70%;
  }

  @keyframes marquee {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @media screen and (max-width: 1400px) {
    .badge {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    .badge {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 900px) {
    .badge {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 750px) {
    .badge {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    .badge {
      font-size: 18px;
    }
  }
`;
