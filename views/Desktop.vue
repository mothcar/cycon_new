<template>
  <div fluid class="text-center">

    <div>
      <h1>This is Desktop................</h1>
    </div>

    <div >
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      

    </div>


  <v-footer
  class="d-flex justify-center"
    padless
    
  >
    
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
    
      <v-card-text fluid>
        
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <div  class="d-flex flex-row mb-2 pr-6">
        <v-container 
      fluid
    />
        <v-img
          class="mr-2"
          height="100"
          src="https://res.cloudinary.com/mothcar/image/upload/v1618992431/cycon/download_android.png"
        ></v-img>
        <v-img
          height="100"
          src="https://res.cloudinary.com/mothcar/image/upload/v1618992431/cycon/download_ios.png"
        ></v-img>
      </div>

        

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>CYCON</strong>
      </v-card-text>
    </v-card>
  </v-footer>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Desktop',
  components: {
    HelloWorld
  },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

  },

  mounted() {
    
  },

  created() {
    console.log('cteated....')
  }


}
</script>