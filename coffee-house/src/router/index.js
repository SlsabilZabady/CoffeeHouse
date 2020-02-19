import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Account from "../views/Account.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Products from "../views/Products.vue"
import Checkout from "../components/Checkout.vue"
import {firebaseApp} from '../firebase'
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/products",
        name: "Products",
        component: Products
    },
    {
        path: "/signin",
        name: "signIn",
        component: SignIn
    },
    {
        path: "/signup",
        name: "signUp",
        component: SignUp
    },
    {
        path: "/shoppingcart",
        name: "shoppingCart",
        component: ShoppingCart
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
        meta:{ requiresAuth: true }
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        meta:{ requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebaseApp.auth().currentUser
  
    if (requiresAuth && !currentUser) {
        next('/signup')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
  })
  
  

export default router;
