
// let likeButtons = document.querySelectorAll('.thumbs-up-btn');
// let dislikeButtons = document.querySelectorAll('.thumbs-down-btn');
// let likeCountElements = document.querySelectorAll('.like-count');
// let dislikeCountElements = document.querySelectorAll('.dislike-count');
// let totalButton = document.querySelector('.total-btn');
// let totalCountElement = document.querySelector('.total-count');

// // let totalLikes = 0;
// // let totalDislikes = 0;
// let totalLikes = Number(localStorage.getItem('totalLikes')) || 0;
// let totalDislikes = Number(localStorage.getItem('totalDislikes')) || 0;
// updateTotalCounts();
// likeButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         let cardNumber = button.getAttribute('data-card');
//         likeCountElements[cardNumber - 1].textContent++;
//         totalLikes++;
//         updateTotalCounts();
//         updateLocalStorage();
//     });
// });

// dislikeButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         let cardNumber = button.getAttribute('data-card');
//         dislikeCountElements[cardNumber - 1].textContent++;
//         totalDislikes++;
//         updateTotalCounts();
//         updateLocalStorage();
//     });
// });

// function updateLocalStorage() {
//     localStorage.setItem('totalLikes', totalLikes);
//     localStorage.setItem('totalDislikes', totalDislikes);
// }

// function updateTotalCounts() {
//     totalCountElement.textContent = `Likes: ${totalLikes} | Dislikes: ${totalDislikes}`;
// }
let likeButtons = document.querySelectorAll('.thumbs-up-btn');
let dislikeButtons = document.querySelectorAll('.thumbs-down-btn');
let likeCountElements = document.querySelectorAll('.like-count');
let dislikeCountElements = document.querySelectorAll('.dislike-count');
let totalButton = document.querySelector('.total-btn');
let totalCountElement = document.querySelector('.total-count');

let cardLikes = JSON.parse(localStorage.getItem('cardLikes')) || {};
let cardDislikes = JSON.parse(localStorage.getItem('cardDislikes')) || {};

updateTotalCounts();

likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let cardNumber = button.getAttribute('data-card');
        cardLikes[cardNumber] = (cardLikes[cardNumber] || 0) + 1;
        likeCountElements[cardNumber - 1].textContent = cardLikes[cardNumber];
        updateTotalCounts();
        updateLocalStorage();
    });
});

dislikeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let cardNumber = button.getAttribute('data-card');
        cardDislikes[cardNumber] = (cardDislikes[cardNumber] || 0) + 1;
        dislikeCountElements[cardNumber - 1].textContent = cardDislikes[cardNumber];
        updateTotalCounts();
        updateLocalStorage();
    });
});

function updateLocalStorage() {
    localStorage.setItem('cardLikes', JSON.stringify(cardLikes));
    localStorage.setItem('cardDislikes', JSON.stringify(cardDislikes));
}

function updateTotalCounts() {
    let totalLikes = Object.values(cardLikes).reduce((acc, cur) => acc + cur, 0);
    let totalDislikes = Object.values(cardDislikes).reduce((acc, cur) => acc + cur, 0);
    totalCountElement.textContent = `Likes: ${totalLikes} | Dislikes: ${totalDislikes}`;
}
