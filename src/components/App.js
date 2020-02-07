import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './search/SearchPage';
import ItemPage from './ItemPage';

const HomePage = () => {
  return <div>Home Page</div>;
};
class App extends Component {
  state = {
    searchResponse: ''
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header searchCompanions={this.searchCompanions} />

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
  }
};

export default App;
