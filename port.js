let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

let sections=document.querySelectorAll('section');
let  navLinks=document.querySelectorAll('header nav a');

function openfacebook()
{
    window.location.href="https://www.facebook.com/revanth.lingam.7";
} 
function openlinkedin()
{
    window.location.href="https://www.linkedin.com/in/revanth-lingam-07344225a/";
}
function opengit()
{
    window.location.href="https://github.com/Revanth-106003";
}
function openweather()
{
    window.location.href="https://revanth-106003.github.io/weather/";

}
function openVaccation()
{
    window.location.href="https://revanth-106003.github.io/Trip/";
}
function openRevbites()
{
    window.location.href="https://revanth-106003.github.io/Rev-bites/";
}
function openinsta()
{
    window.location.href="https://www.instagram.com/revanth_10603/?next=%2F";
}
function downloadfile()
{
    const link = document.createElement('a');
    link.href = 'file:///D:/LINGAM.REVANTH_RESUME.1.pdf';
    link.download = 'LINGAM.REVANTH_RESUME.1';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top => offset&& top < offset+height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');

                });
            };


    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading', {orgin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact-form', {orgin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { orgin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ', {orgin:'right'});


const typed= new Typed('.multiple-text',{
    strings:['FrontEnd Developer','SoftWare Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});

