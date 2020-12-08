import React from "react";
import data from "./data";
import Product from './components/Product'

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <a className="brand" href="/">
          Amazona
        </a>
        <div>
          <a href="/cart">cart</a>
          <a href="/signin">sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
