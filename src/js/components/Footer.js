import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
                  <Link to="#"><FontAwesomeIcon icon={ faFacebookSquare } /></Link>
                  <Link to="#"><FontAwesomeIcon icon={ faInstagram } /></Link>
                  <Link to="#"><FontAwesomeIcon icon={ faLinkedin } /></Link>
                  <Link to="#"><FontAwesomeIcon icon={ faTwitter } /></Link>
                  <Link to="#"><FontAwesomeIcon icon={ faYoutube } /></Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="footer-top-links-wrapper">
              <ul>
                <li>
                  <Link to="#">Legal Notice</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
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
    </footer>
  );
};

export default Footer;
