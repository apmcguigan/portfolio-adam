import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          A passion for development,
          usability, and accessibility have
          been my source of motivation as I
          improve my coding, design and
          problem-solving skills. With over
          three years in the industry, I have
          worked on numerous projects with
          various team dynamics, and find
          success in providing quality results
          for the user experience.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Veterans Affairs Canada</div>
              <p>
                Working with the Canadian Digital Service the team delivered a 
                web app that allows anyone to easily see which benefits they qualify for from Veterans Affairs Canada.
                I worked primarily as a front end developer on the team. Implementing design changes and correcting bugs.
                Usability and accessibility were very important to this app. Not to mention a sleek design. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - November 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Lead</h3>
              <div className="subheading mb-3">Counter 5 Report Tool</div>
              <p>
                Working on a small team of students as my final capstone project.
                I worked as project lead coordinating with the client to ensure that all requirements were documented and met. 
                Working within agile methodology meant that I would bring tasks to the table every week and would facilitate our sprint planning meetings.

              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2019 - April 2020</span>
            </div>
          </div>
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Prince Edward Island</h3>
              <div className="subheading mb-3">Bachelor of Computer Science</div>
              <p>UPEI set me off on the right foot for my career. 
                Providing me with the programming fundamentals required to take on any challenge
                head on with no reservations. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2016 - December 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Web Accessibility Standards
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100"> 
          <h2 className="mb-5">Contact Me</h2> 
          <form
            name="JSX Form"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="JSX Form" />
            <label>Your Email:</label>
            <input type="email" name="email" />
            <br />
            <label>Message:</label>
            <textarea name="message" />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
