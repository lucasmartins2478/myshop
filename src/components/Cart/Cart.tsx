import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../redux/root-reducer";
import * as S from "./style";
import { IoClose, IoTrash } from "react-icons/io5";
import { removeFromCart } from "../../redux/CartReducer/cart-slice";


interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: rootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch()

  let total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  function handleRemoveFromCartButton(){
    dispatch(removeFromCart({
      
    }))
  }

  return (
    <S.CartContainer showCart={showCart}>
      <S.CartHeader>
        <S.CartTitle>Carrinho</S.CartTitle>
        <S.CloseCartButton>
          <IoClose />
        </S.CloseCartButton>
      </S.CartHeader>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            {product.title}
            <S.RemoveFromCartButton onClick={handleRemoveFromCartButton}>
              <IoTrash></IoTrash>
            </S.RemoveFromCartButton>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.TotalCart>Total R$ {total}</S.TotalCart>
    </S.CartContainer>
  );
};
