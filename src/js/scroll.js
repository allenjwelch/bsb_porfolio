const onScroll = () => {
    console.log('testing')
    const wh = window.innerHeight;
    const headerElem = document.querySelector('.header'); 
    console.log(headerElem)
    
    let textLinks; 
    let homeKickers; 
    
    if(document.querySelector('.home-page')) {
        textLinks = document.querySelectorAll('.text-link'); 
        homeKickers = document.querySelectorAll('.kicker'); 
        console.log(homeKickers)
        console.log(textLinks)
    }
    
     //---- PROJECT SCROLL ----
    if(document.querySelector('.projects-page')) {
        console.log('projects-page')
        // document.getElementById('project1-tile').addEventListener('click', () => {
        //     console.log('click')
        // })

        let projects = document.querySelectorAll('.project-tile')
        projects.forEach(project => {
            project.addEventListener('click', function() {
                let projectDiv = document.querySelector(`.project[data-project="${this.dataset.project}"]`)
                console.log(projectDiv)
                // projectDiv.scrollIntoView(false);
                projectDiv.scrollIntoView({ block: "center", behavior: 'smooth' });


            })
        })
        
        
    }
    
    window.addEventListener('scroll', function(e) {
        let scrollPosLow = window.scrollY + (wh * .66); 
        let scrollPosCenter = window.scrollY + (wh /2); 
        // console.log('scrollPosCenter: ', scrollPosCenter)


        //---- HEADER SCROLL ----
        window.scrollY > 200 ? document.querySelector('.header').classList.add('scrolled') : document.querySelector('.header').classList.remove('scrolled')

        //---- HOME SCROLL ----
        if(document.querySelector('.home-page')) {
            // console.log('link.offsetTop: ', textLink[0].offsetTop)
            // console.log('scrollPosCenter: ', scrollPosCenter)

            document.querySelectorAll('.text-link').forEach( (link, i) => {
                scrollPosCenter >= link.offsetTop ? link.classList.add('scrolled') : link.classList.remove('scrolled'); 
            })

            document.querySelectorAll('.kicker').forEach( (kicker, i) => {
                scrollPosLow >= kicker.offsetTop ? kicker.classList.add('scrolled') : kicker.classList.remove('scrolled'); 
            })
        }

    })
}

export default onScroll; 

