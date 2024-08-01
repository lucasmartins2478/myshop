import * as S from "./styles";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Product } from "../../data/Products";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../redux/root-reducer";
import { addToCart, removeFromCart } from "../../redux/CartReducer/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: rootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const isProductOnCart =
    cart.find((productOncart) => product.id === productOncart.id) !== undefined;

  function handleAddToCartButton() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCartButton() {
    dispatch(removeFromCart(product));
  }

  return (
    <S.CardWrapper>
      <S.ProductImage
        src={product.image}
        alt={product.description}
      ></S.ProductImage>
      <S.ProductInfo>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.PriceRateWrapper>
          <S.ProductRate>{product.rating.rate}</S.ProductRate>
          <S.ProductPrice>R${product.price}</S.ProductPrice>
        </S.PriceRateWrapper>
        <S.ButtonWrapper>
          {isProductOnCart ? (
            <S.RemoveFromCartButton onClick={handleRemoveFromCartButton}>
              Remover do carrinho
            </S.RemoveFromCartButton>
          ) : (
            <S.AddToCartButton onClick={handleAddToCartButton}>
              Adicionar ao carrinho
            </S.AddToCartButton>
          )}

          <S.AddToFavoriteButton>
            <FaRegHeart />
          </S.AddToFavoriteButton>
        </S.ButtonWrapper>
      </S.ProductInfo>
    </S.CardWrapper>
  );
};
