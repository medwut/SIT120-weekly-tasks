<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <title> Password Shower</title>
  <h1> Hi There Please enter your Email and Password Below </h1>
  <head>For Task 1 of Week 6 SIT120 webb responsive apps</head>
  <body>
    <div id="app">
        <p> Email Name</p>
        <input v-model="email"
         placeholder="Please Enter Email"
         />
         <p>Email is: {{ email }}</p>
        <p> Password </p>
        <input 
        v-model="Password"
        type="text"
         placeholder="Enter Password"
         />
         <p>Password is: {{ Password }}</p>      
    </div>
  </body>
  
</template>

<script >
   Vue.createApp({
    el: '#app', 
    data: {
      email: 'radioactivewaste@gmail.com',
      Password: 'memyselfandiarethebest41',
    },
  });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
