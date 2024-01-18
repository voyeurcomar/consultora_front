<template>
  <q-page class="flex flex-center">
    Se envio un mail de verificacion a su correo.
  </q-page>
</template>

<script>
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { getAuth, signOut } from "firebase/auth";
import { auth, rtdb } from "../firebase";
import {  date, LocalStorage,SessionStorage } from "quasar";

export default {
  setup(){
  const messaging = getMessaging();
  const auth = getAuth();

  return{
    messaging,
    auth
  }
},
mounted() {
  // getToken(this.messaging, { vapidKey: 'BCYJzNuBxYf_mM55bS3LBcZUeQXSBZnwVgkThN9NoKJmHaRPQ5uHDl57mvKCAEdhr7O_PB0IMz9yfCf2AXpfzoU' })
  // .then((currentToken) => {
  //     if (currentToken) {
  //       console.log(currentToken)
  //       SessionStorage.set("tokenmessage",currentToken)
  //     } else {
  //       // Show permission request UI
  //       console.log('No registration token available. Request permission to generate one.');
  //       // ...
  //     }
  //   }).catch((err) => {
  //     console.log('An error occurred while retrieving token. ', err);
  //     // ...
  //   });
  },
  methods: {
    // salir(){
    //   signOut(auth).then(() => {
    //     LocalStorage.clear()
    //     this.$router.replace('/')
    //   }).catch((error) => {
    //     // An error happened.
    //   });
    // }
  },

}
</script>
