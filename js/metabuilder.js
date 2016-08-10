/*
 * MetaBuilder: The Engine behind SquareOne
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */


// TRIGGER EDITOR OFF  < //

$('.editorClose').click(function() {
$('#editor').removeClass ('slideInLeft');
$('#editor').addClass ('slideOutLeft');
$('.editorOpen').css ('display', 'block');
$('.editorClose').css ('display', 'none');
});

// TRIGGER EDITOR ON  > //

$('.editorOpen').click(function() {
$('#editor').removeClass ('slideOutLeft');
$('#editor').addClass ('slideInLeft');
$('.editorOpen').css ('display', 'none');
$('.editorClose').css ('display', 'block');
});

// TRIGGER EDITOR RIGHT OFF  > //

$('.editorCloseRight').click(function() {
$('#editorRightH2').css ('display', 'none');
$('#editorRight').removeClass ('slideInRight');
$('#editorRight').addClass ('slideOutRight');
$('.editorOpenRight').css ('display', 'block');
$('.editorCloseRight').css ('display', 'none');
$('.h1-selected').css ('display', 'none');
});

// TRIGGER EDITOR RIGHT ON  < //

$('.editorOpenRight').click(function() {
$('#editorRight').removeClass ('slideOutRight');
$('#editorRight').addClass ('slideInRight');
$('.editorOpenRight').css ('display', 'none');
$('.editorCloseRight').css ('display', 'block');
$('.h1-selected').css ('display', 'block');
});

// TRIGGER EDITOR RIGHT OFF  > //

$('.editorCloseRightH2').click(function() {
$('#editorRight').css ('display', 'none');
$('#editorRightH2').removeClass ('slideInRight');
$('#editorRightH2').addClass ('slideOutRight');
$('.editorOpenRightH2').css ('display', 'block');
$('.editorCloseRightH2').css ('display', 'none');
$('.h2-selected').css ('display', 'none');
});

// TRIGGER EDITOR RIGHT ON  < //

$('.editorOpenRightH2').click(function() {
$('#editorRightH2').removeClass ('slideOutRight');
$('#editorRightH2').addClass ('slideInRight');
$('.editorOpenRightH2').css ('display', 'none');
$('.editorCloseRightH2').css ('display', 'block');
$('.h2-selected').css ('display', 'block');
});

// COLOR PICKER


// H2 COLOUR

$('#h2').minicolors()

$("#h2").on('change', function() {
//var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

// USE CSS NOT ATTRIB
$('.h2colour').css("color", newCol);
});

// buttonJumbotron EDITOR

$(function() {
    $("#buttonJumbotron").focus( function() {

    $("#buttonJumbotron").after( '<div class="deleteJumbotron"><i class="fa fa-trash-o small-trash"></i></div>' );
    $(".deleteJumbotron").css("display", "block");

    });
});

$('.deleteJumbotron').click(function() {
$("#buttonJumbotron").css("display", "none");
});
