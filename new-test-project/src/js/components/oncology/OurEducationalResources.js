import React, { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header";
import Footer from "../Footer";
import useModal from "../UI/ContactUsModal";
import { useIsMobile } from "../../utils/hooks";

const OurEducationalResources = () =>
{
  const { setIsContactDialogOpen } = useModal();
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <Header />

      <section className="banner-oncology-our-research" style={{ backgroundImage: "url(/img/banners/banner-oncology-our-research" + (isMobile ? "-mobile" : "") + ".png)" }}>
        <Container>
          { isMobile && <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/immuno-oncology.svg" } alt="Immuno-Oncology" /> }
          <h1>Researching scientific discoveries to transform patients' lives</h1>
          <div className="banner-line-pink"></div>
          <p className="banner-oncology-p1">At Bristol Myers Squibb, we're pushing into new frontiers of research so patients may live better lives:</p>
          <div className="banner-oncology-bottom-cells">
            <div className="oncology-cell">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/cell.png" } alt="Cell" />
              <span>I-O in earlier stages of cancer*</span>
            </div>
            <div className="oncology-cell">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/combo.png" } alt="Combo" />
              <span>Exploring I-O combinations</span>
            </div>
            <div className="oncology-cell">
              <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/research.png" } alt="Research" />
              <span>Expanded research program</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="oncology-our-research-immuno-oncology">
        <Container>
          <div className="immuno-oncology-row">
            { !isMobile && <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/immuno-oncology.svg" } alt="Immuno-Oncology" /> }
            <div className="quick-links-wrapper">
              <span>Quick Links</span>
              <Link to="/abstracts" className="arrow-link-pink">ASCO Abstracts <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              <a href="https://www.bmsstudyconnect.com/" target="_blank" rel="noreferrer" className="arrow-link-pink">Oncology Clinical Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
              <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-2/" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
            </div>
          </div>

          <div className="main-content">
            <div className="content-left">
              <h2>BMS is at the forefront of innovative cancer research, including in earlier stages of cancer</h2>
              <p>With a deep scientific understanding of immunotherapy, we continue to expand our research into earlier stages of cancer across multiple tumor types.</p>
              <div className="immuno-oncology-cards">
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/breast.png" } alt="Breast" />
                  <span>Breast</span>
                </div>
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/gastro.png" } alt="Gastrointestinal" />
                  <span>Gastrointestinal</span>
                </div>
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/gu.png" } alt="Genitourinary" />
                  <span>Genitourinary</span>
                </div>
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/head-and-neck.png" } alt="Head and Neck" />
                  <span>Head and Neck</span>
                </div>
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/lung.png" } alt="Lung" />
                  <span>Lung</span>
                </div>
                <div className="oncology-card">
                  <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/melanoma.png" } alt="Melanoma" />
                  <span>Melanoma</span>
                </div>
              </div>
              <div className="immuno-oncology-links">
                <a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-2/?diseaseFilter=.early-disease-trails&tab=solid-tumor&phaseFilter=&therapeuticAreaFilter=" target="_blank" rel="noreferrer" className="arrow-link-pink">View our earlier stages of cancer pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
                <Link to={ process.env.PUBLIC_URL + "/pdf/I-O_in_the_Earlier_Stages_of_Cancer.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Learn more about I-O in earlier stages <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>

            <img src={ process.env.PUBLIC_URL + "/img/oncology/our-research/people.png" } alt="People" className="img-right" />
          </div>
        </Container>
      </section>

      <section className="potential-of-io-combinations">
        <Container>
          <div className="border-top"></div>
          <div className="content-wrapper">
            <div className="part-left">
              <div className="part-left-top">
                <h2>We're exploring the potential of I-O combinations, including checkpoint inhibitors</h2>
                <div className="img-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/start.png)" }}>
                  <div className="resource-type">
                    <img src={ process.env.PUBLIC_URL + "/img/icons/icon-link-click.svg" } alt="Icon Link Click" />
                    <span>Interactive</span>
                  </div>

                  <a href="/io-potential" target="_blank" rel="noreferrer" className="start-wrapper">&nbsp;</a>
                </div>
              </div>

              <div className="part-left-bottom">
                <p>As a leader in I-O combination research, BMS continues our investigation of immune system checkpoints, such as the role of the LAG-3 pathway and its potential synergy with the PD-1 pathway in suppressing anti-tumor T-cell activity.<sup>1</sup></p>
                <p>We are also continuing our research in combining PD-1 with other immune pathways, including CTLA-4.</p>
                { isMobile && <a href="/io-potential" target="_blank" rel="noreferrer" className="arrow-link-pink">Experience the potential here <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a> }
              </div>
            </div>
            <div className="part-right">
              <p>Go more in-depth on checkpoints and their potential:<sup>†</sup></p>

              <div className="part-right-middle-cells">
                <div className="cell">
                  <div className="cell-img-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/lag.png)" }}></div>
                  <div className="cell-right">
                    <span>Lag-3</span>
                    <Link to={ process.env.PUBLIC_URL + "/pdf/ONC-US-2100147 Immune Pathway Resource_LAG-3.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download for more <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
                  </div>
                </div>
                <div className="cell">
                  <div className="cell-img-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/ctla.png)" }}></div>
                  <div className="cell-right">
                    <span>Ctla-4</span>
                    <Link to={ process.env.PUBLIC_URL + "/pdf/ONC-US-2100146 Immune Pathway Resource_CTLA-4.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download for more <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
                  </div>
                </div>
                <div className="cell">
                  <div className="cell-img-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/pd1.png)" }}></div>
                  <div className="cell-right">
                    <span>PD-1</span>
                    <Link to={ process.env.PUBLIC_URL + "/pdf/ONC-US-2100233_PD-1_Pathway_PDF.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download for more <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-bottom">
            <div className="content-left">
              { !isMobile && <a href="/io-potential" target="_blank" rel="noreferrer" className="arrow-link-pink">Experience the potential here <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a> }
            </div>
            <div className="content-right">
              <small>† Additional select immune checkpoint pathways under investigation include TIM-3 and TIGIT</small>
            </div>
          </div>
        </Container>
      </section>

      <section className="searching-ways-to-restore">
        <Container>
          <div className="border-top"></div>

          <div className="content-wrapper">
            <div className="content-left">
              <h2>We're researching ways to restore the immune system and inhibit other drivers of oncogenesis</h2>
              <p>Our research includes investigation into 4 pathway categories with potential for immune system modulation:</p>
              <ul>
                <li>Effector cell function<sup>‡</sup></li>
                <li>Tumor cell recognition<sup>‡</sup></li>
                <li>Immunosuppression<sup>‡</sup></li>
                <li>Tumor intrinsic pathways<sup>‡</sup></li>
              </ul>
              <Link to={ process.env.PUBLIC_URL + "/pdf/IOUS1902928-02_ST PathwayPanels_D8_121820.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Read more here <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
            </div>

            <div className="img-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/immune-system.png)" }}></div>
          </div>
        </Container>
      </section>

      <section className="our-research-resources-section">
        <Container>
          <div className="border-top"></div>

          <h2>Resources</h2>
          <div className="related-resources-wrapper">
            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/content-area-1.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faFile } />
                  <span>PDF</span>
                </div>
              </div>

              <div className="text-content-wrapper">
                <h4>Earlier stages of cancer pipeline</h4>
                <Link to={ process.env.PUBLIC_URL + "/pdf/ASCO_Oncology_Earlier_Stages_of_Cancer_PDF_06-2-21.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>

            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/content-area-2.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faFile } />
                  <span>PDF</span>
                </div>
              </div>
              <div className="text-content-wrapper">
                <h4>Investigation of select checkpoints</h4>
                <Link to={ process.env.PUBLIC_URL + "/pdf/Pathway Resources Combined_ONC-US-2100146, ONC-US-2100147, ONC-US-2100233.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>

            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/oncology/our-research/content-area-3.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faFile } />
                  <span>PDF</span>
                </div>
              </div>
              <div className="text-content-wrapper">
                <h4>Potential of I-O therapy in cancer</h4>
                <Link to={ process.env.PUBLIC_URL + "/pdf/IOUS1801106-09_Potential of I-O Therapy in Cancer Fact Sheet.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download fact sheet <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
                <Link to={ process.env.PUBLIC_URL + "/pdf/IOUS1801106-10_Potential of I-O Therapy in Cancer Slide Deck.pdf?#view=Fit&toolbar=0" } target="_blank" rel="noreferrer" className="arrow-link-pink">Download slide deck <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="now-enrolling-section">
        <Container>
          <h2>Now Enrolling</h2>
          <p>BMS is conducting clinical trials across{ isMobile && <br /> } a range of tumor types. Click on a tumor below to locate a trial.</p>
          <ul>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/breast-cancer.html" target="_blank" rel="noreferrer">Breast</a></li>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/gastrointestinal-cancer-clinical-trials.html" target="_blank" rel="noreferrer">Gastrointestinal</a></li>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/genitourinary-clinical-trials.html" target="_blank" rel="noreferrer">Genitourinary</a></li>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/head-and-neck-cancer-clinical-trials.html" target="_blank" rel="noreferrer">Head and Neck</a></li>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/lung-cancer-clinical-trials.html" target="_blank" rel="noreferrer">Lung</a></li>
            <li><a href="https://www.bmsstudyconnect.com/us/en/health-studies/melanoma-clinical-trials.html" target="_blank" rel="noreferrer">Melanoma</a></li>
          </ul>
        </Container>
      </section>

      <section className="references-section">
        <Container>
          <p>*Refers to tumors that are non-metastatic or resectable metastatic.<br />
            ‡Select pathways investigating solid tumors.<br />
            CTLA-4=cytotoxic T-lymphocyte antigen 4; ER=estrogen receptor; HER2=human epidermal growth factor receptor 2; I-O=Immuno-Oncology; LAG-3=lymphocyte-activation gene 3; PD-1=programmed death receptor-1.<br />
            <b>Reference: 1</b>. Woo S-R, Turnis ME, Goldberg MV, et al. Immune inhibitory molecules LAG-3 and PD-1 synergistically regulate T-cell function to promote tumoral immune escape. Cancer Res. 2012;72(4):917-927.<br /></p>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy" + (isMobile ? "-mobile" : "") +".png)" }}>
        <Container>
          <div className="content-wrapper">
            <h2>Looking for something specific?</h2>
            <Button onClick={ () => setIsContactDialogOpen(true) } className="button-pink">Contact Us</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(OurEducationalResources);
