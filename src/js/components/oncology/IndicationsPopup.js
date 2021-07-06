import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";

const IndicationsPopup = () =>
{
  const [ isActive, setIsActive ] = useState(true);

  return (
    <Fragment>
      { isActive && <IndicationsPopupBody closeDialog={ () => setIsActive(false) } /> }
    </Fragment>
  );
};

const IndicationsPopupBody = ({ closeDialog }) =>
  <Modal
    show={ true }
    onHide={ () => closeDialog(false) }
    backdrop="static"
    className="modal-indications-popup"
  >
    <Modal.Body>
      <span onClick={ closeDialog } className="proceed-to-site">Proceed to Site</span>

      <div className="popup-content-wrapper">
        <h2>Indications</h2>
        <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the treatment of patients with unresectable or metastatic melanoma.</p>
        <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of adult patients with metastatic non-small cell lung cancer (NSCLC) whose tumors express PD-L1 (≥1%) as determined by an FDA-approved test, with no EGFR or ALK genomic tumor aberrations.</p>
        <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab) and 2 cycles of platinum-doublet chemotherapy, is indicated for the first-line treatment of adult patients with metastatic or recurrent non-small cell lung cancer (NSCLC), with no EGFR or ALK genomic tumor aberrations.</p>
        <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of adult patients with unresectable malignant pleural mesothelioma (MPM).</p>
        <p>OPDIVO<sup>&reg;</sup> (nivolumab), in combination with YERVOY<sup>&reg;</sup> (ipilimumab), is indicated for the first-line treatment of patients with intermediate or poor risk advanced renal cell carcinoma (RCC).</p>
      </div>
    </Modal.Body>
  </Modal>
;

export default IndicationsPopup;
