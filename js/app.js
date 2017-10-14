document.addEventListener('DOMContentLoaded', function() {      
  'use strict';   
    
    var button = document.querySelector('.for-dropdown');
    console.log(button);
    
    var menu = document.querySelector('.dropdown');
    console.log(menu);
    
    button.addEventListener('mouseover', function() {
        console.log("halo");
        menu.style.display = "block";
    
    })
    
    console.log(menu.style);
    
    function hideOut () {
    menu.style.display = "none";
        console.log("hallooo");
    }
    
    button.addEventListener('mouseout', hideOut);
    
    
    
    
    
    
    
    
    
    
    
    
    
    });