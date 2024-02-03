var navItems = document.querySelectorAll(".nav_sec");
var navLink = document.querySelectorAll(".nav_a");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
        $(".nav_sec").removeClass("nav_active");
        this.classList.add("nav_active");
   });
}