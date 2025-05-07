import React, { useState } from 'react';
import Header from '../../components/header/Header';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useLoginController } from '../../controllers/LoginController';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const menuLogin = [
  { label: "HOME |", href: "/" },
  { label: "SOBRE", href: "/about" }
];

export const Login = () => {
  const response = useLoginController();

  return (
    <>
      <Header menuItems={menuLogin} />
      <div className='login'>
        <h2>Acesse sua conta</h2>
        <div className='formLogin'>
          <form onSubmit={response.handleSubmit}>
            <div className="itens">
              <div className="input-container">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={response.email}
                  onChange={(e) => response.setEmail(e.target.value)}
                />
              </div>
              <p className="error-message">{response.errorMessageEmail}</p>
            </div>

            <div className="itens">
              <div className="input-container">
                <FaLock className="icon" />
                <input
                  type={response.showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={response.password}
                  onChange={(e) => response.setPassword(e.target.value)}
                />
                <span onClick={response.togglePasswordVisibility} className="eye-icon">
                  {response.showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p className="error-message">{response.errorMessagePassword}</p>
            </div>

            <div className="itens">
              <Link to="/forgetPassword" className="right-link">Esqueci a senha</Link>
            </div>

            <button type="submit">
              ENVIAR
            </button>

            <div className="itens">
              <Link to="/register" className="left-link">Não tem conta? <strong>Cadastre-se</strong></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;