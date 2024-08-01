import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 40rem;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
`
export const ProductImage = styled.img`
  width: 250px;
  height: 300px;
  object-fit: contain;
  
`
export const ProductInfo = styled.div`
  width: 100%;
  height:14rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
`
export const ProductTitle = styled.h1`
  font-size: 1.25rem;
`
export const PriceRateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`
export const ProductRate = styled.p``
export const ProductPrice = styled.p`
  font-weight: 600;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`
export const AddToCartButton = styled.button`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
`
export const AddToFavoriteButton = styled.button`
  width: 3rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
`

export const RemoveFromCartButton = styled.button`
  width: 100%;
  height: 2.5rem;
  display: flex;
  background-color: #2c2c2c;
  color: #fff;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  

`

 