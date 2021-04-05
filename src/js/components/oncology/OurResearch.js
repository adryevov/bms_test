import React, { Fragment, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button, Container } from "react-bootstrap";
import { useModal } from "../UI/ContactUsModal";
import { Link } from "react-router-dom";
import { faAngleDown, faFile, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMetaInfo } from "../../utils/hooks";

const OurResearch = () =>
{
  const { setIsContactDialogOpen } = useModal();
  const { updateMetaTitle, updateMetaDescription } = useMetaInfo();

  useEffect(() =>
  {
    updateMetaTitle("Our Research");
    updateMetaDescription("Our Research.");
  }, [ updateMetaTitle, updateMetaDescription ]);

  return (
    <Fragment>
      <Header />

      <section className="banner-our-research" style={{ backgroundImage: "url(/img/banners/banner-our-research.png)" }}>
        <Container>
          <h1>Our Research</h1>
        </Container>
      </section>

      <section className="research-cards-wrapper">
        <Container>
          <div className="research-card">
            <h3 className="now-enrolling-heading">Now Enrolling</h3>
            <p>Two clinical studies in ER+/HER2- primary breast cancer</p>
            <a href="https://www.bmsstudyconnect.com/us/en/help/physicians/breast-cancer-studies-for-patients.html" target="_blank" rel="noreferrer" className="button-pink">Learn More</a>
          </div>

          <div className="research-card">
            <h3 className="quick-links-underline">Quick Links</h3>
            <ul className="research-card-links">
              <li><Link to="/abstracts" className="arrow-link-pink">Our AACR Abstracts <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link></li>
              <li><a href="https://www.bmsstudyconnect.com/us/en/home.html" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Oncology Clinical Trials <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
              <li><a href="https://www.bolderscience.com/bmspipeline/solidtumor-hematology/event-1/" target="_blank" rel="noreferrer" className="arrow-link-pink">Our Pipeline <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bristol-myers-wrapper">
        <Container className="section-border-top"></Container>

        <Container>
          <div className="bristol-myers-first-line-wrapper">
            <h3>Bristol Myers Squibb:<br />At the forefront of Immuno-Oncology research</h3>
            <img src={ process.env.PUBLIC_URL + "/img/our-research/immuno-oncology.svg" } alt="Immuno-Oncology" />
          </div>
          <p className="oncology-research">Oncology research seeks to restore the body's ability to fight cancer </p>
          <p>Numerous pathways may enhance the immune system's ability to recognize and eliminate cancer cells.<sup>1-3</sup> The pathways may be grouped into 4 essential categories that are important in determining the outcome of tumor and immune system interaction.<sup>4-6</sup></p>
        </Container>
      </section>

      <section className="pathway-categories-section">
        <Container className="section-border-top"></Container>
        <Container>
          <div className="pathway-categories-section-name">
            <h3>Pathway categories</h3>
            <Link to="#" onClick={ () => document.querySelector("#related-resources-section").scrollIntoView({ behavior: 'smooth' }) } className="related-resources"><FontAwesomeIcon icon={ faAngleDown }/> Related Resources</Link>
          </div>

          <div className="pathway-categories-wrapper">
            <div className="pathway-category">
              <img src={ process.env.PUBLIC_URL + "/img/our-research/pathway-category-1.png" } alt="Effector cell function" />
              <div className="text-content-wrapper">
                <h4>Effector cell function<sup>7,8</sup></h4>
                <p>Various components of the immune system and tumor microenvironment may regulate an effector cell’s ability to eliminate tumors. Modulating pathways involved in the regulation of effector cells may enhance their activity.</p>
                <p><b>Inhibitory immune checkpoints:</b> PD-1, CTLA-4, LAG-3, TIGIT, TIM-3, NKG2A</p>
                <p><b>Effector cell activation, proliferation, and cytotoxicity:</b> IL-2, IL-12, 0X40, SLAMF7</p>
                <p><b>Immunosuppressive metabolic pathways: IDO1, AHR</b></p>
                <p><b>Tumor antigen to direct T-cell activity:</b> PSCA</p>
              </div>
            </div>

            <div className="pathway-category">
              <img src={ process.env.PUBLIC_URL + "/img/our-research/pathway-category-2.png" } alt="Tumor cell recognition" />
              <div className="text-content-wrapper">
                <h4>Tumor cell recognition<sup>7,9</sup></h4>
                <p>Tumors may adapt mechanisms to evade immune detection. Leveraging pathways, including those involved in antigen presentation and phagocytosis, may promote better tumor cell recognition.</p>
                <p><b>Antigen presentation:</b> NLRP3, STING, TLR8</p>
                <p><b>Phagocytosis of tumor cells:</b> SIRPa</p>
                <p><b>Antibody-dependent tumor-cell death:</b> FucGM1</p>
              </div>
            </div>

            <div className="pathway-category">
              <img src={ process.env.PUBLIC_URL + "/img/our-research/pathway-category-3.png" } alt="Immunosuppression" />
              <div className="text-content-wrapper">
                <h4>Immunosuppression<sup>10,11</sup></h4>
                <p>Some tumors may avoid destruction by thriving in an immunosuppressive environment and dampening the immune response. Modulating pathways that regulate immunosuppressive activity may increase anti-tumor activity.</p>
                <p><b>Immunosuppressive effect of Tregs:</b> CTLA-4</p>
                <p><b>Immunosuppressive myeloid cells:</b> CCR2/5, IL-8</p>
                <p><b>Immune exclusion:</b> TGFβ1 & 3</p>
              </div>
            </div>

            <div className="pathway-category">
              <img src={ process.env.PUBLIC_URL + "/img/our-research/pathway-category-4.png" } alt="Tumor-intrinsic pathways" />
              <div className="text-content-wrapper">
                <h4>Tumor-intrinsic pathways<sup>12,13</sup></h4>
                <p>Various signaling and metabolic pathways intrinsic to tumor cells may drive oncogenesis and tumor growth. Blocking these pathways may promote tumor cell death.</p>
                <p><b>Protein degradation pathways:</b> Ubiquitin proteasome pathway, androgen receptor degredation</p>
                <p><b>Epigenetic drivers of oncogenesis:</b> BET, LSD1</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="related-resources-section" id="related-resources-section">
        <Container className="section-border-top"></Container>

        <Container>
          <h2>Related resources</h2>
          <div className="related-resources-wrapper">
            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/our-research/related-resource-gradient.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faFile } />
                  <span>PDF</span>
                </div>
                <img src={ process.env.PUBLIC_URL + "/img/our-research/content-area-1.png" } alt="Understanding the science behind Immuno-Oncology" />
              </div>

              <div className="text-content-wrapper">
                <h4>Understanding the science behind Immuno-Oncology</h4>
                <p>An overview of cancer, immune system pathways, and the potential of I-O research.</p>
                <Link to="#" className="arrow-link-pink">Download <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>

            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/our-research/related-resource-gradient.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faFile } />
                  <span>PDF</span>
                </div>
                <img src={ process.env.PUBLIC_URL + "/img/our-research/content-area-2.png" } alt="Looking deeper into the science of Immuno-Oncology" />
              </div>
              <div className="text-content-wrapper">
                <h4>Looking deeper into the science of Immuno-Oncology</h4>
                <p>Learn more about I-O research, from revealing the power of the immune system in cancer to realizing its broad potential.</p>
                <Link to="#" className="arrow-link-pink">Download <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></Link>
              </div>
            </div>

            <div className="related-resource">
              <div className="related-resource-image-wrapper" style={{ backgroundImage: "url(/img/our-research/related-resource-gradient.png)" }}>
                <div className="resource-type">
                  <FontAwesomeIcon icon={ faVideo } />
                  <span>Video</span>
                </div>
                <img src={ process.env.PUBLIC_URL + "/img/our-research/content-area-3.png" } alt="How do signaling pathways work together?" />
              </div>
              <div className="text-content-wrapper">
                <h4>How do signaling pathways work together?</h4>
                <p>An exploration of how multiple pathways may work together to modulate the antitumor immune response.</p>
                <a href="https://www.youtube.com/watch?v=QCiF3HjyAUI" target="_blank" rel="noreferrer" className="arrow-link-pink">Watch <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="references-section">
        <Container className="section-border-top"></Container>

        <Container>
          <p><b>References:</b> <b>1.</b> Lee SJ et al. J Immunol. 2004;173(5):3002-3012. <b>2.</b> Bryceson YT et al. Immunol Rev. 2006;214:73-91. <b>3.</b> Antonia SJ et al. Clin Cancer Res. 2014;20(24):6258-6268. <b>4.</b> Spranger S et al. Sci Transl Med. 2013;5:200ra116. <b>5.</b> Ahmadzadeh M et al. Blood. 2009;114:1537-1544. <b>6.</b> Harlin H et al. Cancer Res. 2009;69(7):3077-3085. <b>7.</b> Gonzalez H et al. Genes Dev. 2018;32:1267-1284. <b>8.</b> Marin-Acevedo JA et al. J Hematol Oncol. 2018;11:39. <b>9.</b> Disis M. Semin Oncol. 2014;41:S3-S13. <b>10.</b> Shimizu K et al. Inter Immunol. 2018;30(10):445-455. <b>11.</b> Marshall H et al. Front Oncol. 2018;8:315. <b>12.</b> National Cancer Institute. Cancer metabolism. https://ccr.cancer.gov/news/horizons/article/cell-metabolism-and-cancer. Accessed February 3, 2021. <b>13.</b> Spranger S et al. Annu Rev Cancer Biol. 2018;2:213-228.</p>
        </Container>
      </section>

      <section className="smiling-guy-wrapper" style={{ backgroundImage: "url(/img/banners/banner-smiling-guy.png)" }}>
        <Container>
          <div className="content-wrapper">
            <h2>Looking for something specific?</h2>
            <Button className="button-pink" onClick={ () => setIsContactDialogOpen(true) }>Contact Us</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default React.memo(OurResearch);
