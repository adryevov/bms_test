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
            <div className="breyanzi-wrapper link-wrapper" onClick={ () => setModalName("breyanzi-general") }></div>
            <div className="reblozyl-wrapper link-wrapper" onClick={ () => setModalName("reblozyl-general") }></div>
            <div className="onureg-wrapper link-wrapper" onClick={ () => setModalName("onureg-general") }></div>
            <div className="revlimid-wrapper link-wrapper" onClick={ () => setModalName("revlimid-general") }></div>
            <div className="pomalyst-wrapper link-wrapper" onClick={ () => setModalName("pomalyst-general") }></div>
            <div className="empliciti-wrapper link-wrapper" onClick={ () => setModalName("empliciti-general") }></div>
            <div className="r2-wrapper link-wrapper" onClick={ () => setModalName("r2-general") }></div>
            <div className="inrebic-wrapper link-wrapper" onClick={ () => setModalName("inrebic-general") }></div>
            <div className="sprycel-wrapper link-wrapper" onClick={ () => setModalName("sprycel-general") }></div>
            <div className="idhifa-wrapper link-wrapper" onClick={ () => setModalName("idhifa-general") }></div>
          </div>
        </div>
      </section>

      <div className="hematology-our-medicines-footer">
        <p className="info">Please See Full Prescribing Information, including Boxed WARNINGS for ABECMA, BREYANZI, IDHIFA, INREBIC, POMALYST, and REVLIMID, in this virtual booth.<br /> Please See Full Prescribing Information for EMPLICITI, ONUREG, REBLOZYL and SPRYCEL, in this virtual booth.</p>
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 03/21 US-CLG-21-0156</p>

        <Link to="/" className="button-pink back-to-home"><img src={ process.env.PUBLIC_URL + "/img/icons/arrow-back.svg" } alt="Arrow Back" /> Back to Home Page</Link>
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

            { modalName === "abecma-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/abecma-details-page.png" } alt="Abecma" />
                <hr />
                <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>Please see U.S Full Prescribing Information, including <b>Boxed WARNINGS</b>, available at the link below.</p>
                <PinkLinkIconButton name="Visit AbecmaHCP.com" link="https://www.abecmahcp.com/" blank={ true } />
                <p style={{ margin: "3rem 0 0.5rem 0", fontWeight: "700" }}>Click a button below to learn more about ABECMA</p>
                <GrayDownloadIconButton name="ABECMA Prescribing Information" link="https://packageinserts.bms.com/pi/pi_abecma.pdf#view=Fit&toolbar=0" blank={ true } />
              </div>
            }

            { modalName === "breyanzi-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_breyanzi.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/breyanzi.png" } alt="Breyanzi" /></a>
                <Link to="#" onClick={ () => setModalName("breyanzi-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "breyanzi-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/breyanzi-details-page.png" } alt="Breyanzi" />
                <hr />
                <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>Please see FULL PRESCRIBING INFORMATION, including <b>Boxed WARNINGS</b>, available in the link below</p>
                <PinkLinkIconButton name="BREYANZI Website" link="https://www.breyanzihcp.com/" blank={ true } />
                <p style={{ margin: "3rem 0 0.5rem 0", fontWeight: "700" }}>Explore Additional Information:</p>
                <GrayDownloadIconButton name="BREYANZI Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_breyanzi.pdf?#view=Fit&toolbar=0" blank={ true } />
              </div>
            }

            { modalName === "reblozyl-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/reblozyl.png" } alt="Reblozyl" /></a>
                <Link to="#" onClick={ () => setModalName("reblozyl-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "reblozyl-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/reblozyl-details-page.png" } alt="Breyanzi" />
                <hr />
                <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>Please see U.S. Full Prescribing information for REBLOZYL<sup>&reg;</sup> (luspatercept-aamt) available in the link below.
                </p>
                <PinkLinkIconButton name="REBLOZYL Website" link="https://www.reblozylpro.com/" blank={ true } />
                <p style={{ margin: "3rem 0 0.5rem 0", fontWeight: "700" }}>Explore Additional Information:</p>
                <GrayDownloadIconButton name="REBLOZYL Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/2007-US-2100054_cellus_mds_hcp_bro_update.pdf?#view=Fit&toolbar=0" } blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/2007-US-2100003 Beta Thal Shortened Brochure_DIGITAL.pdf?#view=Fit&toolbar=0" } blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL Dosing & Reconstitution Guide" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0290%20Dual%20Indication%20Dosing%20Guide%20%28Downloadable%29_Clickable_7.16.pdf?#view=Fit&toolbar=0" blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Patient Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0303%20First%20Indication_BT_Patient%20Brochure%20V2%20Digital.pdf?#view=Fit&toolbar=0" blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Patient Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0232%2BMDS%2BPatient%2BBrochure%2B%28Digital%29_FinalClickable6.26.pdf?#view=Fit&toolbar=0" blank={ true } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL MOA Video" onClick={ () => setModalName("reblozyl-moa-video") } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Dosing & Administration Video" onClick={ () => setModalName("reblozyl-first-indication-bosing-and-administration-video") } className="reblozyl-details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Dosing & Administration Video" onClick={ () => setModalName("reblozyl-second-indication-bosing-and-administration-video") } className="reblozyl-details-link" />
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

export default React.memo(OurMidicines);
