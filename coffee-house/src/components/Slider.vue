<template>
    <div class="slider">
        <div class="banner">
            <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/slider.png" class="rounded" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container left-side">
       <div class="logo">
         <img src="../assets/66783.png">
       </div>
                <div class="welcome">
                    <h1>Welcome to Coffee House</h1>
                    <p>As Long As There is Coffee in The World<br> How Bad Could Things Be? <span>– CASSANDRA CLARE</span></p>
                </div>

                <div class="order">
                    <p>You Need   a Coffee .. Just Order it</p>
                    
                    <a type="submit"  href="/products" >Order Now</a>
                  
                </div>
            </div>
  
        </div>
</template>
<script>
export default {
    name: "Slider"
};
</script>
<style scoped>
.banner img{
 
    width: 100%;
    height: 100%;
    
}
.logo img{
    position: absolute;
    left: 10%;
    top: 6vw;
    width: 15vw;
    height: 15vw;
    margin-left: 15vw;
    bottom: 3%;
}
.welcome {
    position: absolute;
    overflow: hidden;
    top: 20vw;
text-align: center;
}
.welcome h1{
    margin-bottom: 2vw;
    color: #703A0F;
    font-size: 3.75vw;
}
.welcome p{
    color: #BF8555;
    font-size: 1.75vw;
    padding-top: 2vw;
}
.welcome span{
    
    text-align: right;
    font-size: 1vw;
}
.order{
    position: absolute;
    overflow: hidden;
    top: 35vw;
    margin-top: 3vw;
    margin-left: 8vw;
    text-align: center;
    color:  #703A0F;
}
.order p{
    font-size: 2vw;
    margin-bottom: 1vw;
}
.order a{
    padding: 1vw 3vw;
    border-radius: 20px;
    border: 2px solid #703A0F;
    color: #703A0F ;
    background: none;
    font-size: 1.5vw;
}
.order a:hover{
    color: white ;
    background: #703A0F;
    text-decoration: none;
}
@media screen and (max-width: 640px) {
    .logo img{
    margin-top: 60px
    }
    .welcome {
margin-top: 70px
    }
    .order{
margin-top: 100px
    }

}

</style>
