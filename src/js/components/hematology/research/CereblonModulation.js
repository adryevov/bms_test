import React, { useEffect } from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CereblonModulation = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Cereblon Modulation");
    updateMetaDescription("Cereblon Modulation.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-hematology-research-celeblon.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Cereblon Modulation</h1>

            <div className="targeting-protein-cereblon-wrapper link-wrapper">
              <img alt="Targeting protein degradation through cereblon modulation" className="targeting-protein-cereblon-img" src="/img/hematology/research/Targeting-protein-degradation-through-cereblon-modulation-2.png"></img>
              <h2>Targeting protein degradation through cereblon modulation</h2>
            </div>

            <div className="cereblon-modulation-cereblon-wrapper link-wrapper">
              <img alt="Cereblon modulation in multiple myeloma" className="cereblon-modulation-cereblon-img" src="/img/hematology/research/cereblon-modulation-cereblon.png"></img>
              <h2>Cereblon modulation in multiple myeloma</h2>
            </div>

            <div className="celeblon-additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="celeblon-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="CC-99282-celeblon-wrapper link-wrapper">
              <img alt="Clinical trial: CC-99282 in relapsed or refractory CLL, SLL, and NHL" className="CC-99282-celeblon-img" src="/img/hematology/research/CC-99282-celeblon.png"></img>
              <h2>Clinical trial: CC-99282 in relapsed or refractory CLL, SLL, and NHL</h2>
            </div>

            <div className="iberdomide-celeblon-wrapper link-wrapper">
              <img alt="Clinical trial: Iberdomide in relapsed or refractory lymphomas" className="iberdomide-celeblon-img" src="/img/hematology/research/iberdomide-celeblon.jpg"></img>
              <h2>Clinical trial: Iberdomide in relapsed or refractory lymphomas</h2>
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

export default React.memo(CereblonModulation);
