import React from 'react';
import Header from '../../components/header/Header';
import './Register.css';
import { useRegisterController } from '../../controllers/registerController';
import Modal from '../../components/modals/registerModal';

const menuRegister = [
  { label: 'LOGIN |', href: '' },
  { label: 'HOME |', href: '/' },
  { label: 'SOBRE', href: '' }
];

export const Register = () => {
  const response = useRegisterController();

  const handleModalClose = () => {
    response.setShowSuccessModal(false);
    window.location.href = '/login'; 
  };

  return (
    <>
      <Header menuItems={menuRegister} />
      <div className="register">
        <h2>FAÇA SEU CADASTRO</h2>
        <div className="form">
          <form onSubmit={response.handleSubmit}>
            <div className="itens">
              <span>Nome de Usuário: </span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={response.name}
                onChange={(e) => response.setName(e.target.value)}
              />
              <p className="error-message">{response.errorMessageName}</p>
            </div>
            <div className="itens">
              <span>Email: </span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={response.email}
                onChange={(e) => response.setEmail(e.target.value)}
              />
              <p className="error-message">{response.errorMessageEmail}</p>
            </div>
            <div className="itens">
              <span>Digite sua senha: </span>
              <input
                type="password"
                name="password"
                placeholder="Digite a senha"
                value={response.password}
                onChange={(e) => response.setPassword(e.target.value)}
              />
              <p className="error-message">{response.errorMessagePassword}</p>
            </div>
            <div className="itens">
              <span>Código de acesso: </span>
              <input
                type="text"
                name="accessCode"
                placeholder="Digite o código de acesso"
                value={response.accessCode}
                onChange={(e) => response.setAccessCode(e.target.value)}
              />
              <p className="error-message">{response.errorMessageAccessCode}</p>
            </div>
            <button type="submit" disabled={response.showSuccessModal}>ENVIAR</button>
          </form> 
          {response.showSuccessModal && <Modal onClose={handleModalClose} />}
        </div>
      </div>
    </>
  );  
};

export default Register;
