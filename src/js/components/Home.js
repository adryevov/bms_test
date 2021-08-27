import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Carousel, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import useModal from "./UI/ContactUsModal";
import { useIsMobile } from "../utils/hooks";

const Home = () =>
{
  const { setIsContactDialogOpen } = useModal();
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Header />

      <Carousel controls={false} interval={null} className="carousel-homepage">
        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-doctor-dude" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row style={{ height: "100%" }}>
                <Col className="home-slide-1-wrapper">
                  <p className="home-slide-1-welcome">Welcome to the BMS Virtual Exhibit</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-approval-hematology" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-2-wrapper">
                  <h2>Learn more about an approval in Hematology!</h2>
                  <Link to="/hematology/our-medicines" className="button-pink">Click Here</Link>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-2-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-smiling-lady" + (isMobile ? "-small-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-3-wrapper">
                  <h2>Learn about an approval in Oncology!</h2>
                  <a href="https://www.opdivorx.com/uc" className="button-pink" target="_blank" rel="noreferrer">Click Here</a>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-3-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-ladies" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-4-wrapper">
                  <h2>Need help in explaining Immuno-Oncology?</h2>
                  <Link to="/oncology/our-educational-resources" className="button-pink">Click Here</Link>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-4-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-doctor-patient" + (isMobile ? "-mobile" : "") + ".png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-5-wrapper">
                  <h2 className="home-slide-5-h2">Explore Our Access Support Initiatives</h2>
                  <a href="https://bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="button-pink">Click Here</a>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-5-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="homepage-cards-wrapper">
        <Container>
          <div className="homepage-card">
            <h3>Oncology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/oncology.svg" } alt="Oncology" />
            <ul className="homepage-card-links">
              <li><a href="https://ourmedoq1.explorebmsvirtual.com/?utm_source=O&utm_medium=OurMed_Oncology" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><Link to="/oncology/our-educational-resources" className="arrow-link-pink">Our Educational Resources <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div className="homepage-card">
            <h3>Hematology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/hematology.svg" } alt="Hematology" />
            <ul className="homepage-card-links">
              <li><Link to="/hematology/our-medicines" className="arrow-link-pink">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/hematology/our-educational-resources" className="arrow-link-pink">Our Educational Resources <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div className="homepage-card">
            <h3>Pipeline & Clinical Trials</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/pipeline.svg" } alt="Oncology" className="homepage-card-3-image" />
            <ul className="homepage-card-links">
              <li><a href="https://www.bmsstudyconnect.com/" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Oncology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><a href="https://www.bolderscience.com/bmspipeline/trial-finder/" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Hematology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-3/" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="homepage-cards-bottom-wrapper">
        <Container>
          <div className="homepage-bottom-card">
            <h3>BMS Access Support<sup>&reg;</sup></h3>
            <a href="https://www.bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="button-pink">Learn More</a>
          </div>

          <div className="homepage-bottom-card">
            <h3>BMS Information</h3>
            <Button onClick={ () => setIsContactDialogOpen(true) } className="button-pink">Contact Us</Button>
          </div>
        </Container>
      </section>

      <section className="handholding-section" style={{ backgroundImage: "url(/img/banners/banner-handholding" + (isMobile ? "-mobile" : "") + ".png)" }}>
        <Container>
          <h2>Transforming patients&apos; lives through science<sup className="trade-icon">&trade;</sup></h2>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(Home);
