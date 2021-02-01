import React from "react";

import { Container, Name, Wrapper, Quantity, Text } from "./styled";
import { Order } from "../../../types/Order";

type SingleOrderProps = {
  name: string;
  quantity?: number;
  order: Order;
  onClick: (order: Order) => void;
  price: number;
};

const SingleOrder: React.FC<SingleOrderProps> = ({
  onClick,
  name,
  quantity = 1,
  order,
  price,
}) => {
  const handleClick = () => onClick(order);
  return (
    <Container onClick={handleClick}>
      <Wrapper>
        <Text>Name:</Text>
        <Name>{name}</Name>
      </Wrapper>

      <Wrapper>
        <Text>Quantity:</Text>
        <Quantity>{quantity}</Quantity>
      </Wrapper>
      <Wrapper>
        <Text>Total amount:</Text>
        <Quantity>{`${(quantity * price) / 100}$`}</Quantity>
      </Wrapper>
    </Container>
  );
};

export default SingleOrder;
