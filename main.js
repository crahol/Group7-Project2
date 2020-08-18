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

var image = document.querySelector("img#hobby");

var width = image.getAttribute('width');
var height = image.getAttribute('height');

let images = document.getElementById("images").getElementsByTagName("img");

var counter = 1;

Object.values(images).forEach(function(img) {
    img.addEventListener("click", () =>  {
        width = 2.223 * width;
        height = 2.223 * height;
        if(((counter)%4)==0){
            width=100;
            height=100;
            img.setAttribute('width', width);
            img.setAttribute('height', height);
        } else {
            img.setAttribute('width', width);
            img.setAttribute('height', height);
        }
        counter++;
    });
});

let buttons = document.getElementById("images").getElementsByTagName("button");
console.log(buttons);
/*var btn1 = document.getElementById('TOP') */
Object.values(buttons).forEach(function(button) {
    button.addEventListener("click", () =>  {
       var value = button.value-1;
        console.log(value);
       var temp = images[0].src;
       images[0].src = images[value].src;
       images[value].src = temp;
       
        });
    
});