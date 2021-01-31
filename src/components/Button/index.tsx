import React, { useRef, useState, useEffect } from "react";

import { Container, StyledButton } from "./styled";

type ButtonProps = {
  children: React.ReactChild;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.EventHandler<any>) => void;
  type?: string;
};

const DEFAULT_WIDTH = 100;

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  className,
  onClick,
  type,
}) => {
  const button = useRef(null);
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  useEffect(() => {
    if (button && button.current) {
      // @ts-ignore
      setWidth(button.current.clientWidth);
    }
  }, [loading]);

  if (loading)
    return (
      <Container className={className} width={width}>
        loading...
      </Container>
    );
  return (
    <StyledButton
      ref={button}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
