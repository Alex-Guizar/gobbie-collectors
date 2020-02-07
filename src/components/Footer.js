import React from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer>
      <Container fluid className="text-center">
        <div>Gobbie Collectors</div>
        <div><a href="https://www.twitter.com/">@GobbieCollectors</a> <a href="https://www.github.com/">Github</a></div>
        <div>Disclaimers</div>
        <div>&copy; Gobbie Collectors</div>
        <div>Final Fantasy XIV &copy; 2010 - 2019 SQUARE ENIX CO., LTD. All Rights Reserved.</div>
      </Container>
    </footer>
  );
};

export default Footer;
