import { Routes, Route } from "react-router-dom";
import "./App.css";
import UsersLayout from "./components/Layout/UsersLayout";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
