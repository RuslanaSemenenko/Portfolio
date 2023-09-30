import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../img/github.png';
import navIcon2 from '../img/linkedin2.png';
import navIcon3 from '../img/instagram.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <p className="footer-logo">RS</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/RuslanaSemenenko">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/ruslana-semenenko/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://instagram.com/_katotochkaaa_?igshid=NTc4MTIwNjQ2YQ==">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p className="footer-text">Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
