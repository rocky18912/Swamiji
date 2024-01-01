import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import card from "../assets/rupantarn/card1.png";
import card2 from "../assets/rupantarn/card2.png";
import card3 from "../assets/rupantarn/card3.png";
import card4 from "../assets/projects/card4.jpg";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        padding: "25px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginRight: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        padding: "25px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
}

export default function RupCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Slider className="slider" {...settings}>
        <div className="content">
          <img src={card} alt="" />
          <p>
            Permission for welfasre Activities at Central Jail No.14 Mandoli
            2018
          </p>
        </div>
        <div className="content">
          <img src={card2} alt="" />
          <p>18 convicts lodged in Tihar back from yoga session in Haridwar</p>
        </div>
        <div className="content">
          <img src={card3} alt="" />
          <p>From Prison Inmates to Yoga Warriors</p>
        </div>
        <div className="content">
          <img src={card2} alt="" />
          <p>18 convicts lodged in Tihar back from yoga session in Haridwar</p>
        </div>
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  margin: 30px 0;
  padding: 0;
  padding-left: 20%;
  height: 100%;
  padding-bottom: 2%;
  padding-top: 2%;
  .slider {
    width: 80%;
    .content {
      background: #fff;
      border-radius: 10px;
      max-width: 20vw;
      height: 100%;
      overflow: hidden;
      background: #ebf4f1;

      img {
        width: 100%;
        max-height: 25vh;
        min-width: 20vw;
        object-fit: cover;
        width: 90%;
        margin: 0%;
        padding: 0;
      }
      p {
        padding: 20px 0px;
        max-width: 18vw;
        padding-left: 2vw;
        min-height: 12vh;
        max-height: 12vh;
      }
    }
    .dummy {
      display: none;
    }
  }
  @media screen and (max-width: 1023px) {
    h2 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 860px) {
    h2 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 750px) {
    h2 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
    }
  }
`;
