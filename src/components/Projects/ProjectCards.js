import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Container untuk tombol - DITENGAH */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          {/* Tombol GitHub/Blog - SELALU MUNCUL */}
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="d-flex align-items-center px-4 py-2"
            style={{ minWidth: "120px" }}
          >
            <BsGithub className="me-2" size={18} />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Tombol Demo - HANYA KALAU ADA demoLink */}
          {props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
              className="d-flex align-items-center px-4 py-2"
              style={{ minWidth: "120px" }}
            >
              <CgWebsite className="me-2" size={18} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;