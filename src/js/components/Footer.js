import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ScrollToTopButton from "./UI/ScrollToTopButton";
import { useIsMobile } from "../utils/hooks";

const Footer = () =>
{
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <footer>
      <div className="footer-top">
        <Container>
          <Row>
            <Col md={8} className="footer-top-left">
              <div className="logo">
                <img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" />
              </div>
              <p>&copy; 2021 Bristol-Myers Squibb Company. All rights reserved.</p>
              <p>Access Support<sup>&reg;</sup> is a registered trademark of Bristol-Myers Squibb Company</p>
              { location.pathname === "/immuno-oncology" && <p>ONC-US-2100598 08/21</p> }
              { location.pathname !== "/immuno-oncology" && <p>NO-US-2100751 08/21</p> }
            </Col>

            { !isMobile &&
              <Col md={4}>
                <div className="footer-top-right">
                  <p>Follow Us</p>
                  <div className="social-icons-wrapper">
                    <a href="https://www.facebook.com/BristolMyersSquibb" target="_blank"
                       rel="noreferrer"><FontAwesomeIcon icon={ faFacebookSquare } /></a>
                    <a href="https://www.instagram.com/bristolmyerssquibb/" target="_blank"
                       rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
                    <a href="https://www.linkedin.com/company/bristol-myers-squibb/" target="_blank"
                       rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
                    <a href="https://twitter.com/BMSNEWS" target="_blank" rel="noreferrer"><FontAwesomeIcon
                      icon={ faTwitter } /></a>
                    <a href="https://www.youtube.com/bristolmyerssquibb" target="_blank" rel="noreferrer"><FontAwesomeIcon
                      icon={ faYoutube } /></a>
                  </div>
                </div>
              </Col>
            }
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

      <ScrollToTopButton />
    </footer>
  );
};

export default React.memo(Footer);
