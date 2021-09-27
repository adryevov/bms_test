import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import GrayDownloadIconButton from "../UI/GrayDownloadIconButton";
import PinkLinkIconButton from "../UI/PinkLinkIconButton";
import VideoPlayer from "../UI/VideoPlayer";
import { useIsMobile } from "../../utils/hooks";
import OurMedicinesMobile from "./OurMedicinesMobile";

const OurMedicines = () =>
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
    else if(modalName === "abecma-moa-video")
    {
      setModalName("abecma-detailed");
    }
    else
    {
      setModalName("");
    }
  }, [ modalName ]);

  if (isMobile) {
    return <OurMedicinesMobile />;
  }

  return (
    <div className={ "hematology-our-medicines-wrapper" + (!!modalName ? " blurry-background" : "") }  style={{ backgroundImage: "url(/img/hematology/background-hematology-medicines-new.png)" }}>
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
        <p className="copyright-info">&copy;2021 Bristol-Myers Squibb. All rights reserved. 466-US-2100111 08/21</p>

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
                <a href="https://packageinserts.bms.com/pi/pi_abecma.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/abecma-new.png" } alt="Abecma" /></a>
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
                <GrayDownloadIconButton name="ABECMA Prescribing Information" link="https://packageinserts.bms.com/pi/pi_abecma.pdf#view=Fit&toolbar=0" blank={ true }  className="details-link"/>
                <GrayDownloadIconButton name="ABECMA HCP Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/01%20Abecma/US-IDE-20-0165.pdf#view=Fit&toolbar=0" blank={ true }  className="details-link"/>
                <GrayDownloadIconButton name="ABECMA Patient Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/01%20Abecma/US-IDE-21-0051.pdf#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="ABECMA Clinical Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/01%20Abecma/2012-US-2100041_US-IDE-21-0208.pdf#view=Fit&toolbar=0" blank={ true }  className="details-link"/>
                <GrayDownloadIconButton name="ABECMA MOA Video" onClick={ () => setModalName("abecma-moa-video") }  className="details-link"/>
              </div>
            }
            { modalName === "abecma-moa-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/01%20Abecma/%20US-IDE-20-0041.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_abecma.pdf#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for ABECMA.</a>
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
                <GrayDownloadIconButton name="BREYANZI Product Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/02%20BREYANZI%20Product%20Brochure%20US-LIS-21-0042.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Patient Profiles" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/03%20BREYANZI%20Patient%20Profiles%20US-LIS-20-0126.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Logistics and Sequencing" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/04%20BREYANZI%20Logistics%20and%20Sequencing%20US-LIS-20-0128.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="BREYANZI Clinician Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/02%20Breyanzi/05%20BREYANZI%20Clinician%20Guide%20US-LIS-20-0161.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
                <GrayDownloadIconButton name="REBLOZYL Product Brochure #2" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/02%20REBLOZYL%20Product%20Brochure1_2007-US-2100054.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Product Brochure #1" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/03%20REBLOZYL%20Product%20Brochure%202_2007-US-2100003.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Dosing & Reconstitution Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/04%20REBLOZYL%20Dosing%20%26%20Reconstitution%20Guide%20US-RBZ-20-0290_2007-US-2100264.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Patient Brochure #1" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/05%20REBLOZYL%20Patient%20Brochure1_US-RBZ-20-0303_2001-US-2100206.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="RREBLOZYL Patient Brochure #2" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/06%20REBLOZYL%20Patient%20Brochure2_US-RBZ-19-0021_2007-US-2100263.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL MOA Video" onClick={ () => setModalName("reblozyl-moa-video") } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Dosing & Administration Video #1" onClick={ () => setModalName("reblozyl-first-indication-bosing-and-administration-video") } className="details-link" />
                <GrayDownloadIconButton name="REBLOZYL Dosing & Administration Video #2" onClick={ () => setModalName("reblozyl-second-indication-bosing-and-administration-video") } className="details-link" />
              </div>
            }

            { modalName === "reblozyl-moa-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/07%20REBLOZYL%20MOA%20Video%20US-RBZ-20-0443.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (luspatercept-aamt).</a>
              </div>
            }

            { modalName === "reblozyl-first-indication-bosing-and-administration-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/08%20REBLOZYL%20Dosing%20%26%20Administration%20Video1_US-RBZ-20-0256_2007-US-2100241.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (luspatercept-aamt).</a>
              </div>
            }

            { modalName === "reblozyl-second-indication-bosing-and-administration-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/03%20Reblozyl/09%20REBLOZYL%20Dosing%20%26%20Administration%20Video2_US-RBZ-20-0030_2007-US-2100234.mp4" />
                <a href="https://packageinserts.bms.com/pi/pi_reblozyl.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer" className="video-link-bottom">Please see Full Prescribing Information for REBLOZYL&reg; (luspatercept-aamt).</a>
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
                <GrayDownloadIconButton name={[ <span key="ONUREG">ONUREG</span>, <sup key="reg">&reg;</sup>, <span style={{ margin: "0.25rem" }} key="Dosing Guide">Dosing Guide</span> ]}  link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/04%20Onureg/02%20ONUREG%20Dosing%20Guide%20US-ONU-21-0026.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="How to order ONUREG">How to order ONUREG</span>, <sup key="reg">&reg;</sup> ]} link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/04%20Onureg/03%20How%20to%20order%20ONUREG%20US-ONU-21-0066.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
                <GrayDownloadIconButton name="REVLIMID Product Brochure #1" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/02%20REVLIMID%20Product%20Brochure1_US-REV-20-0635.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="REVLIMID Product Brochure #2" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/03%20Revlimid%20Product%20Brochure%202_US-REV-21-0021.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="New Patient App for Completing REMS Patient Surveys" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/05%20Revlimid/04%20New%20Patient%20App%20for%20Completing%20REMS%20Patient%20Surveys%20US-REMS-GEN200027.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
                <GrayDownloadIconButton name="POMALYST Product Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/POMALYST%202204-US-2100092.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="POMALYST Dosing Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/POMALYST%20Dosing%20Guide2204-US-2100087.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="New Patient App for Completing REMS Patient Surveys" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/06%20Pomalyst/04%20New%20Patient%20App%20for%20Completing%20REMS%20Patient%20Surveys%20US-REMS-GEN200027.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
                <GrayDownloadIconButton name="EMPLICITI Dosing Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/07%20Empliciti/02%20EMPLICITI-Dosing-Guide-US-EMP-21-0012.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Product Brochure" style={{ marginLeft: "0.25rem" }}>Product Brochure</span> ]} link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/02%20R2%20Product%20Brochure%20US-REV-20-0677.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Virtual Assistant" style={{ marginLeft: "0.25rem" }}>Virtual Assistant</span> ]} link="https://r2virtualrep.com" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Combined KOL Video" style={{ marginLeft: "0.25rem" }}>Combined KOL Video</span> ]} onClick={ () => setModalName("r2-video") } blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="R">R</span>, <sup key="sup">2</sup>, <span key="Dose Modification Brochure" style={{ marginLeft: "0.25rem" }}>Dose Modification Brochure</span> ]} link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/05%20R2%20Dose%20Modification%20Brochure%20US-REV-20-0337.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

            { modalName === "r2-video" &&
              <div className="video-section-wrapper">
                <VideoPlayer src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/08%20R2/04%20R2%20Combined%20KOL%20Video%20US-REV-21-0088.mp4" />
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
                <GrayDownloadIconButton name="INREBIC Product Brochure" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/09%20Inrebic/02%20INREBIC%20Product%20Brochure%202010-US-2100018.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name="INREBIC Dosing Guide" link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/09%20Inrebic/03%20INREBIC%20Dosing%20Guide%20US-INR-20-0156.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
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
              </div>
            }

            { modalName === "idhifa-general" &&
              <div className="general-section-wrapper">
                <a href="https://media2.celgene.com/content/uploads/idhifa-pi.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/11%20Idhifa/Idhifa%20US-IDH-21-0011.png" alt="Idhifa" /></a>
                <Link to="#" onClick={ () => setModalName("idhifa-detailed") } className="button-pink">Learn More</Link>
              </div>
            }

            { modalName === "idhifa-detailed" &&
              <div className="detailed-section-wrapper">
                <img src={ process.env.PUBLIC_URL + "/img/hematology/our-medicines/idhifa-details-page.png" } alt="Idhifa" style={{ maxWidth: "250px" }} />
                <hr />
                <p className="p-please-see" style={{ maxWidth: "510px" }}>Please see Important Safety Information and full Prescribing Information, including Boxed WARNING available in the link below.</p>
                <PinkLinkIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Website">Website</span> ]} link="https://www.idhifapro.com/" blank={ true } />
                <p className="click-a-button-below">Explore Additional Information:</p>
                <GrayDownloadIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Full Prescribing Information">Full Prescribing Information</span> ]} link="https://media2.celgene.com/content/uploads/idhifa-pi.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
                <GrayDownloadIconButton name={[ <span key="IDHIFA">IDHIFA</span>, <sup key="reg">&reg;</sup>, <span style={{ marginLeft: "0.25rem" }} key="Product Brochure">Product Brochure</span> ]} link="https://gc-static-content.s3.amazonaws.com/bms/1839_Q3/11%20Idhifa/02%20IDHIFA%20Product%20Brochure%202018-US-2000011.pdf?#view=Fit&toolbar=0" blank={ true } className="details-link" />
              </div>
            }

          </Modal.Body>
        </Modal>
      }
    </div>
  );
};

export default React.memo(OurMedicines);
