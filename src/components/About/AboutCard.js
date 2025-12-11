import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Andri Agung Exaudi Sigiro</span> from{" "}
            <span className="purple">Samosir, Sumatera Utara - Indonesia</span>.
            <br />
            I am currently a student at Institut Teknologi Del, pursuing my
            degree in Information Technology.
            <br />
            I have hands-on experience in{" "}
            <b className="purple">Full-Stack Development, Mobile Development, IoT Systems,</b>{" "}
            and building modern, efficient, and scalable applications.
            <br />
            I enjoy working with technologies like{" "}
            <b className="purple">React, Node.js, Flutter, Go, PHP, and Cloud Services.</b>
            <br />
            <br />
            Apart from coding, here are a few activities I genuinely enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Futsal
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs & Documentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies & Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Talks & Conferences
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Andri Sigiro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
