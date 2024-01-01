import React, { useState } from "react";
import hero from "../assets/portfolio/hero.png";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../components/NewNavbar";
import styled from "styled-components";
import banner from "../assets/portfolio/banner.png";
import Marquee from "../components/Marquee";
import { Footer } from "../components/Footer";
import Membership from "../components/Membership";
import Awards from "../components/Awards";
import Projects from "../components/Projects";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      <img className="Banner-img" src={banner} alt="" />
      <Marquee />
      <div className="hero">
        <div className="left">
          <h1>Acharya Ashutosh Kumar</h1>
          <img src={hero} alt="" />
        </div>
        <div className="right">
          {/* <h2>About me</h2> */}
          <span>
            A renowned Yoga teacher with expertise in holistic reform and
            rehabilitation through yoga and spirituality. In his 20 years of
            social service, Ashutosh ji has taken several initiatives to revive
            and promote Yoga in the society in India and abroad. With the
            expertise in the Siddha Yogi in Kriya Yoga technique which focuses
            on spiritual development of an individual. Acharya ji achieved the
            rare Honor of Kaya Yogi, in which a yogi can transform his body. His
            work in the field of prison reform through yoga and spirituality
            with the objective of{" "}
            <span className="decor">“ योग युक्त भारत अपराध मुक्त भारत “ </span>
            has been acknowledged and appreciated by several elites of the
            society and specially by Honorable Prime Minister of India Shri.
            Narendra Modi and Honorable Atal Bihari Vajpayee.
          </span>
        </div>
      </div>
      <Membership />
      <Projects />
      <Awards />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .Banner-img {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .hero {
    margin-top: 6%;
    display: flex;
    flex: 50%;
    padding: 2px 150px;
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: #02a66e;
        font-size: 50px;
        font-weight: 400;
      }
      img {
        width: 595px;
        width: 100%;
      }
    }
    .right {
      padding: 0px 80px;
      padding-top: 80px;
      width: 100%;
      h2 {
        font-size: 48px;
        font-weight: 400;
      }
      span {
        font-size: 24px;
        .decor {
          color: #02a66e;
          font-weight: bolder;
          text-decoration: underline;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1401px) {
    .hero {
      padding: 2px 30px;
      .left {
        h1 {
          font-size: 32px;
        }
      }
      .right {
        padding: 0 15px;
        span {
          font-size: 22px;
          .decor {
            font-size: 22px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .hero {
      padding: 2px 30px;
      .left {
        h1 {
          font-size: 32px;
        }
      }
      .right {
        padding: 0 15px;
        span {
          font-size: 18px;
          .decor {
            font-size: 18px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    .hero {
      padding: 2px 30px;
      display: flex;
      flex-direction: column;
      .left {
        h1 {
          font-size: 32px;
        }
      }
      .right {
        padding: 0 15px;
        span {
          font-size: 18px;
          .decor {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
