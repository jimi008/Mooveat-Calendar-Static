

$('.slider-product').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-month',
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    arrows:true,
    touch:false,

    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        }
    ]

});

$('.slider-month').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-product',
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    touch:false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        }
    ]


});






// toggle class

$(".btn-close").click(function(){
    $("#detail").removeClass("show");
    $(".tint").removeClass("show");
    $(".btn-close").removeClass("show");
    $("body").removeClass("hidescroll");
    // $("#detail").css("paddingTop",0);


});


// $( window ).resize(function() {
//     if(window.innerWidth > 992)
//     {
//         $("#detail").css("paddingTop",0);
//
//     }
//     else if (window.innerWidth < 992)
//     {
//         var h = $("#detail-header").height();
//         $("#detail").css("paddingTop", h + 10);
//     }
//
// });


$(".p-label").click(function() {
    $("#detail").addClass("show");
    $(".tint").addClass("show");
    $(".btn-close").addClass("show");
    $("body").addClass("hidescroll");
    if (window.innerWidth < 992)
    {
        //var h = $("#detail-header").height();
       // $("#detail").css("paddingTop", h + 10);
    }
});



// sticky


    $("#month-bar").sticky({ topSpacing: 0 });

    $("#dropdown-holder").sticky({ topSpacing: 70 });
 $("#detail-header").sticky({ topSpacing: 0 });




// custom Select

$('select.custom-select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 1; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


