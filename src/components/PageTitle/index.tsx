import React from "react";

import { Header } from "./styled";

type PageTitleProps = {
  children: React.ReactChild;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default PageTitle;
