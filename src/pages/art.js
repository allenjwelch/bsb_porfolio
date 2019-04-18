import React, { Component } from 'react'; 
import Layout from "../components/layout"
// import { Link } from "gatsby"
import './css/art.css'; 
// import images from '../../static/images/art/artList'
// import onScroll from '../../static/js/scroll.js'


import l1 from '../images/rose.jpg'
import c1 from '../images/the_dock.jpg'
import r1 from '../images/outoftheflame.jpg'
import l2 from '../images/lighthouse_staircase.jpg'
import c2 from '../images/phoenix_rising.jpg'
import r2 from '../images/aftermath1.jpg'
import l3 from '../images/muscle_movement.jpg'
import c3 from '../images/water_meets_the_sky.jpg'
import r3 from '../images/rainbow_jesus.jpg'
import l4 from '../images/spiral_up2.jpg'
import c4 from '../images/self_portrait.png'
import r4 from '../images/serenity_lake.jpg'

// const imgs = [
//     'https://images.fineartamerica.com/images-medium-large-5/the-hiding-place-joshua-smith.jpg', 
//     'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/pop-culture-characters-thrift-store-paintings-dave-pollot-1.jpg', 
//     'https://www.thisiscolossal.com/wp-content/uploads/2019/02/yoga-moose-1.jpg', 
//     'https://twistedsifter.files.wordpress.com/2014/06/fine-art-finger-paintings-by-iris-scott-5.jpg?w=800&h=800', 
//     '', 
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
//     'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
//     'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
//     'https://paintingcircle.com/images/home/paint2.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
//     'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
//     'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
//     'https://paintingcircle.com/images/home/paint2.jpg',
// ]

class Art extends Component {

    componentDidMount() {
        this.artScroll()
    }

    artScroll() {
        const wh = window.innerHeight;
        const imgElems = document.querySelectorAll('img'); 

        window.addEventListener('scroll', function(e) {

            // let scrollPosLow = window.scrollY + (wh * .66); 
            // let scrollPosCenter = window.scrollY + (wh /2); 
            let scrollPosBottom = window.scrollY + wh; 
        

            imgElems.forEach( (img, i) => {
                if(img.offsetTop < scrollPosBottom) {
                    // console.log('ONscreen'); 
                    img.classList.add('active'); 
                } else {
                    img.classList.remove('active'); 
                    // console.log('offscreen'); 
                }
            })  
        
        
        })    
    }

    render() {
        return (
            <Layout>
                <div className="art-page">
                    
                    <section className="hero">
                        <h1>Art...makes me happy</h1>
                    </section>

                    <section className="description">
                        <p>Say a little something here about art...</p>
                    </section>

                    <section className="grid">
{/* 
                        {
                            images.map((src, i)=> {
                                return <img key={i} data-key={i} className="grid-item" src={src} alt=""/>
                            })
                        } */}

                        <img className="grid-item" src={l1} alt=""/>
                        <img className="grid-item" src={c1} alt=""/>
                        <img className="grid-item" src={r1} alt=""/>
                        <img className="grid-item" src={l2} alt=""/>
                        <img className="grid-item" src={c2} alt=""/>
                        <img className="grid-item" src={r2} alt=""/>
                        <img className="grid-item" src={l3} alt=""/>
                        <img className="grid-item" src={c3} alt=""/>
                        <img className="grid-item" src={r3} alt=""/>
                        <img className="grid-item" src={l4} alt=""/>
                        <img className="grid-item" src={c4} alt=""/>
                        <img className="grid-item" src={r4} alt=""/>
                        
                    </section>      
                </div>
            </Layout>
        )
    }
}

export default Art; 