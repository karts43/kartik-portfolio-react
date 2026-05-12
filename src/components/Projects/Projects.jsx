import "./projects.css";

import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Chip,
    Stack,
    Divider
} from "@mui/material";

import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "NeuroFleetX – AI-Driven Urban Mobility Optimization System",
            descriptions: [
                "Built a full-stack fleet management and ride-booking system with role-based authentication (Admin, Manager, Driver, Customer).",
                "Implemented JWT authentication, booking workflows, and real-time route visualization using Leaflet.js & OSRM.",
                "Designed scalable backend using Spring Boot and ensured data consistency through concurrency control."
            ],
            tech: ["React.js", "Spring Boot", "MySQL", "JWT", "Leaflet.js"]
        },
        {
            title: "Child Mental Health Assessment & Tracking App",
            descriptions: [
                "Developed a React Native Android application to assess children's mental health using real-time surveys and feedback modules.",
                "Developed data visualization dashboards and analytical reports to help parents and teachers understand behavioral patterns."
            ],
            tech: ["React Native", "JavaScript", "MySQL", "REST APIs"]
        },
        {
            title: "Recruitment System – Salesforce",
            descriptions: [
                "Designed and implemented a Salesforce-based recruitment system using custom objects and workflow automation.",
                "Configured role-based access control and streamlined recruitment workflows."
            ],
            tech: ["Salesforce", "Apex", "SOQL", "Automation"]
        },
        {
            title: "Healthcare Patient Records System",
            descriptions: [
                "Built a secure SQL-based patient records system using Oracle DB.",
                "Managed patient, doctor, treatment, appointment, and billing data."
            ],
            tech: ["SQL", "Oracle DB", "PL/SQL"]
        }
    ];

    return (
        <Box
            id="projects"
            component="section"
            className="projects-section"
        >
            <Container maxWidth="lg">

                <Box className="projects-heading">
                    <Typography component="span" className="projects-eyebrow">
                        <span className="projects-eyebrow__dot" />
                        What I've Built
                    </Typography>

                    <Typography variant="h2" className="projects-title">
                        My <span className="projects-title--grad">Projects</span>
                    </Typography>

                    <Typography className="projects-subtitle">
                        Full-stack applications developed using modern technologies
                        with focus on scalability, performance, and clean UI/UX.
                    </Typography>
                </Box>

                {/* Cards */}
                <Stack spacing={5}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className="project-card">

                                <CardContent className="project-content">

                                    {/* Number */}
                                    <Typography className="project-number">
                                        0{index + 1}
                                    </Typography>

                                    {/* Title */}
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        className="project-card-title"
                                    >
                                        {project.title}
                                    </Typography>

                                    {/* Description */}
                                    <Stack
                                        spacing={2}
                                        className="project-description-box"
                                    >
                                        {project.descriptions.map((desc, descIndex) => (
                                            <Typography
                                                key={descIndex}
                                                variant="body1"
                                                className="project-description"
                                            >
                                                {desc}
                                            </Typography>
                                        ))}
                                    </Stack>

                                    <Divider className="project-divider" />

                                    {/* Tech Stack */}
                                    <Box>

                                        <Typography className="tech-title">
                                            TECHNOLOGIES
                                        </Typography>

                                        <Stack
                                            direction="row"
                                            spacing={1.5}
                                            flexWrap="wrap"
                                            useFlexGap
                                        >
                                            {project.tech.map((techItem, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={techItem}
                                                    className="tech-chip"
                                                />
                                            ))}
                                        </Stack>

                                    </Box>

                                </CardContent>

                            </Card>
                        </motion.div>
                    ))}
                </Stack>

            </Container>
        </Box>
    );
};

export default Projects;