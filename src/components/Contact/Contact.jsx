import "./contact.css";
import { Container, Box, Typography, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <Box id="contact" component="section" className="contact-section">

            <Box className="contact-glow" />

            <Container maxWidth="md" className="contact-container">

                {/* ── SECTION TITLE ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box className="contact-heading-wrap">
                        <Typography component="span" className="contact-eyebrow">
                            <span className="contact-eyebrow__dot" />
                            Get In Touch
                        </Typography>
                        <Typography variant="h2" className="contact-title">
                            Let's <span className="contact-title--grad">Connect</span>
                        </Typography>
                        <Typography className="contact-subtitle">
                            Have a project in mind or want to collaborate?
                            I'd love to hear from you — let's build something great together.
                        </Typography>
                    </Box>
                </motion.div>

                {/* ── GLASS CARD ─────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    <Box className="contact-card">

                        <Box className="contact-icon-wrap">
                            <EmailOutlinedIcon className="contact-icon" />
                        </Box>

                        <Typography variant="h4" className="contact-card-heading">
                            Let's Build Something Great Together
                        </Typography>

                        <Typography className="contact-subtext">
                            I am currently open to full-time opportunities,
                            internships, freelance projects, and professional
                            collaborations. If you have a project idea, job
                            opportunity, or would like to connect, feel free
                            to reach out anytime.
                        </Typography>

                        <Button
                            className="contact-btn"
                            variant="contained"
                            href="kartikvshinde@gmail.com"
                            endIcon={<EmailOutlinedIcon />}
                        >
                            Get In Touch
                        </Button>

                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
};

export default Contact;