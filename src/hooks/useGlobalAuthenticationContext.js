import { useContext } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext';

export const useGlobalAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
