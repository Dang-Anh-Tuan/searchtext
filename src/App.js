import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailArticlePage from "./pages/DetailArticlePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/article/:id" element={<DetailArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
