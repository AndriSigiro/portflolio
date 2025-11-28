import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

function ExperienceTimeline() {
  const experiences = [
    {
      title: "Web Developer (Internship)",
      company: "PT . WINNICODE GARUDA TEKNOLOGI",
      date: "Jan 2025 - Jun 2025",
      icon: <MdWork />,
      iconBg: "#5234b3",
      description:
        "Developed enterprise web applications using Laravel.",
    },
    {
      title: "Full Stack Developer Freelance",
      company: "Institut Teknologi Del",
      date: "Sep 2025 - Dec 2025",
      icon: <MdWork />,
      iconBg: "#17a2b8",
      description:
        "Developed BEM Management System Using Next Js Framework.",
    },
  ];

  return (
    <VerticalTimeline>
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(31, 29, 43, 0.8)",
            color: "#fff",
            borderTop: `3px solid ${exp.iconBg}`,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${exp.iconBg}` }}
          date={exp.date}
          iconStyle={{ background: exp.iconBg, color: "#fff" }}
          icon={exp.icon}
        >
          <h3 className="vertical-timeline-element-title purple">{exp.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <p>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default ExperienceTimeline;