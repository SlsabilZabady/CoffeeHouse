<template>
    <div class="shoppingCart">
        <div class="container">
            <h1>
                <VueFontawesome icon="shopping-cart" size="2" class="mr-2"></VueFontawesome
                >Shopping Cart
            </h1>
            <table class="table table-border" >
                <thead>
                    <tr>
                        <th>Product image</th>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.$store.state.cart" :key="item.id">
                        <td>
                            <img
                                :src="`${item.productImage}`"
                                style="width: 80px; height: 80px;"
                            />
                        </td>
                        <td>{{ item.productName }}</td>
                        <td>
                            
                            <button
                                class="btn inc "
                                @click="$store.commit('increaseQuantity', item)"
                            >
                                +
                            </button>
                            {{ item.productQuantity }} &nbsp;
                            <button
                                class="btn dec"
                                @click="$store.commit('decreaseQuantity', item)"
                            >
                                -
                            </button>
                        </td>
                        <td>
                            ${{ item.productQuantity * item.productPrice }}.00
                        </td>
                        <td>
                            <span @click="$store.commit('removeFromCart', item)"
                                ><vue-fontawesome
                                    icon="trash"
                                    size="1"
                                ></vue-fontawesome
                            ></span>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td class="text-right" colspan="2">
                            <strong>Total</strong>
                        </td>

                        <td>${{ this.$store.getters.totalPrice }}.00</td>
                    </tr>
                </tbody>
            </table>
            <div class="modal-footer">
                <a type="button" class="btn con" href="/" >Continue Shopping</a>
                <button type="button" class="btn con" @click="checkout">Checkout</button>
              </div>
            <!--<div >
                <p>The Shopping Cart Currently is Empty.</p>
            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "shoppingCart",
    data() {
        return {};
    },
    methods:{
        checkout(){
            alert('Are you sure that you want to checkout?')
      this.$router.push('/checkout')  
    }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    background: #bf8555;
    border-radius: 25px;
    padding: 40px;
    color: #ffffff;
    box-shadow: 0 0 20px 2px rgba(7, 7, 7, 0.5);
}
table {
    color: #4d2708
}
.inc, .dec , .con{
    background: #ffffff;
    border: 1px solid #4d2708;
    color: #4d2708
}
.inc:hover, .dec:hover , .con:hover{
    background: #4d2708;
    border: 1px solid #ffffff;
    color: #ffffff
}
</style>
