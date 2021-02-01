import React from "react";
import dayjs from "dayjs";
import get from "lodash/get";
import { Container, Wrapper, Text, Label, Content } from "./styled";
import { Order } from "../../../types/Order";
import SingleProduct from "../../Dashboard/SingleProduct";

type OrderDetailsProps = {
  order: Order;
};

const getStatus = (status: number): string => {
  switch (status) {
    case 1:
      return "Awaiting confirmation";
    case 2:
      return "Cancelled";
    case 3:
      return "Awaiting Shipment";
    case 4:
      return "Shipped";
    default:
      return "Unknown";
  }
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
          <Text>{dayjs(order.created_at).format("DD-MM-YYYY")}</Text>
        </Content>
        <Content>
          <Label>Status:</Label>
          <Text>{getStatus(order.status)}</Text>
        </Content>
        <Content>
          <Label>Ordered:</Label>
          <Text>{order.products[0].quantity}</Text>
        </Content>
        <Content>
          <Label>Total amount:</Label>
          <Text>{`${
            (get(order, "products[0].quantity", 0) * order.products[0].price) /
            100
          }$`}</Text>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default OrderDetails;
