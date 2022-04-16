import React from "react";
import { Menu } from "@material-ui/icons";

import { Container, Wrapper, Text, LeftText } from "./styles";

const Menubar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper>
          <Menu />
          <Text>All</Text>
        </Wrapper>
        <Wrapper>
          <Text>Today's Deals</Text>
          <Text>Customer Servicde</Text>
          <Text>Gift Cards</Text>
          <Text>Sell</Text>
          <Text>Registry</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <LeftText>Amazon's Response to Covid-19</LeftText>
      </Wrapper>
    </Container>
  );
};

export default Menubar;
