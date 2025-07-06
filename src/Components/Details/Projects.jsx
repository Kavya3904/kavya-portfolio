import React, { useState } from "react";
import "./Details.css";
import { motion, AnimatePresence } from "framer-motion";
import ford from "../../assets/ford-accountmanager.png";
import wedding from "../../assets/weddding.png";
import movies from "../../assets/movies-about.png";
import lincoln from "../../assets/lincoln-accountmanager.png";
import food from "../../assets/food-recepie.png";

const projectData = [
  {
    title: "Accountmanager Ford",
    description:
      "Worked on Ford’s customer account website using <b>React.js</b> with a Micro Frontend setup. Helped build and improve UI screens, connected them to data using <b> GraphQL </b>, and used <b> AEM </b>to manage website content. Also wrote automated tests using <b> Playwright </b> to make sure everything works smoothly across browsers.",
    image: ford,
    link: "https://accountmanager.ford.com/",
  },
  {
    title: "Accountmanager Lincoln",
    description:
      "Worked on Lincoln’s customer account website using <b>React.js</b> with a Micro Frontend setup. Helped build and improve UI screens, connected them to data using <b> GraphQL </b>, and used <b> AEM </b>to manage website content. Also wrote automated tests using <b> Playwright </b> to make sure everything works smoothly across browsers.",
    image: lincoln,
    link: "https://accountmanager.lincoln.com/",
  },
  {
    title: "Food Recipe",
    description:
      "Built a responsive recipe web app using <b> React.js </b> that lets users browse and explore food recipes with images and titles. Designed clean UI cards for each recipe and deployed the project on Firebase Hosting for public access.",
    image: food,
    link: "https://recipe-food-2a24a.web.app/",
  },
  {
    title: "Movie Details",
    description:
      "Created a basic movie review website using <b> HTML </b>, <b> CSS </b>, and <b> JavaScript </b>, where users can view a list of movies along with descriptions and ratings. Focused on clean layout, styling, and responsive design using pure frontend technologies.",
    image: movies,
    link: "https://kavya3904.github.io/Movie-Review/Movie/index.html",
  },
  {
    title: "Wedding Card",
    description:
      "Designed and developed a custom wedding invitation website using <b> React.js </b>, showcasing event details, couple info, and celebration highlights. Focused on a clean, responsive layout with a personal touch and deployed the site using Firebase Hosting.",
    image: wedding,
    link: "https://karthikwedsvyshna.web.app/",
  },
];

const itemsPerPage = 4;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const paginatedData = projectData.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const handleNext = () => page < totalPages - 1 && setPage((prev) => prev + 1);
  const handlePrev = () => page > 0 && setPage((prev) => prev - 1);

  return (
    <div className="main-div">
      <div className="heading-div">Projects</div>

      <div className="flex-container">
        <div className="carousel-wrapper">
          <button
            className="arrow left"
            onClick={handlePrev}
            disabled={page === 0}
          >
            ⬅
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="flex-container"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {paginatedData.map((item, index) => (
                <motion.div
                  key={page * itemsPerPage + index}
                  className="project-box"
                  whileHover={{ scale: 1.05 }}
                  title={item.title}
                  onClick={() => setSelectedProject(page * itemsPerPage + index)}
                >
                  <img
                    className="ford"
                    src={item.image}
                    alt={`project-${index}`}
                    loading="lazy"
                  />
                  <div className="content-div">Show more...</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            className="arrow right"
            onClick={handleNext}
            disabled={page === totalPages - 1}
          >
            ➡
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{projectData[selectedProject].title}</h2>
                <div
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </div>
              </div>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={projectData[selectedProject].link}
              >
                {projectData[selectedProject].title}
              </a>

              <img
                src={projectData[selectedProject].image}
                alt="project details"
                loading="lazy"
              />

              <p
                dangerouslySetInnerHTML={{
                  __html: projectData[selectedProject].description,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
