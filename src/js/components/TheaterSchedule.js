import React, { Fragment, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useModal } from "./UI/ContactUsModal";
import { useMetaInfo } from "../utils/hooks";

const TheaterSchedule = () =>
{
  const { setIsContactDialogOpen } = useModal();
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Product Theater Schedule");
    updateMetaDescription("Product Theater Schedule.");
  }, [ updateMetaTitle, updateMetaDescription ]);

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
            <p className="event-name">Dual I-O treatment option for 1L NSCLC</p>
            <p className="date">Saturday April 10<br />1:00-2:00 pm EST</p>
            <a href="https://AACR2021.onlineeventpro.freeman.com//sessions/19770240/Bristol-Myers-Squibb-Dual-I-O-Treatment-Option-for-1L-NSCLC" target="_blank" rel="noreferrer" className="arrow-link-pink">View <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
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
