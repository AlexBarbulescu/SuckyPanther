window.addEventListener('scroll', reveal);
    
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
    
        for(var i = 0; i < reveals.length; i++){
    
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add('reveal-block');
            }
            else{
              reveals[i].classList.remove('reveal-block');
            }
        }
    }
    
/* Smart Contract Address */
function copyToClickBoard(content){

  navigator.clipboard.writeText(content)
      .then(() => {
      
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })

}