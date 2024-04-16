function scrollToSection(){
    // console.log("hi");
    window.scrollTo(0, 1500);
}

// Seat Selection

const seats = document.getElementsByClassName('seat');
let count =0;
for (const seat of seats){
    // console.log(seat);
    
    seat.addEventListener("click", function(event){
        const clickedEvent = event.target;
        count = count+1;
        if(count>4){
            alert('You already selected 4 seats.')
        }
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

        // total price
        // const totalPriceAmount = document.getElementById('total-price');
        // const totalPriceString = totalPriceAmount.innerText;
        // const totalPrice = parseInt(totalPriceString);
        // totalPriceAmount.innerText = totalPrice + ticketPrice;
        const setTotal = totalAmount();
        setInnerText('total-price', setTotal);

        // Grand Price 
        // const grandPriceAmount = document.getElementById('grand-price');
        // const grandPriceString = grandPriceAmount.innerText;
        // const grandPrice = parseInt(grandPriceString);
        // grandPriceAmount.innerText = grandPrice + ticketPrice;
        const grand = grandTotal() + ticketPrice;
        // const grandFinal = grandTotal('grnad-price', ticketPrice);
        setInnerText('grand-price', grand);

        if(count <=1){
            document.getElementById('btn-next').addEventListener('click', function(){

                location.href = "success.html";
            })
        }
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function totalAmount(){
    const totalPriceAmount = document.getElementById('total-price');
    const totalPriceString = totalPriceAmount.innerText;
    const totalPrice = parseInt(totalPriceString);
    const ticketPrice = stringToNumber('ticket-price');
    let total = totalPrice + ticketPrice;
    return total;
}

function grandTotal(){
    const grandPriceAmount = document.getElementById('grand-price');
    const grandPriceString = grandPriceAmount.innerText;
    const grandPrice = parseInt(grandPriceString);
    // const grand = grandPrice + ticketPrice;
    return grandPrice;
}


const applyButton = document.getElementById('btn-apply');
applyButton.addEventListener('click', function(){
const input = document.getElementById('coupon-input');
console.log(input.value);
if(input.value == 'NEW15'){
    console.log(totalAmount());
    let total = (15 * totalAmount())/100;
    console.log(total);
    const totalContainer = document.getElementById('total-container');
    const lists = document.createElement('li');
    lists.classList.add('flex', 'flex-row', 'justify-between', 'items-center', 'block');
    const h3 = document.createElement('h3');
    h3.innerText = 'Discount';

    const h3Price = document.createElement('h3');
    h3Price.innerText = total;
    
    lists.appendChild(h3);
    lists.appendChild(h3Price);
   
    totalContainer.appendChild(lists);

    // setInnerText('total-price', applied);
}
else if(input.value == 'COUPLE20'){
    total = 0.1 * totalAmount();
    // return total;
}

})

// Applybutton
// const applyButton = document.getElementById('btn-apply');
// applyButton.addEventListener('click', function(){
//     const input = document.getElementById('coupon-input');
//     console.log(input.value);
//     if(input.value == 'NEW20'){
//         const newTotal = 0.20 * totalAmount();

//     }
//     else{
//         console.log("False");
//     }
// })

// Next button
// document.getElementById('btn-next').disabled = true;
// document.getElementById('btn-next').addEventListener('click', function(){

//     location.href = "success.html";
// })

// const disable = document.getElementById('btn-next');
// disable.disabled = true;






// Continue Button
