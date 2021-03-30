import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Carousel, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import useModal from "./UI/ContactUsModal";

const Home = () =>
{
  const { setIsContactDialogOpen } = useModal();

  return (
    <Fragment>
      <Header />

      <Carousel controls={false} interval={null} className="carousel-homepage">
        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-welcome.png)" }}>
            <Container>
              <p className="home-slide-1-welcome">Welcome to Bristol myers Squibb</p>
              <h2 className="home-slide-1-h2">at AACR 2021</h2>
              <p className="home-slide-1-latest">The latest data presentations, product theaters, research, resources and information from BMS</p>
              <Link to="/abstracts" className="button-pink">Explore Abstracts</Link>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-slide" style={{ backgroundImage: "url(/img/banners/banner-approval-hematology.png)" }}>
            <Container>
              <Row>
                <Col md={12}>
                  <h2>Learn more about an approval in Hematology!</h2>
                  <Button className="button-pink">Click Here</Button>
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
                  <Button className="button-pink">Click Here</Button>
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
                  <Link to="/product-theater-schedule" className="button-pink">View the Schedule</Link>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className="homepage-cards-wrapper">
        <Container>
          <div className="homepage-card">
            <h3>Oncology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/oncology.svg" } alt="Oncology" />
            <ul className="homepage-card-links">
              <li><Link to="/our-medicines" className="arrow-link-pink">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/our-recearch" className="arrow-link-pink">Our Research <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div className="homepage-card">
            <h3>Hematology</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/hematology.svg" } alt="Oncology" />
            <ul className="homepage-card-links">
              <li><Link to="#" className="arrow-link-pink">Our Medicines <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><Link to="/" className="arrow-link-pink">Our Research <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
            </ul>
          </div>

          <div className="homepage-card">
            <h3>Pipeline & Clinical Trials</h3>
            <img src={ process.env.PUBLIC_URL + "/img/icons/pipeline.svg" } alt="Oncology" className="homepage-card-3-image" />
            <ul className="homepage-card-links">
              <li><a href="https://www.bmsstudyconnect.com/" className="arrow-link-pink">Our Oncology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><a href="https://www.bolderscience.com/bmspipeline/trial-finder/" className="arrow-link-pink">Our Hematology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-3/" className="arrow-link-pink">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="homepage-cards-middle-wrapper">
        <Container>
          <div className="homepage-middle-card">
            <h3>Our Product Theater</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/product-theater-schedule" className="arrow-link-pink">View Schedule <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>

          <div className="homepage-middle-card">
            <h3>Our Abstracts</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/abstracts" className="arrow-link-pink">View List <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>

          <div className="homepage-middle-card">
            <h3>Our Educational Resources</h3>
            <span className="homepage-middle-card-line"></span>
            <Link to="/" className="arrow-link-pink">Explore Hematology <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
          </div>
        </Container>
      </section>

      <section className="homepage-cards-bottom-wrapper">
        <Container>
          <div className="homepage-bottom-card">
            <h3>BMS Access Support<sup>&reg;</sup></h3>
            <a href="https://www.bmsaccesssupportvirtual.com/" className="button-pink">Learn More</a>
          </div>

          <div className="homepage-bottom-card">
            <h3>Connect with BMS</h3>
            <Button onClick={ () => setIsContactDialogOpen(true) } className="button-pink">Contact Us</Button>
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

export default React.memo(Home);
