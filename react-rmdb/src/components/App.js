import React from "react";
import Header from "./elements/Header";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Home />
    <GlobalStyle />
  </>
);

export default App;

// 1. JSX is syntactic sugar for React.createElement
// 2. JSX can self close.
// 3. User defined components should start with a capital letter.
// 4. You can user JS expressions inside of JSX.
// 5. You can nest components just like in HTML.
// 6. Nested content can be accessed in props.children
