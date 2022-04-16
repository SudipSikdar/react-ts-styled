import React from "react";
import logo from "../assets/images/logo.png";
import flag from "../assets/images/flag.png";

import {
  Container,
  Logo,
  Flag,
  Text,
  Wrapper,
  Searchbox,
  Select,
  SearchIconWrapper,
} from "./styles";

import {
  ShoppingCartOutlined,
  SearchOutlined,
  ArrowDropDown,
  RoomOutlined,
} from "@material-ui/icons";

const Navbar: React.FC = () => (
  <>
    <Container>
      <Logo src={logo} />
      <Wrapper flexDirection="row" alignItems="center">
        <RoomOutlined />

        <Wrapper>
          <Text fontSize=".7em">Deliver In</Text>
          <Text>Nigeria</Text>
        </Wrapper>
      </Wrapper>

      <Select>
        <option value="All">All</option>
      </Select>
      <Searchbox />
      <SearchIconWrapper>
        <SearchOutlined />
      </SearchIconWrapper>

      <Wrapper flexDirection="row" alignItems="flex-start">
        <Flag src={flag} />
        <ArrowDropDown />
      </Wrapper>
      <Wrapper>
        <Text fontSize=".7em">Hello, Sign in</Text>
        <Wrapper flexDirection="row" alignItems="center">
          <Text>Account & Lists </Text>
          <ArrowDropDown />
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Text fontSize=".7em">Returns</Text>
        <Text>& Orders</Text>
      </Wrapper>

      <Wrapper flexDirection="row" alignItems="center">
        <Wrapper alignItems="center">
          <Text color="#ff9900">0</Text>
          <ShoppingCartOutlined />
        </Wrapper>

        <Text>Cart</Text>
      </Wrapper>
    </Container>
  </>
);

export default Navbar;
