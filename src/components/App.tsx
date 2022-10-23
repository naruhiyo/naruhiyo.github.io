import Top from '@src/components/Top';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
