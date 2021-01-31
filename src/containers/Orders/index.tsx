import React, { useEffect, useState } from "react";

import { Container, Wrapper } from "./styled";
import PageTitle from "../../components/PageTitle";
import { Order } from "../../types/Order";
import SingleOrder from "./SingleOrder";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
import OrderDetails from "./OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersRequest,
  selectError,
  selectLoading,
  selectOrders,
} from "../../redux/orders";
import { StyledError } from "../RegisterForm/styled";

type OrdersProps = {};

const Orders: React.FC<OrdersProps> = () => {
  const dispatch: any = useDispatch();
  const loading: boolean = useSelector(selectLoading);
  const error: string = useSelector(selectError);
  const orders: Order[] = useSelector(selectOrders);
  const [order, setOrder] = useState({
    id: 1,
    user_id: 1,
    created_at: "eee",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 10000,
        stock: 100,
      },
    ],
  });

  const { isOpened, openModal, closeModal } = useModal();

  const handleClick = (order: Order) => {
    setOrder(order);
    openModal();
  };

  useEffect(() => {
    // dispatch(getOrdersRequest({}));
  }, []);

  if (error) return <StyledError>{error}</StyledError>;

  if (loading) return <div>loading...</div>;
  return (
    <>
      <Modal visible={isOpened} onClose={closeModal}>
        <OrderDetails order={order} />
      </Modal>
      <Container>
        <PageTitle>Orders</PageTitle>
        <Wrapper>
          {orders.map((order: Order) => (
            <SingleOrder
              order={order}
              name={order.products[0].name}
              quantity={order.products[0].stock}
              onClick={handleClick}
            />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Orders;
