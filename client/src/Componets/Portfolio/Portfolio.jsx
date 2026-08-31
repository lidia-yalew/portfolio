import React from "react";
import Nav from "../Nav";
import resto from "../../assets/restor.jpg"
import tibeb from "../../assets/tibeb.jpg"

// At the top of your Portfolio.jsx
import restoImage from "../../assets/restor.jpg"
import tibebImage from "../../assets/tibeb.jpg"
import clientImage from "../../assets/maria.png";


const Portfolio = () => {
  const projects = [
  // === NEW PROJECTS (Top 3 - Deployed) ===
  
  // 1. RESTAURANT MANAGEMENT SYSTEM - Full Stack
  {
    title: "Restaurant Management System",
    description:
      "Full-stack restaurant management system with table reservation, order management, and staff management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Socket.io",
    ],
    features: [
      "Table reservation system with real-time availability",
      "Order management with kitchen display",
      "Menu management with categories & pricing",
      "Inventory & menu availability management",
      "Staff management with role-based access",
      "Customer feedback & rating system",
      "Sales analytics & reporting dashboard",
      "Real-time notifications",
      "Dark/Light theme toggle",
      "Responsive design across all devices",
    ],
    link: "https://github.com/lidia-yalew/Restaurant-Digital-Menu-System.git",
    type: "Full Stack",
    year: "2026",
    client: "Client Based Project",
    liveDemo: "https://restaurant-management-system.web.app", // ← Replace with actual deployed URL
    image: restoImage, // ← Import your image
    isDeployed: false,
  },

  // 2. TIBEB CONSULTANCY PLC - Full Stack
  {
    title: "Tibeb Consultancy PLC",
    description:
      "Full-stack corporate website and management system for Tibeb Consultancy & Training PLC. Includes admin dashboard, team management, portfolio, testimonials, and project tracking.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Axios",
    ],
    features: [
      "Complete corporate website with dynamic content",
      "Admin dashboard for content management",
      "Team member management with CRUD operations",
      "Portfolio & project showcase",
      "Testimonial management system",
      "Contact form with email integration",
      "Dark/Light theme toggle",
      "Responsive design across all devices",
    ],
    link: "https://github.com/lidia-yalew/tibeb-website.git",
    type: "Full Stack",
    year: "2026",
    client: "Tibeb Consultancy PLC",
    liveDemo: "https://tibeb-consultancy.web.app",
    image: tibebImage, // ← Import your image
    isDeployed: false,
  },
// 8. MARIA TRESA CONSULTANCY - Static Website
  {
    title: "Maria Tresa Consultancy",
    description:
      "Professional static website for Maria Tresa Consultancy - a business consulting firm. Clean, modern design with responsive layout and contact integration.",
    technologies: [
      "React",
      "Tailwind CSS",
      "EmailJS",
      "React Router",
      "Framer Motion",
      "Responsive Design",
    ],
    features: [
      "Professional business landing page",
      "Services showcase with detailed sections",
      "Contact form with EmailJS integration",
      "Fully responsive design",
      "Smooth animations with Framer Motion",
      "Modern & clean UI design",
    ],
    link: "https://github.com/lidia-yalew/ethiopia-consulting-site",
    type: "Frontend",
    year: "2026",
    client: "Maria Tresa Consultancy",
    liveDemo: "https://maria-theresa-consulting.netlify.app/",
    image:clientImage,
    isDeployed: true,
  },
  // 4. KIOT Bid Platform
  {
    title: "KIOT Bid Platform",
    description:
      "Real-time auction platform for institutional bidding with instant updates.",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Express",
      "JWT",
    ],
    features: [
      "Real-time bidding",
      "User authentication & roles",
      "Bid history & notifications",
      "Auction management",
      "Real-time updates",
    ],
    link: "https://github.com/lidia-yalew/Auction.git",
    type: "Full Stack",
    year: "2024-2025",
    client: "Personal Project",
    liveDemo: "#", // ← Changed to "#" since not deployed
    image: "https://via.placeholder.com/600x400/1A237E/FFFFFF?text=KIOT+Bid+Platform",
    isDeployed: false,
  },

  // 5. Ethiozon
  {
    title: "Ethiozon",
    description:
      "Amazon-style full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Context API", "Node.js", "Express", "MySQL", "Chapa"],
    features: [
      "User authentication & authorization",
      "Product catalog with search & filters",
      "Shopping cart & checkout system",
      "Payment gateway integration",
      "Admin dashboard",
      "Order tracking",
    ],
    link: "https://github.com/lidia-yalew/Ethiozon",
    type: "Full Stack",
    year: "2024",
    client: "Personal Project",
    liveDemo: "https://ethiozon-ecommerce.web.app",
    image: "https://via.placeholder.com/600x400/C9A84C/1A237E?text=Ethiozon",
    isDeployed: false,
  },

  // 6. Netflix Clone
  {
    title: "Netflix Clone",
    description:
      "Movie streaming interface clone and real movie data from TMDB API.",
    technologies: [
      "React",
      "Firebase",
      "TMDB API",
      "CSS Modules",
      "React Hooks",
    ],
    features: [
      "Real movie data from TMDB",
      "Responsive design",
      "Movie trailer playback",
      "User watchlist",
    ],
    link: "https://github.com/lidia-yalew/netflix-clone.git",
    type: "Frontend",
    year: "2024",
    client: "Personal Project",
    liveDemo: "https://netflix-clone-31ee5.web.app",
    image: "https://via.placeholder.com/600x400/E50914/FFFFFF?text=Netflix+Clone",
    isDeployed: true,
  },

  // 7. Amazon Clone
  {
    title: "Amazon Clone",
    description:
      "E-commerce front-end replica of Amazon with shopping cart, product listings, and user interface.",
    technologies: ["React", "Firebase", "Context API", "CSS", "React Router"],
    features: [
      "Product listing and details",
      "Shopping cart functionality",
      "User authentication",
      "Responsive Amazon-style UI",
      "Checkout process",
    ],
    link: "https://github.com/lidia-yalew/amazon-clone",
    type: "Frontend",
    year: "2024",
    client: "Personal Project",
    liveDemo: "https://amazon-clone-ashy-beta.vercel.app",
    image: "https://via.placeholder.com/600x400/FF9900/FFFFFF?text=Amazon+Clone",
    isDeployed: true,
  },
];

  // The rest of your component remains the same
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />

      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-2xl font-bold text-orange-500 mb-4 inline-block relative">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
            A showcase of my technical projects including personal full-stack
            applications and client websites built with React & Firebase.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 group ${
                project.client !== "Personal Project"
                  ? "border-2 border-orange-500/30"
                  : ""
              }`}
            >
              {/* ─── IMAGE SECTION ─── */}
              <div className="relative overflow-hidden h-56 md:h-54 bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    const parent = e.target.parentElement;
                    const fallback = parent.querySelector(".fallback-icon");
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                
                {/* Fallback Icon */}
                <div className="fallback-icon hidden absolute inset-0 flex items-center justify-center flex-col gap-2">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-500">{project.title}</span>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Type Badge - Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-orange-500 rounded-full text-xs font-semibold border border-orange-500/30">
                    {project.type}
                  </span>
                </div>

                {/* Client Badge - Top Right */}
                {project.client !== "Personal Project" && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                      🏆 Client Project
                    </span>
                  </div>
                )}

                {/* Year Badge - Bottom Right */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-gray-300 rounded-full text-xs">
                    {project.year}
                  </span>
                </div>

                {/* Quick action buttons on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>*/}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>

              {/* ─── CONTENT SECTION ─── */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-full text-xs ${
                        tech === "Firebase" || tech === "Firebase Hosting"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : tech === "React" || tech === "React Router"
                          ? "bg-blue-500/20 text-blue-400"
                          : tech === "Node.js" || tech === "Express"
                          ? "bg-green-500/20 text-green-400"
                          : tech === "PostgreSQL" || tech === "MySQL"
                          ? "bg-blue-600/20 text-blue-300"
                          : tech === "Socket.io"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-gray-800 text-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2.5 py-1 rounded-full text-xs bg-gray-800 text-gray-500">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs text-gray-600">+{project.features.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className={`text-xs ${
                    project.client !== "Personal Project" 
                      ? "text-green-400 font-medium" 
                      : "text-gray-500"
                  }`}>
                    {project.client}
                  </span>
                  <div className="flex gap-2">
  {/* Live Demo Button - Shows differently based on deployment status */}
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-xs transition-colors flex items-center gap-1 ${
      project.isDeployed && project.liveDemo !== "#"
        ? "text-orange-500 hover:text-orange-400"
        : "text-gray-500 cursor-not-allowed opacity-50"
    }`}
    onClick={(e) => {
      if (!project.isDeployed || project.liveDemo === "#") {
        e.preventDefault();
        alert(`🚀 Live demo for ${project.title} is coming soon!`);
      }
    }}
  >
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
    {project.isDeployed ? "Demo" : "Demo Soon"}
  </a>
  
  {/* Code Button */}
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
  >
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    Code
  </a>
</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;