import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Container, Wrapper } from "./styled";
import PageTitle from "../../components/PageTitle";
import { Product } from "../../types";
import SingleProduct from "./SingleProduct";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
import { OrderProduct } from "./OrderProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectError,
  selectLoading,
  getProducts,
} from "../../redux/products";
import { StyledError } from "../RegisterForm/styled";

const Dashboard: React.FC = () => {
  const dispatch: any = useDispatch();
  const loading: boolean = useSelector(selectLoading);
  const error: string = useSelector(selectError);
  const products: Product[] = useSelector(selectProducts);
  const [product, setProduct] = useState({
    id: 1,
    name: "Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 10000,
    stock: 100,
  });
  const { isOpened, openModal, closeModal } = useModal();

  const handleClick = (product: Product) => {
    setProduct(product);
    openModal();
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (error) return <StyledError>{error}</StyledError>;

  if (loading) return <div>loading...</div>;

  return (
    <>
      <Modal visible={isOpened} onClose={closeModal}>
        <OrderProduct product={product} closeModal={closeModal} />
      </Modal>
      <Container>
        <PageTitle>Products</PageTitle>
        <Wrapper>
          {products.map((product: Product) => (
            <SingleProduct product={product} onClick={handleClick} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
