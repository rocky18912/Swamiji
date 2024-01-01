import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return (
    <Container>
      <div className="disp">
        <div className="left">
          <img src={props.image} alt="" />
        </div>
        <div className="right">
          {props.para}
          <br />
          <br />
          {props.date}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  height: 35vh;
  width: 40vh;
  .disp {
    display: flex;
    border-radius: 10px;
    .left {
      width: 100%;
      img {
        min-height: 35vh;
        min-width: 10vw;
        width: 100%;
        height: 95%;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      padding: 0px 10px;
    }
  }
`;
