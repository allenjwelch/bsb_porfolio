import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const onScroll = () => {
	// const wh = window.innerHeight;
	// console.log(wh); 
	const headerElem = document.querySelector('.header'); 
	console.log(headerElem); 


	window.addEventListener('scroll', function(e) {

		window.scrollY > 200 ? headerElem.classList.add('scrolled') : headerElem.classList.remove('scrolled')


	})

}

setTimeout(() => {
	
	onScroll()
}, 1000);

const Header = ({ siteTitle }) => (
  <header className='header'
    // style={{
    //   background: `rebeccapurple`,
    //   // marginBottom: `1.45rem`,
    //   position: `fixed`, 
    //   width: `100%`,
    // }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            // color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
