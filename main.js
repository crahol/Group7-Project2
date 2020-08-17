var btn = document.getElementById("button");
var nav_bar = document.getElementById("nav-bar");

btn.addEventListener("click", function(e) {
    /* function called when you click of the button */
    /* this if else to change the text in the button */
    if(escape(btn.innerHTML) == "%u2630"){
     	btn.innerHTML="&times;";
     	nav_bar.style.visibility = "visible";
     	nav_bar.style.height = "100vh";
    } else {
        btn.innerHTML="&#x2630;";
        nav_bar.style.visibility = "hidden";
     	nav_bar.style.height = "0";
    }    
});