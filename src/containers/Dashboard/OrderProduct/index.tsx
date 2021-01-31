import React, { ChangeEvent, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Product } from "../../../types";
import SingleProduct from "../SingleProduct";

import {
  Container,
  StyledInput,
  StyledFormField,
  ButtonContainer,
} from "./styled";
import Button from "../../../components/Button";

type OrderProductProps = {
  product: Product;
};

export const OrderProduct: React.FC<OrderProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  if (isEmpty(product)) return null;

  const handleChange = (event: any) => setQuantity(Number(event.target.value));

  return (
    <Container>
      <SingleProduct product={product} onClick={() => {}} withoutButton />
      <StyledFormField error={undefined} label="Type your quantity">
        <StyledInput
          value={String(quantity)}
          onChange={handleChange}
          type="number"
        />
      </StyledFormField>
      <ButtonContainer>
        <Button onClick={() => {}}>
          {`Order ${quantity} of ${product.name}`}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default OrderProduct;
