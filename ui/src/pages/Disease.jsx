import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

export default function Disease() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="test">
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .test {
    display: flex;
    flex-direction: column;
    gap: 200px;
  }
`;
