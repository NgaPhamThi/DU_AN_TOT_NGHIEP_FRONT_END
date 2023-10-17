import { Routes, Route } from "react-router-dom";
import "./App.css";
import UsersLayout from "./components/Layout/UsersLayout";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import PayPage from "./Pages/PayPage";
import CartPage from "./Pages/CartPage";
import BlogPage from "./Pages/BlogPage";
import Login from "./Pages/Login";
import Admin from "./components/Layout/Admin";
import Dashboard from "./Pages/Admin/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />

        </Route>
        <Route path="/admin" element={<Admin/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
