import React, { useEffect, useState } from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "react-bootstrap";


const MultipleMyeloma = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();
  const [ modalName, setModalName ] = useState("");

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

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED-01744.pdf?#view=Fit&toolbar=0" rel="noreferrer"  target="_blank" className="targeting-protein-wrapper link-wrapper">
              <img alt="Targeting protein degradation through cereblon modulation" className="targeting-protein-img" src="/img/hematology/research/targeting-protein-degradation-through-cereblon-modulation.png"></img>
              <h2>Targeting protein degradation through cereblon modulation</h2>
            </a>

            <div className="multiple-myeloma-additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="multiple-myeloma-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <a href="/img/hematology/research/VV-MED-1745_AACRA_2021_Celmod_Interactive_L15.pdf?#view=Fit&toolbar=0" rel="noreferrer"  target="_blank" className="cereblon-modulation-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Cereblon modulation in multiple myeloma" className="cereblon-modulation-in-multiple-myeloma-img" src="/img/hematology/research/Cereblon-modulation-in multiple-myeloma.png"></img>
              <h2>Cereblon modulation in multiple myeloma</h2>
            </a>

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED_01743.pdf?#view=Fit&toolbar=0" rel="noreferrer"  target="_blank" className="targeting-BCMA-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Targeting BCMA in multiple myeloma" className="targeting-BCMA-in-multiple-myeloma-img" src="/img/hematology/research/Targeting-BCMA-in-multiple-myeloma.png"></img>
              <h2>Targeting BCMA in multiple myeloma</h2>
            </a>

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED-01749.pdf?#view=Fit&toolbar=0" rel="noreferrer"  target="_blank" className="clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma-wrapper link-wrapper">
              <img alt="Clinical trial: Idecabtagene vicleucel in multiple myeloma" className="clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma-img" src="/img/hematology/research/Clinical-trial-Idecabtagene-vicleucel-in-multiple-myeloma.jpg"></img>
              <h2>Clinical trial: Idecabtagene vicleucel in multiple myeloma</h2>
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
            { modalName === "abecma-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_abecma.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/abecma.png" } alt="Abecma" /></a>
                <Link to="#" onClick={ () => setModalName("abecma-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "breyanzi-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_breyanzi.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/breyanzi.png" } alt="Breyanzi" /></a>
                <Link to="#" onClick={ () => setModalName("breyanzi-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "reblozyl-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/reblozyl.png" } alt="Reblozyl" /></a>
                <Link to="#" onClick={ () => setModalName("reblozyl-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "reblozyl-moa-video" &&
              <div className="video-section-wrapper">
                <video controls poster={ process.env.PUBLIC_URL + "/img/video-banner.png" }>
                  <source src="https://virtual-video-resources.s3.amazonaws.com/bms/videos/US-RBZ-20-0443+MOA_HCP+GPO+Video+Asset+V2.mp4" type="video/mp4" />
                </video>
              </div>
            }

          </Modal.Body>
        </Modal>
      }

    </div>
  );
};

export default React.memo(MultipleMyeloma);
