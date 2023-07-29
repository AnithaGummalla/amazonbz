import React from "react";
import { List, XLg } from "react-bootstrap-icons";
import "./index.css";
import Modal from "react-modal";
import Alexa from "../Alexa";
import ModalPage from "../Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "11.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "none",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
};

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" onClick={openModal}>
          <List size={30} />
          <span style={{ alignSelf: "center" }} className="fs-6">
            All
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Amazon miniTV
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sell
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Best Sellers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Today's Deals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Mobiles
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                New Releases
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Customer Service
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prime
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    <img
                      src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Electronics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home & Kitchen
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Gift Ideas
              </a>
            </li>
            <li class="nav-item d-flex align-self-center">
            <a class="nav-link " href="#">
              <img
                src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Half-CA_V1._CB598761205_.jpg"
                alt=""
                style={{width:350}}
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          overlayClassName="modal-page"
        >
          <div style={{display:'flex'}}>
          <ModalPage />
          <button onClick={closeModal} className="close-icon">
              <XLg size={20} color="black" />
            </button>
            </div>
        </Modal>
    </>
 
  );
};

export default Navbar;
