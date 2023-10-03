import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGlobalAuthenticationContext } from './useGlobalAuthenticationContext';

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useGlobalAuthenticationContext;
  const [errors, setErrors] = useState({
    name: null,
    password: null,
  });

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isLogInValid = true;
    const newErrors = {};

    if (formData.name.trim().length === 0) {
      newErrors.name = 'Please enter a value for the name field.';
      isLogInValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = 'try again! must insert at least 3 characters in the name field!';
      isLogInValid = false;
    }
    if (formData.password.trim().length === 0) {
      newErrors.password = 'Please enter a value for the name field.';
      isLogInValid = false;
    } else if (formData.name.length < 6) {
      newErrors.password = 'try again! must insert at least 6 characters in the password field!';
      isLogInValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      login(formData);
      navigate('/');
    }
  };
  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
