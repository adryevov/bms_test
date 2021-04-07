import React, { useEffect } from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CARTCellTherapy= () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("CAR T Cell Therapy");
    updateMetaDescription("CAR T Cell Therapy.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-hematology-research-car-t-cell.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>CAR T Cell Therapy</h1>

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED-01750.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"  className="targeting-bcma-cart-wrapper link-wrapper">
              <img alt="Targeting BCMA using CAR T" className="targeting-bcma-cart-img" src="/img/hematology/research/Targeting-BCMA-using-CAR-T.png"></img>
              <h2>Targeting BCMA using CAR T</h2>
            </a>

            <a href="https://gc-static-content.s3.amazonaws.com/bms/ash/VVMED/VV-MED-01749.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"  className="idecabtagene-vicleucel-cart-wrapper link-wrapper">
              <img alt="Clinical trial: Idecabtagene vicleucel in multiple myeloma" className="idecabtagene-vicleucel-cart-img" src="/img/hematology/research/idecabtagene-vicleucel-cart.jpg"></img>
              <h2>Clinical trial: Idecabtagene vicleucel in multiple myeloma</h2>
            </a>

            <div className="cart-additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="cart-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
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

export default React.memo(CARTCellTherapy);
