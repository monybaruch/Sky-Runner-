import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../components/index.js';

const RootLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
