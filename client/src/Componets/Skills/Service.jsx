import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import {
  FiCode,
  FiSmartphone,
  FiLayout,
  FiChevronUp,
  FiMail,
  FiCalendar,
  FiMapPin,
  FiCheck,
  FiAward,
  FiBook,
  FiCloud,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiZap,
  FiServer,
  FiDatabase,
  FiStar,
  FiBriefcase,
  FiAward as FiAwardIcon,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Extracted constants
const services = [
  {
    icon: <FiCode className="text-3xl" />,
    title: "Fullstack Web Development",
    desc: "Building full-stack websites using modern technologies.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FiLayout className="text-3xl" />,
    title: "UI/UX",
    desc: "Crafting beautiful and user-friendly interfaces.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const frontendSkills = [
  { name: "HTML", level: 85, icon: <FiCode />, color: "from-orange-400 to-orange-600" },
  { name: "CSS", level: 95, icon: <FiCode />, color: "from-blue-400 to-blue-600" },
  { name: "Bootstrap", level: 70, icon: <FiCode />, color: "from-purple-400 to-purple-600" },
  { name: "TailwindCSS", level: 90, icon: <FiCode />, color: "from-cyan-400 to-cyan-600" },
  { name: "JavaScript", level: 95, icon: <FiCode />, color: "from-yellow-400 to-yellow-600" },
  { name: "React", level: 96, icon: <FiCode />, color: "from-sky-400 to-blue-600" },
];

const backendSkills = [
  { name: "PHP", level: 50, icon: <FiServer />, color: "from-indigo-400 to-indigo-600" },
  { name: "Node.js", level: 80, icon: <FiServer />, color: "from-green-400 to-green-600" },
  { name: "MySQL", level: 70, icon: <FiDatabase />, color: "from-blue-400 to-blue-600" },
  { name: "PostgreSQL", level: 75, icon: <FiDatabase />, color: "from-sky-400 to-sky-600" },
];

const softSkills = [
  { name: "Communication", level: 100, icon: <FiUsers />, color: "from-pink-400 to-rose-500" },
  { name: "Adaptability", level: 99, icon: <FiTrendingUp />, color: "from-teal-400 to-teal-600" },
  { name: "Confidence", level: 99, icon: <FiTarget />, color: "from-red-400 to-red-600" },
  { name: "Fast Learner", level: 99, icon: <FiZap />, color: "from-yellow-400 to-amber-600" },
];

// CV WORK EXPERIENCE
const workExperience = [
  {
    id: "experience-optimax",
    title: "Assistant Project Manager & Developer",
    company: "Begize OptiMAX",
    period: "05/2025 -- 10/2025",
    location: "Addis Ababa",
    type: "Full-time",
    responsibilities: [
      "ERP System Trainer & Support Specialist: Conduct training sessions for employees on ERP software usage.",
      "Technical Support: Provide ongoing assistance and troubleshooting for ERP-related issues.",
      "Project Coordination Support: Assist in planning, and coordination of digital projects.",
      "Cross-Functional Liaison: Facilitate communication between technical and non-technical teams.",
    ],
  },
  {
    id: "experience-appfactory",
    title: "Trainer & Mentor",
    company: "App Factory Academy @ Wollo University",
    period: "Sep 2024 -- Feb 2025",
    location: "Kombolcha",
    type: "Contract",
    responsibilities: [
      "Train and mentor female students in web development and real-world project execution.",
      "Deliver lessons on React.js, Node.js, Git, and modern software development practices.",
      "Demonstrate leadership, teamwork, and strong communication in a collaborative learning environment.",
    ],
  },
  {
    id: "experience-freelance",
    title: "Full-Stack Web Developer",
    company: "Personal Projects & Client Projects",
    period: "2023 -- Present",
    location: "Remote",
    type: "Freelance",
    responsibilities: [
      "Develop full-stack applications using React.js, Node.js, Express, MySQL/pg, and Tailwind CSS.",
      "Design responsive UI/UX interfaces and build backend APIs with authentication.",
      "Use Git and GitHub for version control and apply clean, modern coding practices.",
      "Create complete applications such as dashboards, user management systems, and portfolio sites.",
    ],
  },
];

const education = [
  {
    id: "edu-bachelors",
    degree: "Bachelor's Degree in Information Systems",
    institution: "Wollo University",
    details: "Graduated: February 2025, CGPA: 3.61 / 4.0",
    icon: <FiBook />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "edu-azure",
    degree: "Microsoft Azure DevOps Training",
    institution: "AppFactory Academy @ Wollo University",
    details: "Ongoing",
    icon: <FiCloud />,
    color: "from-sky-500 to-blue-500",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [skillFilter, setSkillFilter] = useState("all");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      <Nav />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 15}s`,
            }}
          ></div>
        ))}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-500/2 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-4 md:px-16 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-400 text-sm font-medium">Available for hire</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-transparent">
            My Skills & Experience
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my technical expertise, professional journey, and educational background
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 md:px-16 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <div
            className={`flex justify-center gap-3 mb-12 flex-wrap transform transition-all duration-1000 delay-300 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {[
              { id: "skills", label: "Technical Skills", icon: <FiCode /> },
              { id: "experience", label: "Work Experience", icon: <FiBriefcase /> },
              { id: "education", label: "Education", icon: <FiAwardIcon /> },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-xl shadow-orange-500/30"
                    : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800 hover:border-orange-500/50 hover:bg-gray-800/50"
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className={`transform transition-all duration-1000 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {activeTab === "skills" && (
              <SkillsTab
                skillFilter={skillFilter}
                setSkillFilter={setSkillFilter}
                animate={animate}
              />
            )}
            {activeTab === "experience" && <ExperienceTab animate={animate} />}
            {activeTab === "education" && <EducationTab animate={animate} />}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection animate={animate} />

      {/* Contact CTA */}
      <ContactSection animate={animate} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-amber-600 text-white p-4 rounded-full shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-110 transition-all duration-500 z-50 group"
          aria-label="Back to top"
        >
          <FiChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

// Skills Tab Component
function SkillsTab({ skillFilter, setSkillFilter, animate }) {
  const filterButtons = [
    { id: "all", label: "All Skills", icon: <FiStar className="w-3 h-3" /> },
    { id: "frontend", label: "Frontend", icon: <FiCode className="w-3 h-3" /> },
    { id: "backend", label: "Backend", icon: <FiServer className="w-3 h-3" /> },
    { id: "soft", label: "Soft Skills", icon: <FiUsers className="w-3 h-3" /> },
  ];

  return (
    <div>
      {/* Skill Filter Buttons */}
      <div
        className={`flex justify-center gap-3 mb-12 flex-wrap transform transition-all duration-1000 delay-500 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {filterButtons.map((filter) => (
          <button
            key={filter.id}
            className={`group relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-500 flex items-center gap-2 ${
              skillFilter === filter.id
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20"
                : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800 hover:border-orange-500/50 hover:bg-gray-800/50"
            }`}
            onClick={() => setSkillFilter(filter.id)}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>

      {skillFilter === "all" ? (
        <div className="grid gap-8 md:grid-cols-3">
          <SkillSection
            title="Frontend"
            skills={frontendSkills}
            animate={animate}
            delay={800}
          />
          <SkillSection
            title="Backend"
            skills={backendSkills}
            animate={animate}
            delay={900}
          />
          <SkillSection
            title="Soft Skills"
            skills={softSkills}
            animate={animate}
            delay={1000}
          />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <SkillSection
            title={
              skillFilter === "frontend"
                ? "Frontend Skills"
                : skillFilter === "backend"
                ? "Backend Skills"
                : "Soft Skills"
            }
            skills={
              skillFilter === "frontend"
                ? frontendSkills
                : skillFilter === "backend"
                ? backendSkills
                : softSkills
            }
            showAll={true}
            animate={animate}
            delay={800}
          />
        </div>
      )}
    </div>
  );
}

// Experience Tab Component
function ExperienceTab({ animate }) {
  return (
    <div className="relative">
      <div className="space-y-8">
        {workExperience.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            {...exp}
            index={index}
            animate={animate}
            delay={800 + index * 200}
          />
        ))}
      </div>
    </div>
  );
}

// Education Tab Component
function EducationTab({ animate }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`group bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 transform ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${800 + index * 200}ms` }}
          >
            <div className="flex items-start gap-5">
              <div className={`bg-gradient-to-br ${edu.color} p-4 rounded-xl shadow-lg flex-shrink-0`}>
                <div className="text-white text-xl">{edu.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-xl mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium">{edu.institution}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                  <FiCalendar className="text-orange-400" />
                  <span className="text-gray-400">{edu.details}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Services Section Component
function ServicesSection({ animate }) {
  return (
    <div
      className={`px-4 md:px-16 py-20 bg-gradient-to-b from-black via-gray-900/10 to-black transform transition-all duration-1000 delay-300 ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="bg-orange-500/10 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full border border-orange-500/20">
              What I Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive development solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-8 rounded-2xl border border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transform ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              {/* Background gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl inline-block mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Section Component
function ContactSection({ animate }) {
  return (
    <div
      className={`px-4 md:px-16 py-20 text-center transform transition-all duration-1000 delay-600 ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      id="contact"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-12 rounded-3xl border border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiMail className="w-5 h-5" />
                Get In Touch
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function SkillSection({ title, skills, showAll = false, animate, delay = 0 }) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/5 h-full transform ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-xl">
          {title}
        </h3>
        {showAll && (
          <span className="text-gray-500 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
            {skills.length} skills
          </span>
        )}
      </div>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group"
            style={{ transitionDelay: `${delay + index * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className={`bg-gradient-to-r ${skill.color} p-1.5 rounded-lg text-white text-sm`}>
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="font-bold text-orange-400 text-sm">
                {skill.level}%
              </span>
            </div>
            <div className="relative w-full bg-gray-800/50 h-2 rounded-full overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  company,
  period,
  location,
  type,
  responsibilities,
  index,
  animate,
  delay,
}) {
  return (
    <div
      className={`relative group transform transition-all duration-1000 ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Timeline icon */}
        <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
          <div className="relative">
            <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-black shadow-lg shadow-orange-500/20 group-hover:scale-125 transition-transform duration-500 z-10"></div>
            <div className="absolute inset-0 w-5 h-5 bg-orange-500 rounded-full animate-ping opacity-20"></div>
            {index < workExperience.length - 1 && (
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-500">
                {title}
              </h3>
              <p className="text-gray-400 font-medium mt-1">{company}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="inline-flex items-center gap-2 text-sm bg-orange-500/10 text-orange-300 px-4 py-1.5 rounded-full border border-orange-500/20">
                <FiCalendar className="w-3 h-3" />
                {period}
              </span>
              {type && (
                <span className="text-xs bg-gray-800/50 text-gray-400 px-3 py-1 rounded-full">
                  {type}
                </span>
              )}
              <p className="text-gray-500 text-sm flex items-center gap-1.5">
                <FiMapPin className="w-3 h-3" />
                {location}
              </p>
            </div>
          </div>

          {responsibilities && (
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-3 flex items-center gap-2">
                <FiCheck className="text-orange-400" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <FiCheck className="text-green-400 mt-1 text-sm flex-shrink-0" />
                    <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;