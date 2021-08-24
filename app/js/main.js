$(function(){
    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
    });   
});


const ratingItemsList = document.querySelectorAll('.rate-star');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);