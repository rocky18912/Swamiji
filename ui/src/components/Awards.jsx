import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import card from "../assets/award/card1.png";
import card2 from "../assets/award/card2.png";
import card3 from "../assets/award/card3.png";
import card4 from "../assets/award/card4.png";
import Card from "./Card";
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
      <h2>Awards & Recognitions</h2>
      <Slider className="slider" {...settings}>
        <Card
          image={card}
          para={
            "Honored by “SCHOOL OF AYUSH STUDIES AND RESEARCH CONFEDERATION OF INDIAN UNIVERSITIES” in field of naturopathy and indigenous therapies"
          }
          date={"29th March 2018."}
        />
        <Card
          image={card2}
          para={
            "Yoga Prashikshan Samman by Swami Sahjanand Sarshwati Kishan Suchna Kendra, New Delhi"
          }
          date={"2012"}
        />
        <Card
          image={card3}
          para={
            "Appreciation for the work done to reduce stress and negativity through yoga in Tihar jail by Tihar DG Shri Alok Kumar Verma"
          }
          date={"29th March 2018."}
        />
        <div className="outlier" onClick={() => navigate("/allawards")}>
          <Card image={card4} para={"See All..."} />
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
  .outlier {
    overflow: hidden;
    cursor: pointer;
  }
  h2 {
    font-size: 40px;
    color: #02a66e;
    font-weight: 400;
    padding: 1% 0%;
    padding-left: 22%;
  }
  .slider {
    width: 80%;
    min-height: 40vh;
    display: inline-block;
    .disp {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Roboto";
      font-weight: lighter;
      display: inline-flex;
      width: 100%;
    }
  }
`;
