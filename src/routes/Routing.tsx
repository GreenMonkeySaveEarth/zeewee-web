import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import AllDrinks from '@/pages/AllDrinks';
import DrinkDetails from '@/pages/DrinkDetails';
import SiteLayout from '@/components/SiteLayout';

const Routing = () => {
  return (
    <SiteLayout>
      <Routes>
        <Route path="*" element={<AllDrinks />} />
        <Route path="/cocktails/:id" element={<DrinkDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </SiteLayout>
  );
};

export default Routing;
