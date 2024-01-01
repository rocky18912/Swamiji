import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card from "../assets/membership/card1.png";
import card2 from "../assets/membership/card2.png";
import card3 from "../assets/membership/card3.png";
import card4 from "../assets/membership/card4.png";
import card5 from "../assets/membership/card5.png";
import card6 from "../assets/membership/card6.png";
import styled from "styled-components";

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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
    return (
      <Container>
        <h2>Associations and membership</h2>
        <Slider className="slider" {...settings}>
          <div className="content">
            <img src={card} alt="" />
            <div className="disp">
              <h1>Founder Secretory</h1>
              <p>Panchawati Yogashram & Nature Cure Center</p>
            </div>
          </div>
          <div className="content">
            <img src={card2} alt="" />
            <div className="disp">
              <h1>Yoga Consultant</h1>
              <p>
                Bennett, Coleman & Co Ltd, The Times of India Group, Delhi;
                2008-09
              </p>
            </div>
          </div>
          <div className="content">
            <img src={card3} alt="" />
            <div className="disp">
              <h1>General Secretary</h1>
              <p>Akhil Bhartiya Sanatan Dharma Mahasabha, Delhi State</p>
            </div>
          </div>
          <div className="content">
            <img src={card4} alt="" />
            <div className="disp">
              <h1>Impaneled Yoga Teacher</h1>
              <p>Sita World Travel (Cyoni Travels).</p>
            </div>
          </div>
          <div className="content">
            <img src={card5} alt="" />
            <div className="disp">
              <h1>Founder Secretary</h1>
              <p>Panchawati Yogashram & Nature Cure Center</p>
            </div>
          </div>
          <div className="content">
            <img src={card6} alt="" />
            <div className="disp">
              <h1>Yoga Consultant of various foreign embassies</h1>
            </div>
          </div>
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 30px 0;
  padding: 0;
  padding-left: 20%;
  background: #ebf4f1;
  h2 {
    padding-left: 15%;
    font-size: 40px;
    color: #02a66e;
    font-weight: 400;
  }
  .slider {
    width: 80%;
    padding-bottom: 2%;
    img {
      width: 100%;
      max-height: 36vh;
      max-width: 15vw;
    }
    .content {
      img {
        filter: grayscale(50%);
        position: absolute;
        width: 100%;
        margin: 0%;
        padding: 0;
      }
      .disp {
        position: relative;
        max-width: 12vw;
        max-height: 20vh;
        left: 15%;
        margin: 0%;
        padding: 0;
        color: #fff;
        h1 {
          margin-top: 25%;
          font-weight: 400;
        }
        p {
          font-size: 18px;
          margin-bottom: 45%;
        }
      }
    }
    .dummy {
      display: none;
    }
  }
  @media screen and (max-width: 1400px) {
    h2 {
      font-size: 32px;
    }
    .content {
      .disp {
        /* display: flex; */
        justify-content: center;
        h1 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 32px;
    }
    .content {
      .disp {
        display: flex;
        justify-content: center;
        h1 {
          font-size: 20px;
        }
        p {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    h2 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 750px) {
    img {
      display: none;
    }
    h2 {
      font-size: 24px;
    }
    .content {
      .disp {
        min-height: 20vh;
        background: #02a66e;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        h1 {
          padding: 0 5%;
          font-weight: lighter;
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
    }
  }
`;
