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
    
    
    var buttonsMore = document.querySelectorAll('.read-more');
    console.log(buttonsMore)

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttonsMore.length; i++) {
    buttonsMore[i].addEventListener('click', showHide);
  }
    
    
    
    
    
    
    
    
    
    
    
    
    });