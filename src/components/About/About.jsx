import "./about.css";

import { Container, Box, Typography, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

const About = () => {
    return (
        <Box id="about" component="section" className="about-section">
            <Container maxWidth="lg">

                <Box className="about-heading">
                    <Typography component="span" className="about-eyebrow">
                        <span className="about-eyebrow__dot" />
                        Who I Am
                    </Typography>
                    <Typography variant="h2" className="about-title">
                        About <span className="about-title--grad">Me</span>
                    </Typography>
                    <Typography className="about-subtitle">
                        A passionate developer who loves building elegant solutions
                        and turning complex ideas into clean, maintainable code.
                    </Typography>
                </Box>

                {/* ── CONTENT WRAPPER ───────────────────── */}
                <Box className="about-wrapper">

                    {/* LEFT — PROFILE IMAGE */}
                    <motion.div
                        className="about-image-wrap"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Box className="about-image-glow" />
                        <img
                            src={profile}
                            alt="Kartik Shinde"
                            className="about-image"
                        />
                    </motion.div>

                    {/* RIGHT — TEXT */}
                    <motion.div
                        className="about-info"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <Typography className="about-text">
                            I am a Computer Science &amp; Engineering graduate (2025) with a
                            strong foundation in Core Java, SQL, and Salesforce. I actively
                            practice Data Structures &amp; Algorithms and aim to build
                            scalable, real-world software solutions.
                        </Typography>

                        <Typography className="about-text">
                            I have completed internships in Java Development and Salesforce,
                            gaining hands-on experience in object-oriented programming,
                            database integration, CRM configuration, and workflow automation.
                        </Typography>

                        <Box className="about-cta">
                            <Button
                                className="resume-btn"
                                variant="outlined"
                                endIcon={<OpenInNewIcon />}
                                href="https://drive.google.com/file/d/1M1xHJyu_LK8RO1Q2NK8eRUdXWSK6WZ3X/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </Button>
                        </Box>
                    </motion.div>

                </Box>
            </Container>
        </Box>
    );
};

export default About;