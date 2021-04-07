import React, { useEffect } from "react";
import { useMetaInfo } from "../../../utils/hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Lymphoma = () =>
{
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Lymphoma");
    updateMetaDescription("Lymphoma.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className="hematology-our-research-wrapper"  style={{ backgroundImage: "url(/img/hematology/research/background-hematology-research-lymphoma.png)" }}>
      <div className="hematology-our-research-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Lymphoma</h1>

            <div className="nhl-and-cll-wrapper link-wrapper">
              <img alt="Clinical research in NHL and CLL" className="nhl-and-cll-img" src="/img/hematology/research/Clinical-research-in-NHL-and-CLL.png"></img>
              <h2>Clinical research in NHL and CLL</h2>
            </div>

            <div className="lymphoma-additional-clinical-trials-wrapper">
              <span>Additional Clinical Trials</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="lymphoma-scientific-resources-wrapper">
              <span>Scientific Resources</span>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumorhematology/resources/event-3/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="targets-nhl-and-cll-wrapper link-wrapper">
              <img alt="Targets in NHL and CLL" className="targets-nhl-and-cll-img" src="/img/hematology/research/Targets-in-NHL-and-CLL.png"></img>
              <h2>Targets in NHL and CLL</h2>
            </div>

            <div className="iberdomide-wrapper link-wrapper">
              <img alt="Clinical trial: Iberdomide in relapsed or refractory lymphomas" className="iberdomide-img" src="/img/hematology/research/Clinical-trial-Iberdomide-in-relapsed-or-refractory-lymphomas.jpg"></img>
              <h2>Clinical trial: Iberdomide in relapsed or refractory lymphomas</h2>
            </div>

            <div className="CC-99282-wrapper link-wrapper">
              <img alt="Clinical trial: CC-99282 in relapsed or refractory CLL, SLL, and NHL" className="CC-99282-img" src="/img/hematology/research/Clinical-trial-CC-99282-in-relapsed-or-refractory-CLL-SLL-and-NHL.png"></img>
              <h2>Clinical trial: CC-99282 in relapsed or refractory CLL, SLL, and NHL</h2>
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

export default React.memo(Lymphoma);
