import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import ItemPage from './ItemPage';

const HomePage = () => {
  return <div>Home Page</div>;
};

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact component={HomePage} />
          <Route path="/searchpage" exact component={SearchPage} />
          <Route path="/itempage" exact component={ItemPage} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
