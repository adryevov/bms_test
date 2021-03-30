import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ScrollToTopButton from "./UI/ScrollToTopButton";

const Footer = () =>
{
  return (
    <footer>
      <div className="footer-top">
        <Container>
          <Row>
            <Col md={6} className="footer-top-left">
              <img src="/img/logo.png" alt="BMS logo" className="logo" />
              <p>&copy; 2021 Bristol-Myers Squibb Company. All rights reserved.</p>
              <p>Access Support<sup>&reg;</sup> is a registered trademark of Bristol-Myers Squibb Company</p>
              <p>ONC-US-2100074 03/21</p>
            </Col>

            <Col md={6}>
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
          <Row>
            <Col md={12} className="footer-top-links-wrapper">
              <ul>
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
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={12}>
              <span className="warning">This site is intended for U.S. Healthcare Professionals only.</span>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};

export default React.memo(Footer);
