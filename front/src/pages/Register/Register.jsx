import Header from '../../components/header/Header';
import './Register.css';
import { useRegisterController } from '../../controllers/registerController';
import Modal from '../../components/modals/registerModal';
import { FaUser, FaEnvelope, FaLock, FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';

const menuRegister = [
  { label: 'LOGIN |', href: '/login' },
  { label: 'HOME |', href: '/' },
  { label: 'SOBRE', href: '/about' }
];

export const Register = () => {
  const response = useRegisterController();

  return (
    <>
      <Header menuItems={menuRegister} />
      <div className="register">
        <h2>Crie sua conta</h2>
        <div className="form">
          <form onSubmit={response.handleSubmit}>
            <div className="itens">
              <div className="input-container">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={response.name}
                  onChange={(e) => response.setName(e.target.value)}
                />
              </div>
              <p className="error-message">{response.errorMessageName}</p>
            </div>

            <div className="itens">
              <div className="input-container">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
              <div className="input-container">
                <FaKey className="icon" />
                <input
                  type="text"
                  name="accessCode"
                  placeholder="Código de acesso"
                  value={response.accessCode}
                  onChange={(e) => response.setAccessCode(e.target.value)}
                />
              </div>
              <p className="error-message">{response.errorMessageAccessCode}</p>
            </div>

            <button type="submit" disabled={response.showSuccessModal}>ENVIAR</button>
          </form> 
          {response.showSuccessModal && <Modal onClose={response.handleModalClose} />}
        </div>
      </div>
    </>
  );  
};

export default Register;
