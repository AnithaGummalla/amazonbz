import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./index.css";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  PersonCircle,
  XLg,
} from "react-bootstrap-icons";
import Alexa from "../Alexa";

const customStyles = {
  content: {
    top: "50%",
    left: "11.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "none",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transpawhirent",
    overflow: "hidden",
  },
};

function ModalPage() {
  const [seeall, setSeeAll] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <>
        <>
          <div style={{ display: "flex" }}>
            <div>
              <div className="sign-in">
                <PersonCircle size={30} className="person-icon" />
                <h5>Hello,sign in</h5>
              </div>
              <div
                className="list-view-all"
                style={{
                  overflow: "scroll",
                  height: "700px",
                  padding: "0px",
                  backgroundColor: "white",
                }}
              >
                <ul>
                  <h5>Trending</h5>
                  <li>Best Sellers</li>
                  <li>New Releases</li>
                  <li>Movers and Shakers</li>

                  <hr />
                  <h5>Digital Content and Devices</h5>
                  <li>Amazon miniTV-FREE entertainment</li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    onClick={() => setOpen(true)}
                  >
                    Echo & Alexa{" "}
                    <span>
                      <ChevronRight />
                    </span>{" "}
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Fire TV{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Kindle E-Readers & eBooks{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Audible Audiobooks{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Amazon Prime Music{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <hr />
                  <h5>Shop By Category</h5>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Mobiles, computers{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    TV,Appliances,Electronics{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Men's Fashion{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Women's Fashion{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li onClick={() => setSeeAll(true)}>
                    See all <ChevronDown />{" "}
                  </li>

                  {seeall ? (
                    <div className="see-all">
                      <hr />
                      <ul>
                        <li>Home, Kitchen, Pets</li>
                        <li>Beauty, Health, Grocery</li>
                        <li>Sports, Fitness, Bags, Lugguage</li>
                        <li>Toys, Baby Products, Kids' Fashion</li>
                        <li>Car, Motorbike, Industrial</li>
                        <li>Books</li>
                        <li>Movies, Music & Vidio Games</li>
                        <li onClick={() => setSeeAll(false)}>
                          See Less <ChevronUp />
                        </li>{" "}
                      </ul>
                    </div>
                  ) : null}

                  <hr />
                  <h5>Programs & Features</h5>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Gift Cards & Mobile Recharges{" "}
                    <span>
                      <ChevronRight />
                    </span>
                  </li>
                  <li>Amazon LaunchPad</li>
                  <li>Flight Tickets</li>
                  <li>Clearance Store</li>
                  <hr />
                  <h5>Help & Settings</h5>
                  <li>Your Account</li>
                  <li>Customer Service</li>
                  <li>Sign in</li>
                </ul>
              </div>
            </div>
          </div>
        </>
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          contentLabel="Example Modal"
          style={customStyles}
          overlayClassName="modal-page"
        >
          <Alexa />
        </Modal>
      </>
    </div>
  );
}

export default ModalPage;
