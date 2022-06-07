window.onscroll = function(){
    let menu = document.querySelector('.header');
    let scroll = window.scrollY;
        
    function toggleHeader(position, name){
        if(scroll>position) menu.classList.add(name);
    else menu.classList.remove(name);
    }
    toggleHeader(10,'scrolling')
    toggleHeader(innerHeight,'reveal-header')

}