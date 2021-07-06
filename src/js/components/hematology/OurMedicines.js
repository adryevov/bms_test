import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import GrayDownloadIconButton from "../UI/GrayDownloadIconButton";
import PinkLinkIconButton from "../UI/PinkLinkIconButton";
import VideoPlayer from "../UI/VideoPlayer";
import { useIsMobile } from "../../utils/hooks";

const OurMidicines = () =>
{
  const [ modalName, setModalName ] = useState("");
  const isMobile = useIsMobile();

  const _closeDialog = useCallback(() =>
  {
    if ([ "reblozyl-moa-video", "reblozyl-first-indication-bosing-and-administration-video", "reblozyl-second-indication-bosing-and-administration-video" ].includes(modalName)) {
      setModalName("reblozyl-detailed");
    }
    else if (modalName === "r2-video")
    {
      setModalName("r2-detailed");
    }
    else
    {
      setModalName("");
    }
  }, [ modalName ]);

  return (
    <div className={ "hematology-our-medicines-wrapper" + (!!modalName ? " blurry-background" : "") }  style={{ backgroundImage: "url(/img/hematology/background-hematology-medicines.png)" }}>
      <div className="hematology-our-medicines-header">
        <Link to="/" className="logo"><img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" /></Link>
        <span>This Information is intended for US Healthcare Professionals only.</span>
      </div>

      <section className="main-area">
        <div className="main-area-wrapper">
          <div className="main-area-wrapper-inner">
            <h1>Our Medicines</h1>

            { !isMobile &&
              <div className="bms-access-support-wrapper">
                <span>BMS Access Support</span>
                <a href="https://bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
              </div>
            }

            { isMobile &&
              <div className="bms-access-support-wrapper">
                <a href="https://bmsaccesssupportvirtual.com/" target="_blank" rel="noreferrer" className="bms-access-support-wrapper-inner">
                  <span>BMS Access Support</span>
                  <div className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></div>
                </a>
              </div>
            }

            { !isMobile &&
              <div className="contact-us-wrapper">
                <span>Contact Us</span>
                <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer" className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></a>
              </div>
            }

            { isMobile &&
              <div className="contact-us-wrapper">
                <a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer" className="contact-us-wrapper-inner">
                  <span>Contact Us</span>
                  <div className="pink-circle"><FontAwesomeIcon icon={ faPlus } /></div>
                </a>
              </div>
            }

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
          onHide={ _closeDialog }
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
                <p className="p-please-see">Please see U.S Full Prescribing Information, including <b>Boxed WARNINGS</b>, available at the link below.</p>
                <PinkLinkIconButton name="Visit AbecmaHCP.com" link="https://www.abecmahcp.com/" blank={ true } />
                <p className="click-a-button-below">Click a button below to learn more about ABECMA</p>
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
                <p className="p-please-see">Please see FULL PRESCRIBING INFORMATION, including <b>Boxed WARNINGS</b>, available in the link below</p>
                <PinkLinkIconButton name="BREYANZI Website" link="https://www.breyanzihcp.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="BREYANZI Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_breyanzi.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/breyanzi-product-brochure.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Patient Profiles" link={ process.env.PUBLIC_URL + "/pdf/breyanzi-patient-profiles.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Logistics and Sequencing" link={ process.env.PUBLIC_URL + "/pdf/breyanzi-logistics-and-sequencing.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Clinician Guide" link={ process.env.PUBLIC_URL + "/pdf/breyanzi-clinician-guide.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
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
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/reblozyl-details-page.png" } alt="Reblozyl" />
                <hr />
                <p className="p-please-see">Please see U.S. Full Prescribing information for REBLOZYL<sup>&reg;</sup> (luspatercept-aamt) available in the link below.</p>
                <PinkLinkIconButton name="REBLOZYL Website" link="https://www.reblozylpro.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="REBLOZYL Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/2007-US-2100054_cellus_mds_hcp_bro_update.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/2007-US-2100003 Beta Thal Shortened Brochure_DIGITAL.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Dosing & Reconstitution Guide" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0290%20Dual%20Indication%20Dosing%20Guide%20%28Downloadable%29_Clickable_7.16.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Patient Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0303%20First%20Indication_BT_Patient%20Brochure%20V2%20Digital.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Patient Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/ash/reblozyl/US-RBZ-20-0232%2BMDS%2BPatient%2BBrochure%2B%28Digital%29_FinalClickable6.26.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL MOA Video" onClick={ () => setModalName("reblozyl-moa-video") } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL First Indication Dosing & Administration Video" onClick={ () => setModalName("reblozyl-first-indication-bosing-and-administration-video") } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Second Indication Dosing & Administration Video" onClick={ () => setModalName("reblozyl-second-indication-bosing-and-administration-video") } className="details-link" />
              </div>
            }

            { modalName === "reblozyl-moa-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://virtual-video-resources.s3.amazonaws.com/bms/videos/US-RBZ-20-0443+MOA_HCP+GPO+Video+Asset+V2.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (lupatercept-aamt).</a>
              </div>
            }

            { modalName === "reblozyl-first-indication-bosing-and-administration-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://virtual-video-resources.s3.amazonaws.com/bms/videos/US-RBZ-20-0256_First+Indication_BT+Dosing+Video_Edit11.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (lupatercept-aamt).</a>
              </div>
            }

            { modalName === "reblozyl-second-indication-bosing-and-administration-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://virtual-video-resources.s3.amazonaws.com/bms/videos/US-RBZ-20-0030_Second+Indication_+MDS+Dosing+Video_Edit11.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (lupatercept-aamt).</a>
              </div>
            }

            { modalName === "onureg-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_onureg.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/onureg.png" } alt="Reblozyl" /></a>
                <Link to="#" onClick={ () => setModalName("onureg-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "onureg-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/onureg-details-page.png" } alt="Onureg" />
                <hr style={{ marginTop: "0" }} />
                <p className="p-please-see">Please see full Prescribing Information for ONUREG<sup>&reg;</sup> (azacitidine) tablets available in the link below</p>
                <PinkLinkIconButton name="ONUREG Website" link="https://www.onuregpro.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name={[ <span key="ONUREG">ONUREG</span>, <sup key="reg">&reg;</sup>, <span style={{ margin: "0.25rem" }} key="Full Prescribing Information">Full Prescribing Information</span> ]} link="https://packageinserts.bms.com/pi/pi_onureg.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="ONUREG">ONUREG</span>, <sup key="reg">&reg;</sup>, <span style={{ margin: "0.25rem" }} key="Dosing Guide">Dosing Guide</span> ]}  link={ process.env.PUBLIC_URL + "/pdf/US-ONU-21-0026 ONUREG Dosing Guide (Digital) - Update v3_AFD.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="How to order ONUREG">How to order ONUREG</span>, <sup key="reg">&reg;</sup> ]} link={ process.env.PUBLIC_URL + "/pdf/US-ONU-21-0066_BMS ONUREG How to Order and Access_DIGITAL_FINAL Approved.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
              </div>
            }


            { modalName === "revlimid-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_revlimid.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/revlimid.png" } alt="Revlimid" /></a>
                <Link to="#" onClick={ () => setModalName("revlimid-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "revlimid-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/revlimid-details-page.png" } alt="Revlimid" />
                <hr />
                <p className="p-please-see" style={{ maxWidth: "550px" }}>Please see Full Prescribing Information for REVLIMID<sup>&reg;</sup> (lenalidomide) including Boxed WARNINGS for Embryo-Fetal Toxicity, Hematologic Toxicity, and Venous and Arterial Thromboembolism, available in the link below. REVLIMID is only available through REVLIMID REMS<sup>&reg;</sup> at <a href="https://www.celgeneriskmanagement.com/" target="_blank" rel="noreferrer">www.CelgeneRiskManagement.com</a></p>
                <PinkLinkIconButton name="REVLIMID Website" link="https://revlimidhcp.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="REVLIMID Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_revlimid.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REVLIMID Product Brochure #1" link={ process.env.PUBLIC_URL + "/pdf/US-REV-20-0635NDMM Leave Behind Digital Version-v27.1_.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REVLIMID Product Brochure #2" link={ process.env.PUBLIC_URL + "/pdf/US-REV-21-0021 REVLIMID Maintenance Leave Behind Digital Update_v27.1.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="New Patient App for Completing REMS Patient Surveys" link="https://gc-static-content.s3.amazonaws.com/bms/ash/revlimid/US-REMS-GEN200027%20REV%20printer%20PDF%2010.15%20AA.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "pomalyst-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_pomalyst.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/pomalyst.png" } alt="Pomalyst" /></a>
                <Link to="#" onClick={ () => setModalName("pomalyst-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "pomalyst-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/pomalyst-details-page.png" } alt="Pomalyst" />
                <hr />
                <p className="p-please-see" style={{ maxWidth: "560px" }}>Please see full Prescribing Information for POMALYST<sup>&reg;</sup>, including Boxed WARNINGS for Embryo-Fetal Toxicity, and Venous and Arterial Thromboembolism, available in the link below. POMALYST is only available through POMALYST REMS<sup>&reg;</sup> at <a href="https://www.celgeneriskmanagement.com/" target="_blank" rel="noreferrer">www.CelgeneRiskManagement.com</a></p>
                <PinkLinkIconButton name="POMALYST Website" link="https://pomalysthcp.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="POMALYST Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_pomalyst.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="POMALYST Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/US-POM-20-0434 POMALYST Leave-Behind-Digital (Dara Update).pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="POMALYST Dosing Guide" link="https://gc-static-content.s3.amazonaws.com/bms/ash/pomylast/US-POM-20-0172.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="New Patient App for Completing REMS Patient Surveys" link="https://gc-static-content.s3.amazonaws.com/bms/ash/revlimid/US-REMS-GEN200027%20REV%20printer%20PDF%2010.15%20AA.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "empliciti-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_empliciti.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/empliciti.png" } alt="Empliciti" /></a>
                <Link to="#" onClick={ () => setModalName("empliciti-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "empliciti-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/empliciti-details-page.png" } alt="Empliciti" />
                <hr />
                <p className="p-please-see">Please see Full Prescribing Information for EMPLICITI<sup>&reg;</sup> (elotuzumab) available in the link below.</p>
                <PinkLinkIconButton name="EMPLICITI Website" link="https://www.emplicitihcp.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="EMPLICITI Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_empliciti.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="EMPLICITI Dosing Guide" link={ process.env.PUBLIC_URL + "/pdf/US-EMP-21-0012 EMPLICITI HCP Dosing Guide Update.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
              </div>
            }

            { modalName === "r2-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_revlimid.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/r2.png" } alt="R2" /></a>
                <Link to="#" onClick={ () => setModalName("r2-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "r2-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/r2-details-page.png" } alt="R2" style={{ width: 160 }}/>
                <hr />
                <p className="p-please-see" style={{ maxWidth: "590px" }}>Please see Full Prescribing Information for REVLIMID<sup>&reg;</sup> (lenalidomide) including Boxed WARNINGS for Embryo-Fetal Toxicity, Hematologic Toxicity, and Venous and Arterial Thromboembolism, available in the link below. REVLIMID is only available through REVLIMID REMS<sup>&reg;</sup> at <a href="https://www.celgeneriskmanagement.com/" target="_blank" rel="noreferrer">www.CelgeneRiskManagement.com.</a> Please see the rituximab full Prescribing Information for Important Safety Information at <a href="https://www.rituxan.com/" target="_blank" rel="noreferrer">www.rituxan.com</a>.</p>
                <PinkLinkIconButton name="REVLIMID Website" link="https://revlimidhcp.com/rrfl/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="REVLIMID Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_revlimid.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Product Brochure" style={{ marginLeft: "0.25rem" }}>Product Brochure</span> ]} link="https://gc-static-content.s3.amazonaws.com/bms/ash/r2/US-REV-20-0677%20R%5E2%20Efficacy%20Leave%20Behind%20-%20Phase%202%20Messaging%20Update.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Virtual Assistant" style={{ marginLeft: "0.25rem" }}>Virtual Assistant</span> ]} link="https://r2virtualrep.com/sign-in" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Combined KOL Video" style={{ marginLeft: "0.25rem" }}>Combined KOL Video</span> ]} onClick={ () => setModalName("r2-video") } blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Dose Modification Brochure" style={{ marginLeft: "0.25rem" }}>Dose Modification Brochure</span> ]} link="https://media.revlimidhcp.com/wp-content/uploads/2020/12/R%5e2-Dose-Modification-Brochure_Digital_US-REV-20-0337-4.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "r2-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://virtual-video-resources.s3.amazonaws.com/bms/videos/US-REV-21-0088_R2ComboKOLVideo+(1)_1.mp4" />
                <p>Please see Full Prescribing Information for REVLIMID<sup>&reg;</sup> (lenalidomide) including Boxed WARNINGS for Embryo-Fetal Toxicity, Hematologic Toxicity, and Venous and Arterial Thromboembolism, available in the link below. REVLIMID is only available through REVLIMID REMS<sup>&reg;</sup> at <a href="https://www.celgeneriskmanagement.com/" target="_blank" rel="noreferrer">www.CelgeneRiskManagement.com.</a><br /> Please see the rituximab full Prescribing Information for Important Safety Information at <a href="https://www.rituxan.com/" target="_blank" rel="noreferrer">www.rituxan.com</a>.</p>
              </div>
            }

            { modalName === "inrebic-general" &&
              <div className="general-section-wrapper">
                <a href="https://media2.celgene.com/content/uploads/inrebic-pi.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/inrebic.png" } alt="Inrebic" /></a>
                <Link to="#" onClick={ () => setModalName("inrebic-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "inrebic-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/inrebic-details-page.png" } alt="Inrebic" style={{ maxWidth: "250px" }} />
                <hr />
                <p className="p-please-see">Please see Full Prescribing Information for INREBIC<sup>&reg;</sup> (fedratinib), including Boxed WARNING for Encephalopathy, including Wernicke's, available in the link below.</p>
                <PinkLinkIconButton name="INREBIC Website" link="https://www.inrebicpro.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="INREBIC Full Prescribing Information" link="https://media2.celgene.com/content/uploads/inrebic-pi.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="INREBIC Product Brochure" link={ process.env.PUBLIC_URL + "/pdf/2010-US-2100018_INREBIC_Branded Leave Behind_Digital V13.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
                <GrayDownloadIconButton name="INREBIC Dosing Guide" link="https://gc-static-content.s3.amazonaws.com/bms/ash/inrebic/Virtual%20PDF
%20Dosing%20Guide%20%20US-INR-20-0156.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "sprycel-general" &&
              <div className="general-section-wrapper">
                <a href="https://packageinserts.bms.com/pi/pi_sprycel.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/sprycel.png" } alt="Sprycel" /></a>
                <Link to="#" onClick={ () => setModalName("sprycel-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "sprycel-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/sprycel-details-page.png" } alt="Sprycel" style={{ maxWidth: "250px" }} />
                <hr />
                <p className="p-please-see" style={{ maxWidth: "400px" }}>Please see full prescribing information for SPRYCEL<sup>&reg;</sup> (dasatinib) available in the link below.</p>
                <PinkLinkIconButton name="SPRYCEL Website" link="https://www.sprycel-hcp.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name="SPRYCEL Full Prescribing Information" link="https://packageinserts.bms.com/pi/pi_sprycel.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="SPRYCEL Product Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/ash/sprycel/729US1903380-05-01_SPRY_CORE_IVA_LB_IPDF_08_20_172018361_vfinal.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "idhifa-general" &&
              <div className="general-section-wrapper">
                <a href="https://media2.celgene.com/content/uploads/idhifa-pi.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/idhifa.png" } alt="Idhifa" /></a>
                <Link to="#" onClick={ () => setModalName("idhifa-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "idhifa-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/idhifa-details-page.png" } alt="Idhifa" style={{ maxWidth: "250px" }} />
                <hr />
                <p className="p-please-see" style={{ maxWidth: "510px" }}>Please see Important Safety Information and full Prescribing Information, including Boxed WARNING available in the link below.</p>
                <PinkLinkIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Website">Website</span> ]} link="https://www.idhifapro.com/2018-US-2000008" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Full Prescribing Information">Full Prescribing Information</span> ]} link="https://media2.celgene.com/content/uploads/idhifa-pi.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Product Brochure">Product Brochure</span> ]} link={ process.env.PUBLIC_URL + "/pdf/IDHIFA Trifold (PDF) - 2020 Label Update_FINAL.pdf?#view=Fit&toolbar=0" } blank={ true } className="details-link" />
              </div>
            }

          </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default React.memo(OurMidicines);
