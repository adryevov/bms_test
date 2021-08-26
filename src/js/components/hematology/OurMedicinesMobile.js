import React, { Fragment, useState  } from "react";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Footer from "./Footer";
import { Button, Container, Col, Row, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoPlayer from "../UI/VideoPlayer";

const linksData = {
  abecma: {
    name: "Abecma",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/01%20Abecma/Abecma%20US-IDE-21-0061.png",
    description: "This Information is intended for US Healthcare Professionals only. Please see FULL PRESCRIBING INFORMATION, including Boxed WARNINGS, available in the link below.",
    assets: [
      {
        name: "Visit AbecmaHCP.com",
        url: "https://www.abecmahcp.com/",
        type: "link",
      },
      {
        name: "ABECMA Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_abecma.pdf",
        type: "doc",
      },
    ]
  },
  breyanzi: {
    name: "Breyanzi",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/Breyanzi%20US-LIS-21-0116.png",
    description: "Please see FULL PRESCRIBING INFORMATION, including Boxed WARNINGS, available in the link below",
    assets: [
      {
        name: "BREYANZI Website",
        url: "https://www.breyanzihcp.com/",
        type: "link",
      },
      {
        name: "BREYANZI Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_breyanzi.pdf?#view=Fit&toolbar=0",
        type: "doc",
      },
      {
        name: "BREYANZI Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/02%20BREYANZI%20Product%20Brochure%20US-LIS-21-0042.pdf",
        type: "doc",
      },
      {
        name: "BREYANZI Patient Profiles",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/03%20BREYANZI%20Patient%20Profiles%20US-LIS-20-0126.pdf",
        type: "doc",
      },
      {
        name: "BREYANZI Logistics and Sequencing",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/04%20BREYANZI%20Logistics%20and%20Sequencing%20US-LIS-20-0128.pdf",
        type: "doc",
      },
      {
        name: "BREYANZI Clinician Guide",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/05%20BREYANZI%20Clinician%20Guide%20US-LIS-20-0161.pdf",
        type: "doc",
      },
    ]
  },
  reblozyl: {
    name: "Reblozyl",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/Reblozyl%202007-US-2100089.png",
    description: "Please see U.S. Full Prescribing information for REBLOZYL   (luspatercept-aamt) available in the link below.\n",
    assets: [
      {
        name: "REBLOZYL Website",
        url: "https://www.reblozylpro.com/",
        type: "link",
      },
      {
        name: "REBLOZYL Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_reblozyl.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL Second Indication Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/02%20REBLOZYL%20Product%20Brochure1_2007-US-2100054.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL First Indication Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/03%20REBLOZYL%20Product%20Brochure%202_2007-US-2100003.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL Dosing & Reconstitution Guide",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/04%20REBLOZYL%20Dosing%20%26%20Reconstitution%20Guide%20US-RBZ-20-0290_2007-US-2100264.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL First Indication Patient Brochure \n",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/05%20REBLOZYL%20Patient%20Brochure1_US-RBZ-20-0303_2001-US-2100206.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL Second Indication Patient Brochure\n",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/06%20REBLOZYL%20Patient%20Brochure2_US-RBZ-19-0021_2007-US-2100263.pdf",
        type: "doc",
      },
      {
        name: "REBLOZYL MOA Video ",
        url: "https://vimeo.com/587929043/0979354d99",
        type: "video",
      },
      {
        name: "REBLOZYL First Indication Dosing & Administration Video ",
        url: "https://vimeo.com/587929261/071ecdfb60",
        type: "video",
      },
      {
        name: "REBLOZYL Second Indication Dosing & Administration Video",
        url: "https://vimeo.com/587929700/be27de9a90",
        type: "video",
      },
    ]
  },
  onureg: {
    name: "Onureg",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/04%20Onureg/Onureg%20US-ONU-21-0113.png",
    description: "Please see full Prescribing Information for ONUREG (azacitidine) tablets available in the link below",
    assets: [
      {
        name: "ONUREG Website",
        url: "https://www.onuregpro.com/",
        type: "link",
      },
      {
        name: "ONUREG Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_onureg.pdf",
        type: "doc",
      },
      {
        name: "ONUREG Dosing Guide",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/04%20Onureg/02%20ONUREG%20Dosing%20Guide%20US-ONU-21-0026.pdf",
        type: "doc",
      },
      {
        name: "How to order ONUREG",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/04%20Onureg/03%20How%20to%20order%20ONUREG%20US-ONU-21-0066.pdf",
        type: "doc",
      },
    ]
  },
  revlimid: {
    name: "Revlimid",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/",
    description: "Please see full Prescribing Information for ONUREG (azacitidine) tablets available in the link below",
    assets: [
      {
        name: "REVLIMID Website",
        url: "https://revlimidhcp.com/",
        type: "link",
      },
      {
        name: "REVLIMID Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_revlimid.pdf",
        type: "doc",
      },
      {
        name: "REVLIMID Product Brochure #1",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/02%20REVLIMID%20Product%20Brochure1_US-REV-20-0635.pdf",
        type: "doc",
      },
      {
        name: "REVLIMID Product Brochure #2",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/03%20Revlimid%20Product%20Brochure%202_US-REV-21-0021.pdf",
        type: "doc",
      },
      {
        name: "New Patient App for Completing REMS Patient Surveys",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/04%20New%20Patient%20App%20for%20Completing%20REMS%20Patient%20Surveys%20US-REMS-GEN200027.pdf",
        type: "doc",
      },
    ]
  },
  pomalyst: {
    name: "Pomalyst",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/Pomalyst%202204-US-2100018.png",
    description: "Please see full Prescribing Information for POMALYST, including Boxed WARNINGS for Embryo-Fetal Toxicity, and Venous and Arterial Thromboembolism, available in the link below. POMALYST is only available through POMALYST REMS at www.CelgeneRiskManagement.com",
    assets: [
      {
        name: "POMALYST Website",
        url: "https://pomalysthcp.com/",
        type: "link",
      },
      {
        name: "POMALYST Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_pomalyst.pdf",
        type: "doc",
      },
      {
        name: "POMALYST Product Brochure",
        url: "#",
        type: "doc",
      },
      {
        name: "POMALYST Dosing Guide",
        url: "#",
        type: "doc",
      },
      {
        name: "New Patient App for Completing REMS Patient Surveys",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/04%20New%20Patient%20App%20for%20Completing%20REMS%20Patient%20Surveys%20US-REMS-GEN200027.pdf",
        type: "doc",
      },
    ]
  },
  empliciti: {
    name: "Empliciti",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/07%20Empliciti/Empliciti%20689-US-2100010.png",
    description: "Please see Full Prescribing Information for EMPLICITI (elotuzumab) available in the link below.",
    assets: [
      {
        name: "EMPLICITI Website",
        url: "link",
        type: "https://www.emplicitihcp.com/",
      },
      {
        name: "EMPLICITI Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_empliciti.pdf",
        type: "doc",
      },
      {
        name: "EMPLICITI Dosing Guide",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/07%20Empliciti/02%20EMPLICITI-Dosing-Guide-US-EMP-21-0012.pdf",
        type: "doc",
      },
    ]
  },
  r2: {
    name: "R2",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/R2%20US-REV-21-0111.png",
    description: "Please see Full Prescribing Information for REVLIMID (lenalidomide) including Boxed WARNINGS for Embryo-Fetal Toxicity, Hematologic Toxicity, and Venous and Arterial Thromboembolism, available in the link below. REVLIMID is only available through REVLIMID REMS at www.CelgeneRiskManagement.com. Please see the rituximab full Prescribing Information for Important Safety Information at www.rituxan.com.",
    assets: [
      {
        name: "REVLIMID Website",
        url: "www.rituxan.com",
        type: "link",
      },
      {
        name: "REVLIMID Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_revlimid.pdf",
        type: "doc",
      },
      {
        name: "R2 Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/02%20R2%20Product%20Brochure%20US-REV-20-0677.pdf",
        type: "doc",
      },
      {
        name: "R2 Virtual Assistant",
        url: "https://r2virtualrep.com",
        type: "link",
      },
      {
        name: "R2 Combined KOL Video",
        url: "https://vimeo.com/587930107/3b5d6a3bd0",
        type: "video",
      },
      {
        name: "R2 Dose Modification Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/05%20R2%20Dose%20Modification%20Brochure%20US-REV-20-0337.pdf",
        type: "doc",
      },
    ]
  },
  inrebic: {
    name: "Inrebic",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/09%20Inrebic/Inrebic%202010-US-2100028.png",
    description: "Please see Full Prescribing Information for INREBIC (fedratinib), including Boxed WARNING for Encephalopathy, including Wernicke's, available in the link below.",
    assets: [
      {
        name: "INREBIC Website",
        url: "www.inrebicpro.com",
        type: "link",
      },
      {
        name: "INREBIC Full Prescribing Information",
        url: "https://media2.celgene.com/content/uploads/inrebic-pi.pdf",
        type: "doc",
      },
      {
        name: "INREBIC Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/09%20Inrebic/02%20INREBIC%20Product%20Brochure%202010-US-2100018.pdf",
        type: "doc",
      },
      {
        name: "INREBIC Dosing Guide",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/09%20Inrebic/03%20INREBIC%20Dosing%20Guide%20US-INR-20-0156.pdf",
        type: "doc",
      },
    ]
  },
  sprycel: {
    name: "Sprycel",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/10%20Sprycel/Sprycel%20792US2003894-01-01.png",
    description: "Please see Important Safety Information and full Prescribing Information, including Boxed WARNING available in the link below.",
    assets: [
      {
        name: "SPRYCEL Website",
        url: "http://www.sprycel-hcp.com/",
        type: "link",
      },
      {
        name: "SPRYCEL Full Prescribing Information",
        url: "https://packageinserts.bms.com/pi/pi_sprycel.pdf",
        type: "doc",
      },
      {
        name: "SPRYCEL Product Brochure",
        url: "#",
        type: "doc",
      },
    ]
  },
  idhifa: {
    name: "Idhifa",
    heroImage: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/11%20Idhifa/Idhifa%20US-IDH-21-0011.png",
    description: "Please see Important Safety Information and full Prescribing Information, including Boxed WARNING available in the link below.",
    assets: [
      {
        name: "IDHIFA Website",
        url: "https://www.idhifapro.com/",
        type: "link",
      },
      {
        name: "IDHIFA Full Prescribing Information",
        url: "https://media2.celgene.com/content/uploads/idhifa-pi.pdf",
        type: "doc",
      },
      {
        name: "IDHIFA Product Brochure",
        url: "https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/11%20Idhifa/02%20IDHIFA%20Product%20Brochure%202018-US-2000011.pdf",
        type: "doc",
      },
    ]
  },
};

const OurMedicinesMobile = () =>
{
  const [ activeMedicine, setActiveMedicine ] = useState(null);
  const [ modalVideoUrl, setModalVideoUrl ] = useState(null);

  console.log('modalVideoUrl', modalVideoUrl);

  return (
    <Fragment>
      <Header />

      { !activeMedicine &&
        <Fragment>
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
        </Fragment>
      }

      { activeMedicine && linksData[activeMedicine] &&
        <Fragment>
          <img src={ linksData[activeMedicine].heroImage } alt={ linksData[activeMedicine].name } className="mobile-medicine-image" />

          <div className="mobile-medicine-description">
            <p>{ linksData[activeMedicine].description }</p>
          </div>

          <section className="mobile-medicine-assets-wrapper">
            <Container>
              <Row>
                <Col md={12}>
                  { linksData[activeMedicine].assets.map(asset =>
                    <Fragment key={ asset.name }>
                      { asset.type === "video" &&
                        <Link to="#" onClick={ () => setModalVideoUrl(asset.url) } className="medicine-name">
                          { asset.name }
                          <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" />
                        </Link>
                      }
                      { asset.type !== "video" &&
                        <a href={ asset.url } target="_blank" rel="noreferrer" className="medicine-name">
                          { asset.name }
                          <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Right" />
                        </a>
                      }
                    </Fragment>
                  )}
                </Col>
              </Row>
            </Container>
          </section>

          <Container className="mobile-medicine-back-to-home">
            <Row>
              <Col>
                <Button onClick={ () => setActiveMedicine(null) } className="button-pink"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Button>
              </Col>
            </Row>
          </Container>
        </Fragment>
      }

      { modalVideoUrl &&
        <Modal
          show={ !!modalVideoUrl }
          onHide={ () => setModalVideoUrl(null) }
          backdrop="static"
          centered
          className="hematology-medicines-modal-wrapper"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="video-section-wrapper">
              <VideoPlayer src={ modalVideoUrl } />
            </div>
          </Modal.Body>
        </Modal>
      }

      <Footer extended={ !activeMedicine } />
    </Fragment>
  );
};

export default React.memo(OurMedicinesMobile);
