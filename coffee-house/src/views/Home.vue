<template>
    <div class="home">
        <Slider />
        <Products />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Products from "@/components/Products.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Home",
    components: {
        Slider,
        Products,
        Footer
    },
    data () {
        return {
           // products: []
        };
    },
   /* created () {
        var dummy = [
            {
                id: 1,
                picture: '../assets/flatwhite.png',
                name: 'Flat white',
                price: 10
            },
            {
                id: 2,
                picture: '../assets/blackcoffee.png',
                name: 'Black Coffee',
                price: 10
            },
            {
                id: 3,
                picture: '../assets/affogato.png',
                name: 'Affogato',
                price: 10
            },
            {
                id: 4,
                picture: '../assets/veinna.png',
                name: 'Veinna',
                price: 10
            },
            {
                id: 5,
                picture: '../assets/cappuccino.png',
                name: 'Cappuccino',
                price: 10
            },
            {
                id: 6,
                picture: '../assets/milkcoffee.png',
                name: 'Milk Coffee',
                price: 10
            }
        ];
        this.$set('products', dummy);
    }*/
    
};
</script>
