/*
 * The Engine behind OneGrid
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */

// EDITABLE

var EditableDivs = ("h1, h2, p");

$(function(){
    var $div=$(EditableDivs), isEditable=$div.is('.editable');
    $(EditableDivs).prop('contenteditable',!isEditable).toggleClass('editable');
})

// EDITOR

$(document).ready(function() {

var editor = "#theEditor";

// editor left
$(editor).append("<div class='editor'>\
<div class='editorColors'></div>\
<div class='editorImages'><img class='svg' src='https://uismart.github.io/do/img/photo-camera.svg'/></div>\
<div class='editorImagesClose'><img class='svg' src='https://uismart.github.io/do/img/photo-camera.svg'/></div>\
<div class='editorBlocks'><img class='svg' src='https://uismart.github.io/do/img/drag.svg'/></div>\
<div class='editorBlocksClose'></div>\
<div class='editorSize'><img class='svg' src='https://uismart.github.io/do/img/arrows-2.svg'/></div>\
<div class='editorSizeClose'><img class='svg' src='https://uismart.github.io/do/img/arrows-2.svg'/></div>\
<div class='browse'></div>\
<div class='editortrash'><img class='svg' src='https://uismart.github.io/do/img/cross-out.svg'/></div>\
<div class='editorAddJumbotron'><img class='svg' src='https://uismart.github.io/do/img/add.svg'/></div>\
</div>");

// editor left - the grid
$(editor).insertBefore ( $( "#content" ) );

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


// editor IN
$('.editor').addClass ('animated slideInLeft');

// editor images

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

    // editor Sortable Blocks


    // DOM: create the sortable list at the beginning
    var SortableUL = ("<ul class='sortable' />");
    $(".wrapper").append(SortableUL);
    $( SortableUL).insertBefore ($(".wrapper"));

    // editor blocks
    $('.editorBlocks').click(function() {
    $('.jumbotron').css ('border', '1px dashed #fff');
    // append the two wrappers to the unordered list 'sortable'
    $( ".wrapper, .wrapperGrid" ).appendTo( $( ".sortable" ) );
    // change status
    $('.editorBlocks').css ('display', 'none');
    $('.editorBlocksClose').css ('display', 'block');
    });

// editor Sortable Blocks

// editor size

// Sortable

$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );

// Draggable

$( function() {
   $( "#draggable" ).draggable();
 } );

 // Resizable

 $( function() {
   $( ".resizable" ).resizable({
     animate: true
   });
 } );


// editor open resize >
$('.editorSize').click(function() {
$('.editorSize').css ('display', 'none');
$('.editorSizeClose').css ('display', 'block');
$('.editorSizeClose').css ('display', 'block');
// make it resizable!
$('.jumbotron').resizable();
$('.jumbotron').removeClass('ui-resizable-disabled');
// resize just height
$(".jumbotron").resizable({grid: [10000, 1]});
});

// change the property cursor: with an image

// editor close resize <
$('.editorSizeClose').click(function() {
$('.editorSize').css ('display', 'block');
$('.editorSizeClose').css ('display', 'none');
$('.jumbotron').resizable('disable');
});

    // delete jumbotron + some elements on menu

    $('.editortrash').click(function() {
    //$('.jumbotron').show().delay(500).fadeOut();
    $('.jumbotron').css ('display', 'none').delay(500).fadeOut();
    $('.editorAddJumbotron').css('display', 'block');
    $('.editortrash').css('display', 'none');
    $('.editorColors').css('display', 'none');
    $('.editorImages').css('display', 'none');
    $('.browse').css('display', 'none');
    $('.editorImagesClose').css('display', 'none');
    $('#editorRight').css('display', 'none');
    $('#editorRightH2').css('display', 'none');
    $('.editorSize').css('display', 'none');
    $('.editorSizeClose').css('display', 'none');
    $('.editorBlocks').css('display', 'none');
    $('.editorBlocksClose').css('display', 'none');
    });

    // add jumbotron

    $('.editorAddJumbotron').click(function() {
    $('.jumbotron').show().delay(500).fadeIn();
    $('.editorAddJumbotron').css('display', 'none');
    $('.editortrash').css('display', 'block');
    $('.editorColors').css('display', 'block');
    $('.editorImages').css('display', 'block');
    $('.editorImagesClose').css('display', 'none');
    $('#editorRight').css('display', 'block');
    $('#editorRightClose').css('display', 'block');
    $('.fontH1').css('display', 'block');

    $('.editorAddGrid').css('display', 'block');

    $('.editorSize').css('display', 'block');
    $('.editorBlocks').css('display', 'block');

    });

    // editor Grid trash / add
    $('.editorTrashGrid').click(function() {
    $('#theGrid').show().delay(500).fadeOut();
    $('.editorAddGrid').css('display', 'block');
    $('.editorTrashGrid').css('display', 'none');
    //
    $('.col1').css('display', 'none');
    $('.col2').css('display', 'none');
    $('.col3').css('display', 'none');
    $('.col4').css('display', 'none');
    // delete editor
    $('.editorAddJumbotron').css('display', 'block');
    $('.editorColors').css('display', 'none');
    $('.editorImages').css('display', 'none');
    $('.editorImagesClose').css('display', 'none');
    $('.editortrash').css('display', 'none');
    // end delete editor
    });

    // add grid

    $('.editorAddGrid').click(function() {
    $('#theGrid').show().delay(500).fadeIn();
    $('.editorAddGrid').css('display', 'none');
    $('.editorTrashGrid').css('display', 'block');
    $('.editor').css('display', 'block');
    $('.col1').css('display', 'block');
    $('.col2').css('display', 'block');
    $('.col3').css('display', 'block');
    $('.col4').css('display', 'block');
    $('.editorGridLeft').css('top', '0');
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


// EDITOR COLORS

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

// MENU JUMBOTRON

$(function() {
    $(".jumbotron").hover( function() {

        $(".editor").css("display","block");

    });
});

// SVG IMAGES COLOUR

$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

// UPLOAD IMAGE

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#header-image')
                    .attr('src', e.target.result)
                    .width('100%')
                    .height('auto');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
