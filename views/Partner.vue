<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center" justify="center">
      <v-col cols="12">
        <v-img
          src="https://res.cloudinary.com/mothcar/image/upload/v1618992431/cycon/pika.png" 
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <!-- :src="require('../assets/image/pika.png')"  -->

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          제휴 및 가맹
        </h1>

        <p class="subheading font-weight-regular">
          24시간 언제든지 연락주세요 
          <br>
          <br>
          <a href="tel:'010-7168-1777">010-7168-1777</a>
        </p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Partner',
  components: {
    HelloWorld
  },

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

  },

  created() {
    console.log('cteated....')
  }


}
</script>