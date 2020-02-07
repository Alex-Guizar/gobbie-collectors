import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// Bootstrap Components
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class HeadSearch extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/searchpage',
      search: `?string=${this.state.value}`
    });
  }

  componentDidMount() {
    // console.log(this.props.location.search);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    );
  }
}

export default withRouter(HeadSearch);
