function scrollToSection(){
    // console.log("hi");
    window.scrollTo(0, 1500);
}

// Seat Selection

const seats = document.getElementsByClassName('seat');
for (const seat of seats){
    // console.log(seat);
    let count =0;
    seat.addEventListener("click", function(event){
        const clickedEvent = event.target;
        count++;
        // Button color change
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "#FFFFFF";
        const ticketSelectedUl = document.getElementById('ticket-SelectedUl');
       
        // if(clickedEvent.classList.contains('seat')){

            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'flex-row', 'justify-between', 'items-center');
            const h3One = document.createElement('h3');
            h3One.innerText = seat.innerText;
            

            const h3Two = document.createElement('h3');
            h3Two.innerText = "Economy";
            
            
            const ticketPrice = stringToNumber('ticket-price');
            // console.log(typeof ticketPrice, ticketPrice);
            const h3Three = document.createElement('h3');
            h3Three.innerText = ticketPrice; 

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
        
        // if(seatNumber>4){
        //         alert('You already selected 4 seats');
        //     }
        if(count>4){
            alert("you can only select 4 seats");
        }

        // total price
        const totalPriceAmount = document.getElementById('total-price');
        const totalPriceString = totalPriceAmount.innerText;
        const totalPrice = parseInt(totalPriceString);
        totalPriceAmount.innerText = totalPrice + ticketPrice;

        // Grand Price 
        const grandPriceAmount = document.getElementById('grand-price');
        const grandPriceString = grandPriceAmount.innerText;
        const grandPrice = parseInt(grandPriceString);
        grandPriceAmount.innerText = grandPrice + ticketPrice;

        // Apply coupon
        const applyButton = document.getElementById('btn-apply');
        const couponInput = document.getElementById('coupon-input');
        const coupon = couponInput.value;
        console.log(coupon);
    })
}


// Next button
// document.getElementById('btn-next').disabled = true;
document.getElementById('btn-next').addEventListener('click', function(){

    location.href = "success.html";
})






// Continue Button
