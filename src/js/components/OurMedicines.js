import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

const OurMedicines = () =>
{
  return (
    <Fragment>
      <Header />

      <Carousel controls={false} interval={null} className="carousel-our-medicines">
        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-oncology-medicines.png)" }}>
            <Container>
              <h2 className="our-medinices-slide-1-h2">Our Medicines</h2>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-lego.png)" }}>
            <Container>
              <Row>
                <Col md={12}>
                  <h2 className="our-medinices-slide-2-h2">Experience the OPDIVO + YERVOY Interactive Brick Builder Activity</h2>
                  <Button className="button-pink">Play Now</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-io-teach-gradient.png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-3-wrapper">
                  <h2 className="our-medinices-slide-3-h2">Starting therapy can feel overwhelming</h2>
                  <p className="our-medinices-slide-3-p">Bristol Myers Squibb has developed resources to help your patients adjust to and understand their treatment</p>
                  <Button className="our-medinices-slide-3-button">Visit our online classroom</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="section-medicines-top">
        <Container>
          <a href="https://www.bmsaccesssupport.bmscustomerconnect.com/" target="_blank" className="arrow-link-pink">BMS Access Support<sup>&reg;</sup> <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
        </Container>
      </section>

      <section className="section-medicines-cards">
        <Container>
          <div className="medicines-card card-fullwidth">
            <div className="medicines-inner">
              <a href="https://www.opdivocombotherapy.com/" target="_blank">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-yervoy.svg" } alt="Opdivo + Yervoy" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup> + Yervoy<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.opdivoclinicaldata.com/advanced-rcc-opdivo-cabometyx" target="_blank">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-cabometyx.svg" } alt="Opdivo + Cabomeryx" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup> + Cabometyx<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.opdivohcp.com/" target="_blank">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo.svg" } alt="Opdivo" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.abraxanepro.com/" target="_blank">
                <img src={ process.env.PUBLIC_URL + "/img/icons/abraxane.svg" } alt="Abraxane" />
              </a>
            </div>
            <h3>Abraxane<sup>&reg;</sup></h3>
          </div>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy.png)" }}>
        <Container>
          <div className="medicines-smiling-guy-content-wrapper">
            <p>For questions about BMS medicines during this time, please call 1-800-721-8909.</p>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(OurMedicines);
