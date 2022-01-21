import React from "react";
import ContactForm from "../Components/LandingPage/LandingPageCard/ContactForm";
import LandingPageCard from "../Components/LandingPage/LandingPageCard/LandingPageCard";
import "./Landing.css";
import About from "../Components/LandingPage/AboutCET/About";
import Partners from "../Components/LandingPage/Partners/Partners";
import Contact from "../Components/LandingPage/Contact/Contact";
import PartnerCard from "../Components/LandingPage/PartnerCard/PartnerCard";
import Footer from "../Components/LandingPage/Footer/Footer";
import Navbar2 from "../Components/LandingPage/Navbar2/Navbar2";
import Deadline from "../Assets/deadlinetrack.png";
import Explore from "../Assets/clubexplore.png";
import Test from "../Assets/givetest.png";
import Result from "../Assets/checkresult.png";
import Guidance from "../Assets/one-oneguidance.png";
import Interview from "../Assets/interview.png";


export default function Landing() {
  return (
    <>
      <section className="text-white hero">
        <div style={{}}>
          <Navbar2 />
        </div>
        <section className="showcase">
          <div className="container">
            <h2 className="heading1">
              Explore more than{" "}
              <span className="yellow">100 clubs, teams & chapters </span>{" "}
              <br /> on Common{" "}
              <span className="text-cchover font-bold">Entry</span> Test{" "}
            </h2>

            <button className="bg-cchover hover:bg-ccblue text-white mx-10 font-bold py-4 px-8 rounded">
              <a href="http://cet-portal.codechefvit.com" target="_blank" rel="noreferrer" className="text-xl">Register Now!</a>
            </button>
          </div>
        </section>
      </section>
      <div className="landing-image">
        <section className="features">
          <About />
          <div
            className="content1"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="info">
              <div
                className="grid lg:grid-cols-3 sm:grid-cols-1"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <LandingPageCard
                  className="sm:pb-96"
                  title="Track deadlines"
                  image={Deadline}
                />
                <LandingPageCard
                  title="Explore clubs"
                  className="sm:pb-96"
                  image={Explore}
                />
                <LandingPageCard
                  title="Give test(s)"
                  className="sm:pb-96"
                  image={Test}
                />
                <LandingPageCard
                  title="Give interview(s)"
                  image={Interview}
                />
                <LandingPageCard
                  title="See results"
                  image={Result}
                />
                <LandingPageCard
                  title="One to one guidance"
                  image={Guidance}
                />
              </div>
            </div>
            <div
              className="grid lg:grid-cols-3 sm:grid-cols-1 sm:pb-5"
              style={{ alignItems: "center", justifyContent: "center" }}
            >

            </div>
          </div>
        </section>
        <section className="home-partners" id="partners">
          <Partners />
          <div
            className="content1"
            style={{
              height: "500px",
            }}
          >
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              <PartnerCard title="GIGA" description="These partners are part of the standardised test. You give 1 common test & apply to all Giga Partners." />
              <PartnerCard title="MEGA" description="These partners have their individual tests set up on our portal and you give a test for their club on our portal." />
              <PartnerCard title="MICRO" description="These partners have their tests set up on our portal as well as their portal and you give a test for their club on either portal." />
              <PartnerCard title="NANO" description="These partners don’t have tests on our portal but want to make it easier for new recruits. We redirect you to their private test portals." />
            </div>
          </div>
        </section>
        <section className="home-contact" id="contact">
          <Contact />
          <ContactForm />
        </section>
      </div>
      <Footer />
    </>
  );
}
