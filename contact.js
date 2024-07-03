//selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
//menubar while click it will appear medium screen

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0

})
//menubar while click it will close medium screen

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
