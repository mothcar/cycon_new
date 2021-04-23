<template>
  <v-container>

    <div>
      <v-row>
        <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-card>
            <v-img
            :src="`https://res.cloudinary.com/dgrpn1aez/image/upload/v1618720058/2202610_tjegsx.jpg`"
            :lazy-src="`https://res.cloudinary.com/dgrpn1aez/image/upload/v1618720058/2202610_tjegsx.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title class="title body-2">
            스타벅스
          </v-card-title>
          <v-card-subtitle class="title body-2">
            3,000
          </v-card-subtitle>

          </v-card>
          
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Favor',
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