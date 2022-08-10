// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    takeOff.addEventListener("click", function(){
        confirmed = window.confirm("Confirm that the shuttle is ready for take off.");
        if (confirmed) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    })
    
  });
