import { useEffect } from "react";
import { stateLogger } from "../../Logger/stateLogger";
import { motion } from "framer-motion";
import styled from "styled-components";

const Backdrop = ({ children, onClick }) => {
    // Log state
    useEffect(() => {
        stateLogger("Backdrop", true);
        return () => stateLogger("Backdrop", false);
    }, []);

    return (
        <BackdropStyle
            className="backdrop"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </BackdropStyle>
    );
};
const BackdropStyle = styled(motion.div)`
   
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 2000000000000000000000;

`
export default Backdrop;