import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMetaInfo } from "../../utils/hooks";
import { Modal } from "react-bootstrap";
import GrayDownloadIconButton from "../UI/GrayDownloadIconButton";
import PinkLinkIconButton from "../UI/PinkLinkIconButton";

const OurMidicines = () =>
{
  const [ modalName, setModalName ] = useState("");
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Our Medicines");
    updateMetaDescription("Our Medicines.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <div className={ "hematology-our-medicines-wrapper" + (!!modalName ? " blurry-background" : "") }  style={{ backgroundImage: "url(/img/hematology/background-hematology-medicines.png)" }}>
      <div className="hematology-our-medicines-header">
        <Link to="/" className="logo-wrapper"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
        <span>This Information is intended for US Healthcare Professionals only.</span>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Our Medicines</h1>

            <div className="bms-access-support-wrapper">
              <span>BMS Access Support</span>
              <a href="https://bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="contact-us-wrapper">
              <span>Contact Us</span>
              <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
            </div>

            <div className="abecma-wrapper link-wrapper" onClick={ () => setModalName("abecma-general") }></div>
            <div className="breyanzi-wrapper link-wrapper"></div>
            <div className="reblozyl-wrapper link-wrapper"></div>
            <div className="onureg-wrapper link-wrapper"></div>
            <div className="revlimid-wrapper link-wrapper"></div>
            <div className="pomalyst-wrapper link-wrapper"></div>
            <div className="empliciti-wrapper link-wrapper"></div>
            <div className="r2-wrapper link-wrapper"></div>
            <div className="inrebic-wrapper link-wrapper"></div>
            <div className="sprycel-wrapper link-wrapper"></div>
            <div className="idhifa-wrapper link-wrapper"></div>
          </div>
        </div>
      </section>

      <div className="hematology-our-medicines-footer">
        <p className="info">Please See Full Prescribing Information, including Boxed WARNINGS for ABECMA, BREYANZI, IDHIFA, INREBIC, POMALYST, and REVLIMID, in this virtual booth.<br /> Please See Full Prescribing Information for EMPLICITI, ONUREG, REBLOZYL and SPRYCEL, in this virtual booth.</p>
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 US-CLG-21-0156</p>

        <Link to="/" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Link>
        <a href="https://www.bms.com/privacy-policy.html" target="_blank" rel="noreferrer" className="button-dark privacy-policy-btn">Privacy Policy</a>
      </div>

      { modalName &&
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
                <a href="https://packageinserts.bms.com/pi/pi_abecma.pdf#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/abecma.png" } alt="Abecma" /></a>
                <Link to="#" onClick={ () => setModalName("abecma-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "abecma-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/abecma-details-page.png" } alt="Abecma" />
                <hr />
                <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>Please see U.S Full Prescribing Information, including <b>Boxed WARNINGS</b>, available at the link below.</p>
                <PinkLinkIconButton name="Visit AbecmaHCP.com" link="https://www.abecmahcp.com/" blank={ true } />
                <p style={{ margin: "3rem 0 0.5rem 0" }}>Click a button below to learn more about ABECMA</p>
                <GrayDownloadIconButton name="ABECMA Prescribing Information" link="https://packageinserts.bms.com/pi/pi_abecma.pdf#view=Fit&toolbar=0" blank={ true } />
              </div>
            }

          </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default React.memo(OurMidicines);
