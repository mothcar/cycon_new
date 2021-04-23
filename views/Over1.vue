<template>
<v-container>

    <div>
      <h1>This is Over Page 1</h1>
    </div>
    <v-img :src="imgUrl" min-width="100%"></v-img>

    <v-btn
      elevation="2"
      @click="goBack"
    >취소</v-btn>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'OverPage1',
  components: {
    HelloWorld
  },

  data: ()=>({
    // imgUrl: null,

  }), // data 

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
  },

  computed: {
    imgUrl() {
      return this.$store.getters.getImageUrl
    }
  },


}
</script>