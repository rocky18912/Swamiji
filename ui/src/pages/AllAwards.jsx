import React, { useState } from "react";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import banner from "../assets/allprogs/banner.JPG";

export default function AllPrograms() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      <div className="banner">
        <div className="image">
          <img src={banner} alt="" />
        </div>
        <div className="content">
          <h1>Awards</h1>
        </div>
      </div>
      <div className="disp">
        ● Honored by “SCHOOL OF AYUSH STUDIES AND RESEARCH CONFEDERATION OF
        INDIAN
        <br />
        UNIVERSITIES” in field of naturopathy and indigenous therapies on the
        year 29th March 2018.
        <br />
        ● Honored by “BSLND USA “ in field Hkkjr ds egku lar held on 21st Jan
        2018.
        <br />
        ● Appreciation letter for dedicatedly involvement in Prison Reforms
        through Yoga & Spirituality in Tihar jail by DIG S.S Parihar.
        <br />
        ● Honored by “MTNL PERFECT HEALTH MELA 2004” Delhi contribution of the
        field of Lifestyle Management on the year of 2017
        <br />
        ● Award for the successful conduct of International day of Yoga in Tihar
        Jails by DG Shri Sudhir Yadav (2016)
        <br />
        ● Appreciation for the work done to reduce stress and negativity through
        yoga in Tihar jail by Tihar DG Shri Alok Kumar Verma 2015
        <br />
        ● Appreciation for the successful conduct of International day of Yoga
        in Tihar Jails by Honorable Prime minister of India, Shri Narendar Modi
        (2015)
        <br />
        ● Yoga Prashikshan Samman by Swami Sahjanand Sarshwati Kishan Suchna
        Kendra, New Delhi (2012)
        <br />
        ● Honored “WORLD AWARD FOR EXCELLENCE IN SPIRITUAL EDUCATION” in the
        field of Natural
        <br />
        Healing on the occasion of WORLD SPIRITUAL PARLIAMENT (2011)
        <br />
        ● Honored by ” MARKANDEY YOGA CITY “ for the contribution in the field
        of Yogic & spiritual health at Denpasar , BALI INDONESIA on 3rd April to
        10th April 2010 Honored by “INTERNATIONAL INTERFAITH CONFERENCE 2007”
        Delhi in the field of Religion and Drugs & Substance Abuse held on 28th
        July 2007
        <br />
        ● Honored by “VISHWA DHARMAYATAN SANSTHAN 2007” Delhi in the field of
        yogic health at INTERNATIONAL SEMINAR ON VEDIC MICROBIOLOGY held on 20th
        -21st August 2007
        <br />
        ● Honored by “SARASWATI SHISHU VIDYAMANDIR 2005” Hapur (UP)contribution
        of the field of Yoga as a Judge conducting yoga competition on the
        occasion of golden jubilee year 2005
        <br />
        ● Honored by “MTNL PERFECT HEALTH MELA 2004” Delhi contribution of the
        field of Yoga , Naturopathy & Ayurveda on the year of 2004 (Heart Care
        Foundation of India)
        <br />
        ● Honored by HEART CARE FOUNDATION OF INDIA in contribution of lots of
        Yoga, spiritual and holistic therapies activities in the year of 2002.
        <br />
        ● Honored by MTNL Perfect Health Mela the contribution in Yoga,
        spirituality, Naturopathy and holistic therapies for the year of 2000
        and 2003.
        <br />
        ● Honored by “Nature Cure Center & Akhil Bhartiya Prakritik Chikitsa
        Parishad” Delhi contribution in the field of Yoga & Prakritik Chikitsa
        of the year of 2001
        <br />
        ● Honored by the “former Prime Minister Sh. Atal Bihari Vajpayee “ for
        the Best yoga Demonstrator Award for the participation in Republic day
        Parade 2001
        <br />
        ● Honored by Ministry of Defense for the Participation in Republic Day
        2001 <br />
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .banner {
    position: relative;
    .image {
      height: 45vh;
      overflow: hidden;
      margin-bottom: 1%;
      img {
        width: 100vw;
        object-fit: cover;
        filter: grayscale(0%) blur(2px);
        /* filter: blur(2px); */
      }
    }
    .content {
      position: absolute;
      top: 47%;
      left: 40%;
      z-index: 2;
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      border-radius: 20px;
      padding: 1px 10px;
    }
  }
  .disp {
    padding: 1% 10%;
    font-size: 22px;
  }
`;
