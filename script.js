var website = new Vue({
    el: '#website',
    data:{
      //groupWrapper: "list-group-item",
      isShowingCart: false,
      cart: {
        items: []
      },
      products: [
        {
          id: 1,
          picture: 'flatwhite.png' ,
          name: "Flat white",
          price: 10,
        },
          {
            id:2,
            picture: 'blackcoffee.png',
            name: "Black Coffee",
            price: 10,
        },
        {
            id:3,
            picture:'affogato.png',
            name: "Affogato",
            price: 10,
        },
        {
            id:4,
            picture:'veinna.png' ,
            name: "Veinna",
            price: 10,
        }
        ,
        {
            id:5,
            picture:'cappuccino.png',
            name: "Cappuccino",
            price: 10,
        }
        ,
        {
            id:6,
            picture:'milkcoffee.png',
            name: "Milk Coffee",
            price: 10,
            }
        ]
    },
    computed:{
        cartTotal: function() {
          var total = 0;
          this.cart.items.forEach(function(item) {
            total += item.quantity * item.product.price;
          });
          return total;
        },
},
    methods:{
        removeItemFromCart: function(cartItem) {
        var index = this.cart.items.indexOf(cartItem);
        
        if (index !== -1) {
            this.cart.items.splice(index, 1);
        }
        },
        /*checkout: function() {
        if (confirm('Are you sure that you want to purchase these products?')) {
            this.cart.items.forEach(function(item) {
            item.product.inCart += item.quantity;
            });
            
            this.cart.items = [];
        }
        },*/
        addProductToCart: function(product) {
        var cartItem = this.getCartItem(product);
        
        if (cartItem != null) {
            cartItem.quantity++;
        } else {
            this.cart.items.push({
            product: product,
            quantity: 1
            });
        }
        },
        increaseQuantity: function(cartItem) {
        cartItem.quantity++;
        },
        decreaseQuantity: function(cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity == 0) {
            this.removeItemFromCart(cartItem);
        }
        },
        getCartItem: function(product) {
        for (var i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === product.id) {
            return this.cart.items[i];
            }
        }
        
        return null;
        }
    }
}
);