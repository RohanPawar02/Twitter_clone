////////////////////////
// javascript for posts
///////////////////////


$(function(){
    // execute when js.menu.icon js clicked
    $('.js-menu-icon').click(function(){
        //(this): self element, namely div.js-menu-icon
        //next(): Next to div.js-icon-menu, namely div.menu
        //toggle(): switch show and hide 
        $(this).next().toggle();
    }
    )}
)