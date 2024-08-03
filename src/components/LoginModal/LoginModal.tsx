import * as S from "./styles";

interface LoginModalProps {
  showModal: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = ({ showModal }) => {
  return (
    <>
      <S.ModalWrapper showModal={showModal}>
        <S.ModalTitle>Login</S.ModalTitle>
        <S.ModalLabel>Email</S.ModalLabel>
        <S.ModalInput placeholder="Digite seu email" />
        <S.ModalLabel>Senha</S.ModalLabel>
        <S.ModalInput placeholder="Digite sua senha" />
        <S.LoginButton>Login</S.LoginButton>
      </S.ModalWrapper>
      <S.Body showModal={showModal}></S.Body>
    </>
  );
};
