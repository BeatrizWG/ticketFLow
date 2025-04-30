import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessageEmail('');
    setErrorMessagePassword('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', 
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error?.toLowerCase().includes('email')) {
          setErrorMessageEmail(data.error);
        } else if (data.error?.toLowerCase().includes('password')) {
          setErrorMessagePassword(data.error);
        } else {
          alert(data.error || 'Unknown error occurred');
        }
        return;
      }
      navigate('/');

    } catch (error) {
      console.error('Error logging in:', error);
      alert('Network error or server down');
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    errorMessageEmail,
    errorMessagePassword,
    handleSubmit
  };
};
