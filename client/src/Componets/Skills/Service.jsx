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
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Extracted constants
const services = [
  {
    icon: <FiCode className="text-3xl" />,
    title: "Web Development",
    desc: "Building full-stack websites using modern technologies.",
  },
  {
    icon: <FiLayout className="text-3xl" />,
    title: "UI/UX Design",
    desc: "Crafting beautiful and user-friendly interfaces.",
  },
];

const frontendSkills = [
  { name: "HTML", level: 85, icon: <FiCode /> },
  { name: "CSS", level: 95, icon: <FiCode /> },
  { name: "Bootstrap", level: 70, icon: <FiCode /> },
  { name: "TailwindCSS", level: 90, icon: <FiCode /> },
  { name: "JavaScript", level: 95, icon: <FiCode /> },
  { name: "React", level: 96, icon: <FiCode /> },
];

const backendSkills = [
  { name: "PHP", level: 50, icon: <FiServer /> },
  { name: "Node.js", level: 80, icon: <FiServer /> },
  { name: "MySQL", level: 70, icon: <FiDatabase /> },
  { name: "postgress", level: 75, icon: <FiDatabase /> },
];

const softSkills = [
  { name: "Communication", level: 100, icon: <FiUsers /> },
  { name: "Adaptability", level: 99, icon: <FiTrendingUp /> },
  { name: "Confidence", level: 99, icon: <FiTarget /> },
  { name: "Fast Learner", level: 99, icon: <FiZap /> },
];

// CV WORK EXPERIENCE
const workExperience = [
  {
    id: "experience-optimax",
    title: "Assistant Project Manager & Developer",
    company: "Begize OptiMAX",
    period: "05/2025 -- 10/2025",
    location: "Addis Ababa",
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
    responsibilities: [
      "Train and mentor female students in web development and real-world project execution.",
      "Deliver lessons on React.js, Node.js, Git, and modern software development practices.",
      "Demonstrate leadership, teamwork, and strong communication in a collaborative learning environment.",
    ],
  },
  {
    id: "experience-freelance",
    title: "Full-Stack Web Developer",
    company: "Personal Projects and clients projects",
    period: "2023 -- Present",
    location: "Remote",
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
  },
  {
    id: "edu-azure",
    degree: "Microsoft Azure DevOps Training",
    institution: "AppFactory Academy @ Wollo University",
    details: "Ongoing",
    icon: <FiCloud />,
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
        {[...Array(20)].map((_, i) => (
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

      {/* Tabs Section */}
      <div className="px-4 md:px-16 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <div
            className={`flex justify-center gap-4 mb-12 flex-wrap transform transition-all duration-1000 delay-300 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {["skills", "experience", "education"].map((tab) => (
              <button
                key={tab}
                className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-500 overflow-hidden ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-2xl shadow-orange-500/40"
                    : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800 hover:border-orange-500/50"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {tab === "skills" && <FiCode />}
                  {tab === "experience" && <FiCalendar />}
                  {tab === "education" && <FiBook />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
                {activeTab === tab && (
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                )}
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
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "soft", label: "Soft Skills" },
  ];

  return (
    <div>
      {/* Skill Filter Buttons */}
      <div
        className={`flex justify-center gap-3 mb-12 flex-wrap transform transition-all duration-1000 delay-500 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {filterButtons.map((filter, index) => (
          <button
            key={filter.id}
            className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 overflow-hidden ${
              skillFilter === filter.id
                ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg"
                : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800 hover:border-orange-500/50"
            }`}
            onClick={() => setSkillFilter(filter.id)}
            style={{ transitionDelay: `${500 + index * 100}ms` }}
          >
            <span className="relative z-10">{filter.label}</span>
            {skillFilter === filter.id && (
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            )}
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
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/20 via-orange-500/50 to-transparent hidden md:block"></div>

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
            className={`bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 transform ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${800 + index * 200}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/10 p-4 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                <div className="text-orange-500 text-xl">{edu.icon}</div>
              </div>
              <div className="flex-1">
                <h3 className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-xl mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium">{edu.institution}</p>
                <p className="text-orange-300/80 mt-2 text-sm">{edu.details}</p>
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
      className={`px-4 md:px-16 py-16 bg-gradient-to-b from-black to-gray-900/30 transform transition-all duration-1000 delay-300 ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I provide comprehensive development solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transform ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-orange-500">{service.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm">
                  Available for hire
                  <FiChevronUp className="w-4 h-4 transform rotate-90 group-hover:translate-x-1 transition-transform" />
                </span>
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
      className={`px-4 md:px-16 py-16 text-center transform transition-all duration-1000 delay-600 ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      id="contact"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-white to-orange-300 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's create something amazing.
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
  );
}

// Helper Components
function SkillSection({ title, skills, showAll = false, animate, delay = 0 }) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-500 h-full transform ${
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-xl">
          {title}
        </h2>
        {showAll && (
          <span className="text-gray-400 text-sm">{skills.length} skills</span>
        )}
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group"
            style={{ transitionDelay: `${delay + index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-orange-500">{skill.icon}</div>
                <span className="font-medium text-white">{skill.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Proficiency:
                </span>
                <span className="font-bold text-orange-500">
                  {skill.level}%
                </span>
              </div>
            </div>
            <div className="relative w-full bg-gray-800/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-amber-500 h-2.5 rounded-full transition-all duration-1500 ease-out group-hover:from-orange-400 group-hover:to-amber-400"
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
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
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Dot and line */}
        <div className="hidden md:flex items-center justify-center w-16">
          <div className="relative">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-500 z-10"></div>
            <div className="absolute inset-0 w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-900/20 p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-xl">
                {title}
              </h3>
              <p className="text-gray-300 font-medium mt-1">{company}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-300 px-4 py-2 rounded-full border border-orange-500/30">
                <FiCalendar />
                {period}
              </span>
              <p className="text-gray-400 text-sm mt-2 flex items-center justify-end gap-2">
                <FiMapPin />
                {location}
              </p>
            </div>
          </div>

          {responsibilities && (
            <div>
              <h4 className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
                <FiCheck className="text-orange-500" />
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <FiCheck className="text-green-500 mt-1 text-sm flex-shrink-0" />
                    <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
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
