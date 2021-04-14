import React, { useEffect } from "react";
import { useMetaInfo } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const OurResearch = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Our Research");
    updateMetaDescription("Our Research.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/background-hematology-research.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Our Research</h1>

            <Link className="myeloid-disease-wrapper link-wrapper" to="/hematology/our-research/myeloid-disease">
              <h2>Myeloid Disease</h2>
            </Link>


            <Link className="lymphoma-wrapper link-wrapper" to="/hematology/our-research/lymphoma">
              <h2>Lymphoma</h2>
            </Link>

            <Link className="multiple-myeloma-wrapper link-wrapper" to="/hematology/our-research/multiple-myeloma">
              <h2>Multiple Myeloma</h2>
            </Link>

            <Link className="cereblon-modulation-wrapper link-wrapper" to="/hematology/our-research/cereblon-modulation">
              <h2>Cereblon Modulation</h2>
            </Link>

            <Link className="car-t-cell-therapy-wrapper link-wrapper" to="/hematology/our-research/car-t-cell-therapy">
              <h2>CAR T Cell Therapy</h2>
            </Link>

            <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-3/" target="_blank" rel="noreferrer" className="our-pipeline-wrapper link-wrapper">
              <h2>Our Pipeline</h2>
            </a>

            <a href="https://bolderscience.com/bmspipeline/trial-finder/" target="_blank" rel="noreferrer" className="our-clinical-trials-wrapper link-wrapper">
              <h2>Our Clinical Trials</h2>
            </a>

            <div className="scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="medical-information-wrapper">
              <span>Medical Information</span>
              <a href="https://www.globalbmsmedinfo.com/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="hematology-our-research-footer">
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 VV-MED-01821</p>

        <Link to="/" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Link>
        <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer" className="button-dark privacy-policy-btn">Privacy Policy</a>
      </div>
    </div>
  );
};

export default React.memo(OurResearch);
