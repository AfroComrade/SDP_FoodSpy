import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from './pages/Pages';


class App extends Component {
  render() {
  return (
    <div >
    <BrowserRouter>
        <Pages />
    </BrowserRouter>
    </div>
  );
}
}

export default App;