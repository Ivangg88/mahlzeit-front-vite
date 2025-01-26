import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewRecipePage from "./pages/NewRecipePage/NewRecipePage";
import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const user = { isLogged: true };
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<NotFoundPage error={true} />} />
          <Route path="*" element={<NotFoundPage error={false} />} />
          <Route
            path="/create"
            element={
              user.isLogged ? <NewRecipePage /> : <NotFoundPage error={false} />
            }
          />
          <Route
            path="/myreciptes"
            element={
              user.isLogged ? <MyRecipesPage /> : <NotFoundPage error={false} />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
