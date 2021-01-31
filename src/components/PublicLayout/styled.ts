import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.background};
  display: flex;
  min-width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.zirkon};
`;

export const TopBackground = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.behind};
  background: ${({ theme }) => theme.colors.pigeonPost};
`;

export const Header = styled.div`
  display: flex;
  flex: 0.75;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.pigeonPost};
  padding: 0 2rem 3rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0.4rem 1rem rgba(227, 238, 251, 0.8);
  position: fixed;
  height: 100vh;
  width: ${({ theme }) => theme.layouts.publicLayout.sidebarWidth};
  justify-content: center;
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
  max-height: 32rem;
  max-width: 37rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  margin-left: ${({ theme }) => theme.layouts.publicLayout.sidebarWidth};
`;
