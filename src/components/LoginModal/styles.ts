import styled from "styled-components";

interface LoginModalProps{
  showModal:boolean
}
export const Body = styled.div<LoginModalProps>`
width: 100%;
height: 100vh;
  filter: blur(5px);
  transition: filter 0.3s;
  display: ${(props)=>props.showModal ? "block" : "none"};;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const ModalWrapper = styled.div<LoginModalProps>`
  width: 40%;
  height: 40rem;
  position: fixed;
  top: 5rem;
  left: ${(props)=>props.showModal ? "30%" : "100%"};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10rem 2rem;
  border-radius: 8px;
  justify-content: space-around;
  transition: all 0.5s;
  z-index: 999;
border: solid 2px #2c2c2c;
`
export const ModalTitle = styled.h1``
export const ModalLabel = styled.label``
export const ModalInput = styled.input`
  height: 2.5rem;
  padding: 0 2rem;
  border-radius: 5px;
  
`
export const LoginButton = styled.button`
  background-color: #2c2c2c;
  color: #fff;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover{
    transform: translateY(-2px);
  }
`
