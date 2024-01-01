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
          <h1>Projects and Programs</h1>
        </div>
      </div>
      <div className="disp">
        ● International Day of Yoga 2018 Inaugural in Tihar jail No.5 2018
        <br />
        ● Celebrate World Health Day in Tihar jail no.5 2018
        <br />
        ● Permission for welfasre Activities at Central Jail No.14 Mandoli 2018
        <br />
        ● Organized Yoga Workshop at NBCC 20018.
        <br />
        ● Organized Yoga teacher training course in Tihar Jail no.3 for Inmates
        2018. (copy attached)
        <br />
        ● Organize Yoga Teachers Training Course in Tihar Jail No.5 for Inmates
        2018
        <br />
        ● Organized Yoga teacher training course in all Tihar and mandoli jail
        inmates 2018. (copy attached)
        <br />
        ● Conducted feeling of freedom program at Mandoli Jail no.14 2018.
        <br />
        ● Organized Diwalii program at Mandoli jail No.14 2017.
        <br />
        ● Celebrate Nelson Mandela Day at Mandoli jail No.14 2017.
        <br />
        ● Celebrate Janmastmi mahotsav at Mandoli jail No.14 2017.
        <br />
        ● Celebrate independence Day at Mandoli jail No.14 2017.
        <br />
        ● Yearlong daily Yoga training session for the inmates of Tihar Jail,
        2017.
        <br />
        ● International Yoga Day 2017 Celebration in all 14 Jails of Tihar, New
        Delhi. (copy attached)
        <br />
        ● Implementation of Daily Yoga classes, meditation and yoga therapy
        classes in Tihar jail.
        <br />
        ● Aadarsh Jail Mandoli No.14 (An Unit of Tihar) – A program designed to
        showcase holistic prison reform through Yoga and spirituality, 2016-17.
        <br />
        ● Conducted Group Yoga classes for Stress Management at TIFAC 2017.
        <br />
        ● World Health Day celebration for the inmates of Mandoli Jail number
        #14, 2017.
        <br />
        ● Stress Management program for the inmates of Mandoli jail No.14 2016.
        <br />
        ● Makar Sankranti Mahotsav celebration in Mandoli Jail No.14, 2017.
        <br />
        ● Rupantaran Yatra “A new chapter in prison reform” in, 2016-17.
        <br />
        ● International Yoga Day 2016 Celebration in all 10 Jails of Tihar, New
        Delhi.
        <br />
        ● International Yoga Day 2015 Celebration in all 10 Jails of Tihar, New
        Delhi.
        <br />
        ● Yoga Training camp in European countries Czech republic, Slovakia and
        Poland. 2016
        <br />
        ● Yoga training Camp for Police Families Welfare Society, Malviya Nagar,
        2016 (copy attached)
        <br />
        ● Yoga training Camp for Delhi Police Battalion, Malviya Nagar, 2016
        (copy attached)
        <br />
        ● Yoga training Camp for Police Families Welfare Society, Vikas Puri.,
        2016 (copy attached)
        <br />
        ● Yoga training Camp for Police Families Welfare Society, New Police
        Lines, Kingsway Camp, 2016 (copy attached)
        <br />
        ● Yoga training Camp for Delhi Police Training College, Jharoda Kalan,
        2016
        <br />
        ● Yoga Teachers Training Course (YTTC) for the selected inmates of Tihar
        Jail, 2015-2016 (copy attached)
        <br />
        ● Yoga Teachers Training Course (YTTC) for the selected inmates of
        Central jail Ambala (Haryana), 2016 (copy attached)
        <br />
        ● Yoga and Meditation camp for different age group and different school
        of Delhi areas, 2014
        <br />
        ● Yoga and Spiritual Residential Camp (1.5 month) for KUMBH MELA
        pilgrims in Allahabad, 2013
        <br />
        ● Yoga and Spiritual Residential Camp (40 days) for KUMBH MELA pilgrims
        in Haridwar, 2010.
        <br />
        ● Yoga and meditation awareness camp for AIDS & Cancer patients to
        stress release and live a happy life in several areas of Delhi and NCR,
        2007-2008.
        <br />
        ● Meditation camp for old age peoples in Punjab Kesri varistth nagrik
        club, 2006 – 07.
        <br />
        ● Conducted Yoga classes for stress Management at BENNETT, COLEMAN &
        CO.LTD 2009.
        <br />
        ● Conducted Gernal Yoga session at RITES limited 2009.
        <br />
        ● Conducted Yoga classes for stress Management as a Health Instructor
        and therapiste at BENNETT, COLEMAN & CO.LTD 2008.
        <br />
        ● Yoga Camp in Bangkok, Singapore, Bali, Malaysia, Hong Kong. 2008-2009
        <br />
        ● Conducted yoga classes as yoga teacher during summer yoga camp
        organized by MORARJI DESAI NATIONAL INSTITUTE OF YOGA New Delhi 2002.
        <br />
        ● Participated in Republic-Day parade as a Yoga Demonstrator, 2001
        <br />
      </div>
      <div className="disp2">
        <h1>Social and welfare Activities in prison reform</h1>
        <h2>Convocation program in Tihar (26th February, 2016)</h2>
        <p>
          108 inmates have successfully cleared the YTTC and were awarded
          certificates on Feb 26th, 2016. This is the firstof-its-kind
          initiative started in any jail in the country to train inmates as
          qualified yoga teachers that the whole syllabus and curriculum of the
          course designed by PYNCC.
        </p>
        <h2>
          1st International Day of Yoga Celebration with inmates and Tihar
          officials in Tihar Jail, Mandoli Jail (21st June, 2015){" "}
        </h2>
        <p>
          ● Celebrated 1st International Day of Yoga event at Tihar premises.
          <br />● All Tihar Prisoner and Tihar officials participated.
        </p>
        <h2>
          2nd International Day of Yoga Celebration (20th May, 2016 to 21st
          June, 2016)
        </h2>
        <p>
          June 2016, conducted second 'World Yoga Day' at all (10 jails) Tihar
          Ashram with 108 inmates. In fact theme of this year's event was to
          provide a sense of achievements and a required platform to those
          inmates who have completed their yoga teachers training course
          conducted by PYNCC in Tihar Jail complex.
        </p>
        <h2>
          45days /200 hrs. “Yoga Teachers Training Course” in Ambala Jail
          Haryana
        </h2>
        <p>
          (5th August, 2016) Launched Yoga Teachers, Training Course (YTTC) in
          Ambala Jail.42 Inmates were awarded in Ambala Jail as certified Yoga
          trainer.
        </p>
        <h2>
          Rupantran Yatra - A New chapter in Prison reforms. (20th September to
          4th October, 2016)
        </h2>
        <p>
          Organized a transformational tour “Rupantran Yatra – A new chapter in
          prison reforms” for Inmates of Tihar prison. 18 prisoners participate
          in 14 days “Rupantran Yatra” (Transformational) tour to Haridwar.
          Yoga, Meditation, spiritual discourse, Hindu rituals Gurukul lifestyle
          etc. to help transform their personalities. First time in the history
          of Prison Reforms such an initiative has been taken.
        </p>
        <h2>
          Conducted stress management program in Mandoli Jail 8th December, 2016
        </h2>
        <p>
          Organized stress management program with Guru Raj Rajeshwar Ji and
          discuss importance of Yoga with inmates and told them how yoga may
          help reduce stress, lower blood pressure
        </p>
        <h2>
          45 days /200 Hrs. “Yoga Teachers Training Course” in Tihar from 23rd
          December 2015
        </h2>
        <p>
          ● Based on the overwhelming response from inmates to explore the field
          of Yoga further, on 23rd December 2015 launched Yoga Teachers,
          <br />● Training Course (YTTC) in all jails of Tihar prisons.
          <br />● YTTC would not only provide in depth knowledge about Yoga but
          also provide employment opportunity to participants once they go out
          from prison.
        </p>
        <h2>
          Taken resolution to create spiritual environment within the jail so
          that it could be a role model in the world. Conducting many welfare
          activities in Mandoli Jail for the benefit of inmates, i.e
        </h2>
        <p>
          ● Morning yoga & meditation class,
          <br />● Yoga Teachers Training Course(YTTC) <br />● Padho Padhao &
          basic computer learning prog, <br />● English speaking, personality
          development & motivational class <br />● Music & painting class etc.{" "}
          <br />● Every Sunday organized complete silence program for 40 inmates
        </p>
        <h2>
          Celebrated 3rd International yoga day with inmates and Tihar officials
          in Tihar jail, mandoli jail (21st June 2017)
        </h2>
        <p>
          ● Celebrate yoga day with 14500 inmates <br />● Practices in tihar &
          mandoli jail before one month of IDY
        </p>
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
      left: 25%;
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
  .disp2 {
    padding-top: 3%;
    h1 {
      background: #bedcd5;
      font-size: 40px;
      color: #fff;
      padding: 2%;
      padding-left: 27%;
      font-weight: bolder;
    }
    h2 {
      padding: 0 10%;
      padding-top: 3%;
      font-size: 26px;
      font-weight: 400;
    }
    p {
      padding: 1% 10%;
      font-size: 22px;
    }
  }
`;
