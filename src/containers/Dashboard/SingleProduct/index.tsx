import React from "react";

import {
  Container,
  BottomContainer,
  Name,
  Description,
  Price,
  Stock,
  Wrapper,
  Text,
  ButtonContainer,
} from "./styled";
import { Product } from "../../../types";
import Button from "../../../components/Button";

type SingleProductProps = {
  product: Product;
  onClick: (product: Product) => void;
  withoutButton?: boolean;
  withoutStock?: boolean;
};

const SingleProduct: React.FC<SingleProductProps> = ({
  product,
  onClick,
  withoutButton = false,
  withoutStock = false,
}) => {
  const handleClick = () => onClick(product);
  return (
    <Container>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <BottomContainer>
        <Wrapper>
          <Text>Price:</Text>
          <Price>{product.price}</Price>
        </Wrapper>
        {withoutStock ? (
          <div />
        ) : (
          <Wrapper>
            <Text>In stock:</Text>
            <Stock>{product.stock}</Stock>
          </Wrapper>
        )}
      </BottomContainer>
      {!withoutButton && (
        <ButtonContainer>
          <Button onClick={handleClick}>Order</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default SingleProduct;
