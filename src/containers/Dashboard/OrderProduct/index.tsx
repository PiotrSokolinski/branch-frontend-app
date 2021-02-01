import React, { ChangeEvent, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Product } from "../../../types";
import SingleProduct from "../SingleProduct";
import { StyledError } from "../../RegisterForm/styled";

import {
  Container,
  StyledInput,
  StyledFormField,
  ButtonContainer,
} from "./styled";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrderLoading,
  selectOrderError,
  makeOrder,
} from "../../../redux/orders";

type OrderProductProps = {
  product: Product;
  closeModal: () => void;
};

export const OrderProduct: React.FC<OrderProductProps> = ({
  closeModal,
  product,
}) => {
  const dispatch: any = useDispatch();
  const loading: boolean = useSelector(selectOrderLoading);
  const error: string = useSelector(selectOrderError);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState("");
  if (isEmpty(product)) return null;

  const handleChange = (event: any) => setQuantity(Number(event.target.value));

  const handleCustomerChange = (event: any) => setCustomer(event.target.value);

  const handleOrder = () => {
    dispatch(makeOrder(customer, quantity, product.id));
    closeModal();
  };

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
      <StyledFormField error={undefined} label="Type customer name">
        <StyledInput
          placeholder="E.g. John Smith"
          value={customer}
          onChange={handleCustomerChange}
          type="text"
        />
      </StyledFormField>
      <ButtonContainer>
        <Button onClick={handleOrder} loading={loading}>
          {`Order ${quantity} ${product.name}'s for ${customer}`}
        </Button>
      </ButtonContainer>
      {error && <StyledError>{error}</StyledError>}
    </Container>
  );
};

export default OrderProduct;
