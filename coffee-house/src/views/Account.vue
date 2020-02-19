<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <img
                        src="../assets/account.png"
                        class="rounded float-left"
                        alt="flatwhite"
                    />
                    
                    <h4>{{ profile.name }}</h4>
                    <h5>{{ profile.email }}</h5>

                    <button type="submit" class="btn btn-primary">
                        Edit Profile
                    </button>
                    <br />
                    <button
                        type="submit"
                        class="btn btn-primary"
                        @click="logOut"
                    >
                        Logout
                    </button>
                </div>
                <div class="col-md-7">
                    <h2>Welcome {{ profile.name }} !!</h2>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputGender">Username</label>
                            <input
                                type="text"
                                v-model="profile.name"
                                class="form-control"
                                id="exampleInputname"
                                aria-describedby="nameHelp"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputGender">Gender</label>
                            <input
                                type="text"
                                v-model="profile.gender"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="genderHelp"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputphone">Phone Number</label>
                            <input
                                type="tel"
                                v-model="profile.phone"
                                class="form-control"
                                id="exampleInputphone"
                                aria-describedby="phoneHelp"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputBdate">Birth Date</label>
                            <input
                                type="date"
                                v-model="profile.bDate"
                                class="form-control"
                                id="exampleInputBdate"
                                aria-describedby="BdateHelp"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputAddress">Address</label>
                            <textarea
                                type="text"
                                v-model="profile.address"
                                class="form-control"
                                id="exampleInputaddress"
                                aria-describedby="AdderssHelp"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <input
                                @click="updateProfile"
                                value="Save"
                                class="btn btn-primary save"
                                style="width: 80px"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { firebaseApp, db } from "../firebase";
export default {
    name: "Account",
    props: {
        msg: String
    },
    data() {
        return {
            profile: {
                name: null,
                email: null,
                gender: null,
                phone: null,
                address: null,
                bDate: null
            }
        };
    },
    firestore() {
        const user = firebaseApp.auth().currentUser;
        return {
            profile: db.collection("profiles").doc(user.uid)
        };
    },
    methods: {
        logOut() {
            firebaseApp
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("/");
                })
                .catch(err => {
                    console.log(err);
                });
            console.log("you signed out");
        },
        updateProfile() {
            this.$firestore.profile.update(this.profile);
        },
        
    },
    created() {
        let user = firebaseApp.auth().currentUser;
        this.email = user.email;
    }
};
</script>
<style scoped>
.row {
    margin: 10px auto;
    border-radius: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
    box-shadow: 0 0 20px 2px rgba(206, 137, 57, 0.5);
}
.col-md-5 {
    position: relative;
}
.col-md-5 img {
    width: 200px;
    height: 200px;
    margin-top: 40px;
    opacity: 0.3;
    margin-left: 40px;
}
.col-md-5 h4 {
    margin-left: 17%;
    margin-top: 65%;
}
.col-md-5 button {
    margin-left: 14%;
    margin-top: 10%;
    background: #865934;
    border: 1px solid #865934;
    border-radius: 25px;
    width: 150px;
}
.col-md-5 button:hover {
    background: white;
    color: #865934;
    border: 1px solid #865934;
}
.col-md-7 h2 {
    margin: 40px 0;
    text-align: center;
}
.col-md-7 button {
    background: #865934;
    border: 1px solid #865934;
    margin-top: 5px;
}
.col-md-7 button:hover {
    background: white;
    color: #865934;
    border: 1px solid #865934;
}
.form-group input,
.form-group textarea {
    width: 400px;
}
h5 {
    margin-left: 60px;
}
.save {
    width: 20px;
    background: #865934;
    border: 1px solid #865934;
    margin-top: 5px;
}
.save:hover {
    background: white;
    color: #865934;
    border: 1px solid #865934;
}
</style>
