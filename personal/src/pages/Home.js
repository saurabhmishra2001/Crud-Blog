import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Saurabh Kumar Mishra</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="/"><LinkedInIcon /></a>
          <a href="/"><EmailIcon /></a>
          <a href="https://github.com/saurabhmishra2001"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS,HTML, CSS, Bootstrap, JavaScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, Kotlin</span>
          </li>
          <li className="item">
            <h2>Android</h2>
            <span>Android Development</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;