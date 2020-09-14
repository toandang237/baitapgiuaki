$(document).ready(function() {
    $("#click1").click(function() {
        $("html, body").animate({
            scrollTop: $("#a1")[0].offsetTop - 52 + "px"
        }, 1000)
    })

    $("#click2").click(function() {
        $("html, body").animate({
            scrollTop: $("#a2")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click3").click(function() {
        $("html, body").animate({
            scrollTop: $("#a3")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click4").click(function() {
        $("html, body").animate({
            scrollTop: $("#a4")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click5").click(function() {
        $("html, body").animate({
            scrollTop: $("#a5")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click6").click(function() {
        $("html, body").animate({
            scrollTop: $("#a6")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click7").click(function() {
        $("html, body").animate({
            scrollTop: $("#a7")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click8").click(function() {
        $("html, body").animate({
            scrollTop: $("#a8")[0].offsetTop -52 + "px"
        }, 1000)
    })

    $("#click9").click(function() {
        $("html, body").animate({
            scrollTop: $("#a9")[0].offsetTop -52 + "px"
        }, 1000)
    })
    
    $("#click10").click(function() {
        $("html, body").animate({
            scrollTop: $("#a10")[0].offsetTop -52 + "px"
        }, 1000)
    })
    //SCROLL
    $("#go").hide();
    $(window).scroll(function() {
        var s = $(this).scrollTop()
        if(s >= 200) $("#go").show(500);
        else $("#go").hide(500);
    })

    $("#go").click(function() {
        $('html, body').animate({'scrollTop': 0}, 1000)
    })

    //EXIT
    $(".exit").click(function() {
        $(".sale").hide(1000);
    })

    //nút next
    $('#btn-next').click(function() {
        $('#btn-prev').hide();
        $('#btn-next').hide();
        var slideSau = $('.active').next();
        var pos_pre = $('.active-node').index()+1;//1
        if (slideSau.length != 0) {
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function() {
                $('.ra-trai').removeClass('ra-trai').removeClass('active');
            });
            slideSau.addClass('active').addClass('vao-phai').one('webkitAnimationEnd', function() {
                $('.vao-phai').removeClass('vao-phai');
            })

            // xử lý các nút
            $('.node-slide li').removeClass('active-node');
            $('.node-slide li:nth-child('+(pos_pre+1)+')').addClass('active-node');
        }
        else {
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function() {
                $('.ra-trai').removeClass('ra-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('vao-phai').one('webkitAnimationEnd', function() {
                $('.vao-phai').removeClass('vao-phai');
            })

            // xử lý các nút
            $('.node-slide li').removeClass('active-node');
            $('.node-slide li:nth-child(1)').addClass('active-node');
        }
        $('#btn-prev').show(1300);
        $('#btn-next').show(1300);
    })

    //nút prev
    $('#btn-prev').click(function() {
        $('#btn-prev').hide();
        $('#btn-next').hide();
        var slideTruoc = $('.active').prev();
        var pos_pre = $('.active-node').index()+1;
        if (slideTruoc.length != 0) {
            $('.active').addClass('ra-phai').one('webkitAnimationEnd', function() {
                $('.ra-phai').removeClass('ra-phai').removeClass('active');
            });
            slideTruoc.addClass('active').addClass('vao-trai').one('webkitAnimationEnd', function() {
                $('.vao-trai').removeClass('vao-trai');
            })

            // xử lý các nút
            $('.node-slide li').removeClass('active-node');
            $('.node-slide li:nth-child('+(pos_pre-1)+')').addClass('active-node');
        }
        else {
            $('.active').addClass('ra-phai').one('webkitAnimationEnd', function() {
                $('.ra-phai').removeClass('ra-phai').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('vao-trai').one('webkitAnimationEnd', function() {
                $('.vao-trai').removeClass('vao-trai');
            })
            // xử lý các nút
            $('.node-slide li').removeClass('active-node');
            $('.node-slide li:last-child').addClass('active-node');
        }
        $('#btn-prev').show(1300);
        $('#btn-next').show(1300);
    })

    //các nút slide
    $('ul.node-slide li').click(function() {
        $('#btn-prev').hide();
        $('#btn-next').hide();
        var pos_pre = $('.active-node').index()+1;// vị trí hiện tại
        var idx_pos_click = $(this).index()+1;// vị trí khi click
        $('.node-slide li').removeClass('active-node');
        $(this).addClass('active-node');
        // nếu vị trí hiện tại nhỏ hơn vị trí click thì ảnh sẽ di chuyển từ trái sang phải
        if (pos_pre < idx_pos_click){
            $('.active').addClass('ra-trai').one('webkitAnimationEnd', function() {
            $('.ra-trai').removeClass('ra-trai').removeClass('active');
                });
            $('.slide:nth-child('+(idx_pos_click)+')').addClass('active').addClass('vao-phai').one('webkitAnimationEnd', function() {
            $('.vao-phai').removeClass('vao-phai');
        })
        }
        // nếu vị trí hiện tại lớn hơn vị trí click thì ảnh sẽ di chuyển từ phải sang trái
        if (pos_pre > idx_pos_click) {
            $('.active').addClass('ra-phai').one('webkitAnimationEnd', function() {
                $('.ra-phai').removeClass('ra-phai').removeClass('active');
            });
            $('.slide:nth-child('+(idx_pos_click)+')').addClass('active').addClass('vao-trai').one('webkitAnimationEnd', function() {
                $('.vao-trai').removeClass('vao-trai');
            })
        }
        $('#btn-prev').show(1300);
        $('#btn-next').show(1300);
    })

    /*-----xử lý ảnh-----*/
    //asm1
    $('.asm1 img').click(function() {
        $('.asm1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-asm1 > img").attr("src", $(this).attr("src"))
    })
    //asm2
    $('.asm2 img').click(function() {
        $('.asm2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-asm2 > img").attr("src", $(this).attr("src"))
    })
    //asm3
    $('.asm3 img').click(function() {
        $('.asm3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-asm3 > img").attr("src", $(this).attr("src"))
    })
    //asm4
    $('.asm4 img').click(function() {
        $('.asm4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-asm4 > img").attr("src", $(this).attr("src"))
    })
    //ak1
    $('.ak1 img').click(function() {
        $('.ak1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-ak1 > img").attr("src", $(this).attr("src"))
    })
    //ak2
    $('.ak2 img').click(function() {
        $('.ak2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-ak2 > img").attr("src", $(this).attr("src"))
    })
    //ak3
    $('.ak3 img').click(function() {
        $('.ak3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-ak3 > img").attr("src", $(this).attr("src"))
    })
    //ak4
    $('.ak4 img').click(function() {
        $('.ak4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-ak4 > img").attr("src", $(this).attr("src"))
    })
    //at1
    $('.at1 img').click(function() {
        $('.at1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-at1 > img").attr("src", $(this).attr("src"))
    })
    //at2
    $('.at2 img').click(function() {
        $('.at2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-at2 > img").attr("src", $(this).attr("src"))
    })
    //at3
    $('.at3 img').click(function() {
        $('.at3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-at3 > img").attr("src", $(this).attr("src"))
    })
    //at4
    $('.at4 img').click(function() {
        $('.at4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-at4 > img").attr("src", $(this).attr("src"))
    })
    //qj1
    $('.qj1 img').click(function() {
        $('.qj1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qj1 > img").attr("src", $(this).attr("src"))
    })
    //qj2
    $('.qj2 img').click(function() {
        $('.qj2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qj2 > img").attr("src", $(this).attr("src"))
    })
    //qj3
    $('.qj3 img').click(function() {
        $('.qj3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qj3 > img").attr("src", $(this).attr("src"))
    })
    //qj4
    $('.qj4 img').click(function() {
        $('.qj4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qj4 > img").attr("src", $(this).attr("src"))
    })
    //qs1
    $('.qs1 img').click(function() {
        $('.qs1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qs1 > img").attr("src", $(this).attr("src"))
    })
    //qs2
    $('.qs2 img').click(function() {
        $('.qs2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qs2 > img").attr("src", $(this).attr("src"))
    })
    //qs3
    $('.qs3 img').click(function() {
        $('.qs3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qs3 > img").attr("src", $(this).attr("src"))
    })
    //qs4
    $('.qs4 img').click(function() {
        $('.qs4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qs4 > img").attr("src", $(this).attr("src"))
    })
    //qt1
    $('.qt1 img').click(function() {
        $('.qt1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qt1 > img").attr("src", $(this).attr("src"))
    })
    //qt2
    $('.qt2 img').click(function() {
        $('.qt2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qt2 > img").attr("src", $(this).attr("src"))
    })
    //qt3
    $('.qt3 img').click(function() {
        $('.qt3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qt3 > img").attr("src", $(this).attr("src"))
    })
    //qt4
    $('.qt4 img').click(function() {
        $('.qt4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-qt4 > img").attr("src", $(this).attr("src"))
    })
    //non1
    $('.non1 img').click(function() {
        $('.non1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-non1 > img").attr("src", $(this).attr("src"))
    })
    //non2
    $('.non2 img').click(function() {
        $('.non2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-non2 > img").attr("src", $(this).attr("src"))
    })
    //non3
    $('.non3 img').click(function() {
        $('.non3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-non3 > img").attr("src", $(this).attr("src"))
    })
    //non4
    $('.non4 img').click(function() {
        $('.non4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-non4 > img").attr("src", $(this).attr("src"))
    })
    //gb1
    $('.gb1 img').click(function() {
        $('.gb1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gb1 > img").attr("src", $(this).attr("src"))
    })
    //gb2
    $('.gb2 img').click(function() {
        $('.gb2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gb2 > img").attr("src", $(this).attr("src"))
    })
    //gb3
    $('.gb3 img').click(function() {
        $('.gb3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gb3 > img").attr("src", $(this).attr("src"))
    })
    //gb4
    $('.gb4 img').click(function() {
        $('.gb4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gb4 > img").attr("src", $(this).attr("src"))
    })
    //gtt1
    $('.gtt1 img').click(function() {
        $('.gtt1 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gtt1 > img").attr("src", $(this).attr("src"))
    })
    //gtt2
    $('.gtt2 img').click(function() {
        $('.gtt2 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gtt2 > img").attr("src", $(this).attr("src"))
    })
    //gtt3
    $('.gtt3 img').click(function() {
        $('.gtt3 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gtt3 > img").attr("src", $(this).attr("src"))
    })
    //gtt4
    $('.gtt4 img').click(function() {
        $('.gtt4 div').removeClass('replace');
        $(this).parents().addClass('replace');
        $("#inset-gtt4 > img").attr("src", $(this).attr("src"))
    })

    $('.thumbnail').hide();
    //xử lý nút close
    $('.close').click(function() {
        $('.thumbnail').hide();
        $(".flex.store .cp.btn-pay").removeClass('btn-pay')
    })

    //-------ảnh 1-------
    
    //xử lý khi click ảnh
    $("#inset-asm1").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id1').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl1').val() == 0){$('#sl1').css({'border': '1px solid red'})}
            else {$('#sl1').css({'border': '0'})}
            if ($('#sdt1').val() == ""){$('#sdt1').css({'border':'1px solid red'})}
            else {$('#sdt1').css({'border':'0'})}
            if ($('#dc1').val() == ""){$('#dc1').css({'border': '1px solid red'})}
            else {$('#dc1').css({'border': '0'})}
            if ($('#sl1').val() != 0 && $('#sdt1').val() != "" && $('#dc1').val() != ""){
                var soTien = parseFloat($('#sotien1').text());
                var soluong = parseFloat($('#sl1').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo1").html(msg);
            }
        })
    })
    //-------ảnh 2-------
    //xử lý khi click ảnh
    $("#inset-asm2").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id2').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl2').val() == 0){$('#sl2').css({'border': '1px solid red'})}
            else {$('#sl2').css({'border': '0'})}
            if ($('#sdt2').val() == ""){$('#sdt2').css({'border':'1px solid red'})}
            else {$('#sdt2').css({'border':'0'})}
            if ($('#dc2').val() == ""){$('#dc2').css({'border': '1px solid red'})}
            else {$('#dc2').css({'border': '0'})}
            if ($('#sl2').val() != 0 && $('#sdt2').val() != "" && $('#dc2').val() != ""){
                var soTien = parseFloat($('#sotien2').text());
                var soluong = parseFloat($('#sl2').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo2").html(msg);
            }
        })

    })
    //-------ảnh 3-------
    
    //xử lý khi click ảnh
    $("#inset-asm3").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id3').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl3').val() == 0){$('#sl3').css({'border': '1px solid red'})}
            else {$('#sl3').css({'border': '0'})}
            if ($('#sdt3').val() == ""){$('#sdt3').css({'border':'1px solid red'})}
            else {$('#sdt3').css({'border':'0'})}
            if ($('#dc3').val() == ""){$('#dc3').css({'border': '1px solid red'})}
            else {$('#dc3').css({'border': '0'})}
            if ($('#sl3').val() != 0 && $('#sdt3').val() != "" && $('#dc3').val() != ""){
                var soTien = parseFloat($('#sotien3').text());
                var soluong = parseFloat($('#sl3').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo3").html(msg);
            }
        })

    })
    //-------ảnh 4-------
    //xử lý khi click ảnh
    $("#inset-asm4").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id4').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl4').val() == 0){$('#sl4').css({'border': '1px solid red'})}
            else {$('#sl4').css({'border': '0'})}
            if ($('#sdt4').val() == ""){$('#sdt4').css({'border':'1px solid red'})}
            else {$('#sdt4').css({'border':'0'})}
            if ($('#dc4').val() == ""){$('#dc4').css({'border': '1px solid red'})}
            else {$('#dc4').css({'border': '0'})}
            if ($('#sl4').val() != 0 && $('#sdt4').val() != "" && $('#dc4').val() != ""){
                var soTien = parseFloat($('#sotien4').text());
                var soluong = parseFloat($('#sl4').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo4").html(msg);
            }
        })

    })
    //-------ảnh 5------- 
    //xử lý khi click ảnh
    $("#inset-ak1").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id5').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl5').val() == 0){$('#sl5').css({'border': '1px solid red'})}
            else {$('#sl5').css({'border': '0'})}
            if ($('#sdt5').val() == ""){$('#sdt5').css({'border':'1px solid red'})}
            else {$('#sdt5').css({'border':'0'})}
            if ($('#dc5').val() == ""){$('#dc5').css({'border': '1px solid red'})}
            else {$('#dc5').css({'border': '0'})}
            if ($('#sl5').val() != 0 && $('#sdt5').val() != "" && $('#dc5').val() != ""){
                var soTien = parseFloat($('#sotien5').text());
                var soluong = parseFloat($('#sl5').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo5").html(msg);
            }
        })

    })
    //-------ảnh 6-------
    
    //xử lý khi click ảnh
    $("#inset-ak2").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id6').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl6').val() == 0){$('#sl6').css({'border': '1px solid red'})}
            else {$('#sl6').css({'border': '0'})}
            if ($('#sdt6').val() == ""){$('#sdt6').css({'border':'1px solid red'})}
            else {$('#sdt6').css({'border':'0'})}
            if ($('#dc6').val() == ""){$('#dc6').css({'border': '1px solid red'})}
            else {$('#dc6').css({'border': '0'})}
            if ($('#sl6').val() != 0 && $('#sdt6').val() != "" && $('#dc6').val() != ""){
                var soTien = parseFloat($('#sotien6').text());
                var soluong = parseFloat($('#sl6').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo6").html(msg);
            }
        })

    })
    //-------ảnh 7-------
    
    //xử lý khi click ảnh
    $("#inset-ak3").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id7').addClass('store');
        $(".flex.store .cp").addClass('btn-pay')
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl7').val() == 0){$('#sl7').css({'border': '1px solid red'})}
            else {$('#sl7').css({'border': '0'})}
            if ($('#sdt7').val() == ""){$('#sdt7').css({'border':'1px solid red'})}
            else {$('#sdt7').css({'border':'0'})}
            if ($('#dc7').val() == ""){$('#dc7').css({'border': '1px solid red'})}
            else {$('#dc7').css({'border': '0'})}
            if ($('#sl7').val() != 0 && $('#sdt7').val() != "" && $('#dc7').val() != ""){
                var soTien = parseFloat($('#sotien7').text());
                var soluong = parseFloat($('#sl7').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo7").html(msg);
            }
        })

    })
    //-------ảnh 7-------
    
    //xử lý khi click ảnh
    $("#inset-ak4").click(function() {
        $('.thumbnail').show();
        $('.flex').removeClass('store');
        $('#id8').addClass('store');
        $(".flex.store .cp").addClass('btn-pay');
        //xử lý nút thanh toán
        $('.btn-pay').click(function() {
            if ($('#sl8').val() == 0){$('#sl8').css({'border': '1px solid red'})}
            else {$('#sl8').css({'border': '0'})}
            if ($('#sdt8').val() == ""){$('#sdt8').css({'border':'1px solid red'})}
            else {$('#sdt8').css({'border':'0'})}
            if ($('#dc8').val() == ""){$('#dc8').css({'border': '1px solid red'})}
            else {$('#dc8').css({'border': '0'})}
            if ($('#sl8').val() != 0 && $('#sdt8').val() != "" && $('#dc8').val() != ""){
                var soTien = parseFloat($('#sotien8').text());
                var soluong = parseFloat($('#sl8').val());
                var tongcong = soTien*soluong;
                var msg = "Số tiền cần thanh toán tổng cộng: " + "<b>" + tongcong + "</b>" + " VND";
                $("#demo8").html(msg);
            }
        })

    })

    /* fb-itg-tw */
    $(".fb-tw-itg > ul > li").on({
        mouseenter: function() {
            $(this).addClass('active-fti')
        },
        mouseleave: function() {
            $(this).removeClass('active-fti')
        }
    })
})
