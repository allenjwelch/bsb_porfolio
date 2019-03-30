import React from 'react'; 
import Layout from "../components/layout"
import { Link } from "gatsby"
import './art.css'; 

const imgs = [
    'https://images.fineartamerica.com/images-medium-large-5/the-hiding-place-joshua-smith.jpg', 
    'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/pop-culture-characters-thrift-store-paintings-dave-pollot-1.jpg', 
    'https://www.thisiscolossal.com/wp-content/uploads/2019/02/yoga-moose-1.jpg', 
    'https://twistedsifter.files.wordpress.com/2014/06/fine-art-finger-paintings-by-iris-scott-5.jpg?w=800&h=800', 
    '', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
    'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
    'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
    'https://paintingcircle.com/images/home/paint2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml-URJCIA760C4fOvkc9nggcWg0Mu3M8IBvh-QBMfMf1R4R6H',
    'https://www.wrecklessericpaintings.com/uploads/6/8/1/9/6819788/s239469660320546760_p194_i1_w904.jpeg', 
    'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/29494/42220/1516682731198_PSX_20180122_175847-1194x1201__37842.1521002898.jpg?c=2&imbypass=on', 
    'https://paintingcircle.com/images/home/paint2.jpg',
]


// const styles = {
//     img: {
//         display: "inline-block",
//         margin: 0,
//     }, 
// }

const onScroll = () => {
    const wh = window.innerHeight;
    console.log(wh); 


    window.addEventListener('scroll', function(e) {
        console.log('scrolling...')
        let scrollPos = window.scrollY + wh; 
        
        console.log(scrollPos); 
        const imgTotal = document.querySelectorAll('img').length; 
        const imgElems = document.querySelectorAll('img'); 
        console.log(imgElems); 
        console.log(imgElems[0]); 
        // for (i = 0; i < imgTotal; i++) {
        //     if ()
        // }

        imgElems.forEach( (img, i) => {
            console.log('imgTopPos: ', img.offsetTop)

            if(img.offsetTop < wh) {
                console.log('offscreen'); 
            }
            // if(img.offsetTop > 0) {
            //     console.log('gotit'); 

            // }
            
        })
        
    })
}

onScroll(); 

const replaceElem = () => {

    // select the element that will be replaced
    var el = document.querySelector('[data-key="4"]'); 
    
    // new element
    var newEl = document.createElement('div');
    newEl.innerHTML = '<p>Hello World!</p>';
    
    // replace el with newEL
    el.parentNode.replaceChild(newEl, el);
}


setTimeout(() => {
    console.log(document.querySelector('[data-key="2"]')); 
    // replaceElem()
}, 1000)

const Art = () => (
    <Layout>
        <h1>Art Page</h1>
        <div className="grid">

            {
                imgs.map((src, i)=> {
                    return <img key={i} data-key={i} className="grid-item" src={src} alt=""/>
                })
            }
            
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Art; 