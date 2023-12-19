import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import heroImg from "../assets/hero right.png";
import x from "../assets/blob hero left.png";
import { Footer } from "../components/Footer";
import Selector from "../components/Selector";
import rupantran from "../assets/rupantran.png";
import vwc from "../assets/vwc.png";
import { FaAngleRight } from "react-icons/fa";
import Corosal from "../components/Corosal";
import Map from "../components/Map";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <div className="disp-left">
          <div className="image-blob">
            <img src={x} alt="" />
          </div>
          <div className="content">
            <h2>Our</h2>
            <h1>Leader</h1>
            <p>
              Yogi Shri Ashutosh ji Maharaj, a renowned Siddha Yogi in Kriya
              yoga, transforms inmates through yoga in Tihar prison. His
              enlightened vision aims to make India crime-free through yoga,
              inspiring youth, women, and children. Honored by the Prime
              Minister, he leads transformative journeys.
            </p>
            <button className="butt-click">Click Here</button>
          </div>
        </div>
        <div className="disp-right">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <Corosal />
      <div className="vedic-wellness-center">
        <div className="disp">
          <div className="left">
            <h1>Vedic Wellness Center</h1>
            <p>
              Our objective at the Vedic Wellness Centre is that we want to give
              back to society and help you awaken your spirits. We support
              holistic therapies like yoga, Ayurveda, and naturopathy. We have
              been collaborating with people, corporations, and the
              disadvantaged section of society since our goal is to revive these
              antiquated practices for the benefit of society.
            </p>
          </div>
          <div className="right">
            <img src={vwc} alt="img" />
          </div>
        </div>
      </div>
      <div className="rupantran-yatra">
        <div className="disp">
          <div className="left">
            <img src={rupantran} alt="img" />
          </div>
          <div className="right">
            <h1>Rupantran Yatra</h1>
            <h2>A New chapter in Prison reforms.</h2>
            <h3>(20th September to 4th October, 2016)</h3>
            <p>
              Organized a transformational tour “Rupantran Yatra – A new chapter
              in prison reforms” for Inmates of Tihar prison. 18prisoners
              participate in 14 days “Rupantran Yatra” (Transformational) tour
              to Haridwar. Yoga, Meditation, spiritual discourse, Hindu rituals
              Gurukul lifestyle etc. to help transform their personalities.
              First time in the history of Prison Reforms such an initiative has
              been taken.
            </p>
            <a href="">
              See full Program
              <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
      <div className="display-section">
        <Selector />
      </div>
      <Map />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .vedic-wellness-center {
    padding: 3px 120px 30px 120px;
    .disp {
      display: flex;
      gap: 60px;
      .left {
        h1 {
          font-size: 80px;
          font-weight: 400;
          color: #6ad2aa;
          padding: 0;
          margin: 0;
        }
        h2 {
          font-size: 32px;
          font-weight: 400;
          color: #16cf90;
          padding: 0;
          margin: 0;
        }
        h3 {
          font-size: 20px;
          font-weight: 400;
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 24px;
          font-weight: 400;
        }
      }
    }
    img {
      width: 525px;
      height: 525px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .rupantran-yatra {
    padding: 30px 120px 30px 120px;
    .disp {
      display: flex;
      gap: 60px;
      .right {
        h1 {
          font-size: 80px;
          font-weight: 400;
          color: #6ad2aa;
          padding: 0;
          margin: 0;
        }
        h2 {
          font-size: 32px;
          font-weight: 400;
          color: #16cf90;
          padding: 0;
          margin: 0;
        }
        h3 {
          font-size: 20px;
          font-weight: 400;
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 24px;
          font-weight: 400;
        }
        a {
          text-decoration: underline;
          color: #007d52;
          font-size: 32px;
          font-weight: 400;
        }
      }
    }
    img {
      width: 525px;
      height: 525px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .butt-click {
    padding: 12px 45px 12px 45px;
  }
  .hero {
    width: 100%;
    padding-top: 4rem;
    display: flex;
    flex: 50%;
    /* background-image: linear-gradient(to top, rgb(255, 234, 210), #fff); */
    z-index: -3;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  .disp-left {
    position: relative;
    padding-right: 60px;
    background-image: url("../assets/blob hero left.png");
    .image-blob {
      padding-top: 225px;
    }
    .content {
      position: absolute;
      top: 20%;
      left: 20%;

      h2 {
        font-size: 96px;
        margin: 0;
        font-weight: 500;
      }
      h1 {
        font-size: 128px;
        margin: 0;
        font-weight: 600;
        letter-spacing: 4px;
        background: linear-gradient(to right, #3bc797, #8bdab8);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      p {
        padding-right: 80px;
        padding-bottom: 30px;
        padding-top: 10px;
        font-family: Helvetica;
        font-size: 24px;
      }
    }
  }

  .disp-left,
  .disp-right {
    width: 100%;
  }
  button {
    margin: 3px;
    color: #460954;
    padding: 8px 12px 8px 12px;
    text-decoration: none;
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 500;
    background-color: #02a66e;
    color: #fff;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
