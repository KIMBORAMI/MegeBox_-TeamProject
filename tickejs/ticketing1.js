$(document).ready(function(){
       //영화선택
    $('#movie1').click(function() {
        let tab_id1 = $(this).attr('data-tab');$('.mbtn').removeClass('on');$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'});
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.tbtn').removeClass('on');
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.seat_selection').css ({'display':'none'});
                $('.no-result').css ({'display':'none'});
                $('.result1').css ({'display':'block'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie2
    $('#movie2').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'block'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie3
    $('#movie3').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'block'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie4
    $('#movie4').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on')
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'block'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    }) 
    //movie5
    $('#movie5').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'block'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie6
    $('#movie6').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'block'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie7
    $('#movie7').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'block'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie8
    $('#movie8').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})

            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'block'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })  
    //movie9
    $('#movie9').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'block'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })
    //movie10
    $('#movie10').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'block'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie11
    $('#movie11').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'block'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie12
    $('#movie12').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'block'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie13
    $('#movie13').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'block'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie14
    $('#movie14').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'block'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie15
    $('#movie15').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'block'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie16
    $('#movie16').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'block'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie17
    $('#movie17').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'block'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie18
    $('#movie18').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'block'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie19
    $('#movie19').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'block'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie20
    $('#movie20').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'block'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie21
    $('#movie21').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'block'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie22
    $('#movie22').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'block'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie23
    $('#movie23').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'block'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie24
    $('#movie24').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'block'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie25
    $('#movie25').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'block'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie26
    $('#movie26').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'block'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie27
    $('#movie27').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'block'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie28
    $('#movie28').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'block'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie29
    $('#movie29').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'block'});$('.result30').css ({'display':'none'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })   
    //movie30
    $('#movie30').click(function() {
        let tab_id1 = $(this).attr('data-tab');
        $('.mbtn').removeClass('on');
		$('.btn').removeClass('on');
        $('.theater_scroll').removeClass('on');
        $('.theater_btn .btn').removeClass('on');
		$('.depth').removeClass('on');
        $('.tbtn').removeClass('on');
        $('.seat_selection').css ({'display':'none'});
        $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
		$(this).addClass('on');
		$("#"+tab_id1).addClass('on');
        //지역선택
        $('.theater_btn .btn').click(function(){
            let tab_id2 = $(this).attr('data-tab');
            $('.theater_btn .btn').removeClass('on');
            $('.depth').removeClass('on');
            $('.tbtn').removeClass('on');
            $('.seat_selection').css ({'display':'none'});
            $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'none'})
            $(this).addClass('on');
            $("#"+tab_id2).addClass('on');
            //상세지역선택시 시간선택
            $('.tbtn').click(function() {
                let tab_id3 = $(this).attr('data-tab');
                $('.tbtn').removeClass('on');
                $('.result_btn').removeClass('on');
                $('.no-result').css ({'display':'none'});
                $('.seat_selection').css ({'display':'none'});
                $('.result1').css ({'display':'none'});$('.result2').css ({'display':'none'});$('.result3').css ({'display':'none'});$('.result4').css ({'display':'none'});$('.result5').css ({'display':'none'});$('.result6').css ({'display':'none'});$('.result7').css ({'display':'none'});$('.result8').css ({'display':'none'});$('.result9').css ({'display':'none'});$('.result10').css ({'display':'none'});$('.result11').css ({'display':'none'});$('.result12').css ({'display':'none'});$('.result13').css ({'display':'none'});$('.result14').css ({'display':'none'});$('.result15').css ({'display':'none'});$('.result16').css ({'display':'none'});$('.result17').css ({'display':'none'});$('.result18').css ({'display':'none'});$('.result19').css ({'display':'none'});$('.result20').css ({'display':'none'});$('.result21').css ({'display':'none'});$('.result22').css ({'display':'none'});$('.result23').css ({'display':'none'});$('.result24').css ({'display':'none'});$('.result25').css ({'display':'none'});$('.result26').css ({'display':'none'});$('.result27').css ({'display':'none'});$('.result28').css ({'display':'none'});$('.result29').css ({'display':'none'});$('.result30').css ({'display':'block'})
                $(this).addClass('on');
                $("#"+tab_id3).addClass('on');
                
                //시간선택 후 버튼
                $('.result_btn button').click(function() {
                    $('.result_btn button').removeClass('on');
                    $('.seat_selection').css ({'display':'block'});
                    $(this).addClass('on');
                })
            })
        })
    })    
});





 