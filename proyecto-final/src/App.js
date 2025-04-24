import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import VideosPage from './components/VideosPage';
import DocumentsPage from './components/DocumentsPage';
import AminoPhrasesPage from './components/AminoPhrasesPage';
import './styles/App.css'; // Importaremos estilos generales más adelante

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/documentos" element={<DocumentsPage />} />
            <Route path="/frases" element={<AminoPhrasesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



