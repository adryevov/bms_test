import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useIsMobile } from "../../utils/hooks";

const OurMedicines = () =>
{
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Header />

      <Carousel controls={false} interval={5000} className="carousel-our-medicines">
        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-oncology-medicines" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <h2 className="our-medicines-slide-1-h2">Our Medicines</h2>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-explore-the-potential" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12}>
                  <div className="our-medicines-slide-2-content-wrapper">
                    <div>
                      <p className="our-medicines-slide-2-p1">Explore</p>
                      <p className="our-medicines-slide-2-p2">The potential Of</p>
                    </div>
                    <div>
                      <a href="https://www.opdivocombotherapy.com/" target="_blank" rel="noreferrer" className="button-orange">Learn More</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-smiling-lady-small" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12} className="our-medicines-slide-4-wrapper">
                  <h2>Learn more about a new approval!</h2>
                  <a href="http://OpdivoRX.com/UC" target="_blank" rel="noreferrer" className="button-pink">Click Here</a>
                </Col>
              </Row>
            </Container>
            <span className="our-medicines-slide-4-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{background: "rgb(0,50,122)" ,background: "linear-gradient(90deg, rgba(0,50,122,1) 0%, rgba(44,118,194,1) 50%, rgba(0,50,122,1) 100%)" }}>
            <Container>
              <Row>
                <Col md={12} className="our-medicines-slide-5-wrapper">
                  <p>Starting therapy can feel overwhelming</p>
                  <p className="slide_5_data">Bristol Myers Squibb has developed resources to help your patients adjust to and understand their treatment</p>
                  <a href="https://www.opdivo.bmscustomerconnect.com/immuno-oncologyteach?cid=v_291" target="_blank" rel="noreferrer" className="button-orange">Visit our online classroom</a>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="section-medicines-cards">
        <Container>
          <div className="medicines-card card-fullwidth">
            <div className="medicines-inner">
              <a href="https://www.opdivocombotherapy.com/" target="_blank" rel="noreferrer" >
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-yervoy" + (isMobile ? "-mobile" : "") + ".svg" } alt="Opdivo + Yervoy" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup> + Yervoy<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.opdivoclinicaldata.com/advanced-rcc-opdivo-cabometyx" target="_blank" rel="noreferrer">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-cabometyx" + (isMobile ? "-mobile" : "") + ".svg" } alt="Opdivo + Cabomeryx" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup> + Cabometyx<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.opdivogastroeso.com/metastatic-GC-GEJC-EAC-efficacy" target="_blank" rel="noreferrer">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-folfox.svg" } alt="Opdivo + Folfox or CapeOX" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup> + FOLFOX or CapeOX</h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.opdivohcp.com/" target="_blank" rel="noreferrer">
                <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo.svg" } alt="Opdivo" />
              </a>
            </div>
            <h3>Opdivo<sup>&reg;</sup></h3>
          </div>

          <div className="medicines-card">
            <div className="medicines-inner">
              <a href="https://www.abraxanepro.com/" target="_blank" rel="noreferrer">
                <img className="medicines-inner-abrax" src={ process.env.PUBLIC_URL + "/img/icons/abraxane.jpg" } alt="Abraxane" />
              </a>
            </div>
            <h3>Abraxane<sup>&reg;</sup></h3>
          </div>
        </Container>
      </section>

      <Container>
        <p className="please-see-paragraph">Please see U.S. Full Prescribing Information for <a href="https://packageinserts.bms.com/pi/pi_opdivo.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="abraxane">OPDIVO</a> for <a href="https://packageinserts.bms.com/pi/pi_yervoy.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="abraxane">YERVOY</a>. Please see Full Prescribing Information, including <span className="boxed">BOXED WARNING</span> for <a href="https://packageinserts.bms.com/pi/pi_abraxane.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="abraxane">Abraxane</a>.</p>
      </Container>

      <section className="our-medicines-bottom-wrapper">
        <Container>
          <div className="our-medicines-bottom-card">
            <h3>BMS Access Support<sup>&reg;</sup></h3>
            <p>Get enrollment forms, billing codes, and other access and reimbursement information.</p>
            <a href="https://www.bmsaccesssupport.bmscustomerconnect.com/" target="_blank" rel="noreferrer" className="button-pink">Learn More</a>
          </div>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy" + (isMobile ? "-mobile" : "") + ".png)" }}>
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
