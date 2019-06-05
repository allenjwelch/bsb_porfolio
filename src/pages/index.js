import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/index.scss'

import qoinsLogo from '../images/qoins/title1.png'
import qoinsLogo2 from '../images/qoins/title2.png'
import recycleLogo from '../images/recycleatl/logo.png'
import recycleLogo2 from '../images/recycleatl/logo2.png'

class Home extends React.Component {

	componentDidMount() {
        this.projectScroll();
	}

	projectScroll() {
        const projects = document.querySelectorAll('.project-tile')
        projects.forEach(project => {
            project.addEventListener('click', function() {
                let projectDiv = document.querySelector(`.project[data-project="${this.dataset.project}"]`)
                console.log(projectDiv)
                // projectDiv.scrollIntoView(false);
                projectDiv.scrollIntoView({ block: "center", behavior: 'smooth' });
            })
        })
    }


	render() {
		return (
			<Layout>
				<div className="home-page">
					<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
					<section className="hero">
						{/* <h1>About Me</h1> */}
					</section>

					<section className="content">
						<section className="brief-text">
							<p>A creative thinker and artist dedicated to the user centered process of research and design</p>
						</section>

						<section className="project-tiles">
							<img className="project-tile" data-project="1" src={qoinsLogo} alt=""/>
							<img className="project-tile" data-project="2" src={recycleLogo2} alt=""/>
							<img className="project-tile" data-project="3" src="https://via.placeholder.com/300C/O" alt=""/>
							{/* <img className="project-tile" data-project="4" src="https://via.placeholder.com/300C/O" alt=""/>
							<img className="project-tile" data-project="5" src="https://via.placeholder.com/300C/O" alt=""/>
							<img className="project-tile" data-project="6" src="https://via.placeholder.com/300C/O" alt=""/> */}
						</section>

						<section className="intro-text">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione, tempora nisi perspiciatis illum officia fugiat explicabo, voluptatum sunt corporis similique deserunt accusantium itaque sed rerum et quidem? Fuga delectus quaerat qui iure quae laudantium provident maxime nam dignissimos. Animi <Link className="text-link" to="/projects/">projects</Link> saepe, magnam consequatur repudiandae illum eligendi, est corrupti dolores rerum modi vitae similique sapiente quod non laudantium omnis ullam iste molestiae at tenetur mollitia veniam. Accusamus corporis eius alias architecto sunt, maiores doloribus maxime officiis, nihil ducimus eos suscipit doloremque cumque voluptatum inventore quidem mollitia labore necessitatibus cum culpa? Iste voluptate minus, quos dignissimos earum atque tempora obcaecati minima.</p>
						</section>



						<section className="projects-container">
							<article className="project" data-project="1">
								<Link to="/qoins">
									<div className="project-image">
										<img src={qoinsLogo2} alt=""/>
									</div>
									<div className="project-description">
										<h1>Qoins</h1>
										<p>A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster</p>
									</div>
									{/* <div className="project-tags">
										<p>role</p>
										<p>features</p>
										<p>other stuff</p>
									</div> */}
								</Link>
							</article>

							<article className="project" data-project="2">
								<Link to="/recycleATL">

									<div className="project-description">
										<h1>Recycle ATL</h1>
										<p>Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.</p>
									</div>
									<div className="project-image">
										<img src={recycleLogo} alt=""/>
									</div>
									{/* <div className="project-tags">
										<p>role</p>
										<p>features</p>
										<p>other stuff</p>
									</div> */}
								</Link>
							</article>

							<article className="project"  data-project="3">
								<div className="project-image">
									<img src="https://via.placeholder.com/500x400" alt=""/>
								</div>
								<div className="project-description">
									<h1>TITLE</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero at dolor consequuntur dolores impedit pariatur recusandae maxime inventore praesentium iste sunt unde, iusto commodi esse nostrum aliquam beatae repellendus?</p>
								</div>
								{/* <div className="project-tags">
									<p>role</p>
									<p>features</p>
									<p>other stuff</p>
								</div> */}
							</article>
						</section>


					</section>
				</div>
			</Layout>
		)
	}
}

export default Home
