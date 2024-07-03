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

//product search functionality
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
//console.log(productlist)

search.addEventListener("keyup", function () {

    var enteredValue = event.target.value.toUpperCase()
    //var enteredValue = this.value.toUpperCase()


    for (i = 0; i < productlist.length; i++) {

        var productname = productlist[i].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) // match not found
        {
            productlist[i].style.display = "none"
        }
        else {

            productlist[i].style.display = "block" //match found
        }
    }

})
