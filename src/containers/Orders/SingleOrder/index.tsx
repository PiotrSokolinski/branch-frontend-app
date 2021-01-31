import React from "react";

import { Container, Name, Wrapper, Quantity, Text } from "./styled";
import { Order } from "../../../types/Order";

type SingleOrderProps = {
  name: string;
  quantity: number;
  order: Order;
  onClick: (order: Order) => void;
};

const SingleOrder: React.FC<SingleOrderProps> = ({
  onClick,
  name,
  quantity,
  order,
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
    </Container>
  );
};

export default SingleOrder;
