import Vue from "vue";
import Vuelidate from "vuelidate";
//import axios from "axios";
//import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from 'jquery';
import { firebaseApp } from "./firebase";
import VueFirestore from "vue-firestore";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "font-awesome/css/font-awesome.min.css";

Vue.use(Vuelidate);
Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
  });
  window.$ = window.jQuery = jQuery;

Vue.use(VueFirestore);
Vue.component(
    "VueFontawesome",
    require("vue-fontawesome-icon/src/components/VueFontawesome.vue").default
);
Vue.component('products', require('./components/Products.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);

Vue.component('shoppingcart', require('./views/ShoppingCart.vue').default);

Vue.config.productionTip = false;
let app = "";

firebaseApp.auth().onAuthStateChanged(function() {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});
