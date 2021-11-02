import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

export const ModalContext = React.createContext(false);

export const ModalProvider = ({ children }) =>
{
  const [ isContactDialogOpen, setIsContactDialogOpen ] = useState(false);

  return (
    <ModalContext.Provider value={{ isContactDialogOpen, setIsContactDialogOpen }}>
      { children }
      <ContactUsModal />
    </ModalContext.Provider>
  );
};

export const useModal = () =>
{
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
};

const ContactUsModal = () =>
{
  const { isContactDialogOpen, setIsContactDialogOpen } = useContext(ModalContext);

  return (
    <Modal
      show={ isContactDialogOpen }
      onHide={ () => setIsContactDialogOpen(false) }
      backdrop="static"
      centered
      className="modal-homepage-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ul className="homepage-modal-links">
          <li><a href="https://www.bms.com/about-us/contact-us.html" target="_blank" rel="noreferrer">Contact Us <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
          <li><a href="https://www.bms.com/researchers-and-partners/independent-research.html" target="_blank" rel="noreferrer">Our New Independent Research Process <img src={ process.env.PUBLIC_URL + "/img/icons/arrow-right.svg" } alt="Arrow Right" /></a></li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default useModal;
