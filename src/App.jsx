import GlobalStyle from "./globalStyle";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemsPage from "./pages/ProblemsPage";
import StudiesPage from "./pages/StudiesPage";
import SolutionPage from "./pages/SolutionPage";
import RankPage from "./pages/RankPage";
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer";
import NotFoundPage from "./pages/404";
import DoacaoPage from "./pages/DoacaoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problema" element={<ProblemsPage />} />
          <Route path="/pesquisa" element={<StudiesPage />} />
          <Route path="/solucao" element={<SolutionPage />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/doacao" element={<DoacaoPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Rota catch-all */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
