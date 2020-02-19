<template>
    <div class="add-to-cart">
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
export default {
    name: "add-to-cart",
    props: {
        name: String,
        price: Number,
        image: String,
        pId: String,
        description: String,
        
    },
    data() {
        return {
            item: {
                productName: this.name,
                productImage: this.image,
                productPrice: this.price,
                productId: this.pId,
                productQuantity: 1,
                productDescription: this.description,
                
            }
        };
    },
    methods: {
        addToCart() {
            //$("#miniCart").modal("show");
            this.$store.commit("addToCart", this.item);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
    border-radius: 15px;
    background: #865934;
    border: #865934;
    color: #fff;
}
button:hover {
    background: #fff;
    border: #865934;
    color: #865934;
}
</style>
