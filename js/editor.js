$(document).ready(function() {

var editor = "#theEditor";

// editor left
$(editor).append("<div class='editor'>\
<div class='editorColors'></div>\
<div class='editorImages'></div>\
<div class='editorImagesClose'></div>\
<div class='browse'></div>\
<div class='editortrash animated flipInX'></div>\
<div class='editorAddJumbotron animated flipInX'></div>\
</div>");

// editor right
$(editor).append("<div id='editorRight'>\
<div class='fontH1'><i class='fa fa-font'></i></div>\
<div class='editorBoxOff'><i class='fa fa-font'></i></div>\
<div class='alignMeLeft'><i class='fa fa-align-left'></i></div>\
<div class='alignMeCenter'><i class='fa fa-align-center'></i></div>\
<div class='alignMeRight'><i class='fa fa-align-right'></i></div>\
<div class='editorBoxBold animated flipInX'><i class='fa fa-bold'></i></div>\
<div class='editorBoxRegular animated flipInX'><i class='fa fa-undo'></i></div>\
<div class='colorH1'></div>\
<div id='browseFonts' class='animated fadeIn'><input id='font' type='text'></div>\
<div id='plus-minus' class='animated fadeIn'><div class='plusFont'><i class='fa fa-plus white'></i></div><div class='minusFont'><i class='fa fa-minus'></i></div>\
</div>");

// editor right
$(editor).append("<div id='editorRightH2'>\
<div class='fontH2'><i class='fa fa-font'></i></div>\
<div class='editorBoxOffH2'><i class='fa fa-font'></i></div>\
<div class='alignMeLeftH2'><i class='fa fa-align-left'></i></div>\
<div class='alignMeCenterH2'><i class='fa fa-align-center'></i></div>\
<div class='alignMeRightH2'><i class='fa fa-align-right'></i></div>\
<div class='editorBoxBoldH2 animated flipInX'><i class='fa fa-bold'></i></div>\
<div class='editorBoxRegularH2 animated flipInX'><i class='fa fa-undo'></i></div>\
<div class='colorH2'></div>\
<div id='browseFontsH2' class='animated fadeIn'><input id='fontH2' type='text'></div>\
<div id='plus-minusH2' class='animated fadeIn'><div class='plusFontH2'><i class='fa fa-plus white'></i></div><div class='minusFontH2'><i class='fa fa-minus'></i></div>\
</div>");

// editor left - the grid

$('#theGrid').append("<div class='editorGridLeft animated slideInLeft'></div>");
$( ".editorGridLeft" ).insertBefore ( $( "#theGrid" ) );


// editor left - the grid - columns

$('.editorGridLeft').append("<div class='col1'><div class='col-lines'><div class='col-line'></div></div></div>\
<div class='col2'><div class='col-lines'><div class='col-line'></div><div class='col-line'></div></div></div>\
<div class='col3'><div class='col-lines'><div class='col-line'></div><div class='col-line'></div><div class='col-line'></div></div></div>\
<div class='col4'><div class='col-lines'><div class='col-line'></div><div class='col-line'></div><div class='col-line'></div><div class='col-line'></div></div></div>");

// editor left - the grid - changing columns

$('.col1').click(function() {
$('.OneColumnLayout').toggleClass ('OneColumnLayout OneColumnLayout');
$('.TwoColumnLayout').toggleClass ('TwoColumnLayout OneColumnLayout');
$('.ThreeColumnLayout').toggleClass ('ThreeColumnLayout OneColumnLayout');
$('.FourColumnLayout').toggleClass ('FourColumnLayout OneColumnLayout');
});


$('.col2').click(function() {
$('.OneColumnLayout').toggleClass ('OneColumnLayout TwoColumnLayout');
$('.TwoColumnLayout').toggleClass ('TwoColumnLayout TwoColumnLayout');
$('.ThreeColumnLayout').toggleClass ('ThreeColumnLayout TwoColumnLayout');
$('.FourColumnLayout').toggleClass ('FourColumnLayout TwoColumnLayout');
});

$('.col3').click(function() {
$('.OneColumnLayout').toggleClass ('OneColumnLayout ThreeColumnLayout');
$('.TwoColumnLayout').toggleClass ('TwoColumnLayout ThreeColumnLayout');
$('.ThreeColumnLayout').toggleClass ('ThreeColumnLayout ThreeColumnLayout');
$('.FourColumnLayout').toggleClass ('FourColumnLayout ThreeColumnLayout');
});

$('.col4').click(function() {
$('.OneColumnLayout').toggleClass ('OneColumnLayout FourColumnLayout');
$('.TwoColumnLayout').toggleClass ('TwoColumnLayout FourColumnLayout');
$('.ThreeColumnLayout').toggleClass ('ThreeColumnLayout FourColumnLayout');
$('.FourColumnLayout').toggleClass ('FourColumnLayout FourColumnLayout');
});


// editor IN
$('.editor').addClass ('animated slideInLeft');

// editor images
$(".editorImages").append('<i class="fa fa-camera"></i>');
$(".editorImagesClose").append('<i class="fa fa-camera"></i>');

// editor browse images > //
$('.editorImages').click(function() {
$('.browse').removeClass ('animated fadeOut');
$('.browse').addClass ('animated fadeIn');
$('.browse').css('display', 'block');
$('.editorImagesClose').css('display', 'block');
$('.editorImages').css('display', 'none');
});

// editor browse images < //
$('.editorImagesClose').click(function() {
$('.browse').removeClass ('animated fadeIn');
$('.browse').addClass ('animated fadeOut');
$('.editorImagesClose').css('display', 'none');
$('.editorImages').css('display', 'block');
});

// editor upload images //
$(".browse").append('<label class="fileUpload">\
<input id="uploadBtn" type="file" class="upload" accept="image/*" onchange="readURL(this);" />\
<span class="uploadBtn">Upload</span>\
</label>\
');


// editor opacity
$(".editorOpacity").append('<i class="fa fa-adjust"></i>');
$(".editorOpacityOff").append('<i class="fa fa-adjust"></i>');

    // OPACITY SLIDER ON //

    $('.editorOpacity').click(function() {
    $('#box-slider').addClass ('animated fadeIn');
    $('#box-slider').removeClass ('fadeOut');
    $('#box-slider').css('display', 'block');
    $('.editorOpacityOff').css('display', 'block');
    $('.editorOpacity').css('display', 'none');
    $('#slider').css('display', 'block');
    });

    // OPACITY SLIDER OFF //

    $('.editorOpacityOff').click(function() {
    $('#box-slider').addClass ('fadeOut');
    $('#box-slider').removeClass ('fadeIn');
    $('#box-slider').css('display', 'none');
    $('.editorOpacity').css('display', 'block');
    $('.editorOpacityOff').css('display', 'none');
    $('#slider').css('display', 'none');
    });

    // editor trash / add
    $(".editortrash").append('<i class="fa fa-trash-o"></i>');
    $(".editorAddJumbotron").append('<i class="fa fa-plus"></i>');

    // delete jumbotron + some elements on menu

    $('.editortrash').click(function() {
    $('.jumbotron').show().delay(500).fadeOut();
    $('.editorAddJumbotron').css('display', 'block');
    $('.editortrash').css('display', 'none');
    $('.editorColors').css('display', 'none');
    $('.editorImages').css('display', 'none');
    $('.browse').css('display', 'none');
    $('.editorImagesClose').css('display', 'none');
    $('#editorRight').css('display', 'none');
    $('#editorRightH2').css('display', 'none');
    });

    // add jumbotron

    $('.editorAddJumbotron').click(function() {
    $('.jumbotron').show().delay(500).fadeIn();
    $('.editorAddJumbotron').css('display', 'none');
    $('.editortrash').css('display', 'block');
    $('.editorColors').css('display', 'block');
    $('.editorImages').css('display', 'block');
    $('.editorImagesClose').css('display', 'block');
    $('#editorRight').css('display', 'block');
    $('#editorRightClose').css('display', 'block');
    $('.fontH1').css('display', 'block');
    });

    // H1 EDITOR.

    $(function() {
        $("h1").focus( function() {

            $("#editorRight").css("display","block");
            $("#editorRightH2").css("display","none");
            $(".editorCloseRight").css("display","block");
            $(".editorOpenRightH2").css("display","none");
            $(".editorCloseRightH2").css("display","none");

            $("#editorRight").addClass("animated slideInRight");
            $("#editorRightH2").removeClass("animated slideOutRight");
            $(".editorBox").addClass("animated slideInRight");

            // none of the editorBoxes apart of the BOLD option
            $(".editorBoxBold").css("display","block");
            $(".editorBoxRegularH2").css("display","none");
            $(".editorBoxRegular").css("display","none");


        });
    });

    // H2 EDITOR.

    $(function() {
        $("h2").focus( function() {

            $("#editorRightH2").css("display","block");
            $("#editorRight").css("display","none");
            $(".editorOpenRight").css("display","none");
            $(".editorCloseRight").css("display","none");
            $(".editorCloseRightH2").css("display","block");

            $("#editorRightH2").addClass("animated slideInRight");
            $("#editorRight").removeClass("animated slideOutRight");

            // none of the editorBoxes apart of the BOLD option
            $(".editorBoxBoldH2").css("display","block");
            $(".boldMeH2").css("display","block");
            $(".editorBoxRegularH2").css("display","none");
            $(".editorBoxRegular").css("display","none");

        });
    });

    // H1/H2 ALIGNMENT + FONT WEIGHT

    $('.alignMeLeft').click(function() {
    $("h1").css("text-align", "left");
    });

    $('.alignMeLeftH2').click(function() {
    $("h2").css("text-align", "left");
    });

    $('.alignMeRight').click(function() {
    $("h1").css("text-align", "right");
    });

    $('.alignMeRightH2').click(function() {
    $("h2").css("text-align", "right");
    });

    $('.alignMeCenter').click(function() {
    $("h1").css("text-align", "center");
    });

    $('.alignMeCenterH2').click(function() {
    $("h2").css("text-align", "center");
    });

    $('.editorBoxBold').click(function() {
    $('h1').css ('font-weight', '700');
    $('.editorBoxRegular').css ('display', 'block');
    $('.regularMe').css ('display', 'block');
    $('.editorBoxBold').css ('display', 'none');
    $('.editorBoxBold').css ('display', 'none');
    });

    $('.editorBoxRegular').click(function() {
    $('h1').css ('font-weight', '400');
    $('.editorBoxRegular').css ('display', 'none');
    $('.regularMe').css ('display', 'none');
    $('.boldMe').css ('display', 'block');
    $('.editorBoxBold').css ('display', 'block');
    });

    $('.editorBoxBoldH2').click(function() {
    $('h2').css ('font-weight', '700');
    $('.regularMeH2').css ('display', 'block');
    $('.editorBoxRegularH2').css ('display', 'block');
    $('.editorBoxBoldH2').css ('display', 'none');
    $('.boldMeH2').css ('display', 'none');
    });

    $('.editorBoxRegularH2').click(function() {
    $('h2').css ('font-weight', '400');
    $('.boldMeH2').css ('display', 'block');
    $('.editorBoxBoldH2').css ('display', 'block');
    $('.editorBoxRegularH2').css ('display', 'none');
    $('.regularMeH2').css ('display', 'none');
    });

    // FONT SELECTOR VISIBLE

    $('.fontH1').click(function() {
    $('#browseFonts').css ('display', 'block');
    $('#plus-minus').css ('display', 'block');
    $('.fontH1').css ('display', 'none');
    $('.editorBoxOff').css ('display', 'block');
    });

    $('.editorBoxOff').click(function() {
    $('#browseFonts').css ('display', 'none');
    $('.fontH1').css ('display', 'block');
    $('.fontH1').removeClass ('slideInRight');
    $('.editorBoxOff').css ('display', 'none');
    $('#plus-minus').css ('display', 'none');
    });

    $('.fontH2').click(function() {
    $('#browseFontsH2').css ('display', 'block');
    $('#plus-minusH2').css ('display', 'block');
    $('.fontH2').css ('display', 'none');
    $('.editorBoxOffH2').css ('display', 'block');
    });

    $('.editorBoxOffH2').click(function() {
    $('#browseFontsH2').css ('display', 'none');
    $('.fontH2').css ('display', 'block');
    $('.fontH2').removeClass ('slideInRight');
    $('.editorBoxOffH2').css ('display', 'none');
    $('#plus-minusH2').css ('display', 'none');
    });

    // FONT SELECTOR

    $(function(){
    $('#font').fontselect().change(function(){

      // replace + signs with spaces for css
      var font = $(this).val().replace(/\+/g, ' ');

      // split font into family and weight
      font = font.split(':');

      // set family on H1
      $('h1').css('font-family', font[0]);
    });
    });

    $('.font-select > a').click(function() {
    $('.fs-drop').addClass ('animated fadeIn');
    });

    // FONT SELECTOR

    $(function(){
    $('#fontH2').fontselect().change(function(){

      // replace + signs with spaces for css
      var font = $(this).val().replace(/\+/g, ' ');

      // split font into family and weight
      font = font.split(':');

      // set family on H1
      $('h2').css('font-family', font[0]);
    });
    });

    $('.font-select > a').click(function() {
    $('.fs-drop').addClass ('animated fadeIn');
    });

    // FONT SIZE

    $('.plusFont').click(function() {
    // The parseInt() function parses a string and returns an integer

      var fontSize = parseInt($("h1").css("font-size"));
      fontSize = fontSize + 1 + "px";
      $("h1").css({'font-size':fontSize});

    });

    $('.minusFont').click(function() {
    // The parseInt() function parses a string and returns an integer

      var fontSize = parseInt($("h1").css("font-size"));
      fontSize = fontSize - 1 + "px";
      $("h1").css({'font-size':fontSize});

    });

    // FONT SIZE - H2

    $('.plusFontH2').click(function() {
    // The parseInt() function parses a string and returns an integer

      var fontSize = parseInt($("h2").css("font-size"));
      fontSize = fontSize + 1 + "px";
      $("h2").css({'font-size':fontSize});

    });

    $('.minusFontH2').click(function() {
    // The parseInt() function parses a string and returns an integer

      var fontSize = parseInt($("h2").css("font-size"));
      fontSize = fontSize - 1 + "px";
      $("h2").css({'font-size':fontSize});

    });


});


// editor colors

$(document).ready(function() {

  $.minicolors = {
    defaults: {
        animationSpeed: 50,
        animationEasing: 'swing',
        change: null,
        changeDelay: 0,
        control: 'wheel',
        dataUris: true,
        defaultValue: '',
        format: 'hex',
        hide: null,
        hideSpeed: 500,
        inline: false,
        keywords: '',
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom left',
        show: null,
        showSpeed: 100,
        theme: 'default',
        swatches: []
    }
};

  $(".editorColors").append('<input type="hidden" id="header" value="#0FFADC" />');

  // #header colour

  $('#header').minicolors()

  // update table colour after changes in the colour picker
  $("#header").on('change', function() {
  var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

  $('.colourChosen').attr('style', newCol);

  });

  $(".colorH2").append('<input type="hidden" id="h2" class="" value="#0FFADC" />');

  // H2 COLOUR

  $('#h2').minicolors()

  $("#h2").on('change', function() {
  //var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
  var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

  // USE CSS NOT ATTRIB !!
  $('.h2colour').css("color", newCol);

  });

});


// editor colorh1

$(document).ready(function() {

  $(".colorH1").append('<input type="hidden" id="h1" class="" value="#0FFADC" />');

  // H1 COLOUR

  $('#h1').minicolors()

  $("#h1").on('change', function() {
  //var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
  var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

  // USE CSS NOT ATTRIB !!
  $('.h1colour').css("color", newCol);

});


  // POSITIONING MINICOLORS-PANELS

  $('.editorColors').click(function() {
  $('div.minicolors.minicolors-theme-default').removeClass ('minicolors-position-right');
  $('div.minicolors.minicolors-theme-default').addClass ('minicolors-position-left');
  });

  $('.colorH1').click(function() {
  $('div.minicolors.minicolors-theme-default').removeClass ('minicolors-position-left');
  $('div.minicolors.minicolors-theme-default').addClass ('minicolors-position-right');
  });

  $('.colorH2').click(function() {
  $('div.minicolors.minicolors-theme-default').removeClass ('minicolors-position-left');
  $('div.minicolors.minicolors-theme-default').addClass ('minicolors-position-right');
  });

});

// MENU APPAREANCE

$(function() {
    $(".jumbotron").hover( function() {

        $(".editor").css("display","block");

    });
});

$(function() {
    $("#theGrid").hover( function() {

        $(".editorGridLeft").css("display","block");

    });
});
