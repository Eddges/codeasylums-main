$(document).ready(function(){

    $('.landing-left').hover(function(){
        $(".landing-left-text").toggleClass("landing-left-text-shifted")
        $(".landing-left .WaveFront").toggleClass("WaveFront-shifted")
        $(".landing-left .WaveBack").toggleClass("WaveBack-shifted")
        $(".landing-left .Main").toggleClass("Main-shifted")
        $(".landing-left .Decor").toggleClass("Decor-shifted")
        $(this).toggleClass('landing-left-shifted')
        $('.landing-left .ReactJS').toggleClass('ReactJS-shifted')
        $('.landing-left .Kuber').toggleClass('Kuber-shifted')
        $('.landing-left .HTML5').toggleClass('HTML5-shifted')
        $('.landing-left .Github').toggleClass('Github-shifted')
        $('.landing-left .Table').toggleClass('Table-shifted')
        $('.landing-left .Logo').toggleClass('Logo-noshow')
        $('.landing-left .LogoWhite').toggleClass('LogoWhite-show')
        $('.main-bottom-text').toggleClass('main-bottom-text-shifted-left')
        $('.highImage').toggleClass('highImage-toggle')
        $('.spinner').toggleClass('spinner-toggle')
        
    })

    $('.landing-right').hover(function(){
        $('.landing-right-text').toggleClass('landing-right-text-shifted')
        $('.landing-right .WaveFront').toggleClass('WaveFront-shifted')
        $('.landing-right .WaveBack').toggleClass('WaveBack-shifted')
        $('.landing-right .Main').toggleClass('Main-shifted')
        $('.landing-right .Decor').toggleClass('Decor-shifted')
        $('.AWS').toggleClass('AWS-shifted')
        $('.Docker').toggleClass('Docker-shifted')
        $('.Ansible').toggleClass('Ansible-shifted')
        $(this).toggleClass('landing-right-shifted')
        $('.main-bottom-text').toggleClass('main-bottom-text-shifted-right')
        $('.main-bottom-text-right').toggleClass('main-bottom-text-right-shifted')
    })

    $('.DockItem').hover(function() {
        $(this).children('.DockItemShadow').toggleClass('DockItemShadow-shifted')
    })
})





const nav = document.querySelector(".fix");
    const sectionOne = document.querySelector(".intersection")

    const sectionOneOptions = {
        rootMargin : "100px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                // nav.classList.add('nav-scrolled')
                // console.log(nav.classList)
                $(".landing-left-text").addClass("landing-left-text-shifted")
                $(".landing-left .WaveFront").addClass("WaveFront-shifted")
                $(".landing-left .WaveBack").addClass("WaveBack-shifted")
                $(".landing-left .Main").addClass("Main-shifted")
                $(".landing-left .Decor").addClass("Decor-shifted")
                $('.landing-left').addClass('landing-left-shifted')
                $('.landing-left .ReactJS').addClass('ReactJS-shifted')
                $('.landing-left .Kuber').addClass('Kuber-shifted')
                $('.landing-left .HTML5').addClass('HTML5-shifted')
                $('.landing-left .Github').addClass('Github-shifted')
                $('.landing-left .Table').addClass('Table-shifted')
                $('.topLogoBlack').addClass('topLogoBlack-noshow')
                $('.topLogoWhite').addClass('topLogoWhite-show')
                $('.main-bottom-text').addClass('main-bottom-text-shifted-left')
                $('.topLogo').addClass('topLogo-shifted')
                $('.highImage').addClass('highImage-toggle')
                $('.spinner').addClass('spinner-toggle')
                $('.eventText').addClass('eventText-shifted')
                
            }
            else{
                $(".landing-left-text").removeClass("landing-left-text-shifted")
                $(".landing-left .WaveFront").removeClass("WaveFront-shifted")
                $(".landing-left .WaveBack").removeClass("WaveBack-shifted")
                $(".landing-left .Main").removeClass("Main-shifted")
                $(".landing-left .Decor").removeClass("Decor-shifted")
                $('.landing-left').removeClass('landing-left-shifted')
                $('.landing-left .ReactJS').removeClass('ReactJS-shifted')
                $('.landing-left .Kuber').removeClass('Kuber-shifted')
                $('.landing-left .HTML5').removeClass('HTML5-shifted')
                $('.landing-left .Github').removeClass('Github-shifted')
                $('.landing-left .Table').removeClass('Table-shifted')
                $('.topLogoBlack').removeClass('topLogoBlack-noshow')
                $('.topLogoWhite').removeClass('topLogoWhite-show')
                $('.main-bottom-text').removeClass('main-bottom-text-shifted-left')
                $('.topLogo').removeClass('topLogo-shifted')
                $('.eventText').removeClass('eventText-shifted')
            }
        })
    }, sectionOneOptions)

    sectionOneObserver.observe(sectionOne)




    const sectionOneRight = document.querySelector(".intersectionRight")

    const sectionOneRightOptions = {
        rootMargin : "-100px 0px 0px 0px"
    };
    

    const sectionOneObserverRight = new IntersectionObserver(function(entries, sectionOneObserverRight){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // nav.classList.add('nav-scrolled')
                // console.log(nav.classList)
                $('.landing-right-text').addClass('landing-right-text-shifted')
                $('.landing-right .WaveFront').addClass('WaveFront-shifted')
                $('.landing-right .WaveBack').addClass('WaveBack-shifted')
                $('.landing-right .Main').addClass('Main-shifted')
                $('.landing-right .Decor').addClass('Decor-shifted')
                $('.AWS').addClass('AWS-shifted')
                $('.Docker').addClass('Docker-shifted')
                $('.Ansible').addClass('Ansible-shifted')
                $('.landing-right').addClass('landing-right-shifted')
                $('.main-bottom-text').addClass('main-bottom-text-shifted-right')
                $('.main-bottom-text-right').addClass('main-bottom-text-right-shifted')
            }
            else{
                $('.landing-right-text').removeClass('landing-right-text-shifted')
                $('.landing-right .WaveFront').removeClass('WaveFront-shifted')
                $('.landing-right .WaveBack').removeClass('WaveBack-shifted')
                $('.landing-right .Main').removeClass('Main-shifted')
                $('.landing-right .Decor').removeClass('Decor-shifted')
                $('.AWS').removeClass('AWS-shifted')
                $('.Docker').removeClass('Docker-shifted')
                $('.Ansible').removeClass('Ansible-shifted')
                $('.landing-right').removeClass('landing-right-shifted')
                $('.main-bottom-text').removeClass('main-bottom-text-shifted-right')
                $('.main-bottom-text-right').removeClass('main-bottom-text-right-shifted')
            }
        })
    })

    sectionOneObserverRight.observe(sectionOneRight)