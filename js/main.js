let iconMenu = document.querySelector('.navbar-menu')
let navMenu = document.querySelector('.nav-navbar')
let dropdownMenu = document.querySelector('.dropdown')
let dropdownMenu2 = document.querySelector('.dropdown2')

function menuClick(){
  navMenu.classList.toggle('active')
  iconMenu.classList.toggle('rotate')
  
  if (navMenu.classList.contains('active')) {
    iconMenu.innerHTML = '<i data-feather="x"></i>';
    } else {
        iconMenu.innerHTML = '<i data-feather="menu"></i>';
      }

    feather.replace();
}

function dropdownClick(){
  dropdownMenu.classList.toggle('active')
}

function dropdownClick2(){
  dropdownMenu2.classList.toggle('active')
}

// document.getElementById("scrollbutton").addEventListener("click", function() {
//   var contactnavbar = document.getElementById("contactnavbar");

//   if (contactnavbar.classList.contains('open')) {
//     contactnavbar.classList.remove('open');
//   }
//   else {
//     contactnavbar.classList.add('open')
//   }
// });