import { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./qualification.css";

/* ── DATA ────────────────────────────────────────────────── */
const qualifications = [
    {
        title: "B.E. (Computer Science & Engineering)",
        institute: "Jawaharlal Darda Institute of Engineering & Technology, Yavatmal",
        scoreLabel: "CGPA",
        score: "9.14",
        year: "2025",
        Icon: SchoolIcon,
        mod: "cyan",
    },
    {
        title: "HSC (General Science)",
        institute: "Amolakchand Mahavidyalaya, Yavatmal",
        scoreLabel: "Percentage",
        score: "84%",
        year: "2021",
        Icon: MenuBookIcon,
        mod: "blue",
    },
    {
        title: "SSC (Science)",
        institute: "Loknayak Bapuji Aney Vidyalay, Yavatmal",
        scoreLabel: "Percentage",
        score: "61.40%",
        year: "2019",
        Icon: AutoStoriesIcon,
        mod: "green",
    },
];

/* ── COMPONENT ───────────────────────────────────────────── */
const Qualification = () => {

    useEffect(() => {
        const run = async () => {
            if (typeof window === "undefined") return;
            const SR = (await import("scrollreveal")).default;
            const sr = SR({
                easing: "cubic-bezier(0.5, 0, 0, 1)",
                distance: "30px",
                duration: 1000,
                desktop: true,
                mobile: true,
            });
            sr.reveal(".qual-title", { origin: "top", delay: 200 });
            sr.reveal(".q-card-wrap", { origin: "bottom", delay: 350, interval: 150 });
        };
        run();
    }, []);

    return (
        <section id="qualification">
            <Container maxWidth="lg">
                <Box className="qual-heading">

                    {/* eyebrow pill with animated dot */}
                    <Typography component="span" className="qual-eyebrow">
                        <span className="qual-eyebrow__dot" />
                        Academic Background
                    </Typography>

                    {/* title with gradient word */}
                    <Typography variant="h2" className="qual-title">
                        My <span className="qual-title--grad">Qualification</span>
                    </Typography>

                    <Typography className="qual-subtitle">
                        My academic journey and educational achievements
                        that built a strong foundation in computer science,
                        software development, and modern technologies.
                    </Typography>

                </Box>

                {/* ── CARD LIST ─────────────────────────── */}
                <Box className="q-list">
                    {qualifications.map((item, idx) => {
                        const { Icon } = item;
                        return (
                            <Box key={idx} className={`q-card-wrap q-card-wrap--${item.mod}`}>

                                {/* gradient left bar */}
                                <Box className={`q-bar q-bar--${item.mod}`} />

                                {/* icon */}
                                <Box className={`q-icon q-icon--${item.mod}`}>
                                    <Icon sx={{ fontSize: "2.6rem", color: "#fff" }} />
                                </Box>

                                {/* text block */}
                                <Box className="q-text">

                                    {/* DEGREE — bold, matches screenshot */}
                                    <Typography className="q-degree">
                                        {item.title}
                                    </Typography>

                                    {/* INSTITUTE — grey, matches screenshot */}
                                    <Typography className="q-institute">
                                        {item.institute}
                                    </Typography>

                                    {/* META — "CGPA: 9.14 | Year: 2025" exact format */}
                                    <Box className="q-meta">
                                        <Box className={`q-meta-pill q-meta-pill--${item.mod}`}>
                                            <EmojiEventsIcon sx={{ fontSize: "1.5rem" }} />
                                            <span>
                                                {item.scoreLabel}: <strong>{item.score}</strong>
                                            </span>
                                        </Box>

                                        <Typography className="q-meta-sep">|</Typography>

                                        <Box className="q-meta-pill q-meta-pill--year">
                                            <CalendarMonthIcon sx={{ fontSize: "1.5rem" }} />
                                            <span>Year: <strong>{item.year}</strong></span>
                                        </Box>
                                    </Box>

                                </Box>

                                {/* floating year badge — top right */}
                                {/* <Box className={`q-badge q-badge--${item.mod}`}>
                                    {item.year}
                                </Box> */}

                            </Box>
                        );
                    })}
                </Box>

            </Container>
        </section>
    );
};

export default Qualification;