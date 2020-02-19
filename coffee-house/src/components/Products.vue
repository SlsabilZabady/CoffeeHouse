<template>
    <div class="products" id="products">
        <div class="menu">
            <h2><span>Coffee</span> Menu</h2>
            <div>
                <div class="container">
                    <div class="leftwrap">
                        <div
                            class="col-md-3"
                            id="card1"
                            v-for="product in products"
                            :key="product.id"
                        >
                            <div class="card" style="width: 18rem;">
                                <img :src="`${product.image}`"/>
                             

                                <div class="card-body">
                                    <h5 class="card-title">
                                        {{ product.name }}
                                    </h5>
                                    <h6>${{ product.price }}.00</h6>
                                    <p class="card-text">
                                        {{ product.description }}
                                    </p>
                                    <add-to-cart
                                        :price="product.price"
                                        :name="product.name"
                                        :p-id="product.id"
                                        :image="`${product.image}`"
                                    ></add-to-cart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  db } from "../firebase";
 

export default {
    name: "products",
    data() {
        return {
            products: [],
           
        };
    
   
  },
    firestore() {
        return {
            products: db.collection("products")
        };
    }
};
</script>
<style scoped>
.menu {
    background: #bf8555;
    padding: 30px;
}
.menu h2 {
    padding: 40px;
    text-align: center;
    color: #703a0f;
}
.menu h2 span {
    color: white;
    border-bottom: 3px solid #703a0f;
}
.container .leftwrap {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.leftwrap {
    display: flex;
    padding: 0 0 40px 0;
}
.leftwrap img {
    width: 200px;
    height: 200px;

    margin-left: 40px;
}

.leftwrap h4 {
    text-align: center;
}
.col-md-3 .card {
    margin-top: 20px;
    background: rgba(224, 215, 207, 0.5);
}
.card .btn {
    background: none;
    border-radius: 20px;
    border: 1px solid #703a0f;
    color: #703a0f;
    font-weight: 500;
}
.card .btn:hover {
    color: white;
    background: #703a0f;
    border: none;
}
</style>
