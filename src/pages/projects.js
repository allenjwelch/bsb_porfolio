import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import './css/projects.css'
import onScroll from '../js/scroll.js'

onScroll();

const Projects = () => (
  <Layout>
    <div className="projects-page">
      <section className="hero">
      </section>

      <section className="project-tiles">
        <img className="project-tile" data-project="1" src="https://via.placeholder.com/300C/O" alt=""/>
        <img className="project-tile" data-project="2" src="https://via.placeholder.com/300C/O" alt=""/>
        <img className="project-tile" data-project="3" src="https://via.placeholder.com/300C/O" alt=""/>
        <img className="project-tile" data-project="4" src="https://via.placeholder.com/300C/O" alt=""/>
        <img className="project-tile" data-project="5" src="https://via.placeholder.com/300C/O" alt=""/>
        <img className="project-tile" data-project="6" src="https://via.placeholder.com/300C/O" alt=""/>
      </section>

      <section className="projects-container">
        <article className="project" data-project="1">
          <div className="project-image">
            <img src="https://via.placeholder.com/500x400" alt=""/>
          </div>
          <div className="project-description">
            <h1>TITLE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
          </div>
          <div className="project-tags">
            <p>role</p>
            <p>features</p>
            <p>other stuff</p>
          </div>
        </article>

        <article className="project" data-project="2">
          <div className="project-description">
            <h1>TITLE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
          </div>
          <div className="project-image">
            <img src="https://via.placeholder.com/500x400" alt=""/>
          </div>
          <div className="project-tags">
            <p>role</p>
            <p>features</p>
            <p>other stuff</p>
          </div>
        </article>

        <article className="project"  data-project="3">
          <div className="project-image">
            <img src="https://via.placeholder.com/500x400" alt=""/>
          </div>
          <div className="project-description">
            <h1>TITLE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
          </div>
          <div className="project-tags">
            <p>role</p>
            <p>features</p>
            <p>other stuff</p>
          </div>
        </article>
      </section>



      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Projects
