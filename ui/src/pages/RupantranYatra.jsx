import React, { useState } from "react";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import RupCard from "../components/RupCard";
import styled from "styled-components";
import end from "../assets/rupantarn/end.png";
import start from "../assets/rupantarn/start banner.png";
import Marquee from "react-fast-marquee";
import one from "../assets/rupantarn/marq`.png";
import two from "../assets/rupantarn/marq2.png";
import three from "../assets/rupantarn/marq3.png";
import four from "../assets/rupantarn/marq4.png";
import yt1 from "../assets/rupantarn/yt1.png";
import yt2 from "../assets/rupantarn/yt2.png";
import pic1 from "../assets/rupantarn/pic1.png";
import pic2 from "../assets/rupantarn/pic2.png";
import pic3 from "../assets/rupantarn/pic3.png";

export default function AllPrograms() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [see, setSee] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      <div className="start-banner">
        <img src={start} alt="" />
      </div>
      <div className="hero">
        <h1>RUPANTRAN YATRA</h1>
        <p>
          Welcome to the extraordinary journey of Rupantran Yatra – a
          groundbreaking initiative in the realm of prison reforms that unfolded
          from September 20th to October 4th, 2016. This transformative tour
          marked a paradigm shift in the approach towards inmate rehabilitation
          by organizing a 14-day journey to Haridwar for 18 prisoners from Tihar
          prison, a first-of-its-kind endeavor in the history of prison reforms.
          Immersed in the serenity of Haridwar, the participants engaged in a
          holistic program designed to catalyze personal transformation.
          <br />
          <br /> This unique experience encompassed elements such as yoga,
          meditation, spiritual discourse, Hindu rituals, and the embrace of a
          Gurukul lifestyle. The profound impact of this initiative went beyond
          the conventional boundaries of prison reforms, paving the way for a
          new chapter in the rehabilitation and rejuvenation of incarcerated
          individuals.
        </p>
        {see ? (
          <div>
            <p>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dignissimos aspernatur ducimus tempora expedita, illo
              repellat beatae? Praesentium blanditiis perferendis consequatur,
              aliquam consequuntur, ad, asperiores possimus quasi illo dolores
              id!
            </p>
            <button className="lessbtn" onClick={() => setSee(!see)}>
              Show Less..
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => setSee(!see)}>Show More..</button>
          </div>
        )}
      </div>
      <h1 className="galHead">View Photos Here...</h1>
      <div className="gallery">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
      </div>
      <div className="marq">
        <h1>Media Coverage</h1>
        <Marquee className="marquee">
          <img
            onClick={(e) =>
              (window.location.href =
                "https://timesofindia.indiatimes.com/city/dehradun/18-tihar-prisoners-on-transformation-tour-of-haridwar/articleshow/54487628.cms")
            }
            src={one}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.deccanherald.com/archives/fortnight-ganges-brings-change-heart-2089550")
            }
            src={two}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.vice.com/en/article/ne9dzq/from-prison-inmates-to-yoga-warriors")
            }
            src={three}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.asianage.com/delhi/18-tihar-convicts-attend-yoga-session-hardwar-035")
            }
            src={four}
            alt=""
          />
        </Marquee>
      </div>
      <RupCard />
      <div className="youtube">
        <h2>Watch Here</h2>
        <div className="tabs">
          <div className="left">
            <img
              onClick={(e) =>
                (window.location.href =
                  "https://www.youtube.com/watch?v=nKBllhj3soY")
              }
              className="hoverImg"
              src={yt1}
              alt=""
            />
            <p className="hoverPara">Video 1</p>
          </div>
          <div className="right">
            <img
              onClick={(e) =>
                (window.location.href =
                  "https://www.youtube.com/c/PanchawatiYogashram/videos?app=desktop")
              }
              className="hoverImg"
              src={yt2}
              alt=""
            />
            <p className="hoverPara">Video 2</p>
          </div>
        </div>
      </div>
      <div className="end-banner">
        <img src={end} alt="" />
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .galHead {
    margin-left: 38%;
    font-size: 40px;
    font-weight: 500;
    color: #02a66e;
  }
  .end-banner {
    img {
      height: 70%;
      width: 100%;
      object-fit: cover;
    }
  }
  .start-banner {
    padding-top: 10vh;
    img {
      height: 80%;
      width: 100%;
      object-fit: cover;
    }
  }
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 10%;
    h1 {
      font-size: 45px;
      color: #02a66e;
      font-weight: 500;
    }
    button {
      margin: 5% 0%;
      padding: 10px 20px;
      font-size: 28px;
      border-radius: 10px;
      border: none;
      background: #02a66e;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 30px;
    }
    .lessbtn {
      margin-left: 42%;
    }
  }
  .gallery {
    display: flex;
    width: 100%;
    gap: 10px;
    overflow: hidden;
    justify-content: center;
    /* margin-left: 15%; */
    img {
      /* width: 10%; */
      height: 60vh;
      width: 7%;
      object-fit: cover;
      border-radius: 20px;
      transition: all ease 0.5s;
      &:hover {
        width: 100%;
      }
    }
  }
  .marq {
    background: #ebf4f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0%;
    h1 {
      background: #bedcd5;
      width: 100%;
      padding: 0.5% 0%;
      padding-left: 43%;
      color: #fff;
      font-weight: bolder;
    }
    .marquee {
      img {
        margin-left: 100px;
        padding: 5% 6%;
        width: 90%;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .youtube {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 0%;
    h2 {
      font-size: 50px;
      font-weight: 400;
      color: #02a66e;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10%;
      .left,
      .right {
        position: relative;
        img {
          width: 80%;
          border-radius: 12px;
          transition: all ease-in-out 0.8s;
          &:hover {
            -webkit-mask-image: linear-gradient(black, transparent);
            mask-image: linear-gradient(black, transparent);
            cursor: pointer;
          }
        }
        p {
          position: absolute;
          bottom: 10%;
          right: 52%;
          font-size: 20px;
          display: none;
        }
        &:hover .hoverPara {
          font-size: 24px;
          font-weight: 400;
          color: #02a66e;
          display: block;
        }
      }
    }
  }
  @media screen and (max-width: 481px) {
    .galHead {
      font-size: 24px;
      margin-left: 32%;
    }

    .hero {
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 18px;
      }
      button {
        font-size: 18px;
      }
    }
    .marq {
      h1 {
        font-size: 24px;
        padding-left: 32%;
      }
    }
    .youtube {
      h2 {
        font-size: 24px;
        font-weight: 300;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .galHead {
      font-size: 30px;
      margin-left: 32%;
    }
    .hero {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 22px;
      }
      button {
        font-size: 22px;
      }
    }
    .marq {
      h1 {
        font-size: 30px;
        padding-left: 36%;
      }
    }
    .youtube {
      h2 {
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
  @media screen and (max-width: 1025px) {
    .galHead {
      font-size: 34px;
      margin-left: 40%;
    }

    .hero {
      h1 {
        font-size: 34px;
      }
      p {
        font-size: 26px;
      }
      button {
        font-size: 26px;
      }
    }
    .marq {
      h1 {
        font-size: 34px;
        padding-left: 35%;
      }
    }
    .youtube {
      h2 {
        font-size: 34px;
        font-weight: 400;
      }
    }
  }
`;
