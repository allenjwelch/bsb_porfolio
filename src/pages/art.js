import React from 'react'; 
import Layout from "../components/layout"
import { Link } from "gatsby"
import './art.css'; 

const imgs = [
    'https://images.fineartamerica.com/images-medium-large-5/the-hiding-place-joshua-smith.jpg', 
    'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/pop-culture-characters-thrift-store-paintings-dave-pollot-1.jpg', 
    'https://www.thisiscolossal.com/wp-content/uploads/2019/02/yoga-moose-1.jpg', 
    'https://twistedsifter.files.wordpress.com/2014/06/fine-art-finger-paintings-by-iris-scott-5.jpg?w=800&h=800', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
    'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
    'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
    'https://paintingcircle.com/images/home/paint2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
    'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
    'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
    'https://paintingcircle.com/images/home/paint2.jpg',
]
// const src1 = ;
// const src2 = ; 
// const src3 = ; 
// const src4 = ; 
// const src5 = ;
// const src6 = ;
// const src7 = ; 
// const src8 = ; 

// const styles = {
//     img: {
//         display: "inline-block",
//         margin: 0,
//     }, 
// }



const Art = () => (
    <Layout>
        <h1>Art Page</h1>
        <div className="grid">

            {
                imgs.map((src, i)=> {
                    // if (i % 2 === 0) {
                    //     return <img key={i} className="grid-item" src={src} alt=""/>
                    // } else if (i % 3 === 0 ) {
                    //     return <img key={i} className="grid-item grid-item--width2" src={src} alt=""/>
                    // } else {
                    //     return <img key={i} className="grid-item grid-item--width3" src={src} alt=""/>
                    // }

                    return <img key={i} className="grid-item" src={src} alt=""/>
                })
            }
            
            {/* <img className="grid-item" src={src1} alt=""/>
            <img className="grid-item grid-item--width2" src={src2} alt=""/>
            <img className="grid-item" src={src3} alt=""/>
            <img className="grid-item grid-item--width2" src={src4} alt=""/>
            <img className="grid-item" src={src5} alt=""/>
            <img className="grid-item grid-item--width2" src={src6} alt=""/>
            <img className="grid-item" src={src7} alt=""/>
            <img className="grid-item grid-item--width2" src={src8} alt=""/> */}

        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Art; 