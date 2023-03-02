function moveBoat() {

    var seconds = 3;

    const boat = document.getElementById("boat");

    boat.style.transition = "transform "+seconds+"s ease-in";
    boat.style.transform = "translateX(75vw)";

    setTimeout(function() {
        alert("The boat left the dock");
    },seconds*1000)
}

function warranty() {

    document.getElementById("surround").style.display = "block";

    document.getElementById("warranty").style.display = "block";
    document.getElementById("warranty").style.opacity = "1";
    
}

function surround() {
    document.getElementById("surround").style.display = "none";

    document.getElementById("warranty").style.display = "none";
    document.getElementById("warranty").style.opacity = "0";
}
