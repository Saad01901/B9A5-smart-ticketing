const allSeats = document.getElementsByClassName('seat');
let count = 0;
let totalSeat = 40;


for(const seats of allSeats){
    seats.addEventListener("click", function(e){
        count = count + 1;
        setInnerText('tickect-count', count);
        totalSeat = totalSeat - 1;
        setInnerText('total-tickects', totalSeat);
        console.log(seats.classList);
        console.log(seats.classList.add('bg-[#1DD100]'));
        console.log(seats.classList.add('hover:bg-[#1DD100]'));
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}