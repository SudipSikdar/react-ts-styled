import styled from "styled-components";
import { PageText as MenuText } from "../helper/PageText";
import { PageItemWrapper as MenuItemWrapper } from "../helper/PageItemWrapper";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0.3em;
  background-color: #232f3e;
`;

export const Text = styled(MenuText)`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
  margin-right: 1em;
  border: 1 px solid #232f3e;
  padding: 0.5em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1 px solid #ffffff;
    border-radius: 0.2em;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const LeftText = styled(Text)`
  @media (max-width: 850px) {
    display: block;
  }
`;

export const Wrapper = styled(MenuItemWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
`;
