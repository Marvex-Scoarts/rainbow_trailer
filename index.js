document.addEventListener("DOMContentLoaded",
function(){
    const container = document.querySelector(".container");
    const colors = ["red", "orange", "yellow", "green",
"blue", "purple"];

container.addEventListener("mousemove", function(event)
{

    const rainbowTrail = document.createElement("div");
    rainbowTrail.className = "rainbow-trail";

    container.appendChild(rainbowTrail);

    const color = 
    colors[Math.floor(Math.random() * colors.length)];

    rainbowTrail.style.backgroundColor = color;
      rainbowTrail.style.left = 
      event.clientX + "px";

      rainbowTrail.style.top =
      event.clientY + "px";

      setTimeout(() => {

        container.removeChild(rainbowTrail);
      }, 1000); 
});
});