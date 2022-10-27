import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'

//COMPONENT
import Header from './header'
import Footer from './footer'
import Home from './home'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </>
    )
  }
}

export default App;
