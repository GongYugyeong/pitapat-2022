
$(document).ready(function(){

    
    if ('NodeList' in window && !NodeList.prototype.forEach) {
        
        NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
            }
        };
    }

    // 마우스 커서 
    const cursorFollower = $("#cursorFollower");
    const cursorDefault = $("#cursorFollower .default");
    const cursorColor = $("#cursorFollower .color_box");

    const scrollObj = window.Scrollbar.init(document.querySelector('.wrap'),{ damping: 0.1, thumbMinSize:10, speed:0.01});

    scrollObj.addListener(function(e){
        // _this 값을 콘솔로 찍어보면 SS 플러그인에 어떤 값을 내려주는지 확인할 수 있고 활용할 수 있습니다.
        let _this = this;
        let scrollVal = _this.offset.y;
        
        // GSAP 스크롤 트리거 플러그인의 Y값을 실시간으로 업데이트 해줍니다.
        // if($('body').is('#main') == true || $('body').is('#About') == true){

            ScrollTrigger.update();
            //console.log(_this);
        // }

        
        $('#topBox , .dim').css({'top':scrollVal});

        if($('body').is('#main')){  // 메인일때만 실행
            let sec02Top = $('#sec02').offset().top;
            let sec03Top = $('#sec03').offset().top;
            let sec04Top = $('#sec04').offset().top;
            let sec05Top = $('#sec05').offset().top;
    
            if(sec02Top < 50 && sec03Top > 50){
                $('.header_wrap').addClass('B');
            } else if(sec03Top < 50 && sec04Top > 50){
                $('.header_wrap').removeClass('B');
            } else if(sec04Top < 50 && sec05Top > 50){
                $('.header_wrap').addClass('B');
            } else{
                $('.header_wrap').removeClass('B');
            }
        }else {
            $('.header_wrap').addClass('B');
            $('#footer').css('background-color','#FBFBFB')
        }

    });
    $(document).on('mousemove',function(e){ 
        document.querySelector("#cursorFollower").style.transform = "translate3d(" + e.pageX + "px, " + e.pageY + "px, 0px )"
    })
    $(document).on('mouseover',function(e){
        let eTarget = $(e.target);
        if(eTarget.hasClass('cursor_s') == true){
            cursorDefault.stop().animate({'width':'17px','height':'17px'},100);
        } else if(eTarget.parents().hasClass('big_text') == true){
            let color = eTarget.parents('.big_text').data('img');
            cursorDefault.stop().fadeOut();
            cursorColor.stop().fadeIn().css({'background-image':
            "url('assets/images/hover_img_0"+color+".png')"});
            cursorFollower.css('z-index','-1');
        }
    })
    $(document).on('mouseout',function(e){
        let eTarget = $(e.target);
        if(eTarget.hasClass('cursor_s') == true){
            cursorDefault.stop().animate({'width':'50px','height':'50px'},100);
        } else if(eTarget.parents().hasClass('big_text') == true){
            cursorDefault.stop().fadeIn();
            cursorColor.stop().fadeOut(); 
            cursorFollower.css('z-index','1');
        }
    })

    $(document).on('click','button.top_btn',function(e){
        e.preventDefault();
        scrollObj.scrollTo(0, 0, 1000);
    })
    
    //메뉴
    $(document).on('click','.menu_btn',function(){
        if($(this).hasClass('on') == true){
            $('#gnb').removeClass('active');
            $(this).removeClass('on');
            $('.menu_btn .bar').removeClass('white');
        } else {
            $('#gnb').addClass('active');
            $(this).addClass('on');
            $('.menu_btn .bar').addClass('white');
        }
    });


    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    ScrollTrigger.defaults({ scroller: document.querySelector('.wrap') }); 
    ScrollTrigger.scrollerProxy('.wrap',{
        scrollTop: function(value) {
            if (arguments.length) {
                scrollObj.scrollTop = value;
            }
            return scrollObj.scrollTop;
        }
    });

    //타이핑 모션
    $(".typing").typed({
        strings: ["DEVELOPERS;"],
        typeSpeed: 300,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

    //sec02
    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec02",
            start:"top 60%",
            end:"top 30%",
            markers:false,
            scrub:1,
        }
    })
    .fromTo("#main .big_text", {yPercent:50}, {yPercent:0, ease: 'none', duration: 0.8},0)
    .fromTo("#main .big_text .big_text_wrap", {yPercent:50}, {yPercent:0, ease: 'none', duration: 0.8},0)

    //sec02 - sec03 넘어갈 때
    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec03",
            start:"top 100%",
            end:"top 50%",
            //pin:true,
            // markers:true,
            scrub:0.2,
        }
    })
    .fromTo(".hover_text ", {color:'#242424'}, {color:'#000000', ease: 'none', duration:0.5})
    .fromTo("#main #sec02 ,#main #sec03 ", {backgroundColor:'transparent'}, {backgroundColor:'#000000', ease: 'none', duration:0.5})

     //sec03 - sec04 넘어갈 때
    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec03",
            start:"bottom 100%",
            end:"bottom 40%",
            //pin:true,
            // markers:true,
            scrub:0.2,
        }
    })
    .fromTo(".work_box ", {opacity:'1'}, {opacity:'0', ease: 'none', duration:0.8})
    .fromTo("#main #sec03, #main #sec04 .black_bg", {opacity:'1'}, {opacity:'0', ease: 'none', duration:0.8})
    // .fromTo("#main #sec04 ", {backgroundColor:'#000000'}, {backgroundColor:'transparent', ease: 'none', duration:0.8})
    

 // sec03 비디오 재생 위치
    let ptVod1 = $('#ptVod1 video');
    let ptVod2 = $('#ptVod2 video');
    let ptVod3 = $('#ptVod3 video');

    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec03 .box01",
            start:"center 100%",
            // pin:true,
            endTrigger: "#main #sec03 .box01",
            end:"center 20%",
            //markers:true,
            scrub:0.2,
            onEnter:function(){
                ptVod1.trigger('play')
            },
            onLeave:function(){
                ptVod1.trigger('pause')
            },
            onEnterBack:function(){
                ptVod1.trigger('play')
            },
            onLeaveBack:function(){
                ptVod1.trigger('pause')
            }
        }
    })
    .fromTo("#main .work_01 .work_title", {yPercent:0}, {yPercent:150, duration : 5,ease: "none"})

    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec03 .box02",
            start:"center 100%",
            // pin:true,
            endTrigger: "#main #sec03 .box02",
            end:"center 20%",
            //markers:true,
            scrub:0.2,
            onEnter:function(){
                ptVod2.trigger('play')
            },
            onLeave:function(){
                ptVod2.trigger('pause')
            },
            onEnterBack:function(){
                ptVod2.trigger('play')
            },
            onLeaveBack:function(){
                ptVod2.trigger('pause')
            }
        }
    })
    .fromTo("#main .work_02 .work_title", {yPercent:0}, {yPercent:150, duration : 5,ease: "none"})

    gsap.timeline({
        scrollTrigger:{
            trigger: "#main #sec03 .box03",
            start:"center 100%",
            // pin:true,
            endTrigger: "#main #sec03 .box03",
            end:"center 20%",
            //markers:true,
            scrub:0.2,
            onEnter:function(){
                ptVod3.trigger('play')
            },
            onLeave:function(){
                ptVod3.trigger('pause')
            },
            onEnterBack:function(){
                ptVod3.trigger('play')
            },
            onLeaveBack:function(){
                ptVod3.trigger('pause')
            }
        }
    })
    .fromTo("#main .work_03 .work_title", {yPercent:0}, {yPercent:400, duration : 5,ease: "none"})

    $('#main #sec05 .cont_wrap .cont_bg').css("background-position",`50% ${-innerHeight / 2}px`); 
    gsap.to($('#main #sec05 .cont_wrap .cont_bg'), {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
            trigger: '#main #sec05',
            start: "top 100%", 
            end: "bottom 0%",
            scrub: true
        }
    });

    //about
    gsap.timeline({
        scrollTrigger:{
            trigger: ".about_kv",
            start:"bottom 100%",
            end:"bottom -=2500",
            // markers:true,
            scrub:1,
            pin: true,
        }
    })
    .fromTo(".bg_dim ", {opacity:0}, {opacity:1, ease: 'none', duration:0.5},0)
    .fromTo(".bg_img, .bg_dim ", {y:'15.62vw'}, {y:0, ease: 'none', duration:0.5},0)
    .fromTo(".cont_text", {y:'15.62vw'}, {y:0, ease: 'none', duration:0.5},0)
    .fromTo(".texts", {opacity:0}, {opacity:1, ease: 'none', duration:0.5},0)
    .fromTo(".change_color ", {color:'#000000'}, {color:'#ffffff', ease: 'none', duration:0.5},0)
    .fromTo(".about_kv .cont_box ", {yPercent:0}, {yPercent:-60, ease: 'none', duration:4},1)

        
    if($('body').is('#main') == false){
        
        $('.header_wrap').addClass('B');
        $('#footer').css('background-color','#FBFBFB')
    }
    if($('body').is('#Career') == true){
        $('#sec02').slideUp(150,function(){
            $('#sec02').css('opacity','1');
        });
    }

    /*career*/
    let careerS1 = $('#Career #sec01').outerHeight();
    $(document).on('click','.sub_btn',function(){
        $('#sec02').slideDown();
        
        setTimeout(function(){
            scrollObj.scrollTo(0, careerS1, 1000);
        },150)
    })
    setInterval(function(){
        $('.right_cont .img_cont:last-child').fadeOut(800,function(){
            $('.img_cont:last-child').prependTo('.right_cont .img_box').fadeIn();
        });
    },1500)
    /*popup*/
    /* function popupOn(){
        $('#popupLayer').fadeIn();
        $('#pop01').fadeIn();
        $('#cursorFollower').css('z-index','999')
    }
    function popupOut(){
        $('#popupLayer').fadeOut();
        $('#pop01').fadeOut();
        $('#cursorFollower').css('z-index','1')
    }

    $('.submit_btn').on('click',function(){
        popupOn();
    });
    $('.ok_btn , .pop_closed').on('click',function(){
        popupOut();
    }); */

})//
