
    const refs = {
      openMenuBtn: document.querySelector(".dropdown-toggle"),
      subMenu: document.querySelector(".dropdown_menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleSubMenu);
    function toggleSubMenu(e) {
      e.preventDefault();
      
      window.addEventListener("click",dropdownClose);
      return }

 
       function dropdownClose(){
          if(refs.subMenu.classList.contains("is-hidden")){
            refs.subMenu.classList.remove("is-hidden");
           
               return;
              }
         
         refs.subMenu.classList.add("is-hidden"); 
          window.removeEventListener("click",dropdownClose);
        };
      
  
 


  
