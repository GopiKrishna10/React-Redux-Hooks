import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetail';
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductList}/>
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 Not FOund</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
