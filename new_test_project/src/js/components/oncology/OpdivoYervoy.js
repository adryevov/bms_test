import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
import { useIsMobile } from "../../utils/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ISIPopup from "./ISIPopup";
import IndicationsPopup from "./IndicationsPopup";

const OpdivoYervoy = () =>
{
  const isMobile = useIsMobile();
  const [ isPopupSticky, setIsPopupSticky ] = useState(false);

  useEffect(() =>
  {
    if ('scrollRestoration' in window.history)
    {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const listenScrollEvent = useCallback(() =>
  {
    const sectionBottomOffset = document.getElementById("opdivo-banner-section-bottom").offsetTop + document.getElementById("opdivo-banner-section-bottom").offsetHeight;
    const windowBottomOffset = window.pageYOffset + window.innerHeight;

    if (windowBottomOffset >= sectionBottomOffset && !isPopupSticky)
    {
      setIsPopupSticky(true);
    }
    else if (windowBottomOffset < (sectionBottomOffset + (window.innerHeight * (isMobile ? 0.3 : 0.2))) && isPopupSticky)
    {
      setIsPopupSticky(false);
    }
  }, [ isPopupSticky, isMobile ]);

  useEffect(() =>
  {
    window.addEventListener('scroll', listenScrollEvent);
    window.addEventListener('resize', listenScrollEvent);

    return () =>
    {
      window.removeEventListener('scroll', listenScrollEvent);
      window.removeEventListener('resize', listenScrollEvent);
    };
  }, [ listenScrollEvent ]);

  return (
    <Fragment>
      <Header />

      { isMobile && <IndicationsPopup /> }

      <div className="opdivo-yervoy-banner-wrapper" style={{ backgroundImage: "url(/img/banners/banner-opdivo-yervoy" + (isMobile ? "-mobile" : "") + ".png)" }}>
        { !isMobile && <Link to="/oncology/our-medicines" className="back-link">&lt; Back</Link> }

        <Container>
          <p className="opdivo-banner-p1">Explore</p>
          <p className="opdivo-banner-p2">The potential of</p>
          <a href="https://www.opdivocombotherapy.com/" target="_blank" rel="noreferrer" className="button-orange">OPDIVO + YERVOY Website <img src={ process.env.PUBLIC_URL + "/img/icons/popout.svg" } alt="Popout" /></a>
        </Container>
      </div>

      <section className="opdivo-top">
        <Container>
          <Row>
            <Col md={4} className="product-information-wrapper">
              <div className="product-information-wrapper-inner">
                <h2>Product Information</h2>

                <ul>
                  <li>U.S. Full Prescribing Information for OPDIVO <a href="https://packageinserts.bms.com/pi/pi_opdivo.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                  <li>U.S. Full Prescribing Information for YERVOY <a href="https://packageinserts.bms.com/pi/pi_yervoy.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                  <li>Medication Guide for OPDIVO <a href="https://packageinserts.bms.com/medguide/medguide_opdivo.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                  <li>Medication Guide for YERVOY <a href="https://packageinserts.bms.com/medguide/medguide_yervoy.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                </ul>
              </div>
            </Col>

            <Col md={8} className="indications">
              <h2>Indications</h2>

              <div className="indication-box">
                <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/indication-1.svg" } alt="Indication" />
                <p>OPDIVO + YERVOY-based combinations for certain patients with first-line metastatic non-small cell lung cancer</p>
                <a href="https://www.opdivoyervoymnsclc.com/" target="_blank" rel="noreferrer" className="learn-more">Learn More <FontAwesomeIcon icon={ faChevronRight } /></a>
              </div>

              <div className="indication-box">
                <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/indication-2.svg" } alt="Indication" />
                <p>First-line treatment of intermediate or poor risk<br />advanced renal cell carcinoma</p>
                <a href="https://www.opdivoclinicaldata.com/advanced-renal-cell-carcinoma" target="_blank" rel="noreferrer" className="learn-more">Learn More <FontAwesomeIcon icon={ faChevronRight } /></a>
              </div>

              <div className="indication-box">
                <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/indication-3.svg" } alt="Indication" />
                <p>Unresectable or metastatic melanoma</p>
                <Link to={ process.env.PUBLIC_URL + "/pdf/7356-us-2100450-Melanoma-in-the-adjuvant-or-metastatic-setting.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="learn-more">Learn More <FontAwesomeIcon icon={ faChevronRight } /></Link>
              </div>

              <div className="indication-box">
                <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/indication-4.svg" } alt="Indication" />
                <p>Unresectable malignant pleural mesothelioma</p>
                <a href="https://www.opdivocombomnsclc-mpm.com/" target="_blank" rel="noreferrer" className="learn-more">Learn More <FontAwesomeIcon icon={ faChevronRight } /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="opdivo-explore-section">
        <Container>
          <div className="divider-top"></div>
          <h2>Explore OPDIVO + YERVOY { isMobile && <Fragment><br /><span>data</span></Fragment> } with an interactive activity!</h2>

          <div className="explore-boxes-wrapper">
            <div className="explore-box">
              <div className="explore-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/explore-box-camera" + (isMobile ? "-mobile" : "") + ".png)" }}>
                <div className="explore-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/popout.svg" } alt="Popout" /> <span>Interactive</span></div>
              </div>
              <div className="explore-box-info">
                <h3>OPDIVO + YERVOY { isMobile && <br /> }Data Discovery</h3>
                <div className="link-wrapper">
                  <a href="/data-discovery" target="_blank" rel="noreferrer">Start Now <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></a>
                </div>
              </div>
            </div>

            <div className="explore-box">
              <div className="explore-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/explore-box-brick-builder" + (isMobile ? "-mobile" : "") + ".png)" }}>
                <div className="explore-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/popout.svg" } alt="Popout" /> <span>Interactive</span></div>
              </div>
              <div className="explore-box-info">
                <h3>OPDIVO + YERVOY { isMobile && <br /> } Brick Builder</h3>
                <div className="link-wrapper">
                  <a href="/brick-builder" target="_blank" rel="noreferrer">Play Now <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="opdivo-product-resources-section">
        <Container>
          <h2>Product Resources</h2>

          <div className="product-resource-boxes-wrapper">
            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-1.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Metastatic Non-Small Cell { !isMobile && <br /> } Lung Cancer (NSCLC) – { !isMobile && <br /> }Treatment Options for{ !isMobile && <br /> } Eligible Patients</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356-US-2100643_Met Non-Small Cell Lung Cancer - Treatment Options.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-2.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Advanced Renal Cell Carcinoma (aRCC) – Treatment Option{ !isMobile && <br /> } for Select Patients</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356us2004106-03-arcc-treatment-option-for-select-patients.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-3.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Melanoma in the Metastatic Setting – Treatment Options for Patients</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356-US-2100693_Melanoma in the Metastatic Setting.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-4.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Metastatic Melanoma Clinical{ !isMobile && <br /> } Trial Follow-up Data</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356-US-2100256_Metastatic_Melanoma_Clinical_Trial_Follow-up_Data.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-5.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Unresectable Malignant{ !isMobile && <br /> } Pleural Mesothelioma –{ !isMobile && <br /> } Treatment Option for Patients</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356-us-2100041-unresectable-malignant-pleural-mesothelioma.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-yervoy/product-resource-6.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Learn About Dosing for an { !isMobile && <br /> }I-O Treatment Option</h3>
                <div className="link-wrapper">
                  <a href="https://www.opdivohcp.com/assets/commercial/us/opdivo-hcp-pan-tumor/en/pdf/dosing-grid.pdf?#view=Fit&toolbar=0" target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={ "opdivo-banner-section-bottom" + (isPopupSticky ? " no-padding-bottom" : "") } id="opdivo-banner-section-bottom">
        <Container>
          <Col md={6}>
            <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-yervoy" + (isMobile ? "-mobile" : "") + ".svg" } alt="Opdivo Yervot" />
          </Col>

          <Col md={6} className="paragraph-wrapper">
            <p>For questions about BMS medicines during this time, please call 1-800-721-8909.</p>
          </Col>
        </Container>
      </section>

      <ISIPopup isPopupSticky={ isPopupSticky }>
        <div className="isi-popup-top-wrapper">
          <div className="important-safety-information">
            <h2>IMPORTANT SAFETY INFORMATION</h2>
            <h3>Severe and Fatal Immune-Mediated Adverse Reactions</h3>
            <p>Immune-mediated adverse reactions listed herein may not include all possible severe and fatal immune-mediated adverse reactions.</p>
            <p>Immune-mediated adverse reactions, which may be severe or fatal, can occur in any organ system or tissue. While immune-mediated adverse reactions usually manifest during treatment, they can also occur after discontinuation of OPDIVO or YERVOY. Early identification and management are essential to ensure safe use of OPDIVO and YERVOY. Monitor for signs and symptoms that may be clinical manifestations of underlying immune-mediated adverse reactions. Evaluate clinical chemistries including liver enzymes, creatinine, adrenocorticotropic hormone (ACTH) level, and thyroid function at baseline and periodically during treatment with OPDIVO and before each dose of YERVOY. In cases of suspected immune-mediated adverse reactions, initiate appropriate workup to exclude alternative etiologies, including infection. Institute medical management promptly, including specialty consultation as appropriate.</p>
            <p style={{ marginBottom: "0" }}>Withhold or permanently discontinue OPDIVO and YERVOY depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information). In general, if OPDIVO or YERVOY interruption or discontinuation is required, administer systemic corticosteroid therapy (1 to 2 mg/kg/day prednisone or equivalent) until improvement to Grade 1 or { !isMobile && <br /> } less. Upon improvement to Grade 1 or less, initiate corticosteroid taper</p>
          </div>
          { !isMobile &&
            <div className="indications-wrapper">
              <h2>Indications</h2>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the treatment of patients with unresectable or metastatic melanoma.</p>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors express PD-L1 (≥1%) as determined by an FDA-approved test, with no EGFR or ALK genomic tumor aberrations.</p>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab) and 2 cycles of platinum-doublet chemotherapy, is indicated for the first-line treatment of adult patients with metastatic or recurrent non-small cell lung cancer (NSCLC), with no EGFR or ALK genomic tumor aberrations.</p>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of adult patients with unresectable malignant pleural mesothelioma (MPM).</p>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of patients with intermediate or poor risk advanced renal cell carcinoma (RCC).</p>
            </div>
          }
        </div>

        <p>and continue to taper over at least 1 month. Consider administration of other systemic immunosuppressants in patients whose immune-mediated adverse reactions are not controlled with corticosteroid therapy. Toxicity management guidelines for adverse reactions that do not necessarily require systemic steroids (e.g., endocrinopathies and dermatologic reactions) are discussed below.</p>

        <h4>Immune-Mediated Pneumonitis</h4>
        <p>OPDIVO and YERVOY can cause immune-mediated pneumonitis. The incidence of pneumonitis is higher in patients who have received prior thoracic radiation.  In patients receiving OPDIVO monotherapy, immune-mediated pneumonitis occurred in 3.1% (61/1994) of patients, including Grade 4 (&lt;0.1%), Grade 3 (0.9%), and Grade 2 (2.1%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, immune-mediated pneumonitis occurred in 3.9% (26/666) of patients, including Grade 3 (1.4%) and Grade 2 (2.6%). In NSCLC patients receiving OPDIVO 3 mg/kg every 2 weeks with YERVOY 1 mg/kg every 6 weeks, immune-mediated pneumonitis occurred in 9% (50/576) of patients, including Grade 4 (0.5%), Grade 3 (3.5%), and Grade 2 (4.0%). Four patients (0.7%) died due to pneumonitis.</p>

        <h4>Immune-Mediated Colitis</h4>
        <p>OPDIVO and YERVOY can cause immune-mediated colitis, which may be fatal. A common symptom included in the definition of colitis was diarrhea. Cytomegalovirus (CMV) infection/reactivation has been reported in patients with corticosteroid-refractory immune-mediated colitis. In cases of corticosteroid-refractory colitis, consider repeating infectious workup to exclude alternative etiologies.  In patients receiving OPDIVO monotherapy, immune-mediated colitis occurred in 2.9% (58/1994) of patients, including Grade 3 (1.7%) and Grade 2 (1%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, immune-mediated colitis occurred in 25% (115/456) of patients, including Grade 4 (0.4%), Grade 3 (14%) and Grade 2 (8%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, immune-mediated colitis occurred in 9% (60/666) of patients, including Grade 3 (4.4%) and Grade 2 (3.7%).</p>
        <p>In a separate Phase 3 trial of YERVOY 3 mg/kg monotherapy, immune-mediated colitis occurred in 12% (62/511) of patients, including Grade 3-5 (7%) and Grade 2 (5%).</p>

        <h4>Immune-Mediated Hepatitis and Hepatotoxicity</h4>
        <p>OPDIVO and YERVOY can cause immune-mediated hepatitis. In patients receiving OPDIVO monotherapy, immune-mediated hepatitis occurred in 1.8% (35/1994) of patients, including Grade 4 (0.2%), Grade 3 (1.3%), and Grade 2 (0.4%). In patients receiving OPDIVO 1 mg/ kg with YERVOY 3 mg/kg every 3 weeks, immune-mediated hepatitis occurred in 15% (70/456) of patients, including Grade 4 (2.4%), Grade 3 (11%), and Grade 2 (1.8%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, immune-mediated hepatitis occurred in 7% (48/666) of patients, including Grade 4 (1.2%), Grade 3 (4.9%), and Grade 2 (0.4%).</p>
        <p>In a separate Phase 3 trial of YERVOY 3 mg/kg monotherapy, immune-mediated hepatitis occurred in 4.1% (21/511) of patients, including Grade 3-5 (1.6%) and Grade 2 (2.5%).</p>

        <h4>Immune-Mediated Endocrinopathies</h4>
        <p>OPDIVO and YERVOY can cause primary or secondary adrenal insufficiency, immune-mediated hypophysitis, immune-mediated thyroid disorders, and Type 1 diabetes mellitus, which can present with diabetic ketoacidosis. Withhold OPDIVO and YERVOY depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information). For Grade 2 or higher adrenal insufficiency, initiate symptomatic treatment, including hormone replacement as clinically indicated. Hypophysitis can present with acute symptoms associated with mass effect such as headache, photophobia, or visual field defects. Hypophysitis can cause hypopituitarism; initiate hormone replacement as clinically indicated. Thyroiditis can present with or without endocrinopathy. Hypothyroidism can follow hyperthyroidism; initiate hormone replacement or medical management as clinically indicated. Monitor patients for hyperglycemia or other signs and symptoms of diabetes; initiate treatment with insulin as clinically indicated.</p>
        <p>In patients receiving OPDIVO monotherapy, adrenal insufficiency occurred in 1% (20/1994), including Grade 3 (0.4%) and Grade 2 (0.6%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, adrenal insufficiency occurred in 8% (35/456), including Grade 4 (0.2%), Grade 3 (2.4%), and Grade 2 (4.2%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, adrenal insufficiency occurred in 7% (48/666) of patients, including Grade 4 (0.3%), Grade 3 (2.5%), and Grade 2 (4.1%).</p>
        <p>In patients receiving OPDIVO monotherapy, hypophysitis occurred in 0.6% (12/1994) of patients, including Grade 3 (0.2%) and Grade 2 (0.3%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, hypophysitis occurred in 9% (42/456), including Grade 3 (2.4%) and Grade 2 (6%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, hypophysitis occurred in 4.4% (29/666) of patients, including Grade 4 (0.3%), Grade 3 (2.4%), and Grade 2 (0.9%).</p>
        <p>In patients receiving OPDIVO monotherapy, thyroiditis occurred in 0.6% (12/1994) of patients, including Grade 2 (0.2%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, thyroiditis occurred in 2.7% (22/666) of patients, including Grade 3 (4.5%) and Grade 2 (2.2%).</p>
        <p>In patients receiving OPDIVO monotherapy, hyperthyroidism occurred in 2.7% (54/1994) of patients, including Grade 3 (&lt;0.1%) and Grade 2 (1.2%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, hyperthyroidism occurred in 9% (42/456) of patients, including Grade 3 (0.9%) and Grade 2 (4.2%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, hyperthyroidism occurred in 12% (80/666) of patients, including Grade 3 (0.6%) and Grade 2 (4.5%).</p>
        <p>In patients receiving OPDIVO monotherapy, hypothyroidism occurred in 8% (163/1994) of patients, including Grade 3 (0.2%) and Grade 2 (4.8%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, hypothyroidism occurred in 20% (91/456) of patients, including Grade 3 (0.4%) and Grade 2 (11%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, hypothyroidism occurred in 18% (122/666) of patients, including Grade 3 (0.6%) and Grade 2 (11%).</p>
        <p>In patients receiving OPDIVO monotherapy, diabetes occurred in 0.9% (17/1994) of patients, including Grade 3 (0.4%) and Grade 2 (0.3%), and 2 cases of diabetic ketoacidosis. In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, diabetes occurred in 2.7% (15/666) of patients, including Grade 4 (0.6%), Grade 3 (0.3%), and Grade 2 (0.9%).</p>
        <p>In a separate Phase 3 trial of YERVOY 3 mg/kg monotherapy, Grade 2-5 immune-mediated endocrinopathies occurred in 4% (21/511) of patients. Severe to life-threatening (Grade 3-4) endocrinopathies occurred in 9 (1.8%) patients. All 9 patients had hypopituitarism, and some had additional concomitant endocrinopathies such as adrenal insufficiency, hypogonadism, and hypothyroidism. Six of the 9 patients were hospitalized for severe endocrinopathies. Moderate (Grade 2) endocrinopathy occurred in 12 patients (2.3%), including hypothyroidism, adrenal insufficiency, hypopituitarism, hyperthyroidism and Cushing’s syndrome.</p>

        <h4>Immune-Mediated Nephritis with Renal Dysfunction</h4>
        <p>OPDIVO and YERVOY can cause immune-mediated nephritis. In patients receiving OPDIVO monotherapy, immune-mediated nephritis and renal dysfunction occurred in 1.2% (23/1994) of patients, including Grade 4 (&lt;0.1%), Grade 3 (0.5%), and Grade 2 (0.6%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, immune-mediated nephritis with renal dysfunction occurred in 4.1% (27/666) of patients, including Grade 4 (0.6%), Grade 3 (1.1%), and Grade 2 (2.2%).</p>

        <h4>Immune-Mediated Dermatologic Adverse Reactions</h4>
        <p>OPDIVO can cause immune-mediated rash or dermatitis. Exfoliative dermatitis, including Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and drug rash with eosinophilia and systemic symptoms (DRESS) has occurred with PD-1/PD-L1 blocking antibodies. Topical emollients and/or topical corticosteroids may be adequate to treat mild to moderate nonexfoliative rashes.</p>
        <p>YERVOY can cause immune-mediated rash or dermatitis, including bullous and exfoliative dermatitis, SJS, TEN, and DRESS. Topical emollients and/or topical corticosteroids may be adequate to treat mild to moderate non-bullous/ exfoliative rashes.</p>
        <p>Withhold or permanently discontinue OPDIVO and YERVOY depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information).</p>
        <p>In patients receiving OPDIVO monotherapy, immune-mediated rash occurred in 9% (171/1994) of patients, including Grade 3 (1.1%) and Grade 2 (2.2%). In patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, immune-mediated rash occurred in 28% (127/456) of patients, including Grade 3 (4.8%) and Grade 2 (10%). In patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg every 3 weeks, immune-mediated rash occurred in 16% (108/666) of patients, including Grade 3 (3.5%) and Grade 2 (4.2%).</p>
        <p>In a separate Phase 3 trial of YERVOY 3 mg/kg monotherapy, immune-mediated rash occurred in 15% (76/511) of patients, including Grade 3-5 (2.5%) and Grade 2 (12%).</p>

        <h4>Other Immune-Mediated Adverse Reactions</h4>
        <p>The following clinically significant immune-mediated adverse reactions occurred at an incidence of &lt;1% (unless otherwise noted) in patients who received OPDIVO monotherapy or OPDIVO in combination with YERVOY or were reported with the use of other PD-1/PD-L1 blocking antibodies. Severe or fatal cases have been reported for some of these adverse reactions: cardiac/vascular: myocarditis, pericarditis, vasculitis; nervous system: meningitis, encephalitis, myelitis and demyelination, myasthenic syndrome/myasthenia gravis (including exacerbation), Guillain-Barré syndrome, nerve paresis, autoimmune neuropathy; ocular: uveitis, iritis, and other ocular inflammatory toxicities can occur; gastrointestinal: pancreatitis to include increases in serum amylase and lipase levels, gastritis, duodenitis; musculoskeletal and connective tissue: myositis/polymyositis, rhabdomyolysis, and associated sequelae including renal failure, arthritis, polymyalgia rheumatica; endocrine: hypoparathyroidism; other (hematologic/immune): hemolytic anemia, aplastic anemia, hemophagocytic lymphohistiocytosis (HLH), systemic inflammatory response syndrome, histiocytic necrotizing lymphadenitis (Kikuchi lymphadenitis), sarcoidosis, immune thrombocytopenic purpura, solid organ transplant rejection.</p>
        <p>In addition to the immune-mediated adverse reactions listed above, across clinical trials of YERVOY monotherapy or in combination with OPDIVO, the following clinically significant immune-mediated adverse reactions, some with fatal outcome, occurred in &lt;1% of patients unless otherwise specified: nervous system: autoimmune neuropathy (2%), myasthenic syndrome/myasthenia gravis, motor dysfunction; cardiovascular: angiopathy, temporal arteritis; ocular: blepharitis, episcleritis, orbital myositis, scleritis; gastrointestinal: pancreatitis (1.3%); other (hematologic/immune): conjunctivitis, cytopenias (2.5%), eosinophilia (2.1%), erythema multiforme, hypersensitivity vasculitis, neurosensory hypoacusis, psoriasis.</p>
        <p>Some ocular IMAR cases can be associated with retinal detachment. Various grades of visual impairment, including blindness, can occur. If uveitis occurs in combination with other immune-mediated adverse reactions, consider a Vogt-Koyanagi-Harada–like syndrome, which has been observed in patients receiving OPDIVO and YERVOY, as this may require treatment with systemic corticosteroids to reduce the risk of permanent vision loss.</p>

        <h3>Infusion-Related Reactions</h3>
        <p>OPDIVO and YERVOY can cause severe infusion-related reactions. Discontinue OPDIVO and YERVOY in patients with severe (Grade 3) or life-threatening (Grade 4) infusion-related reactions. Interrupt or slow the rate of infusion in patients with mild (Grade 1) or moderate (Grade 2) infusion-related reactions. In patients receiving OPDIVO monotherapy as a 60-minute infusion, infusion-related reactions occurred in 6.4% (127/1994) of patients. In a separate trial in which patients received OPDIVO monotherapy as a 60-minute infusion or a 30-minute infusion, infusion-related reactions occurred in 2.2% (8/368) and 2.7% (10/369) of patients, respectively. Additionally, 0.5% (2/368) and 1.4% (5/369) of patients, respectively, experienced adverse reactions within 48 hours of infusion that led to dose delay, permanent discontinuation or withholding of OPDIVO. In melanoma patients receiving OPDIVO 1 mg/kg with YERVOY 3 mg/kg every 3 weeks, infusion-related reactions occurred in 2.5% (10/407) of patients. In RCC patients receiving OPDIVO 3 mg/kg with YERVOY 1 mg/kg, infusion-related reactions occurred in 5.1% (28/547) of patients. In MPM patients receiving OPDIVO 3 mg/kg every 2 weeks with YERVOY 1 mg/kg every 6 weeks, infusion-related reactions occurred in 12% (37/300) of patients.</p>
        <p>In separate Phase 3 trials of YERVOY 3 mg/kg and 10 mg/kg monotherapy, infusion-related reactions occurred in 2.9% (28/982) of patients.</p>

        <h3>Complications of Allogeneic Hematopoietic Stem Cell Transplantation</h3>
        <p>Fatal and other serious complications can occur in patients who receive allogeneic hematopoietic stem cell transplantation (HSCT) before or after being treated with OPDIVO or YERVOY. Transplant-related complications include hyperacute graft-versus-host-disease (GVHD), acute GVHD, chronic GVHD, hepatic veno-occlusive disease (VOD) after reduced intensity conditioning, and steroid-requiring febrile syndrome (without an identified infectious cause). These complications may occur despite intervening therapy between OPDIVO or YERVOY and allogeneic HSCT.</p>
        <p>Follow patients closely for evidence of transplant-related complications and intervene promptly. Consider the benefit versus risks of treatment with OPDIVO and YERVOY prior to or after an allogeneic HSCT.</p>

        <h3>Embryo-Fetal Toxicity</h3>
        <p>Based on its mechanism of action and findings from animal studies, OPDIVO and YERVOY can cause fetal harm when administered to a pregnant woman. The effects of YERVOY are likely to be greater during the second and third trimesters of pregnancy. Advise pregnant women of the potential risk to a fetus. Advise females of reproductive potential to use effective contraception during treatment with OPDIVO and YERVOY and for at least 5 months after the last dose.</p>

        <h3>Increased Mortality in Patients with Multiple Myeloma when OPDIVO is Added to a Thalidomide Analogue and Dexamethasone</h3>
        <p>In randomized clinical trials in patients with multiple myeloma, the addition of OPDIVO to a thalidomide analogue plus dexamethasone resulted in increased mortality. Treatment of patients with multiple myeloma with a PD-1 or PD-L1 blocking antibody in combination with a thalidomide analogue plus dexamethasone is not recommended outside of controlled clinical trials.</p>

        <h3>Lactation</h3>
        <p>There are no data on the presence of OPDIVO or YERVOY in human milk, the effects on the breastfed child, or the effects on milk production. Because of the potential for serious adverse reactions in breastfed children, advise women not to breastfeed during treatment and for 5 months after the last dose.</p>

        <h3>Serious Adverse Reactions</h3>
        <p>In Checkmate 067, serious adverse reactions (74% and 44%), adverse reactions leading to permanent discontinuation (47% and 18%) or to dosing delays (58% and 36%), and Grade 3 or 4 adverse reactions (72% and 51%) all occurred more frequently in the OPDIVO plus YERVOY arm (n=313) relative to the OPDIVO arm     (n=313). The most frequent (≥10%) serious adverse reactions in the OPDIVO plus YERVOY arm and the OPDIVO arm, respectively, were diarrhea (13% and 2.2%), colitis (10% and 1.9%), and pyrexia (10% and 1.0%). In Checkmate 227, serious adverse reactions occurred in 58% of patients (n=576). The most frequent (≥2%) serious adverse reactions were pneumonia, diarrhea/colitis, pneumonitis, hepatitis, pulmonary embolism, adrenal insufficiency, and hypophysitis. Fatal adverse reactions occurred in 1.7% of patients; these included events of pneumonitis (4 patients), myocarditis, acute kidney injury, shock, hyperglycemia, multi-system organ failure, and renal failure. In Checkmate 9LA, serious adverse reactions occurred in 57% of patients (n=358). The most frequent (>2%) serious adverse reactions were pneumonia, diarrhea, febrile neutropenia, anemia, acute kidney injury, musculoskeletal pain, dyspnea, pneumonitis, and respiratory failure. Fatal adverse reactions occurred in 7 (2%) patients, and included hepatic toxicity, acute renal failure, sepsis, pneumonitis, diarrhea with hypokalemia, and massive hemoptysis in the setting of thrombocytopenia. In Checkmate 743, serious adverse reactions occurred in 54% of patients receiving OPDIVO plus YERVOY. The most frequent serious adverse reactions reported in ≥2% of patients were pneumonia, pyrexia, diarrhea, pneumonitis, pleural effusion, dyspnea, acute kidney injury, infusion-related reaction, musculoskeletal pain, and pulmonary embolism. Fatal adverse reactions occurred in 4 (1.3%) patients and included pneumonitis, acute heart failure, sepsis, and encephalitis. In Checkmate 214, serious adverse reactions occurred in 59% of patients receiving OPDIVO plus YERVOY (n=547). The most frequent serious adverse reactions reported in ≥2% of patients were diarrhea, pyrexia, pneumonia, pneumonitis, hypophysitis, acute kidney injury, dyspnea, adrenal insufficiency, and colitis.</p>

        <h3>Common Adverse Reactions</h3>
        <p>In Checkmate 067, the most common (≥20%) adverse reactions in the OPDIVO plus YERVOY arm (n=313) were fatigue (62%), diarrhea (54%), rash (53%), nausea (44%), pyrexia (40%), pruritus (39%), musculoskeletal pain (32%), vomiting (31%), decreased appetite (29%), cough (27%), headache (26%), dyspnea (24%), upper respiratory tract infection (23%), arthralgia (21%), and increased transaminases (25%). In Checkmate 067, the most common (≥20%) adverse reactions in the OPDIVO arm (n=313) were fatigue (59%), rash (40%), musculoskeletal pain (42%), diarrhea (36%), nausea (30%), cough (28%), pruritus (27%), upper respiratory tract infection (22%), decreased appetite (22%), headache (22%), constipation (21%), arthralgia (21%), and vomiting (20%). In Checkmate 227, the most common (≥20%) adverse reactions were fatigue (44%), rash (34%), decreased appetite (31%), musculoskeletal pain (27%), diarrhea/colitis (26%), dyspnea (26%), cough (23%), hepatitis (21%), nausea (21%), and pruritus (21%). In Checkmate 9LA, the most common (>20%) adverse reactions were fatigue (49%), musculoskeletal pain (39%), nausea (32%), diarrhea (31%), rash (30%), decreased appetite (28%), constipation (21%), and pruritus (21%). In Checkmate 743, the most common adverse reactions (≥20%) in patients receiving OPDIVO plus YERVOY were fatigue (43%), musculoskeletal pain (38%), rash (34%), diarrhea (32%), dyspnea (27%), nausea (24%), decreased appetite (24%), cough (23%), and pruritus (21%). In Checkmate 214, the most common adverse reactions (≥20%) reported in patients treated with OPDIVO plus YERVOY (n=547) were fatigue (58%), rash (39%), diarrhea (38%), musculoskeletal pain (37%), pruritus (33%), nausea (30%), cough (28%), pyrexia (25%), arthralgia (23%), decreased appetite (21%), dyspnea (20%), and vomiting (20%).</p>
        <p>In a separate Phase 3 trial of YERVOY 3 mg/kg, the most common adverse reactions (≥5%) in patients who received YERVOY at 3 mg/kg were fatigue (41%), diarrhea (32%), pruritus (31%), rash (29%), and colitis (8%).</p>

        <h3>Clinical Trials and Patient Populations</h3>
        <p><b>Checkmate 067</b>–previously untreated metastatic melanoma, as a single agent or in combination with YERVOY; <b>Checkmate 227</b>–previously untreated metastatic non-small cell lung cancer, in combination with YERVOY; <b>Checkmate 9LA</b>–previously untreated recurrent or metastatic non-small cell lung cancer in combination with YERVOY and 2 cycles of platinum-doublet chemotherapy by histology; <b>Checkmate 743</b>–previously untreated unresectable malignant pleural mesothelioma, in combination with YERVOY; <b>Checkmate 214</b>–previously untreated renal cell carcinoma, in combination with YERVOY</p>
        <p>OPDIVO (10 mg/mL) and YERVOY (5 mg/mL) are injections for intravenous (IV) use.</p>
        <p>Please see US Full Prescribing Information for <a href="https://packageinserts.bms.com/pi/pi_opdivo.pdf" target="_blank" rel="noreferrer">OPDIVO</a> and <a href="https://packageinserts.bms.com/pi/pi_yervoy.pdf" target="_blank" rel="noreferrer">YERVOY</a>.</p>
      </ISIPopup>

    </Fragment>
  );
};

export default React.memo(OpdivoYervoy);
