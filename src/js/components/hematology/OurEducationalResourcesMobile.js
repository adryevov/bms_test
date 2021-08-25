import React, { Fragment, useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Footer from "./Footer";
import { Accordion, Card, Container, Col, Row, useAccordionToggle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { linksData } from "./OurEducationalResources";

const OuEducationalResourcesMobile = () =>
{
  const [ activeTab, setActiveTab ] = useState("");

  console.log('activeTab', activeTab);

  const CustomToggle = ({ children, eventKey }) => {
    const customOnClick = useAccordionToggle(eventKey, () => {
      setActiveTab( eventKey === activeTab ? null : eventKey );
    });

    return (
      <Accordion.Toggle as={ Card.Header } onClick={ customOnClick }>
        { children }
        { eventKey === activeTab ? <FontAwesomeIcon icon={ faMinus } /> : <FontAwesomeIcon icon={ faPlus } /> }
      </Accordion.Toggle>
    )
  }

  return (
    <Fragment>
      <Header />

      <section className="mobile-section-name-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Our Educational Resources</h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-educational-resources-names-wrapper">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Disease education</h3>

              <Accordion className="medicines-accordion">
                { Object.keys(linksData).map(name =>
                  <Card>
                    <CustomToggle eventKey={ name }>{ linksData[name].name }</CustomToggle>
                    <Accordion.Collapse eventKey={ name }>
                      <Card.Body>
                        <ul className="accordion-links">
                          { Object.keys(linksData[name].links).map(linkName =>
                            <li key={ linkName }><a href={ linksData[name].links[linkName] } target="_blank" rel="noreferrer">{ linkName }<img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Forward" /></a></li>
                          )}
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )}
              </Accordion>

            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobile-link-section-wrapper" style={{ marginBottom: "3rem" }}>
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

      <Footer />
    </Fragment>
  );
};

export default React.memo(OuEducationalResourcesMobile);
