import React from 'react';

import { StyledLink } from './styled';

type ButtonLinkProps = {
  to: string;
  className?: string;
  children: React.ReactChild;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
};

export default ButtonLink;
