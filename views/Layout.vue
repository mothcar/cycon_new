<template>
  <v-app>
    <AppBar :title="pageTitle">
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';
import HelloWorld from './components/HelloWorld';
import AppBar from './components/AppBar';

export default {
  name: 'Layout',

  components: {
    HelloWorld, Home, AppBar
  },


  data: () => ({
    //
    value: 1, 
    pageTitle: '사이', 
  }),

  methods: {
    
  }, //methods 

};
</script>

