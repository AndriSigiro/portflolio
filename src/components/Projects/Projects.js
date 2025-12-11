import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/desa.png";
import emotion from "../../Assets/Projects/Ta.png";
import editor from "../../Assets/Projects/diary.png";
import chatify from "../../Assets/Projects/church.png";
import suicide from "../../Assets/Projects/bem.png";
import bitsOfCode from "../../Assets/Projects/cafe.jpg";
import monitor from "../../Assets/Projects/monitor.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Church Management System"
              description="This church management system, built using Laravel, is designed to support congregation maintenance, service administration, worship scheduling, and overall church finances. It offers comprehensive features such as member data collection, attendance tracking, service and liturgy management, small group management, and announcements of church publications and activities. Furthermore, the system features a financial module for recording income and expenses."
              ghLink="https://github.com/AndriSigiro/PA-10-D3TI_2023-IT-DEL-GEREJA"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cafe Shop App Mobile"
              description="A comprehensive cafe website featuring a digital menu, online ordering, a table reservation system, and integration with a mobile app for customers. Through the mobile app, customers can place takeout orders, view the latest promotions, track order status, and make payments conveniently right from their smartphone. The system is designed to be responsive, modern, and easy to use on mobile devices."
              ghLink="https://github.com/AndriSigiro/proyek_cafe_kelompok6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="BEM Management System"
              description="A student executive board (BEM) organizational management system built using React and Next.js, equipped with comprehensive features such as announcement publication, member data management, and work program and management structure. This system is designed to be modern, fast, and responsive, enabling BEM administrators to centrally manage organizational activities and facilitate transparent student information access."
              ghLink="https://github.com/BEM-IT-Del-Website"
              demoLink="https://bem-itdel.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ambarita Village Information System"
              description="The Ambarita Village information system is equipped with a mobile application for residents as a user interface and an admin website for village officials. This system supports population data management, village administration services, letter requests, publication of village news and agendas, and management of aid programs and community activities. Through the mobile application, residents can apply for services online, monitor the status of requests, receive important notifications, and easily access village information. Meanwhile, the admin website provides facilities for village officials to manage data, process public services, generate reports, and update village information quickly and centrally. This system is designed to be modern, responsive, and integrated to improve the quality of public services in Ambarita Village."
              ghLink="https://github.com/Franklyn2211/PA-2-Kel9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Digital Diary"
              description="A digital mobile diary app designed to help users easily record daily activities, feelings, and important moments. It features encryption to maintain privacy, fast note searching, and daily reminders to ensure users never miss important moments or tasks. The app has a simple, secure, and practical interface, making it suitable for use as a personal journal or as a daily activity reminder tool."
              ghLink="https://github.com/AndriSigiro/flutter_application_diary_kel6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mobile Application Development for Fertile Chicken Egg Detection System Using IoT-Based deeplearning"
              description="A mobile application was developed for a fertile chicken egg detection system using IoT and deep learning technology. The application connects to an IoT device that automatically scans eggs and sends data to a server for analysis using a deep learning model. Detection results, such as fertility levels, egg quality, and embryo development status, can be monitored directly through the mobile application."
              ghLink="https://github.com/AndriSigiro/Tugas-Akhir"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitor}
              isBlog={false}
              title="Monitoring Number of People"
              description="An IoT system for monitoring the number of people in a room in real time.
The system integrates hardware sensors and computer vision technology to accurately detect and count individuals entering or leaving the room. All collected data is processed automatically and presented through an informative, user-friendly dashboard. This enables administrators to track room occupancy, analyze usage patterns, and make better decisions related to safety, energy efficiency, and space management."
              ghLink="https://github.com/IOT-D3TI23/MC_iot.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
