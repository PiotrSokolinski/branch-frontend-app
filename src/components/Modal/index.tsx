import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";

import closeBg from "../../assets/svg/closeBg.svg";

import useKeyPress from "../../hooks/useKeyPress";

import {
  Container,
  HeaderContainer,
  Content,
  Background,
  Icon,
} from "./styled";

const ESC_KEY_CODE = 27;

const initialScale = 0.9;
const initialTranslate = 100;

const contentAnimationProps = {
  key: "modalContent",
  initial: { scale: initialScale, opacity: 0, y: initialTranslate },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { type: "easeInOut", duration: 0.3 },
  exit: { opacity: 0, scale: initialScale, y: initialTranslate },
};

const backgroundAnimationProps = {
  key: "modalBackground",
  initial: { opacity: 0.7 },
  animate: { opacity: 1 },
  transition: { type: "easeInOut", duration: 0.3 },
  exit: { opacity: 0 },
};

type ModalProps = {
  children: React.ReactChild;
  visible: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  const parent = document.getElementById("page-wrapper");
  useKeyPress(ESC_KEY_CODE, onClose);

  useEffect(() => {
    if (visible) window.scrollTo(0, 0);
  }, [visible]);

  if (!parent) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {visible && (
        <Background {...backgroundAnimationProps}>
          <Container {...contentAnimationProps}>
            <HeaderContainer>
              <div />
              <Icon onClick={onClose} src={closeBg} />
            </HeaderContainer>
            <Content>{children}</Content>
          </Container>
        </Background>
      )}
    </AnimatePresence>,
    parent
  );
};

export default Modal;
