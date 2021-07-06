import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollToTopButton from "../UI/ScrollToTopButton";

const TransparentFooter = () =>
{
  return (
    <footer className="footer-transparent">
      <div className="footer-top">
        <Container>
          <Row>
            <Col md={12} className="footer-top-links-wrapper">
              <ul>
                <li>
                  <a href="https://www.bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer">BMS Access Support<sup>&reg;</sup></a>
                </li>
                <li>
                  <a href="https://www.bms.com/legal-notice.html" target="_blank" rel="noreferrer">Legal Notice</a>
                </li>
                <li>
                  <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer">Contact Us</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="footer-top-first-row">
            <Col md={8} className="footer-top-left">
              <div className="logo">
                <img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" />
              </div>
              <p>&copy; 2021 Bristol-Myers Squibb Company. All rights reserved.</p>

              { window.location.pathname === "/oncology/our-medicines/opdivo-yervoy" &&
                <Fragment>
                  <p>OPDIVO<sup>&reg;</sup>, YERVOY<sup>&reg;</sup>, Access Support<sup>&reg;</sup>, and the related logos are registered trademarks of Bristol-Myers Squibb Company.</p>
                  <p>7356-US-2100528 04/21</p>
                </Fragment>
              }

              { window.location.pathname === "/oncology/our-medicines/opdivo-cabometyx" &&
                <Fragment>
                  <p>OPDIVO<sup>&reg;</sup>, Access Support<sup>&reg;</sup>, and the related logos are registered trademarks of Bristol-Myers Squibb Company.</p>
                  <p>CABOMETYX<sup>&reg;</sup> and logo are registered trademarks of Exelixis, Inc.</p>
                  <p>1506-US-2100306 04/21</p>
                </Fragment>
              }

              { window.location.pathname === "/oncology/our-medicines/opdivo-folfox" &&
                <Fragment>
                  <p>OPDIVO<sup>&reg;</sup>, Access Support<sup>&reg;</sup>, and the related logos are registered trademarks of Bristol-Myers Squibb Company.</p>
                  <p>1506-US-2100172 04/21</p>
                </Fragment>
              }
            </Col>

            <Col md={4}>
              <div className="footer-top-right">
                <p>Follow Us</p>
                <div className="social-icons-wrapper">
                  <a href="https://www.facebook.com/BristolMyersSquibb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebookSquare } /></a>
                  <a href="https://www.instagram.com/bristolmyerssquibb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
                  <a href="https://www.linkedin.com/company/bristol-myers-squibb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
                  <a href="https://twitter.com/BMSNEWS" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter } /></a>
                  <a href="https://www.youtube.com/bristolmyerssquibb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faYoutube } /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTopButton color="#007CBA" />
    </footer>
  );
};

export default React.memo(TransparentFooter);
