import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Carousel, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Home = () =>
{
  return (
    <Fragment>
      <Header />

      <Carousel controls={false} interval={5000}>
        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-welcome.png)" }}>
            <Container>
              <p className="home-slide-1-welcome">Welcome to Bristol myers Squibb</p>
              <h2 className="home-slide-1-h2">at AACR 2021</h2>
              <p className="home-slide-1-latest">The latest data presentations, product theaters, research, resources and information from BMS</p>
              <Button>Explore Abstracts</Button>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-approval-hematology.png)" }}>
            <Container>
              <Row>
                <Col md={12}>
                  <h2>Learn more about an approval in Hematology!</h2>
                  <Button>Click Here</Button>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-2-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-approval-oncology.png)" }}>
            <Container>
              <Row>
                <Col md={12} className="home-slide-3-wrapper">
                  <h2>Learn more about a new approval in Oncology!</h2>
                  <Button>Click Here</Button>
                </Col>
              </Row>
            </Container>
            <span className="home-slide-3-not-patient">Not an actual patient</span>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-product-theater.png)" }}>
            <Container>
              <Row>
                <Col md={12}>
                  <h2>Join Us for Our Product Theater</h2>
                  <Button>View the Schedule</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="homepage-cards-wrapper">
        <Container>
          <div md={4} className="homepage-card">
            <h3>Oncology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/oncology.svg" } alt="Oncology" />
            <ul className="homepage-card-links">
              <li><Link to="/">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/">Our Research <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div md={4} className="homepage-card">
            <h3>Hematology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/hematology.svg" } alt="Oncology" />
            <ul className="homepage-card-links">
              <li><Link to="/">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/">Our Research <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div md={4} className="homepage-card">
            <h3>Pipeline & Clinical Trials</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/pipeline.svg" } alt="Oncology" className="homepage-card-3-image" />
            <ul className="homepage-card-links">
              <li><Link to="/">Our Oncology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/">Our Hematology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="homepage-cards-middle-wrapper">
        <Container>
          <div md={4} className="homepage-middle-card">
            <h3>Our Product Theater</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/" className="homepage-middle-card-link">View Schedule <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>

          <div md={4} className="homepage-middle-card">
            <h3>Our Abstracts</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/" className="homepage-middle-card-link">View List <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>

          <div md={4} className="homepage-middle-card">
            <h3>Our Educational Resources</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/" className="homepage-middle-card-link">Explore Hematology <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>
        </Container>
      </section>

      <section className="homepage-cards-bottom-wrapper">
        <Container>
          <div md={6} className="homepage-bottom-card">
            <h3>BMS Access Support<sup>&reg;</sup></h3>
            <Button>Learn More</Button>
          </div>

          <div md={6} className="homepage-bottom-card">
            <h3>Connect with BMS</h3>
            <Button>Contact Us</Button>
          </div>
        </Container>
      </section>

      <section className="handholding-section" style={{ backgroundImage: "url(/img/banners/banner-handholding.png)" }}>
        <Container>
          <h2>Transforming patients&apos; lives through science<sup className="trade-icon">&trade;</sup></h2>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
