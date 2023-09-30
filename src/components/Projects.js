import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../img/Photo-1.jpg';
import projImg2 from '../img/Photo-2.jpg';
import projImg3 from '../img/Photo-3.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Photo-Studio',
      description: '',
      imgUrl: projImg1,
      url: 'https://ruslanasemenenko.github.io/Photo-Studio/',
    },
    {
      id: 2,
      title: 'Phonebook',
      description: '',
      imgUrl: projImg2,
      url: 'https://ruslanasemenenko.github.io/goit-react-hw-08-phonebook/',
    },
    {
      id: 3,
      title: 'Movies',
      description: '',
      imgUrl: projImg3,
      url: 'https://ruslanasemenenko.github.io/goit-react-hw-05-movies/',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p className="project-text">
                    In this section, you can familiarize yourself with my
                    projects, as well as get to know me.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">About me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">My true passion</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, id) => {
                            return <ProjectCard key={id} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p className="project-text">
                          My name is Ruslana, and I, like most of you, decided
                          to change my life by 180 degrees, so I chose this path
                          and I am sure that I will follow it to the end. By a
                          mystical path, I came to Front-end, and it fascinated
                          me so much that I decided to master a new profession.
                          What motivates me the most is not the salary, but the
                          opportunity to conquer new heights, meet new people,
                          and have a stable job for years, regardless of age.
                          The second syllable is my initials, Ruslana Semenenko.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="project-text">
                          As I gazed upon the web page I had just finished
                          designing, a sense of pride and fulfillment washed
                          over me. There's something about web development that
                          just clicks with me - the endless possibilities, the
                          creative freedom, the challenge of problem-solving.
                          It's more than just a job or a hobby; it's a passion
                          that consumes me. Day and night, I spend hours
                          perfecting my craft. I immerse myself in coding
                          tutorials, experimenting with different technologies,
                          and brainstorming new ideas. I'm always striving to
                          learn more, to stay on top of the latest trends and
                          best practices, and to push myself to be the best web
                          developer I can be. It's not always easy - there are
                          times when I hit roadblocks and feel frustrated, or
                          when I have to put in long hours to meet a deadline.
                          But even then, I'm fueled by my love for web
                          development and the satisfaction of creating something
                          from scratch. To others, it may seem like just another
                          job, but to me, it's a way of life. It's a calling
                          that I'm grateful to have discovered, and I know I'll
                          be doing this for years to come. After all, when you
                          find something that you're truly passionate about,
                          it's not just a job - it's a part of who you are.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
