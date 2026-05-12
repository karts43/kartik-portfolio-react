import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

// ✅ Only @mui/icons-material — matches package.json
import CodeIcon from "@mui/icons-material/Code";
import LayersIcon from "@mui/icons-material/Layers";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import "./technicalskills.css";

/* ─── skill data ────────────────────────────────────────── */
const categories = [
    {
        id: "languages",
        label: "Programming Languages",
        Icon: CodeIcon,
        color: "#a78bfa",
        glow: "rgba(167,139,250,0.18)",
        skills: [
            { name: "Core Java", level: 90 },
            { name: "SQL", level: 85 },
            { name: "JavaScript", level: 82 },
            { name: "Python", level: 75 },
        ],
    },
    {
        id: "frameworks",
        label: "Frameworks & Libraries",
        Icon: LayersIcon,
        color: "#60a5fa",
        glow: "rgba(96,165,250,0.18)",
        skills: [
            { name: "Spring Boot", level: 88 },
            { name: "ReactJS", level: 84 },
        ],
    },
    {
        id: "web",
        label: "Web Technologies",
        Icon: LanguageIcon,
        color: "#34d399",
        glow: "rgba(52,211,153,0.18)",
        skills: [
            { name: "HTML5", level: 92 },
            { name: "CSS3", level: 88 },
        ],
    },
    {
        id: "databases",
        label: "Databases",
        Icon: StorageIcon,
        color: "#f472b6",
        glow: "rgba(244,114,182,0.18)",
        skills: [
            { name: "Oracle", level: 80 },
            { name: "PostgreSQL", level: 78 },
        ],
    },
    {
        id: "cloud",
        label: "CRM & Cloud",
        Icon: CloudIcon,
        color: "#fb923c",
        glow: "rgba(251,146,60,0.18)",
        skills: [
            { name: "Salesforce Admin", level: 82 },
            { name: "Salesforce Dev", level: 78 },
            { name: "Cloud Computing", level: 70 },
        ],
    },
    {
        id: "fundamentals",
        label: "CS Fundamentals",
        Icon: MenuBookIcon,
        color: "#facc15",
        glow: "rgba(250,204,21,0.18)",
        skills: [
            { name: "OOPs", level: 92 },
            { name: "DSA", level: 80 },
            { name: "SDLC", level: 85 },
            { name: "Agile", level: 83 },
            { name: "Manual Testing", level: 75 },
        ],
    },
];

/* ─── framer variants ───────────────────────────────────── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const barVariants = (level, delay) => ({
    hidden: { width: 0, opacity: 0 },
    visible: {
        width: `${level}%`,
        opacity: 1,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
    },
});

/* ─── SkillBar ───────────────────────────────────────────── */
function SkillBar({ name, level, color, index }) {
    return (
        <Tooltip
            title={`${level}%`}
            placement="top"
            arrow
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: "rgba(5,8,22,0.97)",
                        color,
                        border: `1px solid ${color}55`,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        borderRadius: "6px",
                        px: 1.2,
                        py: 0.35,
                        boxShadow: `0 0 12px ${color}33`,
                    },
                },
                arrow: { sx: { color: "rgba(5,8,22,0.97)" } },
            }}
        >
            <div className="ts-bar-row">
                <span className="ts-bar-name">{name}</span>
                <div className="ts-bar-track">
                    <motion.div
                        className="ts-bar-fill"
                        style={{ background: `linear-gradient(90deg, ${color}77, ${color})` }}
                        variants={barVariants(level, index * 0.09)}
                    />
                </div>
                <span className="ts-bar-pct" style={{ color }}>{level}%</span>
            </div>
        </Tooltip>
    );
}

/* ─── CategoryCard ──────────────────────────────────────── */
function CategoryCard({ cat }) {
    const { label, Icon, color, glow, skills } = cat;

    return (
        <motion.div
            className="ts-card"
            style={{ "--card-color": color, "--card-glow": glow }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
        >
            {/* header */}
            <div className="ts-card__header">
                <span
                    className="ts-card__icon"
                    style={{ background: glow, border: `1px solid ${color}33` }}
                >
                    <Icon sx={{ fontSize: 18, color }} />
                </span>
                <h3 className="ts-card__label">{label}</h3>
            </div>

            {/* MUI chip badges */}
            <div className="ts-card__chips">
                {skills.map((s) => (
                    <Chip
                        key={s.name}
                        label={s.name}
                        size="small"
                        sx={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.69rem",
                            fontWeight: 600,
                            height: 22,
                            color,
                            background: `${color}12`,
                            border: `1px solid ${color}30`,
                            "& .MuiChip-label": { px: 1 },
                            "&:hover": { background: `${color}25`, borderColor: `${color}70` },
                            transition: "all 0.2s",
                            cursor: "default",
                        }}
                    />
                ))}
            </div>

            {/* animated bars */}
            <div className="ts-card__bars">
                {skills.map((s, i) => (
                    <SkillBar key={s.name} {...s} color={color} index={i} />
                ))}
            </div>
        </motion.div>
    );
}

/* ─── Section ───────────────────────────────────────────── */
export default function TechnicalSkills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="ts-section" id="skills">
            {/* decorative bg */}
            <div className="ts-orb ts-orb--purple" aria-hidden="true" />
            <div className="ts-orb ts-orb--blue" aria-hidden="true" />
            <div className="ts-dot-grid" aria-hidden="true" />

            <div className="ts-inner" ref={ref}>

                {/* heading block */}
                <motion.div
                    className="ts-heading"
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="ts-eyebrow">
                        <span className="ts-eyebrow__dot" />
                        What I Work With
                    </span>

                    <h2 className="ts-title">
                        Technical <span className="ts-title--grad">Skills</span>
                    </h2>

                    <p className="ts-subtitle">
                        A curated stack of languages, frameworks, and tools I use to design,
                        build, and ship production-ready applications.
                    </p>
                </motion.div>

                {/* cards */}
                <motion.div
                    className="ts-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} cat={cat} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}