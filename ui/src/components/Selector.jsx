import React, { useState } from "react";
import styled from "styled-components";
import one from "../assets/chakras.png";
import two from "../assets/meditation.png";
import three from "../assets/save-water.png";
import four from "../assets/view.png";
import five from "../assets/lotus.png";
import anthem from "../assets/anthem.jpg";

export default function Selector() {
  const [opt, setOpt] = useState("one");
  const [selected, setSelected] = useState(false);
  return (
    <Container>
      <div className="buttons">
        <button
          className="active"
          onClick={() => {
            setOpt("one");
          }}
        >
          <img src={one} alt="" />
          Vedic Wellnes
        </button>
        <button
          onClick={() => {
            setOpt("two");
          }}
        >
          <img src={two} alt="" />
          Panchtantra
        </button>
        <button
          onClick={() => {
            setOpt("three");
          }}
        >
          <img src={three} alt="" />
          Netalochana
        </button>
        <button
          onClick={() => {
            setOpt("four");
          }}
        >
          <img src={four} alt="" />
          Treatment
        </button>
        <button
          onClick={() => {
            setOpt("five");
          }}
        >
          <img src={five} alt="" />
          Ayurveda
        </button>
      </div>
      <div className="display">
        <FetchDisp option={opt} />
      </div>
      <script></script>
    </Container>
  );
}

function FetchDisp(props) {
  if (props.option === "one") {
    return (
      <div className="disp">
        <div className="left">
          <h1>Vedic Wellness</h1>
          <p>
            Vedic Wellnes centre is a holistic wellness philosophy that promotes
            a pure and balanced lifestyle. It emphasizes consuming natural,
            unprocessed foods, practicing mindfulness, maintaining a peaceful
            state of mind, and living in harmony with nature. Satvikam
            encourages self-discipline, moderation, and positive thinking while
            discouraging indulgence in excessive sensory pleasures and negative
            emotions. By following Satvikam principles, individuals can
            cultivate physical, mental, and spiritual well-being.
          </p>
        </div>
        <div className="right">
          <img src={anthem} alt="" />
        </div>
      </div>
    );
  }
  if (props.option === "two") {
    return (
      <div className="disp">
        <div className="left">
          <h1>Panchatantra</h1>
          <p>
            Embark on a journey of wisdom with Panchatantra at our yoga center.
            Delve into ancient fables that impart timeless life lessons. Join
            our sessions where we explore the profound teachings of
            Panchatantra, fostering personal growth and cultivating moral
            values.
          </p>
        </div>
        <div className="right">
          <img src={anthem} alt="" />
        </div>
      </div>
    );
  }
  if (props.option === "three") {
    return (
      <div className="disp">
        <div className="left">
          <h1>Netralochana</h1>
          <p>
            Explore the mystical world of Netralochana at our yoga center.
            Immerse yourself in the ancient scriptures that unveil profound
            spiritual insights. Join our enlightening sessions where we delve
            into the teachings of Netralochana, expanding consciousness and
            nurturing inner awakening.
          </p>
        </div>
        <div className="right">
          <img src={anthem} alt="" />
        </div>
      </div>
    );
  }
  if (props.option === "four") {
    return (
      <div className="disp">
        <div className="left">
          <h1>Treatment</h1>
          <p>
            Our expert instructors will guide you through ancient breathing
            techniques to enhance vitality, reduce stress, and deepen your
            connection to inner peace. Join us and harness the transformative
            benefits of pranayama practice.
          </p>
        </div>
        <div className="right">
          <img src={anthem} alt="" />
        </div>
      </div>
    );
  }
  if (props.option === "five") {
    return (
      <div className="disp">
        <div className="left">
          <h1>Ayurveda</h1>
          <p>
            Embark on a holistic healing journey with Ayurveda at our yoga
            center. Discover the ancient science of life that promotes balance
            and well-being. Experience personalized Ayurvedic consultations,
            rejuvenating therapies, and herbal remedies, as we guide you towards
            optimal health and harmony of mind, body, and spirit.
          </p>
        </div>
        <div className="right">
          <img src={anthem} alt="" />
        </div>
      </div>
    );
  }
}

const Container = styled.div`
  .selected {
    background-color: red;
  }
  .display {
    padding: 20px 2px 20px 2px;
  }
  padding: 20px 150px 20px 150px;
  .disp {
    display: flex;
    flex: 50%;
    justify-content: space-between;
    /* gap: 200px; */
    .left {
      width: 100%;
      /* padding-top: 60px; */
      padding-left: 10px;
      h1 {
        font-size: 70px;
        margin: 0;
        font-weight: 600;
        letter-spacing: 4px;
        background: linear-gradient(to right, #3bc797, #8bdab8);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      p {
        font-size: 21px;
      }
    }
    .right {
      width: 100%;
      /* padding-left: 200px; */
      img {
        width: 400px;
        height: 400px;
        margin-left: 200px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    button {
      display: flex;
      flex-direction: column;
      min-height: 7rem;
      min-width: 200px;
      color: black;
      img {
        width: 60px;
        height: 60px;
      }
      background-color: #f4f4f4;
      border-radius: 10px;
      transition: 0.3ms ease-in-out;
    }
    button:active {
      background-color: #3bc797;
      color: #fff;
      img {
        width: 60px;
        height: 60px;
      }
    }
    button:focus {
      background-color: #3bc797;
      color: #fff;
      img {
        color: #fff;
      }
    }
  }
`;
