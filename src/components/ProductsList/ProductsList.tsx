import { ProductCard } from "../ProductCard/ProductCard"
import {products} from "../../data/Products"
import * as S from "./styles"

export const ProductsList:React.FC = ()=>{
  return(
    <S.Container>
      {products.map((product)=>
        <ProductCard key={product.id} product={product}/>
      )}
    </S.Container>
  )
}