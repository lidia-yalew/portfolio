import React from "react";
import Nav from "../Nav";

const Portfolio = () => {
  const projects = [
    {
      title: "KIOT Bid Platform",
      description:
        "Real-time auction platform for institutional bidding with instant updates.",
      technologies: [
        "React",
        "Node.js",
        "WebSocket",
        "MySQL",
        "Express",
        "JWT",
      ],
      features: [
        "Real-time bidding with WebSocket",
        "User authentication & roles",
        "Bid history & notifications",
        "Auction management",
        "Real-time updates",
      ],
      link: "https://github.com/lidia-yalew/Auction.git",
      type: "Full Stack",
      year: "2024-2025",
      client: "Personal Project",
      // ADD YOUR LIVE DEMO URL HERE
      liveDemo: "https://kiot-bid-platform.web.app", // ← Replace with your actual Firebase URL
    },
    {
      title: "Ethiozon",
      description:
        "Amazon-style full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React","Context API", "Node.js", "Express", "MySQL", "chapa"],
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
      // ADD YOUR LIVE DEMO URL HERE
      liveDemo: "https://ethiozon-ecommerce.web.app", // ← Replace with your actual Firebase URL
    },
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
      // ADD YOUR LIVE DEMO URL HERE (Fix build error first!)
      liveDemo: "https://netflix-clone-31ee5.web.app",
    },
    {
      title: "Client Portfolio Website",
      description:
        "Professional website developed for a local client using React and Firebase. Features include contact forms and Firebase hosting deployment.",
      technologies: [
        "React",
        "Firebase storage",
        "Tailwind CSS",
        "Firebase Hosting",
        "EmailJS",
        "Responsive Design",
      ],
      features: [
        "Client business information",
        "Contact form with EmailJS integration",
        "Firebase Authentication for admin panel",
        "Fully responsive design",
        "Fast loading with Firebase Hosting",
        "SEO optimized",
      ],
      link: "https://github.com/lidia-yalew/Animaw-Portfolio.git",
      type: "fullstack",
      year: "2025",
      // ADD YOUR LIVE DEMO URL HERE
      client: "client Project",
      liveDemo: "https://animaw-portfolio.web.app", // ← Replace with your actual Firebase URL
    },
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
      link: "https://github.com/lidia-yalew/amazon-clone", // ← Add your GitHub link
      type: "Frontend",
      year: "2024",
      client: "Personal Project",
      // ADD YOUR LIVE DEMO URL HERE
      liveDemo: "https://amazon-clone-ashy-beta.vercel.app", // ← Replace with your actual Firebase URL
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />

      {/* Portfolio Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects including personal full-stack
            applications and client websites built with React & Firebase.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 ${
                project.client === "Business Client"
                  ? "border-2 border-orange-500/30"
                  : ""
              }`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">
                        {project.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {project.client}
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-gray-300 font-semibold mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tech === "Firebase" || tech === "Firebase Hosting"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-800 text-gray-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-gray-300 font-semibold mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <i className="fas fa-check text-green-500 text-sm"></i>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-gray-500 text-sm">
                        + {project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Footer - Updated with Live Demo Button */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                  <div className="flex gap-2">
                    {/* Show Client Project badge if applicable */}
                    {project.client !== "Personal Project" && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        Client Project
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {/* Live Demo Button - Always show now */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm ${
                        project.liveDemo === "#"
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      }`}
                      onClick={(e) => {
                        if (project.liveDemo === "#") {
                          e.preventDefault();
                          alert(
                            `Live demo for ${project.title} is coming soon! Currently fixing deployment.`
                          );
                        }
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {project.liveDemo === "#" ? "Demo Soon" : "Live Demo"}
                    </a>

                    {/* GitHub Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full hover:opacity-90 transition-colors text-sm ${
                        project.link === "#"
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-orange-500 text-white hover:bg-orange-600"
                      }`}
                    >
                      <i className="fab fa-github"></i>
                      {project.link === "#" ? "Private Repo" : "View Code"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... Rest of your component remains the same ... */}
      </div>
    </div>
  );
};

export default Portfolio;
