import React from "react";
import styled from "styled-components";
import plan from "../assets/plan1.png";
import { FaCircleCheck } from "react-icons/fa6";

export default function Plan() {
  return (
    <Container>
      <h1 className="heading"> Our Plans</h1>
      <div className="cards">
        <div className="left">
          <h2>Save More</h2>
          <h1>With GoodPlans</h1>
          <p>
            Choose a plan and get onboard in minutes. Then get $100 credits for
            your next payment.
          </p>
          <img src={plan} alt="" />
        </div>
        <div className="midle">
          <h1>Annual Membership</h1>
          <h3>What u will get..</h3>
          <div className="content">
            <FaCircleCheck className="check" />8 hours usage of our coworking
            space.
          </div>
          <div className="content">
            <FaCircleCheck className="check" />
            Access to all our rooms.
          </div>
          <h1> &#x20B9; 25,000 </h1>
          <button>Choose</button>
        </div>
        <div className="right">
          <h1>Life Membership</h1>
          <h3>What u will get..</h3>
          <div className="content">
            <FaCircleCheck className="check" />8 hours usage of our coworking
            space.
          </div>
          <div className="content">
            <FaCircleCheck className="check" />
            Access to all our rooms.
          </div>
          <div className="content">
            <FaCircleCheck className="check" />
            Dediacted Desks.
          </div>
          <div className="content">
            <FaCircleCheck className="check" />
            Free Bussiness Address.
          </div>
          <div className="content">
            <FaCircleCheck className="check" />
            Free 1x Lunch a day.
          </div>
          <h1> &#x20B9; 25,00,000 </h1>
          <button>Choose</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2% 10%;
  .heading {
    margin-left: 33%;
    padding: 2% 0%;
    color: #02a66e;
    font-size: 90px;
    font-weight: 400;
  }
  .cards {
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: space-between;
    button {
      background: #2e6434;
      width: 100%;
      border-radius: 6px;
    }
    .left {
      width: 33.33%;
      background: #2e6434;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1%;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      h1 {
        font-weight: 400;
      }
      p {
        padding: 2.5% 5%;
      }
      img {
        width: 90%;
      }
    }
    .midle {
      width: 33.33%;
      border-radius: 12px;
      padding: 1.5% 3%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* align-items: center; */
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      h1 {
        font-size: 30px;
        font-weight: 400;
        border-bottom: 2px dashed #bbb;
      }
      .check {
        margin-right: 5px;
      }
    }
    .right {
      width: 33.33%;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* align-items: center; */
      padding: 1.5% 3%;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

      h1 {
        font-size: 30px;
        font-weight: 400;
        border-bottom: 2px dashed #bbb;
      }
      .check {
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 481px) {
    .heading {
      font-size: 40px;
      margin-left: 28%;
    }
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
    button {
      font-size: 20px;
    }
    .cards {
      flex-direction: column;
      .left,
      .midle,
      .right {
        width: 100%;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .heading {
      font-size: 50px;
      margin-left: 28%;
    }
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
    button {
      font-size: 20px;
    }
    .cards {
      flex-direction: column;
      .left,
      .midle,
      .right {
        width: 100%;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .heading {
      font-size: 60px;
      margin-left: 28%;
    }
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
    button {
      font-size: 20px;
    }
    .cards {
      .left,
      .midle,
      .right {
        width: 100%;
        z-index: 1;
      }
    }
  }
`;
