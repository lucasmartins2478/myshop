import React from "react";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
