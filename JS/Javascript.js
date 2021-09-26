
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarToggler li a')

window.addEventListener('scroll', ()=> {
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})


window.addEventListener('scroll'||'click', ()=> {
    navLi.forEach( a => {
        const navText= a.textContent;
        if (a.classList.contains('active')){
            if(a.textContent == "Home"){
                a.textContent = "<Home/>"
            }
            if(a.textContent == "About"){
                a.textContent = "<About/>"
            }
            if(a.textContent == "Skills"){
                a.textContent = "<Skills/>"
            }
            if(a.textContent == "Contact"){
                a.textContent = "<Contact/>"
            }
        }
        else {
            if(a.textContent == "<Home/>"){
                a.textContent = "Home"
            }
            if(a.textContent == "<About/>"){
                a.textContent = "About"
            }
            if(a.textContent == "<Skills/>"){
                a.textContent = "Skills"
            }
            if(a.textContent == "<Contact/>"){
                a.textContent = "Contact"
            }
        }
        })
})




//how far down is my scroll
/*window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};
*/


//scroll active class changer
/*window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
*/
 