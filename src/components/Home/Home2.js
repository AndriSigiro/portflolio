import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "../../App.css";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with coding since the day I wrote my first program,
              and since then I’ve been continuously improving my skills and
              building meaningful projects. 🚀
              <br />
              <br />
              I have strong experience in languages like
              <i>
                <b className="purple"> PHP, Dart, JavaScript, and Go</b>.
              </i>
              <br />
              <br />
              My main interests include creating
              <i>
                <b className="purple"> Web Applications, Mobile Apps, IoT Systems, </b>
              </i>
              and exploring modern topics like
              <i>
                <b className="purple"> Cloud Computing.</b>
              </i>
              <br />
              <br />
              I enjoy developing products using
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript frameworks </b>
              </i>
              such as
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />
              I also have experience in building real-time applications, API
              services, and automation tools, and I’m passionate about learning
              new technologies to level up my craft.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="/images/profil.jpg"
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AndriSigiro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andri-sigiro-6620722b2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/andri_exaudi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
