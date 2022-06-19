import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleProvider from "./context/ArticleContext";
import DetailArticlePage from "./pages/DetailArticlePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <ArticleProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/article/:id" element={<DetailArticlePage />} />
        </Routes>
      </div>
    </ArticleProvider>
  );
}

export default App;
