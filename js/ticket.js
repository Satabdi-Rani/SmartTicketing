function scrollToSection(){
    // console.log("hi");
    window.scrollTo(0, 1500);
}

// Seat Selection

const seats = document.getElementsByClassName('seat');
for (const seat of seats){
    // console.log(seat);
    
    seat.addEventListener("click", function(event){
        const clickedEvent = event.target;
        

        const ticketSelectedUl = document.getElementById('ticket-SelectedUl');
        // if(clickedEvent.classList.contains('seat')){

            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'flex-row', 'justify-between', 'items-center');
            const h3One = document.createElement('h3');
            h3One.innerText = seat.innerText;
            

            const h3Two = document.createElement('h3');
            h3Two.innerText = "Economy";
            

            const h3Three = document.createElement('h3');
            h3Three.innerText = "500"; 

            // ticketSelectedUl.innerHTML = '';

            listItem.appendChild(h3One);
            listItem.appendChild(h3Two);
            listItem.appendChild(h3Three);
            ticketSelectedUl.appendChild(listItem);
            
        // }
        
        // Changing seat number
        let seatNumberBefore = document.getElementById('seat-Number');
        let seatString = seatNumberBefore.innerText;
        const seatNumber = parseInt(seatString);
        // console.log(typeof seatNumber, seatNumber);
        seatNumberBefore.innerText = seatNumber +1;
        
        //Seats left
        const seatsLeftBefore = document.getElementById('seats-left');
        const seatsLeftString = seatsLeftBefore.innerText;
        const seatsLeft = parseInt(seatsLeftString);
        // console.log(typeof seatsLeft, seatsLeft);
        seatsLeftBefore.innerText = seatsLeft -1; 
    })
}
