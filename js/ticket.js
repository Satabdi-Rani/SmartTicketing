function scrollToSection(){
    // console.log("hi");
    window.scrollTo(0, 1500);
}

// Seat Selection

const seats = document.getElementsByClassName('seat');
for (const seat of seats){
    console.log(seat);
    seat.addEventListener("click", function(){
        // console.log("hi");
        const ticketNumber = document.getElementById('ticket-selected');
        const h3One = document.createElement('h3');
        h3One.innerText = seat.innerText;
        ticketNumber.appendChild(h3One);

        const h3Two = document.createElement('h3');
        h3Two.innerText = "Economy";
        ticketNumber.appendChild(h3Two);

        const h3Three = document.createElement('h3');
        h3Three.innerText = "500";
        ticketNumber.appendChild(h3Three);
        // ticketNumber.innerText = seat.innerText;
    })
}
