import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Coming to my skills I know CSS, HTML, JS. Also, I have mastered
                React and Node.js. <br></br>I have been coding for 10 months and
                during this time I have done 3 successful team projects and 7
                individual ones.<br></br>
                Due to this I am good at core technical skills, organizational
                ethics and discipline.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>HTML</h5>
                  <p>90%</p>
                </div>
                <div className="item">
                  <h5>Java Script</h5>
                  <p>80%</p>
                </div>
                <div className="item">
                  <h5>React</h5>
                  <p>85%</p>
                </div>
                <div className="item">
                  <h5>SASS</h5>
                  <p>85%</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
