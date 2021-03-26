import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useModal } from "./UI/ContactUsModal";

const TheaterSchedule = () =>
{
  const { setIsContactDialogOpen } = useModal();

  return (
    <Fragment>
      <Header />

      <section className="banner-theater-schedule-wrapper" style={{ backgroundImage: "url(/img/banners/banner-theater-schedule.png)" }}>
        <Container>
          <h1>AACR 2021 Product Theater Schedule</h1>
        </Container>
      </section>

      <section className="product-theater-schedule-cards">
        <Container>
          <div className="product-theater-schedule-card">
            <p className="speaker-name">Ritesh Rathore, MD</p>
            <p className="event-name">Dual I-O Treatment Option for 1L NSCLC</p>
            <p className="date">Date: Saturday April 10<br />Time: 1:00-2:00 pm EST</p>
            <Link to="#" className="arrow-link-pink">View <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy.png)" }}>
        <Container>
          <div className="content-wrapper">
            <h2>Looking for something specific?</h2>
            <Button className="button-pink" onClick={ () => setIsContactDialogOpen(true) }>Contact Us</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
}

export default React.memo(TheaterSchedule);
