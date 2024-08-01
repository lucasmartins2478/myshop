import styled from "styled-components";

interface ContainerProps {
  showCart:boolean
}

export const CartContainer = styled.aside<ContainerProps>`
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${(props)=> props.showCart ? "0" : "-350px"};
  background-color: #fff;
  padding: 2rem;
  transition: ease-in-out 0.3s;
  box-shadow: -5px 0 15px rgba(0,0,0,0.25);
`

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CartTitle = styled.h1``
export const CloseCartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    transform: translateY(-2px);
  }
`
export const TotalCart = styled.p``

export const CartProductsList = styled.ul``

export const CartProductItem = styled.li``

export const RemoveFromCartButton = styled.button`
  background-color: transparent;
  font-size: 1rem;
  border: none;
`

