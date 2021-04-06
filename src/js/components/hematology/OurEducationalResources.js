import React, { useEffect } from "react";
import { useMetaInfo } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const OurEducationalResources = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Our Educational Resources");
    updateMetaDescription("Our Educational Resources.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-educational-resources-wrapper"  style={{ backgroundImage: "url(/img/hematology/background-hematology-educational-resources.png)" }}>
      <div className="hematology-our-educational-resources-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Our Educational Resources</h1>

            <div className="clinical-nurse-connections-wrapper">
              <h2>Clinical Nurse Connections</h2>
              <p>A convenient new tool for scheduling virtual and in-person education with your BMS Clinical Nurse Consultant</p>
            </div>

            <div className="contact-us-wrapper">
              <span>Contact Us</span>
              <a href="https://www.centerfornurses.com/request-a-cnc/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="multiple-myeloma-wrapper link-wrapper">
              <h2>Multiple Myeloma (MM)</h2>
              <Link to="#" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="myelodysplastic-syndromes-wrapper link-wrapper">
              <h2>Myelodysplastic Syndromes (MDS)</h2>
              <Link to="#" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="acute-myeloid-leukemia-wrapper link-wrapper">
              <h2>Acute Myeloid Leukemia (AML)</h2>
              <Link to="#" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="car-t-wrapper link-wrapper">
              <h2>CAR T</h2>
              <Link to="#" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

            <div className="lymphoma-wrapper link-wrapper">
              <h2>Lymphoma</h2>
              <Link to="#" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></Link>
            </div>

          </div>
        </div>
      </section>

      <div className="hematology-our-educational-resources-footer">
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 US-CLG-21-0157</p>

        <Link to="/" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Link>
        <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer" className="button-dark privacy-policy-btn">Privacy Policy</a>
      </div>
    </div>
  );
};

export default React.memo(OurEducationalResources);
