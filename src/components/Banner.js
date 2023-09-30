import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const Banner = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const rotatingTexts = [''];

    const tick = () => {
      const i = rotationIndex % rotatingTexts.length;
      const fullText = rotatingTexts[i];

      let updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (isDeleting) {
        setTypingSpeed(prevTypingSpeed => prevTypingSpeed / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setRotationIndex(prevRotationIndex => prevRotationIndex + 1);
        setTypingSpeed(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRotationIndex(prevRotationIndex => prevRotationIndex + 1);
        setTypingSpeed(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentText, isDeleting, rotationIndex, typingSpeed]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>Hi! I'm {<span className="user-name"> Ruslana </span>}</h1>
            <p>
              I'm a full-stack developer passionate about developing elegant and
              efficient solutions to complex problems. With a keen eye for
              design and an insatiable thirst for new and interesting tasks, I
              always push the boundaries of what is possible. Whether it's
              creating elegant and intuitive user interfaces or solving
              interesting development tasks, I'm always up to the task.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
