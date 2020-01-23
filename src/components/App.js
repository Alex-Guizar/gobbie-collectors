import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './search/SearchPage';
import ItemPage from './ItemPage';

const XIVAPI = require('xivapi-js');
const xiv = new XIVAPI();

xiv.search("", {indexes: 'companion'}).then((response) => {
  // do something with the response
  console.log(response);
}).catch((error) => {
  // do something with the error
  console.log(error);
});

const searchCompanions = () => {
  xiv.search("wind-up").then((response) => {
    // do something with the response
    console.log(response);
  }).catch((error) => {
    // do something with the error
    console.log(error);
  });
}

const HomePage = () => {
  return <div>Home Page</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          <div className="container-fluid">
            <Route path="/" exact component={HomePage} />
            <Route path="/searchpage" exact component={SearchPage} />
            <Route path="/itempage" exact component={ItemPage} />
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
