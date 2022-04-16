import React from "react";
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import Pagebody from "./components/Pagebody";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Menubar />
    <Pagebody />
  </>
);
export default App;
