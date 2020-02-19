data() {
        return {
            formErrors: [],
            username: null,
            email: null,
            password: null,
            charCount: 15
        };
    },
    methods: {
        formValidation: function(e) {
            this.formErrors = [];

            if (!this.username) {
                this.formErrors.push("UserName Can Not Be Empty.");
            }
            if (!this.email) {
                this.formErrors.push("Email Can Not Be Empty.");
            }
            if (!this.password) {
                this.formErrors.push("Password Can Not Be Empty.");
            }
            if (this.password && this.password.length < this.charCount) {
                this.formErrors.push(
                    "Password Can Not Less Than" +
                        this.charCount +
                        "Characters."
                );
            }
            if (this.username && this.username.length > this.charCount) {
                this.formErrors.push(
                    "UserName Can Not More Than" +
                        this.carCount +
                        "Characters."
                );
            }
            e.preventDefault();
        }
    }




    --------------------------------------------------------------
    .logo {
   
    display: flex;
    align-items: center;
    text-align: center;
}
.logo img {
    position: absolute;
    top: 10%;
    width: 200;
    height: 175px;
    align-items: center;
    padding-top: 30px;
    margin-bottom: 20px;
}
.logo p {
    position: absolute;
    margin-top: 13%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
}
.form-container {
    position: absolute;
    overflow: hidden;
    top: 35vh;
    margin: 10px 0;
    margin-bottom: 40px;
    background: #fff;
    padding: 30px 100px;
    border-radius: 10px;
    box-shadow: 0 0 20px 2px rgba(206, 137, 57, 0.5);
}
form input[type="email"],
input[type="password"],
input[type="text"] {
    width: 300px;
    border: none;
    border-bottom: 1px solid gray;
    border-radius: 0;
   
}
form button[type="submit"] {
    background: #865934;
    border: none;
    border-radius: 25px;
}
form button[type="submit"]:hover {
    background: white;
    color: #865934;
    border: 1px solid #865934;
}
.form-container .word {
    margin-left: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}


-------------------------------------------------
<div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                        <img src="../assets/blackcoffee.png" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Black Coffee</h5><h6>$10.00</h6>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Add to Cart</a> 
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/affogato.png" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Affogato</h5><h6>$10.00</h6>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/veinna.png" style="height: 170PX; margin-top: 30px;" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Veinna</h5> <h6>$10.00</h6>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                          </div>
                    </div>
                    
                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/cappuccino.png" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Cappuccino</h5><h6>$10.00</h6>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/milkcoffee.png" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Milk Coffee</h5><h6>$10.00</h6>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                          </div>
                    </div>
                </div>              
                
              </div>
    </div>
            </div>

            -----------------------------------------------------------------------------------------------------------------
            <form
                                    class="form-container"
                                    
                                >
                                    
                                    <div class="form-group">
                                        <vue-fontawesome
                                        icon="envelope"
                                        size="1"
                                    ></vue-fontawesome
                                    ><label for="exampleInputEmail1"
                                        >Email address</label
                                    >
                                    <input
                                        type="email"
                                        v-model="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        v-model.trim="$v.email.$model"
                                        :class="{
                                            'is-invalid': $v.email.$error,
                                            'is-valid': !$v.email.$invalid
                                        }"
                                    />
                                    <div
                                        class="valid-feedbak"
                                        v-if="$v.email.required"
                                    >
                                        
                                    </div>
                                    <div class="invalid-feedbak">
                                        <span v-if="!$v.email.required"
                                            ></span
                                        >
                                        <span v-if="!$v.email.isUnique"
                                            ></span
                                        >
                                    </div>
                                    </div>

                                    <div class="form-group">
                                        <i class="fa fa-lock"></i
                                        ><label for="exampleInputPassword1">
                                            Password</label
                                        >
                                        <input
                                            type="password"
                                            v-model="password"
                                            class="form-control password"
                                            id="password"
                                            v-model.trim="$v.password.$model"
                                            :class="{
                                                'is-invalid':
                                                    $v.password.$error,
                                                'is-valid': !$v.password
                                                    .$invalid
                                            }"
                                        />
                                        <div class="invalid-feedbak">
                                            <span v-if="!$v.password.required"
                                                >Password is required</span
                                            >
                                            <span v-if="!$v.password.minLength"
                                                >{{
                                                    $v.password.$params
                                                        .minLength.min
                                                }}
                                                Charachters minimum</span
                                            >
                                        </div>
                                    </div>

                                    -----------------------------
                                    .then(user => {
                    db.collection("profiles")
                        .doc(user.user.uid)
                        .set({
                            name: this.name
                        })
                        .then(function() {
                            console.log("Document successfully written!");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        });