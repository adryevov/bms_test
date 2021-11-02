import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useIsMobile } from "../utils/hooks";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import useModal from "./UI/ContactUsModal";

const Header = () =>
{
  useEffect(() => window.scrollTo(0, 0), []);
  const isMobile = useIsMobile();
  const { setIsContactDialogOpen } = useModal();

  return (
    <header>
      <div className="header-top">
        <Container fluid>
          <Row>
            <Col md={12}>
              <span className="warning">This site is intended for U.S. Healthcare Professionals only.</span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-bottom">
        <Navbar collapseOnSelect expand="md">
          <Navbar.Brand className="navbar-logo-wrapper">
            <Nav.Link as={ Link } className="logo" to="/">
              <img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            { !isMobile &&
              <Nav className="ml-auto">
                <Nav.Link as={ Link } to="/">
                  <FontAwesomeIcon icon={ faHome } /> Home
                </Nav.Link>
                <a className="nav-link" href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer">Contact Us</a>
              </Nav>
            }

            { isMobile &&
              <Nav className="ml-auto mobile-menu-wrapper">
                <div className="mobile-menu-separator-fullwidth"></div>
                <Nav.Link as={ Link } to="/">Home</Nav.Link>

                <span className="menu-section-name">Oncology</span>
                <Nav.Link as={ Link } to="/oncology/our-medicines">Our Medicines</Nav.Link>
                <Nav.Link as={ Link } to="/oncology/our-educational-resources">Our Educational Resources</Nav.Link>

                <span className="menu-section-name">Hematology</span>
                <Nav.Link as={ Link } to="/hematology/our-medicines">Our Medicines</Nav.Link>
                <Nav.Link as={ Link } to="/hematology/our-educational-resources">Our Educational Resources</Nav.Link>

                <span className="menu-section-name">Pipeline &amp; Clinical Trials</span>
                <a href="https://www.bmsstudyconnect.com/" target="_blank" rel="noreferrer" className="mobile-nav-link">Our Oncology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" /></a>
                <a href="https://www.bolderscience.com/bmspipeline/trial-finder/" target="_blank" rel="noreferrer" className="mobile-nav-link">Our Hematology Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" /></a>
                <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-3/" target="_blank" rel="noreferrer" className="mobile-nav-link">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" /></a>

                <div className="colored-section" style={{ backgroundColor: "#fcecd1", margin: "1rem 0" }}>
                  <a href="https://www.bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" ><span>BMS Access Support <sup>&reg;</sup></span><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" /></a>
                </div>

                <div className="colored-section" style={{ backgroundColor: "#f9ddcd", marginBottom: "2rem" }}>
                  <p onClick={ () => setIsContactDialogOpen(true) }>BMS Information <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" /></p>
                </div>

                <a className="nav-link" href="https://www.bms.com/legal-notice.html" target="_blank" rel="noreferrer">Legal Notice</a>
                <a className="nav-link" href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer">Contact Us</a>
                <a className="nav-link" href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer">Privacy Policy</a>

                <div className="follow-us-section">
                  <p>Follow Us</p>
                  <div className="social-icons-wrapper">
                    <a href="https://www.facebook.com/BristolMyersSquibb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebookSquare } /></a>
                    <a href="https://www.instagram.com/bristolmyerssquibb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
                    <a href="https://www.linkedin.com/company/bristol-myers-squibb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } /></a>
                    <a href="https://twitter.com/BMSNEWS" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter } /></a>
                    <a href="https://www.youtube.com/bristolmyerssquibb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faYoutube } /></a>
                  </div>
                </div>
              </Nav>
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default React.memo(Header);
