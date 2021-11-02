import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Button, Container } from "react-bootstrap";
import { useModal } from "./UI/ContactUsModal";

const Abstracts = () =>
{
  const { setIsContactDialogOpen } = useModal();

  return (
    <Fragment>
      <Header />

      <section className="marker-lady-wrapper" style={{ backgroundImage: "url(/img/banners/banner-marker-lady.png)" }}>
        <Container>
          <h1>AACR 2021 Abstracts</h1>
        </Container>
      </section>

      <section className="abstracts-cards">
        <Container>
          <div className="abstract-card">
            <div>
              <p className="name">Patrick M. Forde</p>
              <p className="description">Nivolumab (NIVO) + platinum-doublet chemotherapy (chemo) vs chemo as neoadjuvant treatment (tx) for resectable (IB-IIIA) non-small cell lung cancer (NSCLC) in the phase 3 CheckMate 816 trial</p>
            </div>

            <div>
              <p className="type">Oral Presentation<br />April 10, 2021<br />12:30-12:45 pm ET</p>
              <p className="number">Abstract #CT003</p>
            </div>
          </div>

          <div className="abstract-card">
            <div>
              <p className="name">Georgina V. Long</p>
              <p className="description">Adjuvant therapy with nivolumab (NIVO) combined with ipilimumab (IPI) vs NIVO alone in patients (pts) with resected stage IIIB-D/IV melanoma (CheckMate 915)</p>
            </div>

            <div>
              <p className="type">Oral Presentation<br />April 10, 2021<br />1:00-1:15 pm ET</p>
              <p className="number">Abstract #CT004</p>
            </div>
          </div>

          <div className="abstract-card">
            <div>
              <p className="name">Lin Shen</p>
              <p className="description">First-Line (1L) nivolumab (NIVO) plus chemotherapy (chemo) versus chemo in patients (pts) with advanced gastric cancer/ gastroesophageal junction cancer/ esophageal adenocarcinoma (GC/ GEJC/EAC): CheckMate 649 Chinese subgroup analysis</p>
            </div>

            <div>
              <p className="type">E-Poster</p>
              <p className="number">Abstract #CT184</p>
            </div>
          </div>

          <div className="abstract-card">
            <div>
              <p className="name">Daniel L. Menezes</p>
              <p className="description">Oral azacitidine modulates the immune microenvironment in acute myeloid leukemia (AML) patients in remission: a subanalysis from the QUAZAR AML-001 Trial</p>
            </div>

            <div>
              <p className="type">E-Poster</p>
              <p className="number">Abstract #505</p>
            </div>
          </div>

          <div className="abstract-card">
            <div>
              <p className="name">Lloye M. Dillon<br />Bin Li</p>
              <p className="description">Distribution and prevalence of LAG-3 expression in samples of melanoma and gastric/ gastroesophageal junction cancer</p>
            </div>

            <div>
              <p className="type">E-Poster</p>
              <p className="number">Abstract #1625</p>
            </div>
          </div>

          <div className="abstract-card">
            <div>
              <p className="name">Eva Gutierrez<br />Philip Ansumana Hull</p>
              <p className="description">Preclinical characterization of DF6002/BMS-986415, a novel differentiated IL-12 Fc-fusion protein with robust antitumor activity as monotherapy or in combination with anti–PD-1</p>
            </div>

            <div>
              <p className="type">E-Poster</p>
              <p className="number">Abstract #1714</p>
            </div>
          </div>
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

export default React.memo(Abstracts);
