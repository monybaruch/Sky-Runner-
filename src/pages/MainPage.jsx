import { Route } from 'react-router-dom';
import { LoginForm, Footer, NavBar } from '../components/index';

const MainPage = () => {
  return (
    <main>
      <NavBar />
      <LoginForm />
      <Footer />
    </main>
  );
};
export default MainPage;
