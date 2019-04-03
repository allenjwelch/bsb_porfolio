const onScroll = () => {
    console.log('testing')
    const wh = window.innerHeight;
    const headerElem = document.querySelector('.header'); 
    
    let textLinks; 
    let homeKickers; 
    
    if(document.querySelector('.home-page')) {
        textLinks = document.querySelectorAll('.text-link'); 
        homeKickers = document.querySelectorAll('.kicker'); 
        console.log(homeKickers)
    }
    
    console.log('wh: ', wh); 
    // console.log(headerElem); 
    
    window.addEventListener('scroll', function(e) {
        let scrollPosLow = window.scrollY + (wh * .66); 
        let scrollPosCenter = window.scrollY + (wh /2); 
        // console.log('scrollPosCenter: ', scrollPosCenter)


        //---- HEADER SCROLL ----
        window.scrollY > 200 ? headerElem.classList.add('scrolled') : headerElem.classList.remove('scrolled')

        //---- HOME SCROLL ----
        if(document.querySelector('.home-page')) {
            // console.log('link.offsetTop: ', textLink[0].offsetTop)
            // console.log('scrollPosCenter: ', scrollPosCenter)

            textLinks.forEach( (link, i) => {
                scrollPosCenter >= link.offsetTop ? link.classList.add('scrolled') : link.classList.remove('scrolled'); 
            })

            homeKickers.forEach( (kicker, i) => {
                scrollPosLow >= kicker.offsetTop ? kicker.classList.add('scrolled') : kicker.classList.remove('scrolled'); 
            })

            

        }
    })
}

export default onScroll; 

