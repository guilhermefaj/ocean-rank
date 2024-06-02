import GlobalStyle from "./globalStyle";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemsPage from "./pages/ProblemsPage";
import StudiesPage from "./pages/StudiesPage";
import SolutionPage from "./pages/SolutionPage";
import RankPage from "./pages/RankPage";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problema" element={<ProblemsPage />} />
          <Route path="/estudos" element={<StudiesPage />} />
          <Route path="/solucao" element={<SolutionPage />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
