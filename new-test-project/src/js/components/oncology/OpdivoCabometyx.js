import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
import { useIsMobile } from "../../utils/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ISIPopup from "./ISIPopup";
import IndicationsPopup from "./IndicationsPopup";

const OpdivoCabometyx = () =>
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

      <div className="opdivo-cabometyx-banner-wrapper" style={{ backgroundImage: "url(/img/banners/banner-opdivo-cabometyx" + (isMobile ? "-mobile" : "") + ".png)" }}>
        { !isMobile && <Link to="/oncology/our-medicines" className="back-link">&lt; Back</Link> }

        <Container>
          <a href="https://www.opdivoclinicaldata.com/advanced-rcc-opdivo-cabometyx" target="_blank" rel="noreferrer" className="button-blue">OPDIVO + CABOMETYX { isMobile && <br /> } Website <img src={ process.env.PUBLIC_URL + "/img/icons/popout.svg" } alt="Popout" /></a>
        </Container>
      </div>

      <section className="opdivo-top">
        <Container>
          <Row>
            <Col md={4} className="product-information-wrapper">
              <div className="product-information-wrapper-inner">
                <h2 className="h2-cabometyx">Product Information</h2>

                <ul>
                  <li>U.S. Full Prescribing Information for OPDIVO <a href="https://packageinserts.bms.com/pi/pi_opdivo.pdf" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                  <li>Medication Guide for OPDIVO <a href="https://packageinserts.bms.com/medguide/medguide_opdivo.pdf" target="_blank" rel="noreferrer"><img src={ process.env.PUBLIC_URL + "/img/icons/download.svg" } alt="Download" /></a></li>
                </ul>
              </div>
            </Col>

            <Col md={8} className="indications">
              <h2>Indications</h2>

              <div className="indication-box">
                <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/indication-2.svg" } alt="Indication" />
                <p>First-line treatment of patients with advanced renal{ !isMobile && <br /> }cell carcinoma</p>
                <a href="https://www.opdivoclinicaldata.com/advanced-rcc-opdivo-cabometyx" target="_blank" rel="noreferrer" className="learn-more">Learn More <FontAwesomeIcon icon={ faChevronRight } /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="opdivo-product-resources-section">
        <Container>
          <div className="opdivo-cabometyx-border-top"></div>
          <h2 className="opdivo-cabometyx-h2">Product Resources</h2>

          <div className="product-resource-boxes-wrapper">
            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-cabometyx/product-resource-1.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Advanced Renal Cell Carcinoma{ !isMobile && <br /> } (aRCC) – Treatment Option{ !isMobile && <br /> } for Select Patients</h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/1506-us-2100031-arcc-treatment-option-for-select-patients.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>

            <div className="product-resource-box">
              <div className="product-resource-box-cover-photo" style={{ backgroundImage: "url(/img/oncology/our-medicines/opdivo-cabometyx/product-resource-2.png)" }}>
                <div className="product-resource-box-type"><img src={ process.env.PUBLIC_URL + "/img/icons/icon-pdf-blue.svg" } alt="Popout" /> <span>PDF</span></div>
              </div>
              <div className="product-resource-box-info">
                <h3>Advanced Renal Cell Carcinoma{ !isMobile && <br /> } (aRCC) – Learn about Dosing{ !isMobile && <br /> } for Two Treatment Options </h3>
                <div className="link-wrapper">
                  <Link to={ process.env.PUBLIC_URL + "/pdf/7356us2003945-01-arcc-learn-about-dosing-for-two-treatment-options.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer">Download <img src={ process.env.PUBLIC_URL + "/img/oncology/our-medicines/opdivo-yervoy/arrow-right.svg" } alt="Arrow Right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={ "opdivo-banner-section-bottom" + (isPopupSticky ? " no-padding-bottom" : "") } id="opdivo-banner-section-bottom">
        <Container>
          <Col md={6}>
            <img src={ process.env.PUBLIC_URL + "/img/icons/opdivo-cabometyx" + (isMobile ? "-mobile" : "") + ".svg" } alt="Opdivo Cabometyx" style={ isMobile ? { margin: "4rem 0 1rem" } : {} } />
          </Col>

          <Col md={6} className="paragraph-wrapper">
            <p>For questions about BMS medicines during this time, please call 1-800-721-8909.</p>
          </Col>
        </Container>
      </section>

      <ISIPopup isPopupSticky={ isPopupSticky }>
        <div className="isi-popup-top-wrapper">
          <div className="important-safety-information">
            <h2 style={{ marginBottom: "3rem" }}>IMPORTANT SAFETY INFORMATION</h2>
            <h3>Severe and Fatal Immune-Mediated Adverse Reactions</h3>
            <p>Immune-mediated adverse reactions listed herein may not include all possible severe and fatal immune-mediated adverse reactions.</p>
            <p style={{ marginBottom: "0" }}>Immune-mediated adverse reactions, which may be severe or fatal, can occur in any organ system or tissue. While immune-mediated adverse reactions usually manifest during treatment, they can also occur after discontinuation of OPDIVO. Early identification and management are essential to ensure safe use of OPDIVO. Monitor for signs and symptoms that may be clinical manifestations of underlying immune-mediated adverse reactions. Evaluate clinical chemistries</p>
          </div>
          { !isMobile &&
            <div className="indications-wrapper">
              <h2 style={ { marginBottom: "3rem" } }>Indications</h2>
              <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with cabozantinib, is indicated for the first-line treatment of
                patients with advanced renal cell carcinoma (RCC).</p>
            </div>
          }
        </div>

        <p>including liver enzymes, creatinine, and thyroid function at baseline and periodically during treatment with OPDIVO. In cases of suspected immune-mediated adverse reactions, initiate appropriate workup to exclude alternative etiologies, including infection. Institute medical management promptly, including specialty consultation as appropriate.</p>
        <p>Withhold or permanently discontinue OPDIVO depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information). In general, if OPDIVO interruption or discontinuation is required, administer systemic corticosteroid therapy (1 to 2 mg/kg/day prednisone or equivalent) until improvement to Grade 1 or less. Upon improvement to Grade 1 or less, initiate corticosteroid taper and continue to taper over at least 1 month. Consider administration of other systemic immunosuppressants in patients whose immune-mediated adverse reactions are not controlled with corticosteroid therapy. Toxicity management guidelines for adverse reactions that do not necessarily require systemic steroids (e.g., endocrinopathies and dermatologic reactions) are discussed below.</p>

        <h4>Immune-Mediated Pneumonitis</h4>
        <p>OPDIVO can cause immune-mediated pneumonitis. The incidence of pneumonitis is higher in patients who have received prior thoracic radiation.</p>

        <h4>Immune-Mediated Colitis</h4>
        <p>OPDIVO can cause immune-mediated colitis. A common symptom included in the definition of colitis was diarrhea. Cytomegalovirus (CMV) infection/reactivation has been reported in patients with corticosteroid-refractory immune-mediated colitis. In cases of corticosteroid-refractory colitis, consider repeating infectious workup to exclude alternative etiologies.</p>

        <h4>Immune-Mediated Hepatitis and Hepatotoxicity</h4>
        <p>OPDIVO can cause immune-mediated hepatitis.</p>
        <p>OPDIVO in combination with cabozantinib can cause hepatic toxicity with higher frequencies of Grade 3 and 4 ALT and AST elevations compared to OPDIVO alone. Consider more frequent monitoring of liver enzymes as compared to when the drugs are administered as single agents. In patients receiving OPDIVO and cabozantinib, Grades 3 and 4 increased ALT or AST were seen in 11% of patients.</p>

        <h4>Immune-Mediated Endocrinopathies</h4>
        <p>OPDIVO can cause primary or secondary adrenal insufficiency, immune-mediated hypophysitis, immune-mediated thyroid disorders, and Type 1 diabetes mellitus, which can present with diabetic ketoacidosis. Withhold OPDIVO depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information). For Grade 2 or higher adrenal insufficiency, initiate symptomatic treatment, including hormone replacement as clinically indicated. Hypophysitis can present with acute symptoms associated with mass effect such as headache, photophobia, or visual field defects. Hypophysitis can cause hypopituitarism; initiate hormone replacement as clinically indicated. Thyroiditis can present with or without endocrinopathy. Hypothyroidism can follow hyperthyroidism; initiate hormone replacement or medical management as clinically indicated. Monitor patients for hyperglycemia or other signs and symptoms of diabetes; initiate treatment with insulin as clinically indicated.</p>
        <p>In patients receiving OPDIVO and cabozantinib, adrenal insufficiency occurred in 4.7% (15/320) of patients, including Grade 3 (2.2%) and Grade 2 (1.9%).</p>

        <h4>Immune-Mediated Nephritis with Renal Dysfunction</h4>
        <p>OPDIVO can cause immune-mediated nephritis.</p>

        <h4>Immune-Mediated Dermatologic Adverse Reactions</h4>
        <p>OPDIVO can cause immune-mediated rash or dermatitis. Exfoliative dermatitis, including Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and drug rash with eosinophilia and systemic symptoms (DRESS) has occurred with PD-1/PD-L1 blocking antibodies. Topical emollients and/or topical corticosteroids may be adequate to treat mild to moderate nonexfoliative rashes.</p>
        <p>Withhold or permanently discontinue OPDIVO depending on severity (please see section 2 Dosage and Administration in the accompanying Full Prescribing Information).</p>

        <h4>Other Immune-Mediated Adverse Reactions</h4>
        <p>The following clinically significant immune-mediated adverse reactions occurred at an incidence of &lt;1% (unless otherwise noted) in patients who received OPDIVO monotherapy or were reported with the use of other PD-1/PD-L1 blocking antibodies. Severe or fatal cases have been reported for some of these adverse reactions: cardiac/vascular: myocarditis, pericarditis, vasculitis; nervous system: meningitis, encephalitis, myelitis and demyelination, myasthenic syndrome/myasthenia gravis (including exacerbation), Guillain-Barré syndrome, nerve paresis, autoimmune neuropathy; ocular: uveitis, iritis, and other ocular inflammatory toxicities can occur; gastrointestinal: pancreatitis to include increases in serum amylase and lipase levels, gastritis, duodenitis; musculoskeletal and connective tissue: myositis/polymyositis, rhabdomyolysis, and associated sequelae including renal failure, arthritis, polymyalgia rheumatica; endocrine: hypoparathyroidism; other (hematologic/immune): hemolytic anemia, aplastic anemia, hemophagocytic lymphohistiocytosis (HLH), systemic inflammatory response syndrome, histiocytic necrotizing lymphadenitis (Kikuchi lymphadenitis), sarcoidosis, immune thrombocytopenic purpura, solid organ transplant rejection.</p>
        <p>Some ocular IMAR cases can be associated with retinal detachment. Various grades of visual impairment, including blindness, can occur. If uveitis occurs in combination with other immune-mediated adverse reactions, consider a Vogt-Koyanagi-Harada–like syndrome, which has been observed in patients receiving OPDIVO, as this may require treatment with systemic corticosteroids to reduce the risk of permanent vision loss.</p>

        <h3>Infusion-Related Reactions</h3>
        <p>OPDIVO can cause severe infusion-related reactions. Discontinue OPDIVO in patients with severe (Grade 3) or life-threatening (Grade 4) infusion-related reactions. Interrupt or slow the rate of infusion in patients with mild (Grade 1) or moderate (Grade 2) infusion-related reactions.</p>

        <h3>Complications of Allogeneic Hematopoietic Stem Cell Transplantation</h3>
        <p>Fatal and other serious complications can occur in patients who receive allogeneic hematopoietic stem cell transplantation (HSCT) before or after being treated with OPDIVO. Transplant-related complications include hyperacute graft-versus-host-disease (GVHD), acute GVHD, chronic GVHD, hepatic veno-occlusive disease (VOD) after reduced intensity conditioning, and steroid-requiring febrile syndrome (without an identified infectious cause). These complications may occur despite intervening therapy between OPDIVO and allogeneic HSCT.</p>
        <p>Follow patients closely for evidence of transplant-related complications and intervene promptly. Consider the benefit versus risks of treatment with OPDIVO prior to or after an allogeneic HSCT.</p>

        <h3>Embryo-Fetal Toxicity</h3>
        <p>Based on its mechanism of action and findings from animal studies, OPDIVO can cause fetal harm when administered to a pregnant woman. Advise pregnant women of the potential risk to a fetus. Advise females of reproductive potential to use effective contraception during treatment with OPDIVO and for at least 5 months after the last dose.</p>

        <h3>Increased Mortality in Patients with Multiple Myeloma when OPDIVO is Added to a Thalidomide Analogue and Dexamethasone</h3>
        <p>In randomized clinical trials in patients with multiple myeloma, the addition of OPDIVO to a thalidomide analogue plus dexamethasone resulted in increased mortality. Treatment of patients with multiple myeloma with a PD-1 or PD-L1 blocking antibody in combination with a thalidomide analogue plus dexamethasone is not recommended outside of controlled clinical trials.</p>

        <h3>Lactation</h3>
        <p>There are no data on the presence of OPDIVO in human milk, the effects on the breastfed child, or the effects on milk production. Because of the potential for serious adverse reactions in breastfed children, advise women not to breastfeed during treatment and for 5 months after the last dose.</p>

        <h3>Serious Adverse Reactions</h3>
        <p>In Checkmate 9ER, serious adverse reactions occurred in 48% of patients receiving OPDIVO and cabozantinib (n=320). The most frequent serious adverse reactions reported in ≥2% of patients were diarrhea, pneumonia, pneumonitis, pulmonary embolism, urinary tract infection, and hyponatremia. Fatal intestinal perforations occurred in 3 (0.9%) patients.</p>

        <h3>Common Adverse Reactions</h3>
        <p>In Checkmate 9ER, the most common adverse reactions (≥20%) in patients receiving OPDIVO and cabozantinib (n=320) were diarrhea (64%), fatigue (51%), hepatotoxicity (44%), palmar-plantar erythrodysaesthesia syndrome (40%), stomatitis (37%), rash (36%), hypertension (36%), hypothyroidism (34%), musculoskeletal pain (33%), decreased appetite (28%), nausea (27%), dysgeusia (24%), abdominal pain (22%), cough (20%) and upper respiratory                    tract infection (20%).</p>
        <p>OPDIVO (10 mg/mL) is an injection for intravenous (IV) use.</p>
        <p>Please see US Full Prescribing Information for <a href="https://packageinserts.bms.com/pi/pi_opdivo.pdf" target="_blank" rel="noreferrer">OPDIVO</a>.</p>
      </ISIPopup>

    </Fragment>
  );
};

export default React.memo(OpdivoCabometyx);
