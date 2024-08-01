import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  background-color: #2c2c2c;
`
export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TitleHeader = styled.h1`
  color: #fff;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 6rem;
`
export const CartButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  gap: 4px;
  transition: all 0.2s;

  &:hover{
    transform: translateY(-2px);
  }
`
export const LoginButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  gap: 4px;
  transition: all 0.2s;

  &:hover{
    transform: translateY(-2px);
  }
`

