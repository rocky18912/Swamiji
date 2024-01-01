import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import card from "../assets/projects/card1.png";
import card2 from "../assets/projects/card2.png";
import card3 from "../assets/projects/card3.png";
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

export default function SimpleSlider() {
  const settings = {
    dots: false,
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
      <h2>Projects and Programs</h2>
      <Slider className="slider" {...settings}>
        <div className="content">
          <img src={card} alt="" />
          <p>Panchawati Yogashram & Nature Cure Center</p>
        </div>
        <div className="content">
          <img src={card2} alt="" />
          <p>Celebrate World Health Day in Tihar jail no.5 2018</p>
        </div>
        <div className="content">
          <img src={card3} alt="" />
          <p>
            Permission for welfasre Activities at Central Jail No.14 Mandoli
            2018
          </p>
        </div>
        <div className="content" onClick={() => navigate("/allprogs")}>
          <img src={card4} alt="" />
          <p>See All... </p>
        </div>
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  margin: 30px 0;
  padding: 0;
  padding-left: 20%;
  background: #ebf4f1;
  height: 100%;
  padding-bottom: 2%;
  h2 {
    font-size: 40px;
    color: #02a66e;
    font-weight: 400;
    padding: 1% 0%;
    padding-left: 22%;
  }
  .slider {
    width: 80%;
    .content {
      background: #fff;
      border-radius: 5px;
      max-width: 20vw;
      overflow: hidden;
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
