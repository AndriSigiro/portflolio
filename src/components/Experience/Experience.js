import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";

// Import LOCAL LOGOS
import bemItdelLogo from "../../Assets/Experience/bem.png";
import winnicode from "../../Assets/Experience/winnicode.jpg";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <div style={{ paddingTop: "50px" }}>
          <h1 className="project-heading">
            My Professional <strong className="purple">Journey </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my work experiences and internships that shaped my career.
          </p>
        </div>

        {/* Timeline View */}
        <ExperienceTimeline />

        {/* Card View */}
        <h2 className="project-heading" style={{ marginTop: "50px" }}>
          <strong className="purple">Detailed </strong>Experience
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
              company="PT . WINNICODE GARUDA TEKNOLOGI"
              role="Web Developer (Internship)"
              duration="Jan 2025 - Jun 2025"
              location="Jakarta, Indonesia"
              type="Full-time"
              description={[
                "Developed and maintained scalable web applications using Laravel 10+ and React.js",
                "Built robust RESTful APIs with Laravel, MySQL, and Redis caching",
                "Implemented Laravel authentication with Sanctum, Passport, and role-based access control",
                "Created real-time features using Laravel Broadcasting, Pusher, and WebSockets",
                "Optimized application performance by 40% through Laravel Queue, Eloquent optimization, and CDN",
              ]}
              skills={[
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Docker",
              ]}
              logo={winnicode} // ✅ LOCAL LOGO
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              company="BEM IT DEL"
              role="Full Stack Developer Intern"
              duration="Sep 2025 - Dec 2025"
              location="Toba, Indonesia"
              type="Freelance"
              description={[
                "Developed BEM IT DEL website using React.js and Next.js 14",
                "Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG)",
                "Built authentication system with NextAuth.js and user management",
                "Created voting system, announcements, and member management features",
                "Integrated PostgreSQL database using Prisma ORM",
                "Designed responsive UI with Tailwind CSS",
                "Deployed to Vercel with CI/CD pipeline and SEO optimization",
              ]}
              skills={[
                "React.js",
                "Next.js 14",
                "Prisma",
                "PostgreSQL",
                "Tailwind CSS",
                "Vercel",
              ]}
              logo={bemItdelLogo} // ✅ LOCAL LOGO (GANTI DARI URL)
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
