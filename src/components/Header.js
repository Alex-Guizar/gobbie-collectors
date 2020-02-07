import React from 'react';
// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// Custom Components
import HeadSearch from './HeadSearch';

const Header = (props) => {
  const { searchCompanions } = props;

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Gobbie Collectors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="framework_drop" />
        <Navbar.Collapse id="framework_drop">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#minons">Minions</Nav.Link>
          </Nav>

          <HeadSearch searchCompanions={searchCompanions} />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
