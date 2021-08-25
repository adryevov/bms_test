import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="mobile-hematology-footer">
      { location.pathname.startsWith("/hematology/our-medicines") &&
        <Container className="mobile-hematology-footer-top">
          <Row>
            <Col md={12}>
              <p>Please See Full Prescribing Information, including Boxed WARNINGS for ABECMA, BREYANZI, IDHIFA, INREBIC, POMALYST, and REVLIMID, in this virtual booth.</p>
              <p>Please See Full Prescribing Information for EMPLICITI, ONUREG, REBLOZYL and SPRYCEL, in this virtual booth.</p>
            </Col>
          </Row>
        </Container>
      }

      <Container className="mobile-hematology-footer-bottom">
        <Row>
          <Col md={12}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <p>&copy;2021 Bristol-Myers Squibb. All rights reserved.<br />08/21 466-US-2100087</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Footer);
