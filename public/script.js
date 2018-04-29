var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var updateCart = function () {
    // In this function we render the page.

   //first we empty the "cart div" before we re-add all the item elements.
    $('.cart-list').empty();

       // then we clear the total 

       var itemsTotal = 0;

      //then we add the cart items one at a time and add them to the div
      for(i = 0; i < cart.length; i++) {
      var cartItems =  '<p> ' + cart[i].name + ' - <span> $' + cart[i].price + '</span> </p>';
      itemsTotal += cart[i].price;
      $('.cart-list').append(cartItems);
      }

      //having added up the total, we push it to its span
      $('.total').text(itemsTotal);
    }

  var addItem = function (item) {
    // This function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    cart.push(item);
   }

  var clearCart = function () {
    // A function that clears the cart div ;-)
    $('.cart-list').empty();
    //and clears the total from its span
    $('.total').text(0);
    //and clears the cart array
    cart = [];
     }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // hide/show the shopping cart!
 $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // get the "item" object from the page 
  var item = {};
  item.name = $(this).closest('.item').data().name;
  item.price = $(this).closest('.item').data().price;
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart(this);
});