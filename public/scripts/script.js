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
    })
})


