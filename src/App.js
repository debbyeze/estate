import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Properties from './components/Properties';
import NoPage from './components/NoPage';
import ErrorPage from './components/error-page';
import Overview from './components/Overview';
import Contact from './components/Contact/index.js';
import Search from './components/Search/index.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/properties" element={<Properties />} />
             <Route path="/properties/:search" element={<Search />} />
            <Route path="/properties/property/:id" element={<Overview />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
