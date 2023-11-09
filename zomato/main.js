
// let minusButtons = document.querySelectorAll('.fa-minus-circle');
// let plusButtons = document.querySelectorAll('.fa-plus-circle');
// let spans = document.querySelectorAll('.one-acc');

// // decrement logic
// minusButtons.forEach(function(minusButton, index) {
//     minusButton.addEventListener('click', function() {
//         let spanTag = spans[index];
//         let qty = Number(spanTag.innerText) || 0;
//         qty = (qty > 0) ? qty - 1 : 0;
//         localStorage.setItem('qty', qty);
//         spanTag.innerText = qty;
//     });
// });

// //increment logic
// plusButtons.forEach(function(plusButton,index){
//     plusButton.addEventListener('click', function() {
//         let spanTag = spans[index];
//         let qty = Number(spanTag.innerText) || 0;
//         qty++;
//         localStorage.setItem('qty', qty);
//         spanTag.innerText = qty;
//     });
// });



// for (let i = 0; i < spans.length; i++) {
//     let qty = localStorage.getItem('qty') || 0;
//     spans[i].innerText = qty;
// }

// main.js
// main.js
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const quantityElements = document.querySelectorAll('.one-acc');

// Load quantity from localStorage if available
quantityElements.forEach((element, index) => {
    const storedQuantity = localStorage.getItem(`quantity${index}`);
    if (storedQuantity) {
        element.innerText = storedQuantity;
    }
});

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantityElements[index].innerText > 0) {
            quantityElements[index].innerText--;
            // Update local storage
            localStorage.setItem(`quantity${index}`, quantityElements[index].innerText);
        }
    });
});

plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        quantityElements[index].innerText++;
        // Update local storage
        localStorage.setItem(`quantity${index}`, quantityElements[index].innerText);
    });
});





