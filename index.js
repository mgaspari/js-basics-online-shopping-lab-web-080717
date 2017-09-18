var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var ranItem = {};
 ranItem[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(ranItem);
 console.log(`${item} has been added to your cart.`);
 return cart;

}

function viewCart() {
  // write your code here
  let itemsAndPrices = [];

  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch (cart.length){
    case 0:
      console.log(`Your shopping cart is empty.`);
      break;
    case 1:
    console.log(`In your cart, you have ${itemsAndPrices[0]}.`);
    break;
    case 2:
    console.log(`In your cart, you have ${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`);
    break;
    default:
      var itmStr = ""
      for (let i=0; itemsAndPrices.length - 1; i++){
        itmStr += ` ${itemsAndPrices[i]},`
      }
      console.log(`In your cart, you have${itmStr} and ${itemsAndPrices[-1]}.`);

  }
  // if (cart.length === 0) {
  //   console.log('Your shopping cart is empty.')
  // }
  // else {
  //   for (i=0, cart.size, i++){
  //
  //   }
  // }
}

function total() {
  // write your code here
  var totPrice = 0
  for (let i=0; i < cart.length; i++ ){
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    totPrice += price
  }
  return totPrice;
}

function removeFromCart(item) {
  // write your code here
  for (let i=0; i < cart.length; i++ ){
    let itemAndPrice = cart[i];
    let itemName = Object.keys(itemAndPrice)[0];
      if (itemName === item){
        cart.splice(i,1);
        return cart;
      }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else{
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0,cart.length)
  }
}
