var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 10) + 1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var i = cart.length
  var list = ""
  if ( i === 0 ) { return  "Your shopping cart is empty."}
  else if ( i === 1 ) { 
     return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`  } // closes first else if
  else {
    for ( var num = 0; num < i - 1; num++) {
    list = `${list} ${cart[num].itemName} at \$${cart[num].itemPrice},`
      }  
  return `In your cart, you have${list} and ${cart[i - 1].itemName} at \$${cart[i - 1].itemPrice}.` 
  } // closes final else

  }

function total() {
  var i = cart.length
  var total = 0
  for (var num = 0; num < i; num++) {
    var total = total + cart[num].itemPrice
  } //closes for
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}