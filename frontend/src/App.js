import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screents/HomeScreen'
import ProductScreen from './screents/ProductScreen'
import CartScreen from './screents/CartScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen}  />
          <Route path="/cart/:id?" component={CartScreen}  />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
