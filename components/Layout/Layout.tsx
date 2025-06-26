import React from "react";
import Header from "components/Header";
import Container from "@mui/material/Container";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default Layout;
