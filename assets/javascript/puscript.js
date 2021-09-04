// // Standard PopUp - based on http://www.tweego.nl - jeegoo PopUp script

// (function (factory) {
//     if (typeof define === 'function' && define.amd) {
//         // AMD
//         define(['jquery'], factory);
//     } else if (typeof exports === 'object') {
//         // CommonJS
//         factory(require('jquery'));
//     } else {
//         // Browser globals
//         factory(jQuery);
//     }
// }(function ($) {
//     var config = $.showPopup = function (providername, link, imgSrc, imgText) {
//         var newDiv = $(document.createElement('div')); 
//         $(newDiv).html("<a href='" + link + "' target='_blank'><img src='" + imgSrc + "' border='0' title='" + imgText + "' alt='" + imgText + "' /></a>");
//         $(newDiv).dialog({ 
//             autoOpen:false, modal:true, width:300, height:260,
//             open: function( event, ui ) {
//                 var today = new Date();
//                 var n = today.getDay();
//                 var hours = today.getHours();
//                 if (n == 6 || n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5){
//                     if((hours >= 9 && hours <= 23) || (hours >= 0 && hours <= 7)){
//                       $('button.ui-dialog-titlebar-close').hide();
//                       $('button.ui-dialog-titlebar-close').delay(6000).show(0);
//                     }
//                 } 
//             },
//             close: function( event, ui ) {
//                 $.cookie(providername, 'true', {expires: 30, path: '/'});
//                 $(".ui-dialog-content").dialog("close");
//             }
//         });
//         if (!$.cookie(providername)) {
//             return $(newDiv).dialog("open" );
//         } else {
//             return false;
//         }
        
//     }
// }));




const popup = document.querySelector('.popup');
const closee = document.querySelector('.close');
const title_popup = ["Jetzt zu SIXT", "Go now to Sixt", "Go now to AVIS", "go now to company2"];
const color = document.querySelector(".title_popup");

//load window
window.onload = function(){
    setTimeout(function(){
         popup.style.display = 'block';

    },2000);
    setTimeout(function(){
                 closee.style.display = 'block';
        
            },8000)

            const randomNumber = getRandomNumber();
            color.textContent = title_popup[randomNumber];
}

//close poppup
closee.addEventListener('click', ()=>{
    popup.style.display = 'none';
})

//random number generator
function getRandomNumber() {
  return Math.floor(Math.random() * title_popup.length);
}
