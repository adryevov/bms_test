import React, { useEffect } from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MultipleMyeloma = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Multiple Myeloma");
    updateMetaDescription("Multiple Myeloma.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-multiple-myeloma.jpg)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Multiple Myeloma</h1>

            <div className="targeting-protein-wrapper link-wrapper">
              <img alt="Targeting protein degradation through cereblon modulation" className="targeting-protein-img" src="/img/hematology/research/targeting-protein-degradation-through-cereblon-modulation.png"></img>
              <h2>Targeting protein degradation through cereblon modulation</h2>
            </div>

            <div className="multiple-myeloma-additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="multiple-myeloma-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="cereblon-modulation-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Cereblon modulation in multiple myeloma" className="cereblon-modulation-in-multiple-myeloma-img" src="/img/hematology/research/Cereblon-modulation-in multiple-myeloma.png"></img>
              <h2>Cereblon modulation in multiple myeloma</h2>
            </div>

            <div className="targeting-BCMA-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Targeting BCMA in multiple myeloma" className="targeting-BCMA-in-multiple-myeloma-img" src="/img/hematology/research/Targeting-BCMA-in-multiple-myeloma.png"></img>
              <h2>Targeting BCMA in multiple myeloma</h2>
            </div>

            <div className="clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Clinical trial: Idecabtagene vicleucel in multiple myeloma" className="clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma-img" src="/img/hematology/research/Clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma.jpg"></img>
              <h2>Clinical trial: Idecabtagene vicleucel in multiple myeloma</h2>
            </div>

            <div className="medical-information-wrapper">
              <span>Medical Information</span>
              <a href="http://www.globalbmsmedinfo.com" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="hematology-our-research-footer">
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 VV-MED-01821</p>

        <Link to="/hematology/our-research" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Our Research</Link>
        <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer" className="button-dark privacy-policy-btn">Privacy Policy</a>
      </div>
    </div>
  );
};

export default React.memo(MultipleMyeloma);
