import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
