import { useReducer, useState } from "react";
import { Cart } from "../Cart/Cart";
import {LoginModal} from "../LoginModal/LoginModal"
import * as S from "./styles";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../redux/root-reducer";
import { login, logout, userSlice } from "../../redux/UserReducer/user-slice";
import { Product, products, ProductsFiltred } from "../../data/Products";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: rootReducer) => rootReducer.userReducer
  );

  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const [showProduct, setShowProduct] = useState("");

  const isLogged = user !== null;

  const dispatch = useDispatch();

  function handleLoginButton() {

    setShowModal(!showModal)
    if (user === null) {
      dispatch(
        login({
          email: "lucas@emal.com",
          password: "senha",
          name: "Lucas",
          age: 20,
        })
      );
    } else {
      dispatch(logout({}));
    }
  }


  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.TitleHeader>MyShop</S.TitleHeader>
        <S.ButtonWrapper>
          <S.SearchBar
            placeholder="Digite aqui para buscar"
            value={showProduct}
            onChange={(event) => setShowProduct(event.target.value)}
          />
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
          <S.LoginButton onClick={handleLoginButton}>
            Login
            <FiLogIn />
          </S.LoginButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} />
      <LoginModal showModal={showModal}/>
    </S.StyledHeader>
  );
};
