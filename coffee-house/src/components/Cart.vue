<!--<template>
    <div>
        <h1>Shopping Cart</h1>
        <table v-if="total > 0" class="table table-border">
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
                <tr :v-for="item in items">
                    <td>
                        <img
                            :src="'../assets/' + product.picture"
                            style="width: 80px; height: 80px;"
                        />
                    </td>
                    <td>{{ item.name }}</td>
                    <td>
                        {{ item.quantity }} &nbsp;
                        <button class="btn btn-success">
                            +
                        </button>
                        <button class="btn btn-danger">
                            -
                        </button>
                    </td>
                    <td>{{ item.quantity * item.product.price }}</td>
                    <td>
                        <i class="fas fa-trash-alt"></i>
                    </td>
                </tr>

                <tr>
                    <td class="text-right" colspan="2">
                        <strong>Total</strong>
                    </td>

                    <td>${{ total }}.00</td>
                </tr>
            </tbody>
        </table>

        <p v-else>Your Cart is Currently Empty!</p>
    </div>
</template>
<script>
export default {
    name: "shoppingcart",
    props: ["product"],
    data() {
        return {
            items: []
        };
    },
    methods: {
        addToCart() {}
    },
    computed: {
        total() {
            return 0;
        }
    }
};
</script>-->
