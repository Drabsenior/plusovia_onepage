import React from "react";
import "./Project.css";
import Project1 from "../../assets/image/project1.png";
import Project2 from "../../assets/image/project2.png";
const Project = () => {
  const projects = [
    {
      image: Project1,
      detail: "Ebbatvoice.com",
    },
    {
      image: Project2,
      detail: "kokebpersion.com",
    },
    {
      image: Project1,
      detail: "Geezwatch.com",
    },
  ];
  return (
    <div className="projectcontainer">
      <h2>Our Previous works</h2>
      <div className="flexprojects">
        {projects.map((project) => {
          return (
            <div className="projectcontent">
              <img src={project.image} alt="" />

              <span>{project.detail}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
