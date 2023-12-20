import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import map from "../assets/map.png";
import fb from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import twit from "../assets/Twitter.png";
import linked from "../assets/LinkedIn.png";

export const Footer = () => {
  return (
    <Container>
      <div className="badge">
        <img src={logo} alt="logo" />
        <h1>Vedic Wellness Foundation</h1>
      </div>
      <div className="info">
        <div className="left">
          <h2>
            Embark on a Journey of Serenity and Strength with Our Yoga Guru
          </h2>
          <div className="anchors">
            <a href="">About</a>
            <a href="">Contact Us</a>
            <a href="">Media</a>
            <a href="">Wikipedia</a>
          </div>
          <div className="socials">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={linked} alt="" />
            <img src={twit} alt="" />
          </div>
          <div className="copyright">
            <span>Copyrights reserved &copy; Pahad Programmers</span>
          </div>
        </div>
        <div className="right">
          <img src={map} alt="" />
          <p>Mansa Devi Colony Gumaniwala,Rishikesh Dev bhoomi uttrakhand</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #02a66e;
  font-family: Helvetica;
  color: #fff;
  .badge {
    padding-top: 20px;
    padding-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h1 {
      font-weight: lighter;
      color: #fff;
      font-size: 32px;
    }
  }
  .info {
    display: flex;
    padding: 2px 40px 2px 40px;
    flex: 50%;
    gap: 30px;
    h2 {
      font-size: 32px;
      font-weight: lighter;
    }
    .left {
      padding: 2px 40px 50px 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;

      .anchors {
        display: flex;
        gap: 120px;
        a {
          font-size: 20px;
          text-decoration: none;
          color: #ccc;
          &:hover {
            color: #fff;
          }
        }
      }
      .socials {
        gap: 50px;
        display: flex;
        img {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .right {
      width: 100%;
      align-items: center;
      justify-content: center;
      img {
        margin-left: 120px;
      }
      p {
        margin-left: 108px;
      }
    }
  }
  @media screen and (max-width: 1350px) {
    .info {
      flex-direction: column;
      .left {
        h2 {
          padding-left: 27%;
          font-size: 20px;
          align-items: center;
          justify-content: center;
        }
        .anchors {
          /* padding-left: 50%; */
          padding-top: 30px;
          flex-direction: column;
          gap: 30px;
          padding-bottom: 30px;
          align-items: center;
        }
        .socials {
          display: flex;
          padding-top: 30px;
          gap: 30px;
          padding-bottom: 30px;
          align-items: center;
          justify-content: center;
          /* padding-left: 35%; */
        }
        .copyright {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        .img {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        .p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .info {
      flex-direction: column;
      .left {
        h2 {
          padding-left: 30px;
          font-size: 20px;
          align-items: center;
          justify-content: center;
        }
        .anchors {
          padding-top: 30px;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 30px;
        }
        .socials {
          padding-left: 20%;
        }
      }
      .right {
        margin: 0;
        padding: 0;
        img {
          margin-left: 4%;
          padding: 0;
          width: 85%;
          height: 85%;
        }
        p {
          margin-left: 38px;
          padding: 0;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .badge {
      h1 {
        display: none;
      }
    }
    .info {
      .left {
        h2 {
          display: none;
        }
      }
      .right {
        display: none;
      }
    }
  }
`;
