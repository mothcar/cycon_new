<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fade-img-on-scroll
      hide-on-scroll
    >

      <!-- <v-spacer></v-spacer> -->

      <v-col cols="2">
        
      </v-col>
      <v-col class="d-flex justify-space-around">
          <h2>{{pageTitle}}</h2>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        ...
      </v-col>

    </v-app-bar>

    <v-main>
      test
    </v-main>



    

  </v-app>
</template>

<script>
export default {
  name: 'Layout',

  components: {
  },


  data: () => ({
    //
    value: 1, 
    pageTitle: '공지사항', 
  }),

  methods: {
    
  }, //methods 

};
</script>
