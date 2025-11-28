import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { ImPointRight } from "react-icons/im";
import { BsBuilding, BsCalendar3, BsGeoAlt } from "react-icons/bs";

function ExperienceCard({
  company,
  role,
  duration,
  location,
  type,
  description,
  skills,
  logo,
}) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        {/* Company Logo & Header */}
        <div className="d-flex align-items-center mb-3">
          {logo && (
            <img
              src={logo}
              alt={company}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "10px",
                marginRight: "15px",
                objectFit: "cover",
              }}
            />
          )}
          <div>
            <Card.Title className="purple">{role}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <BsBuilding className="me-2" />
              {company}
            </Card.Subtitle>
          </div>
        </div>

        {/* Info Badges */}
        <div className="mb-3">
          <Badge bg="primary" className="me-2">
            <BsCalendar3 className="me-1" />
            {duration}
          </Badge>
          <Badge bg="info" className="me-2">
            <BsGeoAlt className="me-1" />
            {location}
          </Badge>
          <Badge bg="success">{type}</Badge>
        </div>

        {/* Description */}
        <Card.Text>
          <ul style={{ textAlign: "left" }}>
            {description.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <ImPointRight className="purple me-2" />
                {item}
              </li>
            ))}
          </ul>
        </Card.Text>

        {/* Skills */}
        <div className="mt-3">
          <strong className="purple">Tech Stack: </strong>
          <div className="mt-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                bg="dark"
                className="me-2 mb-2"
                style={{
                  fontSize: "0.85rem",
                  padding: "6px 12px",
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
