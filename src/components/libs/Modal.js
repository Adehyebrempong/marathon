import { useEffect } from "react";
import { motion } from "framer-motion";
import { stateLogger } from "../../Logger/stateLogger";
import Backdrop from "./Backdrop";
import styled from "styled-components";

const flip = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};



const Modal = ({ handleClose, content }) => {
    // Log state
    useEffect(() => {
        stateLogger("Modal", true);
        return () => stateLogger("Modal", false);
    }, []);

    return (
        <Backdrop onClick={handleClose}>

            <ModalStyle
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={flip}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {content}

            </ModalStyle>
        </Backdrop>
    );
};

const ModalText = ({ text }) => (
    <div className="modal-text">
        <h3>Modal</h3>
        <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
            expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
            eos id. Porro, culpa? Officiis, placeat?
        </h5>
    </div>
);

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className="modal-button"
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {label}
    </motion.button>
);

const ModalStyle = styled(motion.div)`

  width: clamp(50%, 700px, 90%);
   &>*{
    width: 100%;
  }

  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Modal;