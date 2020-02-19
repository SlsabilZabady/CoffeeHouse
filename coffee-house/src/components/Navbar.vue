<template>
    <div>
        <div id="nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg fixed-top">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <VueFontawesome icon="bars"></VueFontawesome>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav ml-auto text-right">
                            <router-link to="/" class="nav-item" tag="a"
                                ><VueFontawesome
                                        icon="home" size="1" class="mr-1"
                                    ></VueFontawesome>Home</router-link
                            >
                            <router-link to="/Products" class="nav-item" tag="a"
                                ><VueFontawesome
                                        icon="coffee" size="1" class="mr-1"
                                    ></VueFontawesome>Products</router-link>
                            <router-link
                                to="/shoppingcart"
                                class="nav-item"
                                tag="a"
                                > <VueFontawesome
                                        icon="shopping-cart" size="1"
                                    ></VueFontawesome> Shopping Cart</router-link
                            >
                                <router-link
                                    to="/account"
                                    tag="a"
                                    ><VueFontawesome
                                        icon="user"
                                    ></VueFontawesome>
                                </router-link>
                                <router-link to="/signup" class="nav-item ml-5 signup" tag="a" style="border:1px solid #"
                                >Sign Up</router-link>
                                
                           
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'navbar'
}
</script>
<style lang="scss">

#nav {
    padding: 40px;

    a {
        font-weight: bold;
        color: #bf8555;
        margin: 0 12px;
        &.router-link-exact-active {
            color: #191310;
        }
    }
    .navbar {
        padding-top: 20px;
        padding-right: 100px;
        padding-bottom: 10px;
        background: rgba(255, 255, 255, 0.5);
    }
    .signup{
      border: 1px solid #bf8555;
      background: #bf8555;
      color: #fff;
      padding: 5px 10px;
      border-radius: 10px ;
      text-decoration: none;
      width: 100px;
      text-align: center

    }

}
</style>
