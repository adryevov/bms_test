import React, { Fragment, useState  } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Footer from "./Footer";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurMedicinesMobile = () =>
{
  const [ activeMedicine, setActiveMedicine ] = useState(null);

  console.log('activeMedicine', activeMedicine);

  return (
    <Fragment>
      <Header />

      <section className="mobile-section-name-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Our Medicines</h2>
              <p>This information is intended for US Healthcare Professionals only.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-medicines-names-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <div className="medicine-name" onClick={ () => setActiveMedicine("abecma") }>
                <span>ABECMA <sup>&reg;</sup> (idecabtagene vicleucel)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("breyanzi") }>
                <span>BREYANZI <sup>&reg;</sup> (lisocabtagene maraleucel)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("reblozyl") }>
                <span>REBLOZYL <sup>&reg;</sup> (luspatercept-aamt)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("onureg") }>
                <span>ONUREG <sup>&reg;</sup> (azacitidine tablets)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("revlimid") }>
                <span>REVLIMID <sup>&reg;</sup> (lenalidomide)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("pomalyst") }>
                <span>POMALYST <sup>&reg;</sup> (pomalidomide)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("empliciti") }>
                <span>EMPLICITI <sup>&reg;</sup> (elotuzumab)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("r2") }>
                <span>R<sup>2</sup> REVLIMID RITUXIMAB</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("inrebic") }>
                <span>INREBIC <sup>&reg;</sup> (fedratinib capsules)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("sprycel") }>
                <span>SPRYCEL <sup>&reg;</sup> (dasatinib)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
              <div className="medicine-name" onClick={ () => setActiveMedicine("idhifa") }>
                <span>IDHIFA <sup>&reg;</sup> (enasidenib)</span>
                <FontAwesomeIcon icon={ faChevronRight } />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-link-section-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer" className="mobile-link-section-wrapper-inner" style={{ backgroundColor: "#FEDCCA" }}>
                <span>Contact Us</span>
                <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-link-section-wrapper" style={{ marginBottom: "3rem" }}>
        <Container>
          <Row>
            <Col md={12}>
              <a href="https://bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="mobile-link-section-wrapper-inner" style={{ backgroundColor: "#FFECCD" }}>
                <span>BMS Access Support</span>
                <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(OurMedicinesMobile);
