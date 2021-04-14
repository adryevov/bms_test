import React, { useEffect, useState } from "react";
import { useMetaInfo } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

const OurEducationalResources = () =>
{
  const [ modalName, setModalName ] = useState("");
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Our Educational Resources");
    updateMetaDescription("Our Educational Resources.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  const linksData = {
    multipleMueloma: {
      name: "Multiple Myeloma (MM)",
      links: {
        "MM Center for Nurses": "https://www.mmcenterfornurses.com/",
        "MM Resources": "https://www.mmcenterfornurses.com/resources/",
        "Educational Videos": "https://www.mmcenterfornurses.com/educational-videos/",
      },
    },
    myelodysplasticSyndromes: {
      name: "Myelodysplastic Syndromes (MDS)",
      links: {
        "What is MDS": "https://www.centerfornurses.com/mds/what-is-mds/",
        "General Resources": "https://www.centerfornurses.com/general-resources/",
      },
    },
    acuteMyeloidLeukemia: {
      name: "Acute Myeloid Leukemia (AML)",
      links: {
        "What is AML": "https://www.centerfornurses.com/aml/what-is-aml/",
        "General Resources": "https://www.centerfornurses.com/general-resources/",
      },
    },
    carT: {
      name: "CAR T",
      links: {
        "Understanding CAR T": "https://www.cartcellscience.com/",
        "Learn Aboout CAR T - For Patients": "https://www.explorecarttherapy.com/",
      },
    },
    lymphoma: {
      name: "Lymphoma",
      links: {
        "What is FL": "https://www.centerfornurses.com/lymphoma/follicular-lymphoma-fl/about-fl/",
        "What is MZL": "https://www.centerfornurses.com/lymphoma/marginal-zone-lymphoma-mzl/what-is-mzl/",
        "General Resources": "https://www.centerfornurses.com/general-resources/",
      }
    }
  };

  return (
    <div className={ "hematology-our-educational-resources-wrapper" + (!!modalName ? " blurry-background" : "") } style={{ backgroundImage: "url(/img/hematology/background-hematology-educational-resources.png)" }}>
      <div className="hematology-our-educational-resources-header">
        <Link to="/" className="logo"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Our Educational Resources</h1>

            <div className="clinical-nurse-connections-wrapper">
              <p className="coming-soon">Coming Soon</p>
              <h2>Clinical Nurse Connections</h2>
              <p>A convenient new tool for scheduling virtual and in-person education with your BMS Clinical Nurse Consultant</p>
            </div>

            <div className="contact-us-wrapper">
              <span>Contact Us</span>
              <a href="https://www.centerfornurses.com/request-a-cnc/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="multiple-myeloma-wrapper link-wrapper">
              <h2>Multiple Myeloma (MM)</h2>
              <Link to="#" onClick={ () => setModalName("multipleMueloma") } className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="myelodysplastic-syndromes-wrapper link-wrapper">
              <h2>Myelodysplastic Syndromes (MDS)</h2>
              <Link to="#" onClick={ () => setModalName("myelodysplasticSyndromes") } className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="acute-myeloid-leukemia-wrapper link-wrapper">
              <h2>Acute Myeloid Leukemia (AML)</h2>
              <Link to="#" onClick={ () => setModalName("acuteMyeloidLeukemia") } className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="car-t-wrapper link-wrapper">
              <h2>CAR T</h2>
              <Link to="#" onClick={ () => setModalName("carT") } className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="lymphoma-wrapper link-wrapper">
              <h2>Lymphoma</h2>
              <Link to="#" onClick={ () => setModalName("lymphoma") } className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>
          </div>
        </div>
      </section>

      <div className="hematology-our-educational-resources-footer">
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 US-CLG-21-0157</p>

        <Link to="/" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Link>
        <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer" className="button-dark privacy-policy-btn">Privacy Policy</a>
      </div>

      { modalName &&
        <Modal
          show={ !!modalName && modalName in linksData }
          onHide={ () => setModalName("") }
          backdrop="static"
          centered
          className="hematology-educational-resources-modal-wrapper"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h2 className="hematology-section-name">{ linksData[modalName].name }</h2>
            <hr />
            <ul className="hematology-modal-links">
              { Object.keys(linksData[modalName].links).map(linkName =>
                <li key={ linkName }><a href={ linksData[modalName].links[linkName] } target="_blank" rel="noreferrer">{ linkName }<img src={ process.env.PUBLIC_URL + "/img/icons/arrow-forward.svg" } alt="Arrow Forward" /></a></li>
              )}
            </ul>
          </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default React.memo(OurEducationalResources);
