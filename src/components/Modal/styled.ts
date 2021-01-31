import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: calc(100% - 30rem);
  margin-left: 30rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5rem;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.zircon};
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.zumthor};
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
