<template>
  <v-toolbar
    dark
    color="primary" >
    <v-btn
        icon
        dark
        @click="goBack"
        color=""
        class="mr-3"
      >
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-btn>
    
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn
      icon
      dark
      @click="goBack"
      color=""
      class="mr-3" >
    <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
    props: ['title'],
    data: ()=>({
      // getTitle : null,
    }),

    methods: {
      goBack() {
        this.$store.dispatch('changeDialog',{newMsg: false})
      },
    }, //methods 

    computed: { 
    //   ...mapState({
    //  title: state => state.barTitle, 
    //  }),
    }, // computed 
}
</script>