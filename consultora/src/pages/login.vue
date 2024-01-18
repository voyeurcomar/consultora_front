<template>
  <div class=" column wrap justify-center items-center content-center " style="width: 100vw; height: 100vh;">
    <q-card class="q-pa-xl" style="max-width: 400px;">
      <q-card-section>
        <div class="fit column wrap justify-center items-center content-center " style="height: 100vh;">
          Consultora
        <q-input dense rounded outlined v-model="email" label="Email" style="width: 100%; margin-top: 1em;"/>
        <q-input dense rounded outlined v-model="pass"  label="Pass" style="width: 100%; margin-top: 1em;"/>
        <q-btn dense rounded outlined label="login" @click="loginemail()" style="width: 100%; margin-top: 1em"/>
        <q-btn dense rounded outlined label="Continuar con Gmail" @click="login()" style="width: 100%; margin-top: 1em;"/>
        <q-btn dense rounded outlined label="Registro" @click="regitroemail()" style="width: 100%; margin-top: 1em;"/>
        <span>{{ error }}</span>
  </div>
      </q-card-section>
    </q-card>

</div>
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { auth, rtdb } from "../firebase";
import { reactive, ref } from 'vue'
import {  date, LocalStorage } from "quasar";
export default {
  setup() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const userdata = ref([])
    const email = ref('')
    const pass = ref('')
    const error = ref('')
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
      return{
        auth,
        provider,
        userdata,
        email,
        pass,
        error,
      }
  },
  methods: {
    login(){
      signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        //this.userdata = result.user;
        LocalStorage.set("data",result.user)
        console.log(LocalStorage.getItem("data"))
        this.$router.push("/inicio")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    },
    regitroemail(){
      createUserWithEmailAndPassword(auth, this.email, this.pass)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser)
            .then(() => {
              this.$router.replace("/verificar")
              // ...
            });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.error = error.message
            // ..
          });
    },
    loginemail(){
      signInWithEmailAndPassword(auth, this.email, this.pass)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.error = error.message
          });
    }
  },

}
</script>
<style lang="">

</style>
