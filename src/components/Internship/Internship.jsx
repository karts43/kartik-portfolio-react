import "./internship.css";

import { Container, Box, Typography, Chip, Stack, Divider } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const internships = [
    {
        title: "Virtual Intern",
        company: "Infosys Springboard | Dec 2025 – Feb 2026",
        duration: "Dec 2025 – Feb 2026",
        location: "Remote",
        descriptions: [
            "Successfully completed Infosys Springboard Virtual Internship 6.0 (Batch 11) by contributing to the AI-driven full-stack project “NeuroFleetX: AI-Powered Urban Fleet and Traffic Intelligence”.",
            "Developed responsive and reusable frontend components using React.js, improving application usability and user experience.",
            "Integrated React frontend with Spring Boot backend through RESTful APIs for seamless communication between application modules.",
            "Implemented authentication and role-based access control (RBAC) using JWT and Spring Security.",
            "Worked with MySQL database design, entity relationships, and backend data integration for fleet, trip, and booking management.",
            "Contributed to intelligent fleet management features including booking workflows, vehicle management, route visualization, and dashboards.",
            "Collaborated in an Agile-based development environment with milestone-driven feature delivery and code integration.",
            "Gained hands-on experience in full-stack architecture, REST API development, geospatial mapping using Leaflet.js, and scalable system design."
        ],
        tech: [
            "React.js",
            "Spring Boot",
            "Core Java",
            "Spring Security",
            "MySQL",
            "REST APIs",
            "JWT",
            "Leaflet.js",
            "Git"
        ],
        Icon: CodeIcon,
        mod: "purple",
    },
    {
        title: "Java Developer Intern",
        company: "Cloud Counselage Pvt. Ltd.",
        duration: "Jul 2023 – Aug 2023",
        location: "Remote",
        descriptions: [
            "Developed onboarding workflows and performance dashboards to optimize employee onboarding processes.",
            "Automated UTM link generation, welcome email dispatch, and onboarding performance tracking using Core Java.",
            "Designed an intuitive user interface for seamless user interaction and improved workflow efficiency.",
            "Conducted research and implemented best practices to enhance project quality, efficiency, and maintainability.",
            "Collaborated with team members to ensure smooth integration of onboarding modules and process automation.",
            "Successfully delivered a Java-based onboarding management system with automated tracking features."
        ],
        tech: [
            "Core Java",
            "Java",
            "OOP",
            "Dashboard Development",
            "Process Automation",
            "UI Design"
        ],
        Icon: CodeIcon,
        mod: "purple",
    },
    {
        title: "Salesforce Developer Virtual Intern",
        company: "SmartInternz x Salesforce",
        duration: "Jul 2024 – Aug 2024",
        location: "Remote",
        descriptions: [
            "Completed an 8-week Salesforce Developer Virtual Internship focused on Salesforce Administration, Apex, Flows, Lightning Web Components (LWC), and CRM automation.",
            "Designed and developed a Recruitment Management System using Salesforce Admin tools to streamline recruitment workflows and candidate tracking.",
            "Created custom objects including Job Position, Candidate, Job Application, Job Posting, and Employment Websites for structured recruitment data management.",
            "Implemented lookup and master-detail relationships, validation rules, and workflow automation to improve data accuracy and operational efficiency.",
            "Configured role-based access control, user permissions, and automated email alerts for secure and efficient recruitment operations.",
            "Worked with Apex, Flows, Testing & Debugging, VS Code CLI setup, and Lightning Web Components (LWC) during the internship.",
            "Earned Salesforce Super Badges including Apex Specialist, Process Automation Specialist, and Developer Super Set."
        ],
        tech: [
            "Salesforce",
            "Salesforce Administration",
            "Flows",
            "Lightning Web Components (LWC)",
            "Validation Rules",
            "Workflow Automation",
        ],
        Icon: WorkIcon,
        mod: "blue",
    },
];

const Internship = () => {
    return (
        <Box id="internship" component="section" className="internship-section">
            <Container maxWidth="lg">

                <Box className="internship-heading">
                    <Typography component="span" className="internship-eyebrow">
                        <span className="internship-eyebrow__dot" />
                        Professional Experience
                    </Typography>
                    <Typography variant="h2" className="internship-title">
                        My <span className="internship-title--grad">Internships</span>
                    </Typography>
                    <Typography className="internship-subtitle">
                        Hands-on industry experience that sharpened my skills
                        in real-world software development and agile workflows.
                    </Typography>
                </Box>

                {/* ── CARD LIST ─────────────────────────── */}
                <Stack spacing={5}>
                    {internships.map((item, index) => {
                        const { Icon } = item;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <Box className={`internship-card internship-card--${item.mod}`}>

                                    {/* Left accent bar */}
                                    <Box className={`internship-bar internship-bar--${item.mod}`} />

                                    {/* Card body */}
                                    <Box className="internship-body">

                                        {/* Header row */}
                                        <Box className="internship-header">

                                            {/* Icon */}
                                            <Box className={`internship-icon internship-icon--${item.mod}`}>
                                                <Icon sx={{ fontSize: "2.2rem", color: "#fff" }} />
                                            </Box>

                                            {/* Title + Company */}
                                            <Box className="internship-title-block">
                                                <Typography className="internship-role">
                                                    {item.title}
                                                </Typography>
                                                <Typography className="internship-company">
                                                    {item.company}
                                                </Typography>
                                            </Box>

                                            {/* Number watermark */}
                                            <Typography className="internship-number">
                                                0{index + 1}
                                            </Typography>
                                        </Box>

                                        {/* Meta — duration & location */}
                                        <Box className="internship-meta">
                                            <Box className="internship-meta-pill">
                                                <CalendarMonthIcon sx={{ fontSize: "1.4rem" }} />
                                                <span>{item.duration}</span>
                                            </Box>
                                            <Box className="internship-meta-pill">
                                                <LocationOnIcon sx={{ fontSize: "1.4rem" }} />
                                                <span>{item.location}</span>
                                            </Box>
                                        </Box>

                                        <Divider className="internship-divider" />

                                        {/* Descriptions */}
                                        <Stack spacing={1.5} className="internship-desc-list">
                                            {item.descriptions.map((desc, di) => (
                                                <Typography
                                                    key={di}
                                                    className="internship-desc"
                                                >
                                                    {desc}
                                                </Typography>
                                            ))}
                                        </Stack>

                                        <Divider className="internship-divider" />

                                        {/* Tech chips */}
                                        <Box>
                                            <Typography className="tech-label">
                                                TECHNOLOGIES
                                            </Typography>
                                            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                                                {item.tech.map((t, ti) => (
                                                    <Chip
                                                        key={ti}
                                                        label={t}
                                                        className={`internship-chip internship-chip--${item.mod}`}
                                                    />
                                                ))}
                                            </Stack>
                                        </Box>

                                    </Box>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Stack>

            </Container>
        </Box>
    );
};

export default Internship;