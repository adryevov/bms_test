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
    updateMetaTitle("Multiple Myeloma");
    updateMetaDescription("Multiple Myeloma.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-hematology-research-lymphoma.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Cereblon Modulation</h1>

            <div className="myelofibrosis-mechanism link-wrapper">
              <img alt="Myelofibrosis mechanism of disease " className="myelofibrosis-mechanism-img" src="/img/hematology/research/myelofibrosis-mechanism-of-disease.png"></img>
              <h2>Myelofibrosis mechanism of disease (video)</h2>
            </div>

            <div className="additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="myeloid-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="fedratinib-wrapper link-wrapper">
              <img alt="Clinical trial: Fedratinib in myelofibrosis" className="fedratinib-img" src="/img/hematology/research/clinical-trial-fedratinib-in-myelofibrosis.png"></img>
              <h2>Clinical trial: Fedratinib in myelofibrosis</h2>
            </div>

            <div className="luspatercept-erythropoiesis-wrapper link-wrapper">
              <img alt="Clinical trial: Luspatercept in erythropoiesis disorders" className="luspatercept-erythropoiesis-img" src="/img/hematology/research/clinical-trial-luspatercept-in-erythropoiesis-disorders.png"></img>
              <h2>Clinical trial: Luspatercept in erythropoiesis disorders</h2>
            </div>

            <div className="luspatercept-mpn-wrapper link-wrapper">
              <img alt="Clinical trial: Luspatercept in MPN-associated myelofibrosis" className="luspatercept-mpn-img" src="/img/hematology/research/clinical-trial-luspatercept-in-MPN-associated-myelofibrosis.png"></img>
              <h2>Clinical trial: Luspatercept in MPN-associated myelofibrosis</h2>
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
