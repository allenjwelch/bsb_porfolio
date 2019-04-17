import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import onScroll from '../js/scroll.js'


class Header extends React.Component {
// const Header = ({ siteTitle }) => (
	componentDidMount() {
		onScroll()
	}

	// onScroll = () => {
	// 	const wh = window.innerHeight;
	// 	const headerElem = document.querySelector('.header'); 
	// 	// console.log(wh); 
	// 	// console.log(headerElem); 

	// 	window.addEventListener('scroll', function(e) {
	// 		window.scrollY > 200 ? headerElem.classList.add('scrolled') : headerElem.classList.remove('scrolled')
	// 	})
	// }

	render() {
		return (

			<header className='header'>
				<div className="header-container">
					<h1 style={{ margin: 0 }}>
						<Link to="/" style={{ textDecoration: `none`}} >
						{this.props.siteTitle}
						</Link>
					</h1>


					<div className="header-links">
						<Link to="/projects/">Projects</Link>
						<Link to="/art/">Art</Link>
					</div>
				</div>
			</header>
		)
	}
}


Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}


export default Header
