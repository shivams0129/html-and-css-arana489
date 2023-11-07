var image = document.getElementById ("image");
var button = document.getElementById ("button");
var visible = true;

button.addEventListener("click", function(){
    //
    if (visible) {
        image.style.display = "none";
        visible = false;
    }   else{
        image.style.display = "block";
        visible = true;
    }
});
