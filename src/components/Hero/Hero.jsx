import "./hero.css";

import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
    return (
        <Box id="hero" component="section">

            {/* Background glow orbs */}
            <Box className="hero-glow hero-glow--left" />
            <Box className="hero-glow hero-glow--right" />

            <Container maxWidth="lg" className="hero-container">

                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography className="hero-greeting">
                        👋 Hello, World!
                    </Typography>
                </motion.div>

                {/* Main title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <Typography variant="h1" className="hero-title">
                        I'm{" "}
                        <span className="hero-name">Kartik Shinde</span>
                    </Typography>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <Typography className="hero-subtitle">
                        Java · Full Stack Developer · React · Spring Boot
                    </Typography>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="hero-cta"
                >
                    <Button
                        className="hero-btn hero-btn--primary"
                        href="#contact"
                    >
                        Get in Touch
                    </Button>

                    <Button
                        className="hero-btn hero-btn--outline"
                        href="#projects"
                    >
                        View Projects
                    </Button>
                </motion.div>

            </Container>

            {/* Scroll down indicator */}
            <motion.a
                href="#about"
                className="scroll-down-link"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                aria-label="Scroll down"
            >
                <Box className="scroll-down">
                    <KeyboardArrowDownIcon className="scroll-down-icon" />
                </Box>
            </motion.a>

        </Box>
    );
};

export default Hero;