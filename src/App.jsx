import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { LoginForm, Products } from './components/index.js';
import RootLayout from './layouts/RootLayout.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Products />} />
      <Route path="login" element={<LoginForm />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
