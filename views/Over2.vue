<template>
<v-container>

    <div>
      <h1>This is Over Page 2</h1>
    </div>

    <v-btn
      elevation="2"
      @click="goBack"
    ></v-btn>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'OverPage2',
  components: {
    HelloWorld
  },

  methods: {
    isMobile() {
      console.log('methods....')
    },

    goBack() {
      this.$store.dispatch('changeDialog',{newMsg: false})
    },

    

  }, // methods 

  created() {
    console.log('cteated....')
  }


}
</script>