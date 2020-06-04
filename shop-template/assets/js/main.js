var addtoBasketButton = document.querySelector('.page-content');
var addtoBasketCounter = document.getElementById('cart-counter');
var itemCounter = 0;
var itemPrice = 0;

function addToBUsketFunc(e) {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    addtoBasketCounter.innerHTML = ++itemCounter;

    if (itemCounter >= 1) {
      addtoBasketCounter.style.display = 'block';
    }

    var priceDisplayed = target.parentElement.previousElementSibling.innerHTML
    var formattedPrice = +priceDisplayed.replace(/^\$([0-9]*)\s\<[a-z]*\>([0-9][0-9])\<\/[a-z]*\>$/g, '$1.$2')

    itemPrice = Math.round((itemPrice + formattedPrice) * 100) / 100;



    var backToOriginalName = target.innerHTML;

    target.innerHTML = "Added " + itemPrice.toFixed(2) + "$";

    addtoBasketButton.removeEventListener('click', addToBUsketFunc);

    setTimeout(() => {
      target.innerHTML = backToOriginalName;
      addtoBasketButton.addEventListener('click', addToBUsketFunc);
    }, 2000);
  }
}
addtoBasketButton.addEventListener('click', addToBUsketFunc)



