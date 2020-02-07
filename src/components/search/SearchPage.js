import React, { Component } from 'react';
import SearchCell from './SearchCell';
import SearchFilter from './SearchFilter';

const XIVAPI = require('xivapi-js');
const xiv = new XIVAPI();

class SearchPage extends Component {
  state ={
    respArray: []
  }

  handleQuery(query) {
    console.log(query);
  }

  searchCompanions(textValue) {
    const queryBody = {
      "query": {
        "bool": {
          "must": [
            {
              "wildcard": {
                "NameCombined_en": `*${textValue}*`
              }
            }
          ]
        }
      },
      "from": 0,
      "size": 50
    };

    const searchParams = {
      "indexes": "companion",
      "columns": "Name,ID",
      "body": queryBody
    };

    xiv.search(searchParams).then((response) => {
      // do something with the response
      this.setState({
        respArray: response.Results
      });
      console.log(response);
    }).catch((error) => {
      // do something with the error
      console.log(error);
    });
  }

  componentDidMount() {
    this.searchCompanions('sword');
  }

  render() {
    return (
      <div>
        <div>Search Page</div>
        { this.state.respArray.map((item, index) =>
          <SearchCell
            name={item.Name}
            key={item.ID}
          />
        ) }
        <SearchCell />
        <SearchFilter />
      </div>
    );
  }
};

export default SearchPage;
