import React, { useEffect, useState} from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

const MyeloidDisease = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();
  const [ modalName, setModalName ] = useState("");

  useEffect(() =>
  {
    updateMetaTitle("Myeloid Disease");
    updateMetaDescription("Myeloid Disease.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-hematology-research-myeloid-disease.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner myeloid-disease-main-area-wrapper">
            <h1>Myeloid Disease</h1>

            <div className="myelofibrosis-mechanism link-wrapper" onClick={ () => setModalName("myelofibrosis-mechanism") } >
              <img alt="Myelofibrosis mechanism of disease " className="myelofibrosis-mechanism-img" src={ process.env.PUBLIC_URL + "/img/hematology/research/myelofibrosis-mechanism-of-disease.png" } />
              <h2>Myelofibrosis mechanism of disease (video)</h2>
            </div>

            <div className="additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/trial-finder/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="myeloid-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <a href={ process.env.PUBLIC_URL + "/pdf/VV-MED-01765_AACR_2021_Freedom_Panels_R02_CF.pdf?#view=Fit&toolbar=0" } rel="noreferrer" target="_blank" className="fedratinib-wrapper link-wrapper">
              <img alt="Clinical trial: Fedratinib in myelofibrosis" className="fedratinib-img" src={ process.env.PUBLIC_URL + "/img/hematology/research/clinical-trial-fedratinib-in-myelofibrosis.png" } />
              <h2>Clinical trial: Fedratinib in myelofibrosis</h2>
            </a>

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED-01738.pdf?#view=Fit&toolbar=0" rel="noreferrer"  target="_blank" className="luspatercept-erythropoiesis-wrapper link-wrapper">
              <img alt="Clinical trial: Luspatercept in erythropoiesis disorders" className="luspatercept-erythropoiesis-img" src={ process.env.PUBLIC_URL + "/img/hematology/research/clinical-trial-luspatercept-in-erythropoiesis-disorders.png" } />
              <h2>Clinical trial: Luspatercept in erythropoiesis disorders</h2>
            </a>

            <a href={ process.env.PUBLIC_URL + "/pdf/VV-MED-01746_16374-21XBMSIMO_AACR_2021_Ind_Pnl_R13_CF.pdf?#view=Fit&toolbar=0" } rel="noreferrer"  target="_blank" className="luspatercept-mpn-wrapper link-wrapper">
              <img alt="Clinical trial: Luspatercept in MPN-associated myelofibrosis" className="luspatercept-mpn-img" src={ process.env.PUBLIC_URL + "/img/hematology/research/clinical-trial-luspatercept-in-MPN-associated-myelofibrosis.png" } />
              <h2>Clinical trial: Luspatercept in MPN-associated myelofibrosis</h2>
            </a>

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

      { !!modalName &&
        <Modal
          show={ !!modalName }
          onHide={ () => setModalName("") }
          backdrop="static"
          centered
          className="hematology-medicines-modal-wrapper"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            { modalName === "myelofibrosis-mechanism" &&
              <div className="general-section-wrapper">
                <div className="vimeo-wrapper">
                  <iframe id="embed-element" className="embed-vimeo-content" src="https://player.vimeo.com/video/483788660?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen title="Myelofibrosis Mechanism"></iframe>
                </div>
              </div>
            }
          </Modal.Body>
        </Modal>
      }

    </div>
  );
};

export default React.memo(MyeloidDisease);
