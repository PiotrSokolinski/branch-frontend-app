import React from "react";

import { Container, Wrapper, Text, Label, Content } from "./styled";
import { Order } from "../../../types/Order";
import SingleProduct from "../../Dashboard/SingleProduct";

type OrderDetailsProps = {
  order: Order;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <Container>
      <SingleProduct
        product={order.products[0]}
        onClick={() => {}}
        withoutButton
        withoutStock
      />
      <Wrapper>
        <Content>
          <Label>UserId: </Label>
          <Text>{order.user_id}</Text>
        </Content>
        <Content>
          <Label>Created at:</Label>
          <Text>{order.created_at}</Text>
        </Content>
        <Content>
          <Label>Status:</Label>
          <Text>{order.status}</Text>
        </Content>
        <Content>
          <Label>Ordered:</Label>
          <Text>{order.products[0].stock}</Text>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default OrderDetails;
