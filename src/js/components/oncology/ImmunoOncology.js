import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { useIsMobile } from "../../utils/hooks";

const ImmunoOncology = () =>
{
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Header />

      <section className="immuno-oncology-banner-section">
        <Container>
          <h1>Bristol Myers Squibb:<br />At the forefront of Immuno-Oncology research</h1>
          <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/immuno-oncology-symbol.png" } alt="Immuno-Oncology" />
        </Container>
      </section>

      <section className="need-help-exploring-section">
        <Container>
          <div className="need-help-exploring-content-wrapper">
            <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/help-expaining.png" } alt="Need help explaining Immuno-Oncology?" />
            <div className="need-help-exploring-content-wrapper-inner">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/immuno-oncology.svg" } alt="Immuno-Oncology" />
              <h2>Need help explaining Immuno-Oncology?</h2>
              <p>We have developed resources with HCPs, patients, and caregivers about Immuno-Oncology (I-O) that are suited to different audiences and needs;<br />also available in Spanish and Simplified Chinese</p>
              <a href="https://www.immunooncologyhcp.com/io-resources" target="_blank" rel="noreferrer" className="button-orange">Explore our Resources</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="what-is-immuno-oncology-section">
        <Container>
          <h2>What is Immuno-Oncology and how is it different?</h2>

          <div className="io-items-wrapper">
            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-1.png" } alt="Healthy body" className="img-left" />
              <div className="io-item-content-inner">
                <h3>Healthy body</h3>
                <p>Imagine your body is a garden, and your immune system is the soil. When you're healthy, the soil is able to prevent weeds from growing out of control.</p>
              </div>
              <div className="io-item-line io-item-line-left"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-2.png" } alt="Body with cancer" className="img-right" />
              <div className="io-item-content-inner">
                <h3>Body with cancer</h3>
                <p>Cancer cells are like weeds. The soil can allow weeds to grow and spread, and the entire garden can suffer as plants compete for space and nutrients.</p>
              </div>
              <div className="io-item-line io-item-line-right"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-3.png" } alt="Surgery" className="img-left" />
              <div className="io-item-content-inner">
                <h3>Surgery</h3>
                <p>Surgery can remove weeds, but can disturb the good plants and leave weed roots behind.</p>
              </div>
              <div className="io-item-line io-item-line-left"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-4.png" } alt="Chemotherapy" className="img-right" />
              <div className="io-item-content-inner">
                <h3>Chemotherapy</h3>
                <p>Chemotherapy is like spraying a general weed killer. It may not kill all the weeds, and may harm good plants.</p>
              </div>
              <div className="io-item-line io-item-line-right"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-5.png" } alt="Radiation" className="img-left" />
              <div className="io-item-content-inner">
                <h3>Radiation</h3>
                <p>Radiation is like increasing the power of the sun to specifically dry out the weeds, but some of the good plants can also be damaged.</p>
              </div>
              <div className="io-item-line io-item-line-left"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-6.png" } alt="Targeted therapy" className="img-right" />
              <div className="io-item-content-inner">
                <h3>Targeted therapy</h3>
                <p>With targeted therapy, weeds are directly sprayed with weed killer. Good plants may still be damaged.</p>
              </div>
              <div className="io-item-line io-item-line-right"></div>
            </div>

            <div className="io-item">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/immuno-oncology/flower-7.png" } alt="" className="img-left" />
              <div className="io-item-content-inner">
                <h3>Immuno-Oncology</h3>
                <p>Instead of targeting the weeds, Immuno-Oncology is like adding a weed-control fertilizer to the soil, enriching it to help control weeds. But too much fertilizer might harm your garden.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="order-or-download-section">
        <Container className="section-border-top"></Container>
        <Container>
          <p>Get printed copies of our resources shipped directly to your practice or download for free!</p>
          <h3>Order now or download at </h3>
          <a href="https://www.immunooncologyhcp.com/io-resources" target="_blank" rel="noreferrer" className="button-orange">iohcp.com</a>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy" + (isMobile ? "-mobile" : "") + ".png)" }}>
        <Container>
          <div className="content-wrapper">
            <h2>Looking for something specific?</h2>
            <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer" className="button-pink">Contact Us</a>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(ImmunoOncology);
